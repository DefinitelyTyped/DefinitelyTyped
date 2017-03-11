// --------------------------------------------------------
// ---------------- TEST DEFAULT OPTIONS ------------------
// --------------------------------------------------------

var menu: JQuery = $("#my-menu");
menu.mmenu(
    // options
    {
        extensions: [],
        navbar:  {
            add: true,
            title: "Menu",
            titleLink: "parent"
        },
        onClick: {
            close: true,
            preventDefault: false,
            setSelected: false
        },
        slidingSubmenus: true
    },
    // configurations
    {
        classNames: {
            divider: "Divider",
            inset: "Inset",
            panel: "Panel",
            selected: "Selected",
            vertical: "vertical"
        },
        clone: false,
        openingInterval: 25,
        panelNodetype: "div, ul, ol",
        transitionDuration: 400
    }
);


// --------------------------------------------------------
// ------------------- TEST MMENU API ---------------------
// --------------------------------------------------------

var api = menu.data("mmenu");
var myPanel: JQuery = $("#panel");
var listItem: JQuery = $(".list-item");

api.closeAllPanels();
api.bind("closeAllPanels", function() {
    console.log("close all opened panels and go back to the first panel.");
});

api.closePanel(myPanel);
api.bind("closePanel", function(panel) {
    console.log("close this ", panel);
});

api.getInstance();
api.bind("getInstance", function() {
    console.log("get the class instance for the menu.");
});

api.init(myPanel);
api.bind("init", function(panel) {
    console.log("method to (re)initialize a newly added ", panel);
});

api.openPanel(myPanel);
api.bind("openPanel", function(panel) {
    console.log("This panel is now opened ",  panel);
});

api.setSelected(listItem, true);
api.bind("setSelected", function(listItem, selected) {
    console.log("set or unset a list item as selected ", listItem);
    console.log("has selected ", selected);
});

api.update();
api.bind("update", function() {
    console.log("update the appearance for the menu");
});
