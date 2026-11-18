# Piano para la Misa

App personal para tocar los cantos de la Misa en teclado u organeta: muestra qué teclas tocar para cada acorde, permite transponer y escuchar, y tiene la vista de notas que caen.

Es una página web instalable (PWA). No usa servidor ni cuentas: todo corre en el celular, la tablet o el computador, y funciona sin internet después de abrirla una vez con conexión.

## Publicarla (GitHub Pages)
1. En el repositorio: **Settings > Pages**.
2. En **Build and deployment**, elige **Deploy from a branch**, rama **main** y carpeta **/ (root)**. Guarda.
3. En uno o dos minutos GitHub muestra la dirección, parecida a `https://TU-USUARIO.github.io/piano-misa/`.

Nota: GitHub Pages en cuentas gratuitas exige que el repositorio sea público.

## Instalarla
- **Android (Chrome):** abre la dirección y pulsa **Instalar app**, o menú de tres puntos > **Instalar aplicación** / **Añadir a la pantalla de inicio**.
- **iPhone o iPad (Safari):** botón Compartir > **Añadir a pantalla de inicio**.
- **Computador (Chrome o Edge):** ícono de instalar en la barra de direcciones.

## Actualizar
Cuando se agregan cantos, se cambia `index.html`. Si la app instalada no muestra lo nuevo, cerrarla y abrirla dos veces con internet. Para forzar el cambio, subir el número `piano-misa-v1` en `sw.js`.

## Aviso
Los acordes y textos de cantos provienen del cantoral "Cantemos al Dios de la vida" y de otros libros. Son de sus autores y editoriales. Esta app es para uso personal y del coro, no para venta.
