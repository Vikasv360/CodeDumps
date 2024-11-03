const { test, expect } = require('@playwright/test')


test('Dropdowns', async ({ page }) => {

    const userName = page.locator("input[name='username']");
    const password = page.locator("input[name='password']");
    const signBtn = page.locator("input[type='submit']");
    const dropdown = page.locator("select[class='form-control']");

    const radioBtn = page.locator(".radiotextsty");
    const popUpOk = page.locator("button[id='okayBtn']");
    const chkBox = page.locator("input[type='checkbox']");

    const link = page.locator("[href*='documents-request']");


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    //static dropdown
    await dropdown.selectOption("consult");
    await radioBtn.last().click()
    await popUpOk.click();

    console.log(await radioBtn.last().isChecked());

    await expect(radioBtn.last()).toBeChecked();

    await chkBox.uncheck();
    console.log(await chkBox.isChecked());
    expect(await chkBox.isChecked()).toBeFalsy();
    await chkBox.check();
    expect(await chkBox.isChecked()).toBeTruthy();
    console.log(await chkBox.isChecked());

    await expect(link).toHaveAttribute("class", "blinkingText");

});