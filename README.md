Examen final Proyecto: Sistema de Administración Hotelera (Hotel Admin)
Entorno Tecnológico: Vue 3 (Composition API), Vite, Bootstrap 5, Bootstrap Icons, MockAPI
Estado: Fase de Finalización e Integración REST Completa: 

1. Se configuro el tema de la seguridad, modifique el LoginView.vue, index.js y sidebarcomponents para que la seguridad mejore-Alejandro y owin reunion dia 10/06/2026
2. elimine un boton en mal funcionamiento -Alejandro
3. Arreglamos el boton de habitaciones que presentaba problemas.

4. MÓDULO: PANEL DE CONTROL (DASHBOARD)
Consumo e Ingesta de Datos: Implementación de peticiones asíncronas HTTP GET orientadas al recurso /products de MockAPI para la obtención del inventario activo de habitaciones en el ciclo de vida inicial del componente (onMounted).

5. Automatización de UI mediante Lógica Reactiva: Desarrollo de funciones lógicas de mapeo (obtenerImagenHabitacion y obtenerServicios) encargadas de normalizar las cadenas de texto del backend. Mediante estructuras condicionales que evalúan palabras clave (suite, deluxe, doble, individual), el sistema asigna de forma dinámica recursos visuales de alta resolución y un vector parametrizado con las comodidades de la habitación.

6. Optimización de Interfaz (Refactorización de UX): Remoción de controles redundantes de bloqueo de fechas que carecían de soporte en la lógica del negocio. Se reestructuró el modal informativo para focalizar la acción del usuario en un único botón de retorno de ancho completo, garantizando una interfaz limpia y simétrica.

7. MÓDULO: GESTIÓN DE TARIFAS Y HABITACIONES
Despliegue de Datos: Renderizado dinámico del inventario a través de una interfaz de tarjetas responsivas y estructuras tabulares que reflejan fielmente el estado del recurso hospedado en el backend.

8. Persistencia de Datos (Creación y Edición): Vinculación de formularios estructurados mediante directivas v-model hacia estados reactivos locales. El almacenamiento se procesa mediante bifurcación lógica: peticiones de tipo POST para la inserción de nuevos registros y peticiones PUT dirigidas por el identificador único (id) para la actualización de registros preexistentes.

9. Validación de Destrucción de Registros: Sustitución de los flujos de confirmación tradicionales de JavaScript por diálogos modales embebidos de Bootstrap, asegurando que la petición HTTP DELETE solo se ejecute tras una confirmación explícita por parte del operador del sistema.

10. MÓDULO: ADMINISTRACIÓN DE USUARIOS
Modelado del Recurso: Integración de un segundo endpoint independiente (/users) en el servidor MockAPI para segmentar la persistencia de las cuentas del personal administrativo respecto al inventario de habitaciones.

11. Estructura Tabular Dinámica: Implementación de una tabla de datos que mapea las propiedades id, usuario y email consumidas en tiempo real desde el servicio REST.

12. Control de Modales Acoplados: Centralización de los flujos de alta y modificación dentro de un único componente modal adaptativo. La UI conmuta sus títulos, etiquetas y métodos de envío en función del estado de la variable lógica editando, mitigando la duplicación de código en el documento HTML.

13. MAQUETACIÓN, ESTILOS Y ALERTAS
Diseño Adaptativo (Grid System): Uso estricto de las directivas de Bootstrap 5 para el diseño responsivo, empleando contenedores fluidos y rejillas configuradas con clases multiplicadoras (row-cols-1 row-cols-md-4) para garantizar la correcta visualización del panel en diferentes resoluciones de pantalla.

14. Sistema Centralizado de Alertas: Incorporación de un componente de alertas flotante (.alert) condicionado reactivamente. Cada resolución de promesa HTTP exitosa o fallida despacha un estado que renderiza un mensaje informativo con su respectiva codificación de color semántico (success, warning, danger), destruyéndose automáticamente del DOM tras un intervalo de 3000 milisegundos para no interrumpir el flujo de trabajo.

15. Semántica Visual: Inserción de la suite oficial Bootstrap Icons en los encabezados, tablas y botones de operaciones para estandarizar la iconografía y facilitar la navegación intuitiva dentro del software.

16. RESOLUCIÓN DE EXCEPCIONES Y MANEJO DE INSTANCIAS (BUENAS PRÁCTICAS)
Gestión de Ciclo de Vida de Modales: La inicialización y ocultamiento de los cuadros de diálogo se despliega de manera programática mediante la API imperativa de Bootstrap (Modal.getInstance()), evitando conflictos en el renderizado asíncrono de los datos de los formularios.

17. Control de Excepciones en Red: Todo bloque de comunicación asíncrona incorpora estructuras try/catch destinadas a capturar e interceptar fallas en la red o respuestas de estado no exitosas (!response.ok), impidiendo el bloqueo o congelamiento de la aplicación y derivando la anomalía hacia la interfaz de alertas para su notificación inmediata.

18. Corrección de Accesibilidad y Foco (WAI-ARIA): Se detectaron y subsanaron advertencias en la consola del desarrollador asociadas al atributo aria-hidden cuando los modales pasaban a estado oculto manteniendo el foco del teclado en elementos internos. Se resolvió mediante la inyección del método .blur() en el elemento activo del DOM antes de ejecutar el cierre de la ventana, forzando la restitución del foco a la pantalla principal y garantizando el cumplimiento de los estándares técnicos exigidos.