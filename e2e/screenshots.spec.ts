import { test } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const pagesToCapture = [
  { name: 'home', path: '/' },
  { name: 'login', path: '/login' },
  { name: 'admin', path: '/admin' },
  { name: 'recetas-nueva', path: '/recetas/nueva' },
  { name: 'receta-detalle', path: '/recetas/salmon-glaseado-soya-jengibre' },
];

test.describe('Capturas de pantalla del sitio', () => {
  for (const pageInfo of pagesToCapture) {
    test(`Captura de pantalla: ${pageInfo.name}`, async ({ page }, testInfo) => {
      const projectName = testInfo.project.name; // 'desktop' o 'mobile'
      const outputDir = path.join(process.cwd(), 'screenshots', projectName);

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      await page.goto(pageInfo.path, { waitUntil: 'networkidle' });
      
      // Esperar un momento breve para asegurar renderizado completo de animación/imágenes
      await page.waitForTimeout(500);

      const screenshotPath = path.join(outputDir, `${pageInfo.name}.png`);
      
      await page.screenshot({
        path: screenshotPath,
        fullPage: true,
      });

      console.log(`[${projectName}] Captura guardada en: ${screenshotPath}`);
    });
  }
});
