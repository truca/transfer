# Process

Here i will detail my though process for this question

## Setup

Basic elements that define the problem

### Tables

The elements that are are inherent to the question are (attributes are listed in perenthesis, no extra attributes were added)

- Class (id, name, teacher_id): There could be mode that one class with the same name. That is intended, and it helps to manage multiple instances of the same class in the same semester or accross multiple semesters (i would use a "semester" attribute to differentiate classes on different semesters and a slug to help users to talk about their class in a more specific way)
- Teacher (id)
- Student (id)
- Test (id, class_id)
- Grade (id, grade, test\_id, student\_id)

Additionally, this table was added due to the normalization of the relationships of the previous tables

- Inscription (id, student\_id, class\_id): When a student belongs to a class

### Queries

Queries should be ranked by their frequency to improve the database performance (i ranked them using my experience in university)

1. Mean grade for a student for a class. by student\_id and class\_id 
2. Students from class by the class name
3. Students list and their Mean grades for all their classes
4. List of students that have more than one reproved class

Note: (1) will be used for queries (3) and (4), so it's the most common task. 

## Design 

The mean grade of a student in a specific class is used in three of the four classes, so we're going to keep a view with it that will be updated anytime that a new grade arrives or an old grade updates. Here's the view:

- MeanGrades (id, student\_id, class\_id, mean\_grade, grades\_amount)

### SQL

Here goes the SQL for the queries. (The order is based in the order given in the 'Queries' section)

#### First

Mean grade for a student for a class. by student\_id and class\_id

````
SELECT mean_grade FROM MeanGrades WHERE student_id = STUDENT_ID AND class_id = CLASS_ID
````

#### Second

Students from class by the class name

````
SELECT * FROM Students JOIN Inscriptions ON Students.id = Inscriptions.student_id JOIN Classes ON Classes.id = Inscriptions.class_id AND Classes.name = CLASS_NAME
````

Note: This will get the students from all the classes with name CLASS_NAME (See the Class table in the Tables section). You can get all the Students from an specific Class with it's id.

````
SELECT * FROM Students JOIN Inscriptions ON Students.id = Inscriptions.student_id JOIN Classes ON Classes.id = Inscriptions.class_id AND Classes.id = CLASS_ID
````

#### Third

Students list and their Mean grades for all their classes

````
SELECT Students.*, MeanGrades.* FROM Students JOIN MeanGrades ON MeanGrades.student_id = Students.id 
````

#### Fourth

List of students that have more than one reproved class

````
SELECT Students.*, MeanGrades.* FROM Students JOIN MeanGrades ON MeanGrades.student_id = Students.id AND MeanGrades.mean_grade < 5
````

Note: I assume that grades come from 0 to 10 and that a 5 is the lower limit to approve