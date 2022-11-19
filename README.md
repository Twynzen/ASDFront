# Estructura
Se manejan en app 4 carpetas principales:
1. Interfaces
> Permite tener una plantilla de los tipos de dato que tiene el objeto Mutante
2. Pipes
> Controla la funcionalidad del buscador en la tabla
3. Search_Mutant
> Recibe toda la información de los mutantes pinta la tabla con esta y contiene el formulario de actualizar y crear mutante (Se puede optimizar el orden separando el formulario de este componente).
4. Services
> Controla las peticiones http que se realizan en la API

Se utilizo boostrap para la creación de la tabla y Bulma para el funcionamiento del formulario/modal

## Pendientes
* Es necesario implementar los headers para cada petición.
* Aunque el API tiene un formato de respuesta por cada statusCode es necesario implementar las validaciones en el formulario htlm.
