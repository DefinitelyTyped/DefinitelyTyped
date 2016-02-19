/// <reference path="humane.d.ts" />

humane.log("Welcome Back");
humane.log(["List","of","Items"]);
humane.log("Callback when finished", function(){ document.body.style.backgroundColor="#a66000" });
humane.log("Options can be passed", { timeout: 4000, clickToClose: true, addnCls: 'humane-error' });

humane.timeout = 5000;
humane.waitForMove = true;
humane.clickToClose = true;
humane.addnCls = 'humane-info';

humane.info = humane.spawn({ addnCls: 'humane-libnotify-info', timeout: 1000 });
humane.info('Info Themed Notifier');
humane.error = humane.spawn({ addnCls: 'humane-libnotify-error', timeout: 1000 });
humane.error('Error Themed Notifier');
humane.remove(function(){ alert('removed') });

var bigbox = humane.create({baseCls: 'humane-bigbox', timeout: 1000});
bigbox.error = bigbox.spawn({addnCls: 'humane-bigbox-error'});
bigbox.log('Oh!').error('No!');

var libnotify = humane.create({baseCls: 'humane-libnotify', addnCls: 'humane-libnotify-info'});
libnotify.log('Notified');

var jacked = humane.create({baseCls: 'humane-jackedup', addnCls: 'humane-jackedup-success'});
jacked.log("What's up here!");