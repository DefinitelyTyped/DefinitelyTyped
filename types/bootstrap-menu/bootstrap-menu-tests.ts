import BootstrapMenu = require("bootstrap-menu")

BootstrapMenu("#main", {
    actions: [
        {
            name: "Main menu action",
            onClick: (element) => {
                console.log(element)
            }
        }
    ]
})