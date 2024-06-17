# Proyecto 4 - Sistema de Reservas Hoteleras

## Descripción

Este proyecto, desarrollado por Raúl Rosales R. para el Bootcamp UDD 13, consiste en la creación de una aplicación de servicios para la gestión de reservas en hoteles. La aplicación está construida utilizando Node.js y Express y permite realizar las 4 operaciones CRUD (Crear, Leer, Actualizar y Borrar), además de otras 6 operaciones adicionales relacionadas con filtros.

## Objetivos de Aprendizaje

- **Aplicar las operaciones CRUD**: Implementar las operaciones básicas de creación, lectura, actualización y eliminación de datos en el contexto de reservas hoteleras.
- **Desarrollar una API REST**: Construir una API que permita interactuar con el sistema de reservas mediante endpoints bien definidos.
- **Trabajar con datos estructurados**: Manejar datos estructurados para almacenar y gestionar la información de las reservas de manera eficiente.
- **Implementar la lógica de negocios**: Desarrollar la lógica necesaria para gestionar el flujo de reservas, incluyendo la validación de datos y las reglas de negocio específicas.
- **Documentar una API**: Crear documentación clara y comprensible para la API, facilitando su uso y entendimiento por parte de otros desarrolladores.

## Tecnologías Utilizadas

- **Node.js**: Plataforma de JavaScript para el desarrollo del servidor.
- **Express**: Framework web para Node.js que facilita la creación de aplicaciones y APIs REST.

## Instalación

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona este repositorio:

    ```bash
    git clone https://github.com/tu-usuario/proyecto-reserva-hotelera.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd proyecto-reserva-hotelera
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Inicia la aplicación:

    ```bash
    npm start
    ```

## Endpoints de la API

### Operaciones CRUD

- **Crear una reserva**: 
    - **POST** `/booking`
    - Crea una nueva reserva en el sistema.
    
- **Obtener todas las reservas**: 
    - **GET** `/booking`
    - Recupera una lista de todas las reservas.
    
- **Obtener una reserva por ID**: 
    - **GET** `/booking/:id`
    - Recupera los detalles de una reserva específica.
    
- **Actualizar una reserva**: 
    - **PUT** `/booking/:id`
    - Actualiza los detalles de una reserva existente.
    
- **Eliminar una reserva**: 
    - **DELETE** `/booking/:id`
    - Elimina una reserva del sistema.

### Operaciones Adicionales con Filtros

1. **Filtrar reservas por fecha**:
    - **GET** `/reservas?fechaInicio=YYYY-MM-DD&fechaFin=YYYY-MM-DD`
    - Filtra las reservas dentro de un rango de fechas.

2. **Filtrar reservas por cliente**:
    - **GET** `/reservas?cliente=nombre_cliente`
    - Filtra las reservas realizadas por un cliente específico.

3. **Filtrar reservas por estado**:
    - **GET** `/reservas?estado=estado_reserva`
    - Filtra las reservas por su estado (ej. Pagada, Abonada, cancelada).

4. **Filtrar reservas por tipo de habitación**:
    - **GET** `/reservas?tipoHabitacion=tipo_habitacion`
    - Filtra las reservas por el tipo de habitación reservado.

5. **Buscar reservas por nombre del hotel**:
    - **GET** `/reservas?hotel=nombre_hotel`
    - Filtra las reservas por el nombre del hotel.

6. **Ordenar reservas por fecha de creación**:
    - **GET** `/reservas?orden=fecha_creacion`
    - Ordena las reservas por la fecha en que fueron creadas.

## Documentación de la API

La documentación detallada de la API, incluyendo ejemplos de solicitudes y respuestas, se puede encontrar en el archivo `API_DOCUMENTATION.md` dentro de este repositorio.

## Contribuciones

Las contribuciones a este proyecto son bienvenidas. Si deseas colaborar, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva característica'`).
4. Envía tu rama al repositorio principal (`git push origin feature/nueva-caracteristica`).
5. Crea un nuevo Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo `LICENSE` en este repositorio.

---

Desarrollado por Raúl Rosales R. para el Bootcamp UDD 13.