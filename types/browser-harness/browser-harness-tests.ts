
import harness = require('browser-harness');

harness.listen(4500);
harness.listen(4500, function(){});
harness.config.retryMS = 50;
harness.config.timeoutMS = 1500;

var browser = new harness.Browser({ type: 'chrome' });
browser.open('http://localhost:8000/harness.html');
browser.close();

harness.events.on('ready', function(driver){
    driver.events.on('console.log', function(text){
        console.log(text);
    });

    driver.events.on('console.warn', function(text){
        console.log(text);
    });

    driver.events.on('console.error', function(text){
        console.log(text);
    });

    driver.events.on('window.onerror', function(text){
        console.log(text);
    });

    driver.setUrl('http://localhost:8000');
    driver.setUrl('http://localhost:8000', function(){});

    var element = driver.findElement('body');
    var html = element.html();
    element.addClass('test').click();

    driver.findElements('div').removeClass('test');

    driver.findVisible('html').findVisible('body').toggleClass('test');
    driver.findVisibles('div').hide().show();

    driver.find('div').css('color', 'red', function(err, element){
        element.hide().show();
    });

    driver.waitFor(function(){
        return false;
    });

    driver.waitFor(function(){
        return false;
    }, function(){

    });

    driver.waitFor({
        condition: function(){

        },

        exec: function(){

        },

        timeoutMS: 1000
    });

    driver.exec(function(){

    });

    driver.exec(function(){}, function(){});

    driver.exec({ func: function(){}, args: [] });
    driver.exec({ func: function(){}, args: [] }, function(){});
});

harness.events.once('ready', function(driver){
    driver.events.once('console.log', function(text){
        console.log(text);
    });

    driver.events.once('console.warn', function(text){
        console.log(text);
    });

    driver.events.once('console.error', function(text){
        console.log(text);
    });

    driver.events.once('window.onerror', function(text){
        console.log(text);
    });
});
