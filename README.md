# Proyecto de API CRUD

Este es un proyecto de API que implementa operaciones CRUD (Crear, Leer, Actualizar y Eliminar) utilizando Node.js, Express y Sequelize con MySQL como base de datos.


## Configuración

Sigue estos pasos para configurar y ejecutar la API:

1. Clona el repositorio:

git clone https://github.com/Juudini/crud_ts_sql.git

2. Ve al directorio del proyecto:


4. Configura la base de datos:

- Crea una base de datos MySQL en tu servidor local.

``` 
CREATE DATABASE IF NOT EXISTS crudb;

USE crudb;

DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30),
    email VARCHAR(50),
    estado TINYINT(1),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nombre, email, estado, createdAt, updatedAt) 
VALUES 
    ('Juan', 'jjuanito@gmail.com', 1, NOW(), NOW()),
    ('Josefina', 'jose@hotmail.com', 1, NOW(), NOW()),
    ('Hernesto', 'herphin@gmail.com', 0, NOW(), NOW());

SELECT * FROM usuarios;

```

- Abre el archivo `db/connection.ts` y actualiza la configuración de la base de datos con tus propias credenciales y detalles de conexión.

6. Inicia el servidor:

El servidor se ejecutará en `http://localhost:4000`.

## Uso

Una vez que el servidor esté en ejecución, puedes realizar las siguientes operaciones CRUD utilizando herramientas como Postman o cURL:

- **Crear un nuevo usuario**: Envía una solicitud HTTP POST a `http://localhost:4000/api/` con los datos del elemento en el cuerpo de la solicitud en formato JSON.

- **Obtener todos los usuarios**: Envía una solicitud HTTP GET a `http://localhost:4000/api/`. Recibirás una respuesta con todos los usuarios existentes en la base de datos.

- **Obtener un usuario por su ID**: Envía una solicitud HTTP GET a `http://localhost:4000/api/:id`, donde `:id` es el ID del usuario que deseas obtener.

- **Actualizar un usuario**: Envía una solicitud HTTP PUT a `http://localhost:4000/api/:id`, donde `:id` es el ID del elemento que deseas actualizar. Incluye los nuevos datos del elemento en el cuerpo de la solicitud en formato JSON.

- **Eliminar un usuario**: Envía una solicitud HTTP DELETE a `http://localhost:4000/api/:id`, donde `:id` es el ID del elemento que deseas eliminar.

Los datos utilizados para probar son:

- Nombre: Nombre del usuario.
- Email: Dirección de correo electrónico del usuario.
- Estado: Estado del usuario (0 o 1).

## 🔗 Links

  <a href="https://www.linkedin.com/in/juandebandi/"><img alt="LinkedIn" title="LinkedIn" src="https://custom-icon-badges.demolab.com/badge/-LinkedIn-231b2e?style=for-the-badge&logoColor=F8D866&logo=LinkedIn"/></a>
  <a href="https://juandebandi.dev/">
  <img alt="Portfolio" title="Portfolio" src="https://custom-icon-badges.demolab.com/badge/-|Portfolio-1F222E?style=for-the-badge&logoColor=F8D866&logo=link-external"/></a>
  <a href="mailto:juudinidev@gmail.com">
    <img src="https://custom-icon-badges.demolab.com/badge/-Email-231b2e?style=for-the-badge&logoColor=F8D866&logo=gmail" alt="Email">
  </a>
