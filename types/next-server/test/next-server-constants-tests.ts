import {
    PHASE_DEVELOPMENT_SERVER,
    IS_BUNDLED_PAGE_REGEX
} from "next-server/constants";

const isIndexPage = IS_BUNDLED_PAGE_REGEX.test(
    "static/CjW0mFnyG80HdP4eSUiy7/pages/index.js"
);

// Example taken from: https://github.com/cyrilwanner/next-compose-plugins/blob/a25b313899638912cc9defc0be072f4fe4a1e855/README.md
const config = (nextConfig: any = {}) => {
    return {
        ...nextConfig,

        // define in which phases this plugin should get applied.
        // you can also use multiple phases or negate them.
        // however, users can still overwrite them in their configuration if they really want to.
        phases: [PHASE_DEVELOPMENT_SERVER],

        webpack(config: any, options: any) {
            // do something here which only gets applied during development server phase

            if (typeof nextConfig.webpack === "function") {
                return nextConfig.webpack(config, options);
            }

            return config;
        }
    };
};
