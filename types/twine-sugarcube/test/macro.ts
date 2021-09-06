Macro.add('if', {
    skipArgs: true,
    tags: ['elseif', 'else'],
    handler() {
        try {
            for (let i = 0, len = this.payload.length; i < len; ++i) {
                if (
                    this.payload[i].name === 'else' ||
                    !!Scripting.evalJavaScript(this.payload[i].args.full)
                ) {
                    jQuery(this.output).wiki(this.payload[i].contents);
                    break;
                }
            }
        } catch (ex) {
            return this.error('bad conditional expression: ' + ex.message);
        }
    }
});

Macro.add('dummy', {
    tags: null,
    handler() { }
});

Macro.delete("if"); // $ExpectType void
Macro.delete(["if", "iif"]); // $ExpectType void

Macro.get("if");  // $ExpectType MacroDefinition

let b: boolean = Macro.has("if");
Macro.tags.get("str");  // $ExpectType string[]
b = Macro.tags.has("str");

export {};
