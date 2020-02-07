import Helper from "../lib/Helper";

export default class BasePage extends Helper{
   
    wait = async (time) => await page.waitFor(time)
    
    getTitle = async () => await page.title()
    
    getUrl = async () => await page.url()

    loadUrl = async (url) => {
        await page.goto(url)
        await page.waitForSelector("p[text='Hello Better']")
    } 
}