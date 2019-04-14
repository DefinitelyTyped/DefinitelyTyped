import BootstrapMenu = require("bootstrap-menu");

BootstrapMenu.BootstrapMenu("#main", {
    actions: [
        {
            name: "Main menu action",
            onClick: (element: any) => {
                console.log(element);
            }
        }
    ]
});
