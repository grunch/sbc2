# SBC2

Landing page moderna para **SBC Consultores**, construida con **React + Vite**.

Este proyecto rehace la web desde cero con una dirección más actual, limpia y corporativa. La idea es que cualquier persona pueda levantarla localmente, revisarla, modificarla y generar un build sin adivinar comandos.

## Stack

- React 19
- Vite 8
- Lucide React para iconos
- CSS plano, sin framework externo

## Requisitos

Antes de probar el proyecto, necesitas tener instalado:

- **Node.js 20 o superior** recomendado
- **npm**

Puedes verificarlo así:

```bash
node -v
npm -v
```

## Clonar el proyecto

```bash
git clone https://github.com/grunch/sbc2.git
cd sbc2
```

## Instalar dependencias

```bash
npm install
```

Esto descargará todas las dependencias definidas en `package.json`.

## Ejecutar en modo desarrollo

```bash
npm run dev
```

Después de correr ese comando, Vite levantará un servidor local y te mostrará una URL similar a esta:

```bash
http://localhost:5173/
```

Abre esa dirección en tu navegador para ver la web.

### Si quieres verla desde otro dispositivo en la misma red

Por ejemplo, desde tu teléfono o desde otra computadora en tu Wi-Fi:

```bash
npm run dev -- --host
```

Eso hará que Vite exponga el servidor en la red local y te mostrará una URL tipo:

```bash
http://192.168.x.x:5173/
```

## Generar build de producción

```bash
npm run build
```

Eso crea una carpeta llamada `dist/` con los archivos listos para deploy.

## Probar el build de producción localmente

Después de hacer el build:

```bash
npm run preview
```

Eso sirve la versión de producción para probar cómo quedaría realmente desplegada.

Normalmente Vite mostrará una URL parecida a:

```bash
http://localhost:4173/
```

## Lint

Para correr el lint del proyecto:

```bash
npm run lint
```

## Estructura básica del proyecto

```text
sbc2/
├── public/              # assets públicos
├── src/
│   ├── App.jsx          # estructura principal de la landing
│   ├── App.css          # estilos principales
│   ├── index.css        # estilos base globales
│   └── main.jsx         # punto de entrada de React
├── index.html
├── package.json
└── vite.config.js
```

## Qué modificar si quieres editar contenido

### Texto principal y secciones
Edita:

```text
src/App.jsx
```

Ahí están:
- hero
- servicios
- propuesta de valor
- metodología
- resultados
- CTA final

### Estilos
Edita:

```text
src/App.css
src/index.css
```

### Metadata de la página
Para cambiar título o descripción SEO básica:

```text
index.html
```

## Flujo recomendado para probar cambios

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Levanta el entorno:
   ```bash
   npm run dev
   ```
3. Edita archivos en `src/`
4. Revisa en navegador
5. Cuando todo esté bien, valida build:
   ```bash
   npm run build
   ```
6. Si quieres validar la versión final servida como producción:
   ```bash
   npm run preview
   ```

## Troubleshooting

### `npm install` falla
Prueba:

```bash
rm -rf node_modules package-lock.json
npm install
```

### El puerto 5173 está ocupado
Vite normalmente propondrá otro puerto automáticamente. Solo revisa la URL que imprime en terminal.

### No abre en el teléfono
Asegúrate de correr:

```bash
npm run dev -- --host
```

Y de que ambos dispositivos estén en la misma red.

## Estado actual

El proyecto contiene una primera versión moderna de la landing de SBC Consultores. Todavía se puede mejorar con:

- logo SVG real
- formulario/contacto real
- optimización de copy comercial
- animaciones sutiles
- más secciones internas

---

Si vas a tocar esta web, no improvises cosas raras: prueba siempre con `npm run dev` y valida con `npm run build` antes de subir cambios.
