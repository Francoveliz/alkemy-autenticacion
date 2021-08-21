# Alkemy Autenticación

## Objetivo de aprendizaje:

Implementar autenticación con protección de rutas y persistencia de la sesión del usuario.

## Skills a entrenar:

1. Persistencia de Token
2. Protección de rutas
3. Verificación de usuario

## Consignas:

Crear una ruta /login que contenga un formulario que permita autenticar al usuario

1. Incluir los siguientes campos:

- Campo Email.
- Campo Password.
- Botón de “Enviar”.

2. Al hacer click en “Enviar”, se deberá validar que ambos campos no estén vacíos, y mostrar un mensaje al usuario si lo estuviesen. Caso contrario, se deberá realizar una petición POST a la siguiente url, con los campos email y password en el BODY.

- Link para login: http://challenge-react.alkemy.org

- Los datos válidos para obtener un token son:
  - Email: challenge@alkemy.org
  - Password: react

3. En el caso de obtener un error de la API, se deberá mostrar una alerta. Si es satisfactoria, almacenar el token obtenido en LocalStorage.
4. Crear una ruta /home a la que sólo se podrá acceder si el usuario está autenticado. De este modo, el usuario autenticado no podrá entrar a la ruta de login.

## Criterio de aceptación:

- Entregar en un repositorio público.
- Se debe utilizar Formik y CKEditor
- Todos los campos que tengan restricciones deben estar validados.

# Usage

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
