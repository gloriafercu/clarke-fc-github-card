
# Prueba técnica 7: GitHub Card

## Resumen

Ya somos unas cuantas en Adalab, ¿no sería genial tener un pequeño directorio donde buscarnos? Pues nos lo vamos a hacer, claro que sí!

## Guía funcional

Tiraremos de la [API de GitHub](https://developer.github.com/v3/) para conseguir la url a la que debemos pedir la lista de miembros de la organización Adalab, con esos datos crearemos un <select> con los nombres de usuario. Al seleccionar uno de ellos, pediremos sus datos y los mostraremos en una pequeña card.

## Especificaciones

* Antes de empezar tendréis que hacer una pequeña planificación del trabajo, en texto, sin nada de código:

	* Un esquema del funcionamiento
	* Qué acciones necesitaremos realizar y pasos concretos para realizarlas
	* Qué acciones son de ejecución obligatoria y cuales responderán a eventos
	
* Esta vez no os daremos la dirección, tendréis que buscarla en la documentación de la API de GitHub
* La prioridad 1 es que funcione
* La prioridad 2 es acercarse lo más posible al aspecto propuesto en el prototipo
* El dato de "Miembro desde hace X años/meses" ES OPCIONAL. Si ya has terminado todo se trata de indicar cuánto tiempo lleva dicho usuario siendo miembro de Github

Por defecto, la API nos devolverá 20 resultados, más que suficiente para el ejercicio. Si nos venimos arriba y queremos sacar a todo el mundo, en Adalab somos 68 criaturas, añadiendo ?per_page=68 a la url de la petición y estaremos todas.
