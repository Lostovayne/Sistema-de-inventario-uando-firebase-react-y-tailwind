# Autenticación con Firebase

Sistema de autenticación usando React, TypeScript, Tailwind y Firebase.

## Librerías que se están usando
- React-icons
- React-redux
- Tailwind
- Firebase
- React-router
- Tailwind Merge
- Vite
- React

## Instalación

- Clonar el repositorio.
- Copiar las variables de entorno de `.env.example` a `.env`.
- Las variables corresponden a las que te da Firebase en tu proyecto.
- Ejecutar `pnpm install`.
- Ejecutar `pnpm dev`.

## Manejo de rutas

- El componente principal de la app está envuelto en un provider correspondiente a `<Provider store={store}>` para que todos los componentes puedan acceder al store.
- Se utilizó react router dom en la nueva forma usando los children en un objeto.
- Se utilizan 2 routes para el manejo de rutas.
- Las rutas principales son manejadas por el primer router, mientras que las que usan Auth son manejadas por el router secundario `/auth/*`.
- Las rutas de auth usan un Layout `<AuthLayout />` el cual usa el children `<Outlet />` para renderizar las rutas de auth agregando el fondo a las 2 páginas, Login y Register.

## Manejo de estado

- Se está utilizando redux-toolkit, creando un store en su ruta principal que conecta con el AuthSlider `auth` y el reducer `AuthSlice.reducer`.

- Se están usando los hooks `useAppDispatch` y `useAppSelector` para acceder al store y sus estados.

## Custom Hooks 

- `useForm`
- Se estan manejando ambos formularios `Login` y `Register` utilizando el hook para los cambios de los inputs.

## Inicio de Sesión

- Se está usando como proveedor Google para iniciar sesión.
- El archivo `thunks.ts` se encarga de la autenticación, ejecutando la función `startGoogleSignIn` la cual inicia un dispatch para cambiar el estado disparando la acción `checkingCredentials`.

- Se llama a la función `signInWithGoogle` la cual se encuentra en `providers` donde se maneja toda la lógica de Google, se crea una instancia de `GoogleAuthProvider`, luego usando el método que viene de Firebase llamado `signInWithPopup` se le pasa la instancia de FirebaseAuth y la instancia de GoogleAuthProvider.
- Esto devolverá el estado de la autenticación, en caso de ser correcto devolverá un objeto con las propiedades solicitadas, en caso contrario devolverá un objeto con el error.

- El resultado es enviado al Thunk `login` para ser guardado en el store.

- Lo que permite el inicio de sesión correctamente.

## Features
- Registro de usuario
- Cierre de sesión
- Cierre de sesión con Google
- Dashboard para manejar excel de productos
- Creación de la interfaz de Dashboard
- Cargar los productos y pasarlos a una tabla para ser editados
- Manejo de JSON de productos