import{test,expect} from "@playwright/test"
import * as mainpage from  "../PomPages/MainPage"
import { mainModule } from "process";


test.beforeEach("Navigate Nyctophile Studios Main Page",(async ({page},setTimeoutInfo)=>{
 await page.goto("https://www.nyctophilestudios.com/");
 }))


test("Nyctophile Studios Web Test",(async ({page})=>{
   const mainPage = new mainpage.MainPage(page)
   await mainPage.verifyIntroductionTextDisplayedCorrectly()
   await mainPage.checkingAllImagesOnWebsite()
   await mainPage.checkingAboutSection()
   }))





