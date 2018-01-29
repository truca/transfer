# Software Engineer Test

Este es un test pensado para demostrar las habilidades de los candidatos para integrar el __Área de Ingeniería__ de __Lemontech__.  Esta prueba esta pensada para desarrolladores _Full Stack_.

## Problema 1. `Teórico`

Un colegio necesita un sistema para administrar sus cursos. El sistema tiene que soportar que se ingresen varios cursos. Cada curso tendrá un profesor a cargo y una serie de alumnos inscritos. Cada profesor, así como cada alumno puede estar en más de un curso. Además cada curso tendrá una cantidad no determinada de pruebas, y el sistema debe permitir ingresar la nota para cada alumno en cada prueba. Todas las pruebas valen lo mismo.

### Modelo de datos

Escriba a continuación las tablas que utilizaría para resolver este problema con los campos y llaves de éstas. Intente hacer el modelo lo más robusto posible, pero sin incluir datos adicionales a los que se plantean acá.

### SQL
Considerando el enunciado anterior conteste las siguientes preguntas:

1. Escriba una Query que entregue la lista de alumnos para el curso "programación"
2. Escriba una Query que calcule el promedio de notas de un alumno en un curso.
3. Escriba una Query que entregue a los alumnos y el promedio que tiene en cada curso.
4. Escriba una Query que lista a todos los alumnos con más de un curso con promedio rojo.

## Problema 2. `Práctico`

Desarrollar una Aplicación Web que permita graficar el cambio del valor de un bitcoin en distintas divisas, conservando el histórico con actualizaciónes con una periodicidad que sea lo más cercana posible a tiempo real.
Se puede obtener la información del precio actual de un Bitcoin con esta API: http://api.coindesk.com/v1/bpi/currentprice/CLP.json

### Instrucciones

Crear un branch a partir de la rama `master` con tu nombre y apellido, por ejemplo `john-doe`.

Para el desarrollo de la solución __se deben__ ocupar las siguientes tecnologias: __Ruby on Rails__ y __React__.

Se debe sobreescribir este README.md con las instrucciones para poder probar la aplicación.
