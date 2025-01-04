Componentes de la Aplicación:
La aplicación está organizada en varios microservicios que se encargan de diferentes funcionalidades de manera independiente. Estos microservicios se comunican entre sí a través de solicitudes HTTP, lo que permite mantener la arquitectura modular y escalable.

1. Servicio de Usuarios (User Service)
Funcionalidad: Se encarga de gestionar la creación de usuarios y la autenticación de los mismos. Los usuarios pueden registrarse con un nombre de usuario y contraseña, y luego iniciar sesión para obtener un token JWT (JSON Web Token), que les permite autenticar sus solicitudes futuras.

Acciones principales:

Registrar usuario: El usuario se registra proporcionando un nombre de usuario y una contraseña.
Iniciar sesión: El usuario puede iniciar sesión proporcionando sus credenciales. Si son correctas, el sistema le proporciona un token JWT que usará en futuras peticiones para autorizarse.
2. Servicio de Pedidos (Order Service)
Funcionalidad: Se encarga de gestionar los pedidos realizados por los usuarios. Cuando un usuario decide realizar un pedido, este servicio se asegura de registrar el pedido con los productos seleccionados y el usuario que realiza el pedido.

Acciones principales:

Crear pedido: Un usuario autenticado puede crear un pedido proporcionando una lista de productos y cantidades. El sistema verifica que estos productos estén disponibles en el inventario antes de confirmarlo.
Consultar pedidos: Los usuarios pueden consultar el estado de sus pedidos previos.
3. Servicio de Inventario (Inventory Service)
Funcionalidad: Este microservicio gestiona el inventario de productos. Guarda información sobre los productos disponibles en el sistema, como el nombre del producto, su cantidad en stock, etc. Cada vez que se realiza un pedido, el servicio de inventario se consulta para asegurarse de que hay suficientes unidades de los productos solicitados.

Acciones principales:

Consultar productos: El servicio devuelve una lista de todos los productos disponibles en el inventario.
Verificar disponibilidad: Antes de crear un pedido, el sistema verifica que los productos solicitados estén disponibles en la cantidad solicitada.
4. API Gateway
Funcionalidad: Es el punto de entrada central para todas las solicitudes de la aplicación. En lugar de que los usuarios interactúen directamente con cada microservicio, todas las peticiones se dirigen primero al API Gateway, que redirige las solicitudes al microservicio correspondiente (usuarios, pedidos, inventario).

Acciones principales:

Redirigir solicitudes: Se encarga de redirigir las solicitudes de registro, inicio de sesión, creación de pedidos y consulta de productos hacia los microservicios respectivos.
Autenticación: Verifica el token JWT proporcionado en las solicitudes de los usuarios antes de permitirles acceder a los recursos protegidos.
Flujo de Trabajo:
Registro de un usuario: Un nuevo usuario se registra proporcionando un nombre de usuario y contraseña. El sistema crea un registro en la base de datos de usuarios.

Inicio de sesión: El usuario inicia sesión proporcionando sus credenciales (nombre de usuario y contraseña). Si son correctas, el sistema genera un token JWT y lo devuelve al usuario para que lo use en futuras interacciones con el sistema.

Consulta del inventario: El usuario puede consultar los productos disponibles. El servicio de inventario devuelve una lista de productos con su cantidad disponible.

Creación de un pedido: El usuario crea un pedido seleccionando los productos del inventario. El sistema verifica que los productos estén disponibles y, si es así, crea el pedido, descontando las cantidades correspondientes en el inventario.

Consulta de pedidos previos: El usuario puede ver el estado de sus pedidos anteriores.
