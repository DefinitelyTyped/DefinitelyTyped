tippy.setDefaultProps({
    allowHTML: true,
    placement: "right",
    showOnCreate: true,
    trigger: "manual",
    hideOnClick: true,
});

tippy("#someHtmlId", {
    content: "Hello World!",
    allowHTML: false,
    arrow: false,
    maxWidth: 100,
    onCreate: instance => {
        instance.hide();
    },
});

tippy.hideAll({});

const bubble = tippy(document.body, {
    content: "Hello World!",
    delay: 1000,
    followCursor: true,
    hideOnClick: "toggle",
    placement: "top-end",
});

bubble.destroy();

tippy(document.querySelectorAll("div"), {
    content: "Hello World!",
});

const elements: readonly Element[] = [];
tippy(elements, {
    content: "Hello World!",
    interactive: true,
    aria: {
        content: null,
        expanded: "auto",
    },
    triggerTarget: document.body,
    sticky: "reference",
    zIndex: 10,
});
