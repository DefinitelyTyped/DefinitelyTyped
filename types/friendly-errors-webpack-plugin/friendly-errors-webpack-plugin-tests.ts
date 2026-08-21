import FriendlyErrorsPlugin from "friendly-errors-webpack-plugin";
import webpack from "webpack";

webpack({
    plugins: [
        new FriendlyErrorsPlugin(),
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: ["You application is running here http://localhost:3000"],
                notes: ["Some additional notes to be displayed upon successful compilation"],
            },

            onErrors: function(severity, errors) {
                // $ExpectType Severity
                severity;
                // $ExpectType WebpackError[]
                errors;
            },

            clearConsole: true,

            additionalFormatters: [
                (errors, type) => {
                    // $ExpectType WebpackError[]
                    errors;
                    // $ExpectType Severity
                    type;

                    return [""];
                },
            ],

            additionalTransformers: [
                (error) => {
                    // $ExpectType any
                    error;

                    return error;
                },
            ],
        }),
    ],
});
