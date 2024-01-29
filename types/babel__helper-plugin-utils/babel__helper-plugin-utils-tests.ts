import { declare } from "@babel/helper-plugin-utils";

export default declare((api, options, dirname) => {
    api.assertVersion(7);
    options; // $ExpectType Record<string, any>
    dirname; // $ExpectType string

    return {
        name: "test-helper-plugin-utils",
        visitor: {
            Program: {
                enter(path, state) {
                    this; // $ExpectType PluginPass
                    path; // $ExpectType NodePath<Program>
                    state; // $ExpectType PluginPass
                },
                exit(path, state) {
                    this; // $ExpectType PluginPass
                    path; // $ExpectType NodePath<Program>
                    state; // $ExpectType PluginPass
                },
            },

            enter(path, state) {
                this; // $ExpectType PluginPass
                path; // $ExpectType NodePath<Node>
                state; // $ExpectType PluginPass
            },
            exit(path, state) {
                this; // $ExpectType PluginPass
                path; // $ExpectType NodePath<Node>
                state; // $ExpectType PluginPass
            },
        },
    };
});
