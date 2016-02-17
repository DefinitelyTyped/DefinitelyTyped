/// <reference path="jquery.notifyBar.d.ts" />

$(function() {
    $.notifyBar({
        html: "Autostart"
    });

    $("#common").click(function () {
        $.notifyBar();
    });
    $("#error").click(function () {
        $.notifyBar({ cssClass: "error", html: "Error occurred!" });
    });
    $("#success").click(function () {
        $.notifyBar({ cssClass: "success", html: "Your data has been changed!" });
    });
    $("#warning").click(function() {
        $.notifyBar({ cssClass: "warning", html: "Settings aren't changed!" });
    })
    $("#custom").click(function () {
        $.notifyBar({ cssClass: "custom", html: "Your data has been changed!" });
    });
    $("#close").click(function () {
        $.notifyBar({ html: "Click 'close' to hide notify bar", close: true, closeOnClick: false });
    });
    $("#position").click(function () {
        $.notifyBar({ html: "At bottom", position: "bottom" });
    });

    $("#events").click(function () {
        $.notifyBar({
            html: "Test events",
            onBeforeShow: function () {
                $("#onBeforeShow").html("onBeforeShow - ok");
            },
            onShow: function () {
                $("#onShow").html("onShow - ok");
            },
            onBeforeHide: function () {
                $("#onBeforeHide").html("onBeforeHide - ok");
            },
            onHide: function () {
                $("#onHide").html("onHide - ok");
            }
        });
    });

    $("#delay").click(function () {
        $.notifyBar({ html: "delay 1000000", delay: 1000000 });
    });
    $("#speed-string").click(function () {
        $.notifyBar({ html: "speed normal", animationSpeed: "normal" });
    });
    $("#speed-number").click(function () {
        $.notifyBar({ html: "speed normal", animationSpeed: 500 });
    });
    $("#jqObject").click(function () {
        $.notifyBar({ html: "set jqObject", jqObject: $("#jqObject") });
    });
    $("#closeText").click(function () {
        $.notifyBar({ html: "set close text", closeText: "close" });
    });
    $("#closeOnOver").click(function () {
        $.notifyBar({ html: "enable close on over", close: false, closeOnClick: false, closeOnOver: true });
    });
});
