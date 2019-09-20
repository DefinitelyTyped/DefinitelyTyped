/// <reference types="cordova" />

window.plugins.socialsharing.iPadPopupCoordinates = function () {
	return "100,100,200,300";
};

window.plugins.socialsharing.setIPadPopupCoordinates("100,100,200,300");

window.plugins.socialsharing.available(function (isAvailable) {
	if (isAvailable) {
		// now use any of the share() functions
	}
});

window.plugins.socialsharing.share("Message only");
window.plugins.socialsharing.share("Message and subject", "The subject");
window.plugins.socialsharing.share(null, null, null, "http://www.x-services.nl");
window.plugins.socialsharing.share("Message and link", null, null, "http://www.x-services.nl");
window.plugins.socialsharing.share(null, null, "https://www.google.nl/images/srpr/logo4w.png", null);
window.plugins.socialsharing.share(null, "Android filename", "data:image/png;base64,R0lGODlhDAAMALMBAP8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUKAAEALAAAAAAMAAwAQAQZMMhJK7iY4p3nlZ8XgmNlnibXdVqolmhcRQA7", null);
window.plugins.socialsharing.share("Message and image", null, "https://www.google.nl/images/srpr/logo4w.png", null);
window.plugins.socialsharing.share("Message, image and link", null, "https://www.google.nl/images/srpr/logo4w.png", "http://www.x-services.nl");
window.plugins.socialsharing.share("Message, subject, image and link", "The subject", "https://www.google.nl/images/srpr/logo4w.png", "http://www.x-services.nl");

window.plugins.socialsharing.shareViaTwitter("Message via Twitter");
window.plugins.socialsharing.shareViaTwitter("Message and link via Twitter", null, "http://www.x-services.nl");

window.plugins.socialsharing.shareViaFacebook("Message via Facebook", null, null, function () { console.log("share ok") }, function (errormsg) { alert(errormsg) });
window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint("Message via Facebook", null, null, "Paste it dude!", function () { console.log("share ok") }, function (errormsg) { alert(errormsg) });

window.plugins.socialsharing.shareViaInstagram("Message via Instagram", "https://www.google.nl/images/srpr/logo4w.png", function () { console.log("share ok") }, function (errormsg) { alert(errormsg) });

window.plugins.socialsharing.shareViaWhatsApp("Message via WhatsApp", null, null, function () { console.log("share ok") }, function (errormsg) { alert(errormsg) });

window.plugins.socialsharing.shareViaSMS("My cool message", null, function (msg) { console.log("ok: " + msg) }, function (msg) { alert("error: " + msg) });
window.plugins.socialsharing.shareViaSMS("My cool message", "0612345678,0687654321", function (msg) { console.log("ok: " + msg) }, function (msg) { alert("error: " + msg) });
window.plugins.socialsharing.shareViaSMS({ "message": "My cool message", "subject": "The subject", "image": "https://www.google.nl/images/srpr/logo4w.png" }, "0612345678,0687654321", function (msg) { console.log("ok: " + msg) }, function (msg) { alert("error: " + msg) });

window.plugins.socialsharing.shareViaEmail("Message", "Subject", ["to@person1.com", "to@person2.com"], ["cc@person1.com"], null, ["https://www.google.nl/images/srpr/logo4w.png", "www/localimage.png"], function () { console.log("share ok") }, function (errormsg) { alert(errormsg) });

window.plugins.socialsharing.shareVia("com.apple.social.facebook", "Message via FB", null, null, null, function () { console.log("share ok") }, function (msg) { alert("error: " + msg) });
window.plugins.socialsharing.shareVia("facebook", "Message via FB", null, null, null, function () { console.log("share ok") }, function (msg) { alert("error: " + msg) });
window.plugins.socialsharing.shareVia("com.apple.social.twitter", "Message via Twitter", null, null, "http://www.x-services.nl", function () { console.log("share ok") }, function (msg) { alert("error: " + msg) });
window.plugins.socialsharing.shareVia("bogus_app", "Message via Bogus App", null, null, null, function () { console.log("share ok") }, function (msg) { alert("error: " + msg) });

window.plugins.socialsharing.canShareVia("com.tencent.mm/com.tencent.mm.ui.tools.ShareToTimeLineUI", "msg", null, "img", null, function (e) { alert(e) }, function (e) { alert(e) });
window.plugins.socialsharing.canShareVia("com.apple.social.facebook", "msg", null, null, null, function (e) { alert(e) }, function (e) { alert(e) });
window.plugins.socialsharing.canShareVia("whatsapp", "msg", null, null, null, function (e) { alert(e) }, function (e) { alert(e) });
window.plugins.socialsharing.canShareVia("sms", "msg", null, null, null, function (e) { alert(e) }, function (e) { alert(e) });
window.plugins.socialsharing.canShareVia("instagram", "msg", null, null, null, function (e) { alert(e) }, function (e) { alert(e) });
window.plugins.socialsharing.canShareViaEmail(function (e) { alert(e) }, function (e) { alert(e) });

window.plugins.socialsharing.share(null, null, "www/image.gif", null);
window.plugins.socialsharing.share(null, null, "/Users/username/Library/Application Support/iPhone/6.1/Applications/25A1E7CF-079F-438D-823B-55C6F8CD2DC0/Documents/.nl.x-services.appname/pics/img.jpg");
window.plugins.socialsharing.share(null, null, "file:///Users/username/Library/Application Support/iPhone/6.1/Applications/25A1E7CF-079F-438D-823B-55C6F8CD2DC0/Documents/.nl.x-services.appname/pics/img.jpg");
window.plugins.socialsharing.share(null, null, "file:///storage/emulated/0/nl.xservices.testapp/5359/Photos/16832/Thumb.jpg");
window.plugins.socialsharing.share(null, null, "http://domain.com/image.jpg");

window.plugins.socialsharing.shareViaFacebook("Optional message, may be ignored by Facebook app", ["https://www.google.nl/images/srpr/logo4w.png", "www/image.gif"], null);
window.plugins.socialsharing.share("Optional message", "Optional title", ["www/manual.pdf", "https://www.google.nl/images/srpr/logo4w.png"], "http://www.myurl.com");

window.plugins.socialsharing.saveToPhotoAlbum(["https://www.google.nl/images/srpr/logo4w.png", "www/image.gif"], function () { console.log("share ok") }, function (msg) { alert("error: " + msg) });
window.plugins.socialsharing.shareWithOptions({"message":"sharethis","subject":"thesubject","files":["",""],"url":"https: //www.website.com/foo/#bar?a=b","chooserTitle":"Pickanapp"}, function () { console.log("share ok") }, function (msg) { alert("error: " + msg) });
