testRule({
    plugins: ["."],
    ruleName: "test-rule",
    config: [true, { type: "kebab" }],
    fix: true,
    accept: [
        {
            code: ".class {}",
            description: "simple class selector",
        },
        {
            code: ".my-class {}",
            description: "kebab class selector",
        },
    ],
    reject: [
        {
            code: ".myClass {}",
            fixed: ".my-class {}",
            description: "camel case class selector",
            message: "expected class name to be kebab case",
            line: 1,
            column: 1,
        },
        {
            code: ".MyClass,\n.MyOtherClass {}",
            fixed: ".my-class,\n.my-other-class {}",
            description: "two pascal class selectors in a selector list",
            warnings: [
                {
                    message: "expected 'MyClass' to be kebab case: 'my-class'",
                    line: 1,
                    column: 1,
                },
                {
                    message: "expected 'MyOtherClass' to be kebab case: 'my-other-class'",
                    line: 2,
                    column: 1,
                },
            ],
        },
    ],
});
