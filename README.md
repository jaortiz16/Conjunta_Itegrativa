# Conjunta_Itegrativa
# Sistema de Inventario con Next.js, Express y Prisma

¡Bienvenido al README del Sistema de Inventario desarrollado con Next.js, Express y Prisma!

Este sistema de inventario es una aplicación web que te permite gestionar de manera eficiente el inventario de productos de tu empresa. Utiliza Next.js en el frontend para crear una experiencia de usuario interactiva y Express junto con Prisma en el backend para manejar la lógica de negocio y la persistencia de datos.

## Funcionalidades Principales

- **Gestión de Productos:** Añadir, editar y eliminar productos del inventario.
- **Búsqueda y Filtrado:** Buscar productos por nombre, categoría, etc., y filtrarlos según diferentes criterios.
- **Control de Stock:** Mantener un seguimiento preciso del stock de cada producto.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado Node.js y npm en tu máquina.

## Configuración del Proyecto

1. Clona este repositorio en tu máquina local:

```
git clone <url_del_repositorio>
```

2. Navega al directorio del proyecto:

```
cd sistema-de-inventario
```

3. Instala las dependencias del frontend y del backend:

```
cd front
npm install
cd ../server
npm install
```

## Configuración de la Base de Datos

Este proyecto utiliza SQLite como base de datos con Prisma. Sigue estos pasos para configurarla:

1. Inicia un nuevo proyecto de Prisma en la carpeta `backend`:

```
npx prisma init
```

2. Configura el proveedor de la base de datos como SQLite en el archivo `schema.prisma`:

```prisma
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Product {
  id          Int      @id @default(autoincrement())
  name        String
  description String
  price       Float
  quantity    Int
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  soldAt      DateTime?
  photoUrl    String?
}

```

3. Aplica las migraciones de la base de datos:

```
npx prisma migrate dev
```

## Iniciar el Servidor Backend

Para iniciar el servidor backend, ejecuta el siguiente comando desde la carpeta `server`:

```
npm run dev
```

## Iniciar la Aplicación Frontend

Para iniciar la aplicación frontend, ejecuta el siguiente comando desde la carpeta `front`:

```
npm run dev
```

## Acceder a Prisma Studio

Prisma Studio te permite visualizar y administrar los datos de tu base de datos de manera intuitiva. Para abrir Prisma Studio, ejecuta el siguiente comando desde la carpeta `backend`:

```
npx prisma studio
```

¡Y eso es todo! Ahora puedes acceder al Sistema de Inventario desde tu navegador y comenzar a gestionar tu inventario de manera eficiente. Si tienes alguna pregunta o problema, no dudes en contactar al equipo de desarrollo.

¡Gracias por usar nuestro Sistema de Inventario! Esperamos que te sea de gran utilidad.
