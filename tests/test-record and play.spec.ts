import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar/');
  await page.getByRole('combobox', { name: 'Ingresá lo que quieras' }).click();
  await page.getByRole('combobox', { name: 'Ingresá lo que quieras' }).fill('iphone');
  await page.getByRole('combobox', { name: 'Ingresá lo que quieras' }).press('Enter');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.getByRole('link', { name: 'Apple iPhone 13 (128 GB) - Medianoche - Distribuidor Autorizado' }).dblclick();
  await page.getByRole('button', { name: 'Comprar ahora' }).click();
  await page.pause()
});