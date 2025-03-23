
import { test } from '@playwright/test';
import { expect } from '@playwright/test';

test('Test_2025-03-23', async ({ page }) => {
  
    // playwright_navigate
    await page.evaluate(async () => {
      await executeTool('playwright_navigate', {"url":"https://www.google.com"});
    });

    // playwright_fill
    await page.evaluate(async () => {
      await executeTool('playwright_fill', {"selector":"input[name=\"q\"]","value":"alex"});
    });

    // playwright_fill
    await page.evaluate(async () => {
      await executeTool('playwright_fill', {"selector":"textarea[name=\"q\"]","value":"alex"});
    });
});