
import LoginPage from '../pages/LoginPage'

const config = require('../lib/config')

describe('Login Page test',()=>{
    let loginpage

    beforeAll(async ()=>{
         loginpage= await new LoginPage();
    })
    
    it('verifying all elements are present',async ()=>{
        await loginpage.loadUrl(config.baseUrl)
        
        await loginpage.allElementsArePresent();  
    })
})
