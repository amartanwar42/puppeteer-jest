import BasePage from "./BasePage";
const loginPageObject = require('../pageObjects/LoginPageObjects')

export default class LoginPage extends BasePage{
    allElementsArePresent = async () => await this.shouldExist(loginPageObject.email)
    
    
}