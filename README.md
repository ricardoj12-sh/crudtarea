Crud de Tareas

Aplicación de Principios de Clean Code

Nombres descriptivos: Los nombres de clases, funciones y variables como TaskService, TaskController, createTask, etc., son claros y representativos de su propósito.
Funciones cortas y específicas (Single Responsibility): Cada método tiene una única responsabilidad bien definida, como createTask, updateTask, etc.
Elimina comentarios innecesarios: El código está escrito de manera que es fácil de entender por sí mismo, sin la necesidad de comentarios explicativos.
Principios SOLID:
Single Responsibility: Cada clase tiene una sola responsabilidad.
Open/Closed Principle: Puedes extender el repositorio para almacenar las tareas en una base de datos sin modificar el resto del sistema.
Liskov Substitution: InMemoryTaskRepository se comporta como cualquier implementación de TaskRepository.
Dependency Inversion: La capa de aplicación depende de abstracciones (TaskRepository), no de implementaciones concretas..task-manager/EstE

Estructura del proyecto:
│
├── src/
│   ├── application/           # Capa de aplicación
│   │   └── TaskController.js
│   ├── domain/                # Capa de dominio
│   │   ├── Task.js
│   │   └── TaskRepository.js
│   │   └── TaskService.js
│   ├── infrastructure/        # Capa de infraestructura
│   │   └── InMemoryTaskRepository.js
│   └── server.js              # Configuración del servidor
└── package.json               # Dependencias y configuración del proyecto

Ejecuta el servidor:
node src/server.j

Puedes realizar solicitudes HTTP a la API (por ejemplo, usando Postman o cURL) para las siguientes rutas:

POST /tasks: Crea una nueva tarea.
PUT /tasks/:id: Actualiza una tarea existente.
DELETE /tasks/:id: Elimina una tarea.
GET /tasks/:id: Obtiene una tarea por su ID.
GET /tasks: Obtiene todas las tareas.
