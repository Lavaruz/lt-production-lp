/**
 * Membuat assets/img/og-image.jpg dari scripts/og-image.html.
 * Butuh Playwright: npx playwright install chromium (sekali saja).
 * Jalankan: node scripts/render-og-image.js
 */
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto("file://" + path.join(__dirname, "og-image.html"));
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(__dirname, "..", "assets", "img", "og-image.jpg"),
    type: "jpeg",
    quality: 88,
  });
  await browser.close();
  console.log("assets/img/og-image.jpg dibuat");
})();
