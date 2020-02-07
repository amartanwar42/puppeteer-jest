export default class Helper{
    async click (selector) {
        try {
            await page.waitForSelector(selector)
            await page.click(selector)
        } catch (error) {
            throw new Error(`Could not click on the selector: ${selector} OrginalError: ${error}`)
        }
    }

    async typeText (selector,text) {
        try {
            await page.waitForSelector(selector)
            await page.type(selector,text)
        } catch (error) {
            throw new Error(`Could not type text on the selector: ${selector} OrginalError: ${error}`)
        }
    }

    async shouldExist(selector) {
        try {
            await page.waitForSelector(selector, { visible: true })
        } catch (error) {
            throw new Error(`Selector: ${selector} not exist  OrginalError: ${error}`)
        }
    }

    async shouldNotExist(selector) {
        try {
            await page.waitFor(() => !document.querySelector(selector))
        } catch (error) {
            throw new Error(`Selector: ${selector} is visible, but should not  OrginalError: ${error}`)
        }
    }

    async pressKey(page, key) {
        try {
            await page.keyboard.press(key)
        } catch (error) {
            throw new Error(`Could not press key: ${key} on the keyboard OrginalError: ${error}`)
        }
    }
}