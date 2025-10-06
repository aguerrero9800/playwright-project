# Playwright Project

Proyecto base de automatización con **Playwright** (TypeScript).

## Requisitos
- Node.js 18+ (o 20+)
- Playwright (@playwright/test)

## Instalación
```bash
npm install
npx playwright install

## ejecutar pruebas

npx playwright test           # headless
npx playwright test --headed  # navegador visible
npx playwright test --ui      # interfaz de Playwright
npx playwright show-report    # abre el reporte HTML

## Estructura

playwright-project/
├─ tests/                 # tests (.spec.ts/.spec.js)
├─ playwright.config.ts   # configuración
├─ package.json
└─ .gitignore




