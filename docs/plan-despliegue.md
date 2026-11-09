# Plan de despliegue del incremento

**Informática III · Grupo 1301 · Ciclo 2027-1** **Tema:** 3.5 Fase de Despliegue **Entrega:** domingo 8 de noviembre de 2026, 22:00, con el enlace al commit en Classroom

| Dato | Respuesta |
| :---- | :---- |
| Equipo (número) | 6 |
| Modelo asignado | Prototipo |
| Integrantes | De la cruz gaytan Rogelio
Diaz Vazquez Marco Antonio
Herrera Saldaña Getzahin Abraham
Fuchs Gallego Leonardo
Romero Flores Angel Alexis
Aldana Areñano Luis Manuel |
| Contexto de negocio de nuestro sistema | Se base en una barberia. |

> **Cómo usar esta plantilla:** guarden este archivo en `docs/plan-despliegue.md` dentro del repositorio de su equipo. Sustituyan los textos entre `[corchetes]` y borren las líneas que empiezan con `>` cuando terminen. Suban el archivo con GitHub Desktop y entreguen en Classroom **el enlace a su último commit** de este archivo.

## 1. Alcance del incremento

> ¿Qué funcionalidad exacta incluye este despliegue y qué queda fuera? Incluyan cómo quedó el cambio de requisito del 5 de octubre.

| Requisito | ¿Entra en este despliegue? (Sí / Parcial / No) | Qué incluye exactamente o por qué queda fuera |
| :---- | :---- | :---- |
| RF1 | Sí | Maquetación responsiva del catálogo de productos visualizado con Tailwind CSS y estructura limpia en HTML5. |
| RF2 | Sí | Renderizado dinámico de tarjetas de productos utilizando `map()` en JavaScript a partir de un arreglo de objetos. |
| RF3 | Sí | Selección de productos e incremento del pedido con cálculo acumulado del total mediante `reduce()` y delegación de eventos. |
| RF4 | Sí | Filtrado dinámico por categorías de productos con `filter()`, manteniendo el estado del pedido actual sin pérdida de datos. |
| RF5 | No | Integración con pasarela de pagos real y base de datos persistente; queda fuera por alcance del MVP actual y se posterga para la siguiente fase. |
| Cambio de requisito (5 oct) | Parcial | Se ajustó la vista del catálogo para soportar categorías dinámicas y delegación de eventos en contenedor padre, dejando pendiente el almacenamiento en backend. |

---

## 2. Destino y configuración

| Elemento | Respuesta |
| :---- | :---- |
| Destino | Vercel |
| Proyecto o URL en Vercel | `https://practica-web-fsociety.vercel.app` |
| Repositorio desde el que se despliega | `https://github.com/delacrurogelio-cmyk/practica-web-base` |
| Rama que se publica en producción | `main` |
| Comando de build (si aplica) | `npm run build` |

### Variables de entorno necesarias

> Escriban **solo los nombres**, nunca los valores. Las credenciales no van en el repositorio.

| Nombre de la variable | Para qué sirve |
| :---- | :---- |
| `VITE_API_URL` | Identifica la URL del endpoint base para solicitudes públicas del catálogo. |
| `VITE_APP_ENV` | Define el entorno de ejecución (production / staging). |

### Servicios externos de los que depende el sistema

> Base de datos, APIs, almacenamiento, etc. Si no dependen de ninguno, escriban "Ninguno".

- Ninguno

---

## 3. Checklist pre-despliegue

> Mínimo 5 puntos, cada uno verificable con sí/no. El lunes lo van a recorrer antes de desplegar.

| # | Verificación | ¿Cumple? (Sí / No) | Responsable |
| :---- | :---- | :---- | :---- |
| 1 | El proyecto compila sin errores en GitHub Codespaces mediante `npm run build`. | Sí | Rogelio De la Cruz |
| 2 | El servidor de desarrollo (`npm run dev`) levanta sin advertencias ni errores en consola. | Sí | Rogelio De la Cruz |
| 3 | Todas las dependencias (`vite`, `tailwindcss`, `@tailwindcss/vite`) están presentes en `package.json`. | Sí | Rogelio De la Cruz |
| 4 | El repositorio en la rama `main` tiene el código sincronizado y limpio sin cambios pendientes (`git status`). | Sí | Rogelio De la Cruz |
| 5 | Las variables de entorno necesarias están configuradas correctamente en el panel de Vercel. | Sí | Rogelio De la Cruz |

---

## 4. Smoke test (verificación posdespliegue)

> De 3 a 5 pruebas manuales rápidas que confirmen que lo esencial funciona **ya desplegado**, no en local.

| # | Acción | Resultado esperado | Resultado obtenido (se llena el lunes) |
| :---- | :---- | :---- | :---- |
| 1 | Cargar la URL principal de producción en Vercel. | El sitio carga correctamente con la barra y estilos de Tailwind aplicados sin fallos visuales. | |
| 2 | Hacer clic en los filtros de categoría del catálogo. | El catálogo actualiza los productos visibles mostrando solo los que coinciden con la categoría. | |
| 3 | Hacer clic en el botón de agregar producto en una tarjeta. | El producto se suma al pedido y el total acumulado se actualiza en pantalla. | |
| 4 | Filtrar categorías tras haber agregado productos al pedido. | Los productos mostrados cambian, pero la lista y el total del pedido acumulado se conservan intactos. | |

---

## 5. Plan de reversión

> Si el despliegue rompe algo, ¿cómo regresaran a la última versión que funcionaba? Escriban los pasos concretos y quién los ejecuta.

**Responsable de la reversión:** Rogelio De la Cruz

**Señal para revertir:** Falla crítica en la carga inicial de los estilos/scripts o fallos durante las pruebas 1 a 3 del smoke test.

**Pasos:**

1. Acceder al panel de administración del proyecto en Vercel y dirigirse a la pestaña de **Deployments**.  
2. Identificar el despliegue previo funcional (marcado como exitoso) y seleccionar la opción **Instant Rollback / Promote to Production**.  
3. Confirmar la reversión en el panel y verificar nuevamente en el navegador que el dominio apunte a la versión estable previa.

---

## 6. Despliegue según nuestro modelo

> Un párrafo de 8 a 12 líneas: según su modelo asignado, ¿cuándo y cuántas veces debería desplegar un equipo? ¿Su plan real es coherente con eso? Si no lo es, expliquen por qué.

Bajo el modelo de Integración y Despliegue Continuo (CI/CD) basado en ramas (*GitFlow / Feature Branching*), un equipo de desarrollo debería desplegar a producción de manera frecuente e incremental cada vez que una funcionalidad haya sido verificada en el entorno local y pase las pruebas de compilación. De acuerdo con este principio, las entregas no se acumulan durante semanas, sino que se publican actualizaciones estables continuamente mediante canalizaciones automatizadas vinculadas al repositorio. Nuestro plan real es totalmente coherente con este modelo, ya que el despliegue en Vercel está configurado para dispararse automáticamente al integrar los cambios aprobados en la rama principal (`main`). Esto nos permite validar rápidamente cada incremento funcional (como la renderización dinámica y el filtrado del catálogo) directamente en el entorno productivo con mínimo riesgo de regresión.

---

## Bloqueos para el lunes

> ¿Qué les impediría hoy desplegar el lunes 9 de noviembre? Si no hay bloqueos, escriban "Ninguno".

- Ninguno

---

## Declaración de uso de IA

> Obligatoria si usaron IA. Si no la usaron, escriban "No se usó IA".

| Herramienta | Para qué la usamos | Qué verificamos nosotros |
| :---- | :---- | :---- |
| Gemini | Estructuración y sintaxis en JavaScript (map, reduce, delegación de eventos) y diseño responsivo en Tailwind CSS. | Que la aplicación compilara adecuadamente con Vite, la interactividad de la interfaz y la ejecución sin errores en consola. |
