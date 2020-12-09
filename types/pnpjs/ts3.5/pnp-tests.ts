import { sp } from "@pnp/sp";

sp.setup({
    sp: {
        headers: {
            Accept: "application/json;odata=verbose",
        },
        baseUrl: "https://demo"
    },
});

const w = sp.web.get();