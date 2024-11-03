const {test}=require('@playwright/test');
const { text } = require('stream/consumers');

test('child window validation',async ({browser})=>{


    const context =await browser.newContext();
    const page =await context.newPage();

    const link = page.locator("[href*='documents-request']");
    const userName = page.locator("input[name='username']");
    const password = page.locator("input[name='password']");
    

    await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    

   const [newPage]=await Promise.all([

        context.waitForEvent('page'),
        await link.click(),
    ])

   const txt= await newPage.locator("p[class='im-para red']").textContent();
   const arrayTxt=txt.split("@");
   const domainName=arrayTxt[1].split(" ")[0]
   console.log(domainName);

   await userName.fill(domainName);
   console.log(await userName.textContent());
   await password.fill("learning");


   
})