2018-10-07 Sun  <pragdave@gmail.com>

  * The type `Rule` was being used for both parsing and rendering rules,
    but it was really just the rendering side. Rather than rename it and
    break things, I added a new type for ParsingRule and updated the
    `Rulers` function signatures.

  * The `content` field in `ContentToken` was typed as a `string`.
    However, its type is really `any`, as it is used simply to transport
    values between the parser and the renderer for any given rule.
