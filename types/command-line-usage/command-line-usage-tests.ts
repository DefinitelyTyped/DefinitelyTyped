import commandLineUsage = require('command-line-usage');

export const commands = commandLineUsage([
    {
        header: "AutoMagical-WebServer (amwebs)",
        content: 'A skeleton Node/Express web server that automagically accepts web-requests on URIs dynamically generated from "plug-and-play" controller modules. A great starting point for RESTful newbs and casual DIY-ers. Inspired by Dan Wahlin\'s Pluralsight course: Integrating Angular with Node.js RESTful Services.'
    },
    {
        header: "Synopsis",
        content: "amwebs <command> <options>"
    },
    {
        header: "Command List",
        content: [
            { name: "start", summary: "Starts the webserver." },
            { name: "generate", summary: "Generate sample and skeleton controllers." },
            { name: "test", summary: "Verify your installed version of amwebs." }
        ]
    }
]);

export const options: any = {
    start: clUsage([
        {
            header: "amwebs - start",
            content: "Starts the webserver."
        },
        {
            header: "Synopsis",
            content: [
                "$ amwebs start [{bold --port} #] [{bold --controller-pattern} regex] [{bold --log} file] [{bold controllers} file-list]"
            ]
        }
    ])
}
