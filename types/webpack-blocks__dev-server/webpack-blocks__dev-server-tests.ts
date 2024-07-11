import devServer from "@webpack-blocks/dev-server";
import { createConfig, env } from "@webpack-blocks/webpack";

createConfig([
    env("development", [
        devServer({
            overlay: true,
            proxy: {
                "/api": { target: "http://localhost:3000" },
            },
        }),
    ]),
]);
