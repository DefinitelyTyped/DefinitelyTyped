import format = require("string-template");
import compile = require("string-template/compile");

// Format tests
{
    let greeting: string;

    // Format using an object hash with keys matching [0-9a-zA-Z]+
    greeting = format("Hello {name}, you have {count} unread messages", { name: "Robert", count: 12 })
    // greeting -> "Hello Robert, you have 12 unread messages"

    // Format using a number indexed array
    greeting = format("Hello {0}, you have {1} unread messages", ["Robert", 12])
    // greeting -> "Hello Robert, you have 12 unread messages"

    // Format using optional arguments
    greeting = format("Hello {0}, you have {1} unread messages", "Robert", 12)
    // greeting -> "Hello Robert, you have 12 unread messages"

    // Escape {} pairs by using double {{}}
    let text: string = format("{{0}}")
    // text -> "{0}"
}


// Compile tests
{
    {
        let greetingTemplate = compile("Hello {0}, you have {1} unread messages", true)
        // -> greetingTemplate generated using new Function
        let greeting = greetingTemplate("Robert", 12)
        // -> "Hello Robert, you have 12 unread messages"
    }

    {
        let greetingTemplate = compile("Hello {0}, you have {1} unread messages", true)
        // -> greetingTemplate generated using new Function

        let greeting = greetingTemplate(["Robert", 12])
        // -> "Hello Robert, you have 12 unread messages"
    }

    {
        let template = compile("{likes} people have liked this")
        let result = template({ likes: 123 })
    }
}
