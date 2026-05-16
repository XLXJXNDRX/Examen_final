# segundo-parcial-des-app-web

Segundo Parcial - Desarrollo Web II

## Descripción general del negocio y objetivo de la aplicación.
Esta aplicación fue creada para el control interno de un hotel boutique (administración de tipo Backoffice). El negocio necesita llevar un registro ordenado de las habitaciones que tiene listas para ofrecer. El objetivo de la aplicación es permitirle al administrador gestionar este inventario en tiempo real, pudiendo revisar el número de habitación, el precio base por noche y la acomodación (si es sencilla, doble o suite presidencial).

---

## Información relevante de los integrantes o desarrolladores de la aplicación. 
Estudiante 1: Alejandro Jose Reverol Ramos - Código: 192453
Estudiante 2: Owin Leon  Código: 192444
Materia: Desarrollo Web II
Universidad: Universidad Francisco de Paula Santander seccional Ocaña (UFPSO)

---

## Estructura del proyecto en una imagen.
src/
├── components/                  # Componentes pequeños que se reutilizan
│   ├── FooterComponent.vue      # Pie de página del hotel
│   ├── NavbarComponent.vue      # Barra de arriba con el nombre de la pantalla
│   ├── ProductCardComponent.vue # Tarjeta individual para mostrar cada habitación
│   └── SidebarComponent.vue     # Menú de la izquierda para navegar
├── data/                        # Archivos de datos simulados
│   ├── cartelera.json           # Lista con las habitaciones iniciales
│   └── usuarios.json            # Usuarios y contraseñas de prueba
├── router/
│   └── index.js                 # Manejo de rutas de la aplicación
├── views/                       # Pantallas grandes del sistema
│   ├── DashboardView.vue        # Panel de inicio con las tarjetas
│   ├── LoginView.vue            # Formulario para iniciar sesión
│   └── ProductView.vue          # Pantalla del CRUD (Tabla de habitaciones)
├── App.vue                      # Archivo raíz principal
└── main.js                      # Inicialización del proyecto en Vue

Para que el proyecto fuera ordenado, aplicamos la modularización de la siguiente manera:

1) Vistas (Views): Son las pantallas completas a las que entra el usuario. Creamos LoginView.vue para el acceso, DashboardView.vue para el inicio general y ProductView.vue para gestionar las habitaciones.

2) Componentes (Components): Son partes pequeñas de código que aislamos para no tener que escribirlas muchas veces. Por ejemplo, el menú lateral (SidebarComponent) y el encabezado (NavbarComponent) se diseñaron una sola vez y se mandan a llamar dentro de las pantallas principales.

3) Rutas (Routes): En el archivo router/index.js configuramos qué componente debe mostrarse según el enlace en el que esté el navegador (ej: /login, /dashboard, /dashboard/productos). En el archivo App.vue dejamos la etiqueta <router-view> que funciona como el espacio donde se van intercambiando estas pantallas sin recargar la página completa.

Ejemplo de consumo de la API externa para gestionar los productos:

1) En la vista de habitaciones (ProductView.vue) agregamos un botón especial. Al presionarlo, el sistema ejecuta una función que hace un llamado real con fetch a un servidor de pruebas en la web (https://jsonplaceholder.typicode.com).

2) Cuando la API responde, el código toma esos datos de prueba, los convierte al formato de habitaciones (asignándoles precio y acomodación) y los inyecta dentro de la tabla actual y del almacenamiento local. Esto sirve para simular cómo se conectaría la aplicación con una base de datos real en la nube.

3) Ejemplo de comunicación entre componentes (props o eventos).
Uso de Props (De Padre a Hijo): La pantalla de inicio (DashboardView.vue) tiene la lista de habitaciones y usa el componente ProductCardComponent.vue para mostrarlas en forma de tarjetas cuadradas. El Padre le pasa los datos individuales a cada tarjeta usando atributos como :nombre, :precio y :categoria.

4) Uso de Eventos (De Hijo a Padre): Cuando el usuario le da clic al botón "Ver Detalles" dentro de una tarjeta de habitación, el componente tarjeta no hace nada por sí mismo; emite un aviso hacia arriba usando $emit('ver-detalle'). La pantalla Padre captura ese evento y es la encargada de abrir la alerta en el navegador con la información completa.