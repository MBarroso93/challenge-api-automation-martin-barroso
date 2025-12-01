# Challenge – API Automation – Martín Barroso

Este proyecto contiene la automatización de la API de **PetStore** utilizando **Playwright + TypeScript**.

---

## 📦 Tecnologías

- Playwright Test Runner
- TypeScript
- Node.js
- Allure Report (para reportes detallados)

---

## 🚀 Instalación

### Instalar dependencias del proyecto
```bash
npm install
```

## 🧪 Ejecutar las pruebas

### Ejecutar todos los tests
```bash
npm run test
```

### Ejecutar tests individuales
```bash
npm run test:post    # Solo tests POST
npm run test:get     # Solo tests GET
npm run test:put     # Solo tests PUT
npm run test:delete  # Solo tests DELETE
npm run test:all     # Todos los tests sin limpiar resultados previos
```

## 📊 Reportes

### Ver reporte de Allure
```bash
npm run open:report
```

### Generar y abrir reporte de Allure
```bash
npm run open:allure
```

### Limpiar resultados y reportes
```bash
npm run test:clean
```

Los reportes se generan en:
- **Allure**: `allure-results/` y `allure-report/`
- **Playwright HTML**: `playwright-report/index.html`

---

## 📁 Estructura del proyecto

```
challenge-api-automation/
│
├─ package.json
├─ playright.config.ts
├─ README.md
└─ tests/
   ├─ constants.ts
   └─ tests/
      ├─ 1.post.spec.ts
      ├─ 2.get.spec.ts
      ├─ 3.put.spec.ts
      └─ 4.delete.spec.ts
```

---

## 📌 Alcance

- **POST /pet** (máx. 3 casos)
- **GET /pet/{petId}** (máx. 3 casos)
- **PUT /pet** (máx. 3 casos)
- **DELETE /pet/{petId}** (máx. 1 casos)

Cada endpoint tiene máximo 3 casos, cumpliendo la consigna.

---

## ✨ Autor

Martín Barroso
