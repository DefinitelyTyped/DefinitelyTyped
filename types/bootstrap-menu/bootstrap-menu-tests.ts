import BootstrapMenu from "bootstrap-menu";

BootstrapMenu("#main", {
    actions: [
        {
            name: "Main menu action",
            onClick: (element: any) => {
                console.log(element);
            }
        }
    ]
});
