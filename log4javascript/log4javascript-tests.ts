/// <reference path="log4javascript.d.ts" />

function aSimpleLoggingMessageString() {
	var log = log4javascript.getDefaultLogger();
	log.info("Hello World");
}

function loggingAnErrorWithAMessage() {
	var log = log4javascript.getDefaultLogger();
	try {
		throw new Error("Faking something going wrong!");
	} catch (e) {
		log.error("An error occurred", e);
	}
}

function loggingMultipleMessagesWithOneLoggingCall() {
	var log = log4javascript.getDefaultLogger();
	var a = "Hello";
	var b = 3;
	log.debug(a, b);
}

function loggingAnObject() {
	var log = log4javascript.getDefaultLogger();
	var obj = { name: "Octopus", tentacles: 8 };
	log.info(obj);
}

function tweakingTheDefaultLogger() {
	var log = log4javascript.getLogger();
	var popUpAppender = new log4javascript.PopUpAppender();
	popUpAppender.setFocusPopUp(true);
	popUpAppender.setNewestMessageAtTop(true);
	log.addAppender(popUpAppender);
	log.debug("Hello world!");
}

function sendingLogMessagesToTheServer() {
	var log = log4javascript.getLogger("mylogger");
	var url = "???";
	var ajaxAppender = new log4javascript.AjaxAppender(url);
	log.addAppender(ajaxAppender);
}

function changingTheFormatOfLogMessages() {
	var popUpAppender = new log4javascript.PopUpAppender();
	var layout = new log4javascript.PatternLayout("[%-5p] %m");
	popUpAppender.setLayout(layout);
}