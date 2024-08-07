# Labs

Esta API está diseñada para gestionar las operaciones de una plataforma educativa, permitiendo el registro y autenticación de usuarios, la creación y gestión de quejas, y la asignación y actualización de tareas.

## Autenticación

- **POST /register**: Registra un nuevo usuario.
- **POST /login**: Autentica a un usuario.

## Quejas

- **POST /quejas**: Crea una nueva queja. Requiere autenticación y roles `estudiante` o `docente`.
- **GET /quejas**: Obtiene todas las quejas. Requiere autenticación y roles `estudiante` o `docente`.
- **GET /quejas**: Obtiene todas las quejas. Requiere autenticación y rol `admin`.
- **GET /quejas/:id**: Obtiene una queja por ID. Requiere autenticación y rol `admin`.
- **PUT /quejas/:id**: Actualiza el estado de una queja. Requiere autenticación y rol `admin`.

## Confirmación de Email

- **GET /confirmar/:token**: Confirma la dirección de correo electrónico de un usuario.

## Usuarios (Solo Admin)

- **GET /users**: Obtiene todos los usuarios. Requiere autenticación y rol `admin`.
- **POST /users**: Crea un nuevo usuario. Requiere autenticación y rol `admin`.
- **PUT /users/:id**: Actualiza un usuario. Requiere autenticación y rol `admin`.
- **DELETE /users/:id**: Elimina un usuario. Requiere autenticación y rol `admin`.
- **GET /users/:id**: Obtiene un usuario por ID. Requiere autenticación y rol `admin`.

## Tareas

- **POST /tareas**: Crea una nueva tarea. Requiere autenticación y rol `admin`.
- **GET /tareas**: Obtiene todas las tareas. Requiere autenticación y rol `admin` o `pasante`.
- **GET /tareas/:id**: Obtiene una tarea por ID. Requiere autenticación y rol `admin` o `pasante`.
- **PUT /tareas/:id**: Actualiza el estado de una tarea. Requiere autenticación y rol `admin` o `pasante`.
