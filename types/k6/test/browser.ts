import browser from 'k6/experimental/browser';

//
// Create a page
//
const page = new browser.Page();

// $ExpectType void
page.bringToFront();
