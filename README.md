
# Desafio Tecnico Backend
Backend

Implementar una RESTful API que tome la información de la API de Star Wars (https://swapi.dev/).

Las techs a utilizar son NodeJS, queda a libre elección la herramienta para armar el API pero se debe utilizar Typescript.

## Objetivos:

1. Crear una sincronización de información que corra en un cron para mandar los datos a una base de datos propia usando MongoDB. (Se puede usar cualquier ORM/ODM).
2. Las entidades que se deberian implementar son:
   * People
   * Films
   * Starships
   * Planets
3.  Solo se deben implementar endpoints de obtención de información, digamos que tendria que existir un endpoint para obtener un listado con resumen de los datos y otro endpoint que sea por parametro para obtener uno solo.
4. Los 4 endpoints de listado de elementos deberia permitirme filtrar la informacion por al menos un atributo.
5. Implementar los tests unitarios.
6. Se espera que el codigo este dividio en modulos y que las responsabilidades esten bien separadas.

## Criterio de Evaluación

Este test va a estar evaluado de la siguiente manera:

1. *Funcional*: ¿La aplicación cumple con todos los puntos?
2. *Code Quality*: ¿El código se encuentra bien estructurado, limpio y es escalable? 
3. *Testing*: ¿Todos los test unitarios del backend están desarrollados para realmente probar la funcionalidad?
4. *Documentacion*: ¿La documentación es clara y concisa?


# Resolucion de test

## Estimacion de tareas

1 sp = story point que equivale a una jornada laboral de dos personas

| Tarea | story point     | Description                       |
| :-------- | :------- | :-------------------------------- |
| Configuracion servidor y conexion db      | 1 sp |  |
|Creacion de modelos e interfaces | 1 sp|||
|Sincronizacion de api Starwars y db mongo|2 sp|||
|Ruteo|1 sp|||
|Test de endpoints + endpoints |1 sp|||
|Documentacion|1 sp|||
|total story points = 7|||Estimado para una semana de desarrollo|


## Documentacion de codigo


### API Reference

##### Get 

```http
  GET /people
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `people` | `[people]` |Listado de personas |

```http
  GET /people/:name
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `people` | Personas filtradas por nombre |



```http
  GET /films
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `films`      | `[films]` | Listado de peliculas |

```http
  GET /films/:episode_id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `films`      | `film` | Pelicula filtrada por episode_id |

```http
  GET /planets
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `planets`      | `[planets]` | Listado de planets |

```http
  GET /planets/:climate
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `planets`      | `[planets]` | PLanetas filtrados por climas|


```http
  GET /species?name=Value1&designation=Value2
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `species`      | `[species]` | Species filtrados por dos atributos, name y designation |

```http
  GET /starships?name=Value1&model=Value2
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `starships`      | `[starships]` | Starships filtrados por dos atributos, name y model |

```http
  GET /vehicles?name=Value1&model=Value2
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vehicles`      | `[vehicles]` | Vehicles filtrados por dos atributos, name y model |




## Run Locally

Clone the project

```bash
  git clone https://github.com/EmilioGalimberti/desafioTecnicoBackend
```

Go to the project directory

```bash
  cd desafioTecnicoBackend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Running Tests

To run tests, run the following command

```bash
  npm  test
```

