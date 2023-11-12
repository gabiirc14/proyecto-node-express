# proyecto-node-express
Proyecto de Backend con Node.js y Express

Descripción:
La aplicación de backend desarrollada con Node.js y Express es un sistema simple de gestión de datos mediante los métodos HTTP GET y POST. Este proyecto se centra en la manipulación de datos en un formato JSON mediante una ruta específica.

Funcionalidades:
1. Obtener datos
Ruta: GET /datos
Descripción: Recupera todos los datos almacenados en el sistema en formato JSON.
Respuesta: Devuelve un array de objetos que representan los datos almacenados.
2. Agregar nuevos datos
Ruta: POST /datos
Descripción: Permite agregar nuevos datos al sistema.
Datos de Entrada: Se espera un objeto JSON en el cuerpo de la solicitud con el formato específico para tu aplicación.
Respuesta: Devuelve un mensaje de confirmación junto con los detalles de los datos recién creados.

Notas Adicionales:
La aplicación utiliza un archivo JSON para almacenar y recuperar datos de manera persistente en el sistema de archivos.
Se implementa una estructura modular utilizando Express Router para manejar las rutas relacionadas con los datos.
Este enfoque proporciona flexibilidad para manipular diferentes conjuntos de datos según las necesidades de tu aplicación.
