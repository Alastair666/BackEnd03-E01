# Primer Pre-Entrega. Programación Backend III: Testing y Escalabilidad Backend

## Comisión 70075

**Se debe entregar** : 
1. Crear un router llamado mocks.router.js que funcione bajo la ruta base **/api/mocks**.
2. Mover el endpoint **“/mockingpets”** (Desarrollado en el primer Desafío Entregable) dentro de este router.
3. Crear un módulo de Mocking para generar usuarios de acuerdo a un parámetro numérico. Dichos usuarios generados deberán tener las siguientes características:
    - En **“password”** debe tener la contraseña “coder123” encriptada.
    - **“role”** puede variar entre “user” y “admin”.
    - **“pets”** debe ir como array vacío.
4. Dentro del router mocks.router.js, utilizar este módulo en un endpoint GET llamado **“/mockingusers”**, y generar 50 usuarios con el mismo formato que entregaría una petición de Mongo.
5. Dentro del router mocks.router.js, desarrollar un endpoint POST llamado /generateData que reciba los parámetros numéricos “users” y “pets” para generar e insertar en la base de datos la cantidad de registros indicados.

**Formato** : 
1. Link al repositorio de Github, sin la carpeta de node_modules.
    ```sh
    https://github.com/Alastair666/BackEnd03-E01.git

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [Instalación](#instalación)
3. [Estructura](#estructura-del-proyecto)
4. [Endpoint](#endpoints)
5. [Conclusiones](#conclusiones)

## Introducción
Este proyecto es la primer pre-entrega del curso "Programación Backend III: Testing y Escalabilidad Backend" de la plataforma Coderhouse.

## Instalación

### Requisitos
- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

### Instalación de Node.js
Para instalar Node.js, sigue estos pasos:

1. Descarga el instalador desde la página oficial de Node.js.
2. Ejecuta el instalador y sigue las instrucciones en pantalla.
3. Verifica la instalación ejecutando los siguientes comandos en tu terminal:
   ```bash
   node -v
   npm -v

### Instalación de Librerías
1. Una vez que Node.js esté instalado, puedes instalar las librerías necesarias para este proyecto. Ejecuta el siguiente comando en la raíz del proyecto:
    ```sh
    npm install
- En caso de  que se requiera alguna librería adicional, se puede realizar de manera individual como acontinuación se muestra:
    ```sh
    npm install bcrypt cookie-parser express jsonwebtoken mongoose multer supertest

### Variables de entorno
- Para la base de datos, se requiere la variable de entorno MONGO_URI, que se puede configurar en el archivo .env o en el archivo de configuración de la aplicación.
    ```sh
    mongodb+srv://alastairblackwell:gpO4EZ07YSlrYhKU@cluster0.hprwu.mongodb.net/

