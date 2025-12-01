# Challenge – API Automation – Martín Barroso

Este proyecto contiene la automatización de la API de **PetStore** utilizando **Playwright + TypeScript**.

La automatización replica exactamente los **mismos casos** definidos en la colección de **Postman** (Parte 3 del Challenge).

---

## 📦 Tecnologías

- Playwright Test Runner
- TypeScript
- Node.js

---

## 🚀 Instalación

```bash
npm install

Ejecutar las pruebas

npm test

Genera un reporte HTML en:
playwright-report/index.html


📁 Estructura del proyecto
challenge-api-automation/
│
├─ package.json
├─ playwright.config.ts
├─ README.md
└─ tests/
   └─ pet.api.spec.ts


📌 Alcance

POST /pet (máx. 3 casos)

GET /pet/{petId}

PUT /pet

POST /pet/{petId} (form-data)

DELETE /pet/{petId}

Cada endpoint tiene máximo 3 casos, cumpliendo la consigna.


---

✨ Autor

Martín Barroso
