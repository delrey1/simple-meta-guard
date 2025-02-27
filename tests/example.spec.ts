import { test, expect } from '@playwright/test';

test('has title and meta data', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/testa/);

  await expect(page.locator(`//meta[@name="keywords"]`)).toHaveAttribute(
    "content", "test1,test2,test3"
  )
  await expect(page.locator(`//meta[@name="description"]`)).toHaveAttribute(
    "content",
    "test4"
  )
});

