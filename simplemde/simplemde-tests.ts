function testSimplemde() {

    function customMarkdownParser(markdown: string) {
        return "<div>" + markdown + "</div>";
    }

    function testInit() {
        var simplemde1 = new SimpleMDE();
        var simplemde2 = new SimpleMDE({ element: document.getElementById("MyID") });
    }

    function testAccessValue() {
        var simplemde = new SimpleMDE();
        var value: string = simplemde.value();
        simplemde.value("This text will appear in the editor");
    }

    function testConfiguration() {
        var simplemde: SimpleMDE;

        // Most options demonstrate the non-default behavior
        simplemde = new SimpleMDE({
            autofocus: true,
            autosave: {
                enabled: true,
                uniqueId: "MyUniqueID",
                delay: 1000
            },
            blockStyles: {
                bold: "__",
                italic: "_"
            },
            element: document.getElementById("MyID"),
            forceSync: true,
            hideIcons: ["guide", "heading"],
            indentWithTabs: false,
            initialValue: "Hello world!",
            insertTexts: {
                horizontalRule: ["", "\n\n-----\n\n"],
                image: ["![](http://", ")"],
                link: ["[", "](http://)"],
                table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"]
            },
            lineWrapping: false,
            parsingConfig: {
                allowAtxHeaderWithoutSpace: true,
                strikethrough: false,
                underscoresBreakWords: true
            },
            placeholder: "Type here...",
            previewRender: function (plainText) {
                return customMarkdownParser(plainText); // Returns HTML from a custom parser
            },
            promptURLs: true,
            renderingConfig: {
                singleLineBreaks: false,
                codeSyntaxHighlighting: true
            },
            shortcuts: {
                drawTable: "Cmd-Alt-T"
            },
            showIcons: ["code", "table"],
            spellChecker: false,
            status: false,
            styleSelectedText: false,
            tabSize: 4,
            toolbar: false,
            toolbarTips: false
        });

        simplemde = new SimpleMDE({
            previewRender: function (plainText, preview) { // Async method
                setTimeout(function () {
                    preview.innerHTML = customMarkdownParser(plainText);
                }, 250);

                return "Loading...";
            },
            status: ["autosave", "lines", "words", "cursor"] // Optional usage
        });

        simplemde = new SimpleMDE({
            status: ["autosave", "lines", "words", "cursor", {
                className: "keystrokes",
                defaultValue: function (el) {
                    this.keystrokes = 0;
                    el.innerHTML = "0 Keystrokes";
                },
                onUpdate: function (el) {
                    el.innerHTML = ++this.keystrokes + " Keystrokes";
                }
            }] // Another optional usage, with a custom status bar item that counts keystrokes
        });
    }

    function testToolbarCustomize() {
        var simplemde: SimpleMDE;

        // Customize only the order of existing buttons
        simplemde = new SimpleMDE({
            toolbar: ["bold", "italic", "heading", "|", "quote"]
        });

        // Customize all information and/or add your own icons
        simplemde = new SimpleMDE({
            toolbar: [{
                name: "bold",
                action: SimpleMDE.toggleBold,
                className: "fa fa-bold",
                title: "Bold"
            },
                {
                    name: "custom",
                    action: function customFunction(editor) {
                        // Add your own code
                    },
                    className: "fa fa-star",
                    title: "Custom Button"
                },
                "|" // Separator
            ]
        });
    }

    function testKeyboardShortcuts() {
        var simplemde = new SimpleMDE({
            shortcuts: {
                "toggleOrderedList": "Ctrl-Alt-K", // alter the shortcut for toggleOrderedList
                "toggleCodeBlock": null, // unbind Ctrl-Alt-C
                "drawTable": "Cmd-Alt-T" // bind Cmd-Alt-T to drawTable action, which doesn't come with a default shortcut
            }
        });
    }

    function testEventHandling() {
        var simplemde = new SimpleMDE();
        simplemde.codemirror.on("change", function () {
            console.log(simplemde.value());
        });
    }

    function testRemoveFromTextArea() {
        var simplemde = new SimpleMDE();
        simplemde.toTextArea();
        simplemde = null;
    }

    function testOtherMethods() {
        var simplemde = new SimpleMDE();
        var booleanVal: boolean;
        booleanVal = simplemde.isPreviewActive(); // returns boolean
        booleanVal = simplemde.isSideBySideActive(); // returns boolean
        booleanVal = simplemde.isFullscreenActive(); // returns boolean
        simplemde.clearAutosavedValue(); // no returned value
    }
}
