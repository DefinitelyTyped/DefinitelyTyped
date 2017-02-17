/// <reference types="JQuery" />

// Initialize app
var myApp = new Framework7();

//Export DOM7 to local variable to make it easy accessable
var $$ = Dom7;

// In page callbacks:
myApp.onPageInit('about', function (page) {
    // "page" variable contains all required information about loaded and initialized page 
})

// In page events:
$$(document).on('page:init', function (e: any) {
    var page = e.detail.page;
    // Code for About page
    if (page.name === 'about') {
        // We need to get count GET parameter from URL (about.html?count=10)
        var count = page.query.count;
        // Now we can generate some dummy list
        var listHTML = '<ul>';
        for (var i = 0; i < count; i++) {
            listHTML += '<li>' + i + '</li>';
        }
        listHTML += '</ul>';
        // And insert generated list to page content
        $$(page.container).find('.page-content').append(listHTML);
    }
    // Code for Services page
    if (page.name === 'services') {
        myApp.alert('Here comes our services!');
    }
});

// Init slider and store its instance in mySwiper variable
var mySwiper = myApp.swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical'
});

// Render person template to HTML, its template is already compiled and accessible as Template7.templates.personTemplate
var personHTML = Template7.templates.personTemplate({
    name: 'John Doen',
    age: 33,
    position: 'Developer',
    company: 'Apple'
});

// Compile car template to HTML, its template is already compiled and accessible as Template7.templates.carTemplate
var carHTML = Template7.templates.carTemplate({
    vendor: 'Ford',
    model: 'Mustang',
    power: 300,
    speed: 280
});