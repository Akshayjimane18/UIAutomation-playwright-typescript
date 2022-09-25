import { test, expect, type Page} from '@playwright/test';
import {Elements} from "../page-objects/Elements";



test('Textbox test', async ({ page })  => {

    const elementsPageRef = new Elements(page);

    
    await elementsPageRef.gotoElementsPage();


});