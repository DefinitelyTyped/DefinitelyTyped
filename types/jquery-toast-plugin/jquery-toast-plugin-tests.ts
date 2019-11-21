$.toast({ text: "test" });

$.toast({ text: "test", heading: "Test Heading" });

$.toast({ text: "test", showHideTransition: "fade" });
$.toast({ text: "test", showHideTransition: "slide" });
$.toast({ text: "test", showHideTransition: "plain" });

$.toast({ text: "test", allowToastClose: false });
$.toast({ text: "test", allowToastClose: true });

$.toast({ text: "test", hideAfter: 5});
$.toast({ text: "test", hideAfter: false});

$.toast({ text: "test", loader: true });
$.toast({ text: "test", loader: false });

$.toast({ text: "test", loaderBg: "#9EC600" });

$.toast({ text: "test", stack: 5});
$.toast({ text: "test", stack: false});

$.toast({ text: "test", position: "bottom-left" });
$.toast({ text: "test", position: "bottom-right" });
$.toast({ text: "test", position: "bottom-center" });
$.toast({ text: "test", position: "top-right" });
$.toast({ text: "test", position: "top-left" });
$.toast({ text: "test", position: "top-center" });
$.toast({ text: "test", position: "mid-center" });
$.toast({ text: "test", position: { left : "auto", right : 20, top : 20, bottom : "auto" } });
$.toast({ text: "test", position: { left : 20, right : "auto", top : "auto", bottom : 20 } });

$.toast({ text: "test", bgColor: "#9EC600" });

$.toast({ text: "test", textColor: "#9EC600" });

$.toast({ text: "test", textAlign: "left" });
$.toast({ text: "test", textAlign: "right" });
$.toast({ text: "test", textAlign: "center" });

$.toast({ text: "test", icon: "info" });
$.toast({ text: "test", icon: "warning" });
$.toast({ text: "test", icon: "error" });
$.toast({ text: "test", icon: "success" });

$.toast({
    text: 'Triggers the events',
    beforeShow: () => {},
    afterShown: () => {},
    beforeHide: () => {},
    afterHidden: () => {}
});
