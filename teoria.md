useEffect es un hoock en el cual nos permite ejecutar efectos secundarios en los componentes funcionales.

Por ej. los efectos secundarios son aquellos que aparecen despues que el componente se renderiza en la pantalla. hacer un request a una api, ejecutar un titulo, etc

Los hooks tienen una serie de reglas. por ej, solamente puede ser usado en componentes funcionales. en los de clases NO se pueden usar.
Siempre se utilizan a nivel superior, nunca llamo a un hook dentro de una funcion o dentro de un componente.

¿Que es un hook? DUDA

No podemos llamar hook de manera condicional. (en un if por ej)

Los nombres siempre van a comenzar en use

Los mas comunes son useState y useEffect.

Deben ser llamados de manera consistente, se van a ejecutar en cierto orden de acuerdo a como estan creados.

------------

El patron que se utiliza para sass se llama 7.1, 7 carpetas y 1 archivo de sass donde se hace la importacion

abstracts y vendors no se usa por lo gral.

En base se usan todas las configuraciones base de mi proyecto, creo un archivo llamado _base.scss