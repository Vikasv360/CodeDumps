const {test, expect}=require('@playwright/test')

test('Login to Orange HRM', async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log(await page.title())
    await expect(page).toHaveTitle("OrangeHRM")

    //css selector
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("[name='password']").fill("admin123");
    await page.locator("[type='submit']").click();

})

test('Validate Login to Orange HRM with invalid credentials', async ({page})=>{

    const userName=page.locator("input[name='username']");
    const password=page.locator("[name='password']");
    const loginBtn =page.locator("[type='submit']");
    const errorMsg= page.locator("[role='alert']");
    const homePageTitle= page.locator("text='Dashboard'");
    const sideMenu =page.locator("[class='oxd-text oxd-text--span oxd-main-menu-item--name']");

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log(await page.title())
    await expect(page).toHaveTitle("OrangeHRM")

    //css selector
    await userName.fill("Admin");
    await password.fill("123");
    await loginBtn.click();

    console.log( await errorMsg.textContent());
    await expect(errorMsg).toContainText("Invalid credentials");
 

    //To erase and refill the data
    await userName.fill("Admin");
    await password.fill("");
    await password.fill("admin123");
    await loginBtn.click();

    //To get the first element from a list of Array webElement
    // console.log(await homePageTitle.first().textContent());
    // //To get the webelement using thier index values
    // console.log(await homePageTitle.nth(1).textContent());
    
    //for allTextContents() will not wait till the elements are displayed and will give empty array.
    //Since we have used above steps to await and get first and nth element, The below steps pass.
    //Try commenting above two steps and run the test


    //Solution 1: As the application is based on microservices, All serviecs/Network has to be loaded
    // await page.waitForLoadState('networkidle');

    //Solution 2: We are letting the element to be visible. 
    //but as the locator consists of multiple elements we have to use first()/nth() method.
    await sideMenu.first().waitFor();
    const allSideMenuText=await sideMenu.allTextContents();

    console.log(allSideMenuText);

})