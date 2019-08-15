/// <reference types="activex-word" />

let obj0 = new ActiveXObject('DOCSITE.DocSiteControl');

let obj1 = new ActiveXObject('RECIP.RecipCtl');

let obj2 = new ActiveXObject('Outlook.Application');

let obj3 = new ActiveXObject('Outlook.OlkBusinessCardControl');

let obj4 = new ActiveXObject('Outlook.OlkCategoryStrip');

let obj5 = new ActiveXObject('Outlook.OlkCheckBox');

let obj6 = new ActiveXObject('Outlook.OlkComboBox');

let obj7 = new ActiveXObject('Outlook.OlkCommandButton');

let obj8 = new ActiveXObject('Outlook.OlkContactPhoto');

let obj9 = new ActiveXObject('Outlook.OlkDateControl');

let obj10 = new ActiveXObject('Outlook.OlkFrameHeader');

let obj11 = new ActiveXObject('Outlook.OlkInfoBar');

let obj12 = new ActiveXObject('Outlook.OlkLabel');

let obj13 = new ActiveXObject('Outlook.OlkListBox');

let obj14 = new ActiveXObject('Outlook.OlkOptionButton');

let obj15 = new ActiveXObject('Outlook.OlkPageControl');

let obj16 = new ActiveXObject('Outlook.OlkSenderPhoto');

let obj17 = new ActiveXObject('Outlook.OlkTextBox');

let obj18 = new ActiveXObject('Outlook.OlkTimeControl');

let obj19 = new ActiveXObject('Outlook.OlkTimeZone');

// ---------

let app = new ActiveXObject('Outlook.Application');

// https://msdn.microsoft.com/VBA/office-shared-vba/articles/getting-started-with-vba-in-office
(() => {
    // create a message in Outlook
    const message = app.CreateItem(Outlook.OlItemType.olMailItem);
    message.Subject = 'Hello, world!';
    message.Display();

    // copying a contact from Outlook to Word
    const currentItem = app.ActiveInspector().CurrentItem as Outlook.ContactItem;
    const wdApp = new ActiveXObject('Word.Application');
    const doc = wdApp.Documents.Add();
    doc.Range().InsertAfter(`${currentItem.FullName} from ${currentItem.CompanyName}`);
})();
