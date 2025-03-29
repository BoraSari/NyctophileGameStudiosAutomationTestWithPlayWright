import {expect, Locator, Page} from "@playwright/test"
import { runInThisContext } from "vm";

export class MainPage {

private readonly page: Page
private readonly introductionSection: Locator;
private readonly gameInsidePhotos : Locator;
private readonly fullScreenButton : Locator;
private readonly nextButton: Locator;
private readonly closeButton : Locator;
private readonly aboutSection : Locator;
private readonly aboutText: Locator;
private readonly companyIcon: Locator;
private readonly firstImage: Locator
private readonly gameTitle: Locator;

 constructor(page:Page){
    this.page=page;
    this.introductionSection= page.locator("[class='color_42 wixui-rich-text__text']");
    this.gameInsidePhotos = page.locator("#pro-gallery-margin-container-comp-krer2sjt")
    this.fullScreenButton = page.getByTitle("Open in fullscreen").nth(0)
    this.nextButton = page.locator("[class='pro-gallery-slider-arrow']").nth(0)
    this.closeButton = page.locator("button[aria-label='Exit fullscreen']").nth(1)
    this.aboutSection = page.getByText("About");
    this.companyIcon = page.locator("#img_comp-ksp2ij5c")
    this.firstImage = page.locator("[class='info-element-social info-align-center vertical-item info-element-social-absolute']").nth(0)
    this.aboutText=page.locator("[class='color_42 wixui-rich-text__text']").nth(5)
 }



 async verifyIntroductionTextDisplayedCorrectly(){
   //Functions
    await this.companyIcon.click()
    await this.introductionSection.scrollIntoViewIfNeeded()
    await this.introductionSection.hover()
    const introductionText = await this.introductionSection.textContent()
    await expect(introductionText).toContain("As Nyctophile Studios")
    await expect(this.companyIcon).toBeVisible()
    
}

async checkingAllImagesOnWebsite(){
//Functions
 await this.gameInsidePhotos.scrollIntoViewIfNeeded()
await this.gameInsidePhotos.hover()
 await this.page.waitForTimeout(2000)
 await this.firstImage.waitFor({state:"visible"})
 await this.firstImage.hover()
 await this.firstImage.click({force:true})
 await this.fullScreenButton.hover({force:true})
 await this.fullScreenButton.click()

 for(let i=0;i<4;i++){
   await this.nextButton.click({delay:500})
 }
 await this.closeButton.hover()
 await this.closeButton.click({delay:500})

//Assertions
await expect(this.gameInsidePhotos).toBeVisible()
await expect(this.gameInsidePhotos).toBeTruthy()
}

async checkingAboutSection(){
    //Functions
 await this.aboutSection.scrollIntoViewIfNeeded();
 await this.aboutSection.hover()
 await this.aboutSection.click();
 await this.aboutText.scrollIntoViewIfNeeded()




 const textContentOFAboutSection = await this.aboutText.textContent()

//Assertion
await expect(this.aboutText).toBeVisible
await expect(this.aboutText).toBeTruthy()
await expect(textContentOFAboutSection).toContain("Our first studio will be established on Istanbul Kadıköy")
}






}