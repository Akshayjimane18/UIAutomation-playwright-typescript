import { Page , expect, Locator} from "@playwright/test";

export class Elements{
    readonly page:Page;
    readonly elementLocator:Locator;


    constructor(page: Page){

        this.page = page;
        this.elementLocator = page.locator("xpath = //*[text()='Elements']");
    }

    async gotoElementsPage() {


        await this.page.goto("https://demoqa.com/");
        await this.elementLocator.click();

        
    }

}

