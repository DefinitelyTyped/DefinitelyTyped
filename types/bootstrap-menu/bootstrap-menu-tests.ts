import BootstrapMenu = require("bootstrap-menu");

const menu = new BootstrapMenu("#main", {
    actions: [
        {
            name: "Main menu action",
            onClick: (element: any) => {
                console.log(element);
            }
        }
    ]
});
