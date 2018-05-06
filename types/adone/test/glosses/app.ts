namespace applicationTests {
    const {
        CliApplication,
        DApplication,
        DSubsystem,
        DCliCommand,
        DMainCliCommand,
        Subsystem,
        runCli,
        Application
    } = adone.app;

    namespace DApplicationTests {
        {
            @DApplication()
            class App extends CliApplication {}
        }
        {
            @DApplication({})
            class App extends CliApplication {}
        }
        {
            @DApplication({
                name: "hello"
            })
            class App extends CliApplication {}
        }
        {
            @DApplication({
                description: "hello"
            })
            class App extends CliApplication {}
        }
        {
            @DApplication({
                subsystems: [
                    {
                        name: "hello",
                        subsystem: "a.js"
                    }
                ]
            })
            class App extends CliApplication {}
        }
        {
            @DApplication({
                subsystems: [
                    {
                        name: "hello",
                        subsystem: "a.js",
                        transpile: true
                    }
                ]
            })
            class App extends CliApplication {}
        }
        {
            @DApplication({
                commandsGroups: [{
                    name: "a",
                    description: "b"
                }]
            })
            class App extends CliApplication {}
        }
    }

    namespace DSubsystemTests {
        {
            @DSubsystem()
            class App extends Subsystem {}
        }
        {
            @DSubsystem({})
            class App extends Subsystem {}
        }
        {
            @DSubsystem({
                name: "hello"
            })
            class App extends Subsystem {}
        }
        {
            @DSubsystem({
                description: "hello"
            })
            class App extends Subsystem {}
        }
        {
            @DSubsystem({
                subsystems: [
                    {
                        name: "hello",
                        subsystem: "a.js"
                    }
                ]
            })
            class App extends Subsystem {}
        }
        {
            @DSubsystem({
                subsystems: [
                    {
                        name: "hello",
                        subsystem: "a.js",
                        transpile: true
                    }
                ]
            })
            class App extends Subsystem {}
        }
        {
            @DSubsystem({
                commandsGroups: [{
                    name: "a",
                    description: "b"
                }]
            })
            class App extends Subsystem {}
        }
    }

    namespace DMainCliCommandTests {
        {
            class App extends CliApplication {
                @DMainCliCommand()
                main() {}
            }
        }
        {
            class App extends CliApplication {
                @DMainCliCommand({})
                main() {}
            }
        }
        {
            class App extends CliApplication {
                @DMainCliCommand({})
                main() {}
            }
        }
        {
            class App extends CliApplication {
                @DMainCliCommand({
                    blindMode: true
                })
                main() {}
            }
        }
        {
            class App extends CliApplication {
                @DMainCliCommand({
                    description: "a"
                })
                main() {}
            }
        }
        {
            class App extends CliApplication {
                @DMainCliCommand({
                    match: (arg) => arg.startsWith("hello")
                })
                main() {}
            }
        }
        {
            class App extends CliApplication {
                @DMainCliCommand({
                    optionsGroups: [{
                        description: "a",
                        name: "a"
                    }]
                })
                main() {}
            }
        }

        namespace argumentsTests {
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: ["hello"]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: ["hello"]
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            action: "append"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            action: "count"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            action: "set"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            action: "store_const"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            action: "store_false"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            action: "store_true"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            action: "store"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            appendChoicesHelpMessage: true
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            appendDefaultMessage: false
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            default: null
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            description: "hello"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            enabled: false
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            help: "asd"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            holder: "a"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            holder: ["a"]
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            nargs: 1
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            nargs: "*"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            nargs: "+"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            nargs: "?"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            required: false
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            type: String
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            type: (x: string, i: number) => {
                                return true;
                            }
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            type: [(x: string, i: number) => {
                                return true;
                            }]
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            type: [/^abc$/]
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        arguments: [{
                            name: "hello",
                            verify: (args, opts) => {
                                return true;
                            }
                        }]
                    })
                    main() {}
                }
            }
        }

        namespace optionsTests {
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: ["--hello"]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: ["hello"]
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            action: "append"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            action: "count"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            action: "set"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            action: "store_const"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            action: "store_false"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            action: "store_true"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            action: "store"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            appendChoicesHelpMessage: true
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            appendDefaultMessage: false
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            default: null
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            description: "hello"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            enabled: false
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            help: "asd"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            holder: "a"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            holder: ["a"]
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            nargs: 1
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            nargs: "*"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            nargs: "+"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            nargs: "?"
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            required: false
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            type: String
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            type: (x: string, i: number) => {
                                return true;
                            }
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            type: [(x: string, i: number) => {
                                return true;
                            }]
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            type: [/^abc$/]
                        }]
                    })
                    main() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            verify: (args, opts) => {
                                return true;
                            }
                        }]
                    })
                    main() {}
                }
            }
        }
    }

    namespace DCliCommandTests {
        {
            class App extends CliApplication {
                @DCliCommand()
                cmd() {}
            }
        }
        {
            class App extends CliApplication {
                @DCliCommand({})
                cmd() {}
            }
        }
        {
            class App extends CliApplication {
                @DCliCommand({})
                cmd() {}
            }
        }
        {
            class App extends CliApplication {
                @DCliCommand({
                    blindMode: true
                })
                cmd() {}
            }
        }
        {
            class App extends CliApplication {
                @DCliCommand({
                    description: "a"
                })
                cmd() {}
            }
        }
        {
            class App extends CliApplication {
                @DCliCommand({
                    match: (arg) => arg.startsWith("hello")
                })
                cmd() {}
            }
        }
        {
            class App extends CliApplication {
                @DCliCommand({
                    optionsGroups: [{
                        description: "a",
                        name: "a"
                    }]
                })
                cmd() {}
            }
        }
        {
            class App extends CliApplication {
                @DCliCommand({
                    name: "cmdd"
                })
                cmd() {}
            }
        }
        {
            class App extends CliApplication {
                @DCliCommand({
                    group: "asdasd"
                })
                cmd() {}
            }
        }

        namespace argumentsTests {
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: ["hello"]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: ["hello"]
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            action: "append"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            action: "count"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            action: "set"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            action: "store_const"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            action: "store_false"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            action: "store_true"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            action: "store"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            appendChoicesHelpMessage: true
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            appendDefaultMessage: false
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            default: null
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            description: "hello"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            enabled: false
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            help: "asd"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            holder: "a"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            holder: ["a"]
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            nargs: 1
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            nargs: "*"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            nargs: "+"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            nargs: "?"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            required: false
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            type: String
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            type: (x: string, i: number) => {
                                return true;
                            }
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            type: [(x: string, i: number) => {
                                return true;
                            }]
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            type: [/^abc$/]
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        arguments: [{
                            name: "hello",
                            verify: (args, opts) => {
                                return true;
                            }
                        }]
                    })
                    cmd() {}
                }
            }
        }

        namespace optionsTests {
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: ["--hello"]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: ["hello"]
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            action: "append"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            action: "count"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            action: "set"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            action: "store_const"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            action: "store_false"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            action: "store_true"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            action: "store"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            appendChoicesHelpMessage: true
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            appendDefaultMessage: false
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            default: null
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            description: "hello"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            enabled: false
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            help: "asd"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            holder: "a"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            holder: ["a"]
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            nargs: 1
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            nargs: "*"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            nargs: "+"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            nargs: "?"
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            required: false
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            type: String
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            type: (x: string, i: number) => {
                                return true;
                            }
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            type: [(x: string, i: number) => {
                                return true;
                            }]
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DCliCommand({
                        options: [{
                            name: "--hello",
                            type: [/^abc$/]
                        }]
                    })
                    cmd() {}
                }
            }
            {
                class App extends CliApplication {
                    @DMainCliCommand({
                        options: [{
                            name: "--hello",
                            verify: (args, opts) => {
                                return true;
                            }
                        }]
                    })
                    cmd() {}
                }
            }
        }
    }

    namespace subsystemTests {
        new Subsystem().name;
        new Subsystem().root;
        new Subsystem().setRoot(new Subsystem());
        new Subsystem().parent;
        new Subsystem().state + 2;
        new Subsystem().isOwned === true;
        new Subsystem().setState(1);
        new Subsystem().waitForState(2).then(() => {});
        new Subsystem().waitForState(2, 100).then(() => {});
        new Subsystem().configure();
        new Subsystem().initialize();
        new Subsystem().uninitialize();
        new Subsystem().configureSubsystems().then(() => {});
        new Subsystem().uninitializeSubsystems().then(() => {});
        new Subsystem().reinitializeSubsystems().then(() => {});
        new Subsystem().configureSubsystem("a").then(() => {});
        new Subsystem().loadSubsystem("a").then(() => {});
        new Subsystem().loadSubsystem(new Subsystem()).then(() => {});
        new Subsystem().loadSubsystem(new Subsystem(), {}).then(() => {});
        new Subsystem().loadSubsystem(new Subsystem(), { description: "a" }).then(() => {});
        new Subsystem().loadSubsystem(new Subsystem(), { group: "a" }).then(() => {});
        new Subsystem().loadSubsystem(new Subsystem(), { name: "a" }).then(() => {});
        new Subsystem().loadSubsystem(new Subsystem(), { transpile: false }).then(() => {});
        new Subsystem().unloadSubsystem("a").then(() => {});
        new Subsystem().initializeSubsystem("a").then(() => {});
        new Subsystem().uninitializeSubsystem("a").then(() => {});
        new Subsystem().getSubsystem("a").waitForState(2).then(() => {});
        new Subsystem().hasSubsystem("a") === true;
        new Subsystem().hasSubsystem("a") === true;
        new Subsystem().hasSubsystems() === true;
        new Subsystem().addSubsystem({ subsystem: "ppp" });
        new Subsystem().addSubsystem({ subsystem: "ppp", bind: true });
        new Subsystem().addSubsystem({ subsystem: "ppp", bind: "a" });
        new Subsystem().addSubsystem({ subsystem: "ppp", configureArgs: [1] });
        new Subsystem().addSubsystem({ subsystem: "ppp", description: "a" });
        new Subsystem().addSubsystem({ subsystem: "ppp", group: "a" });
        new Subsystem().addSubsystem({ subsystem: "ppp", name: "a" });
        new Subsystem().addSubsystem({ subsystem: "ppp", transpile: false });
        new Subsystem().addSubsystem({ subsystem: "ppp", useFilename: true });
        {
            const sysInfo = new Subsystem().addSubsystem({ subsystem: "ppp" });
            sysInfo.configureArgs[0];
            sysInfo.description.charCodeAt(10);
            sysInfo.group.charCodeAt(10);
            sysInfo.instance.waitForState(2, 30).then(() => {});
            sysInfo.name.charCodeAt(100);
            sysInfo.path.charCodeAt(100);
        }
        {
            const sysInfo = new Subsystem().addSubsystem({ subsystem: new Subsystem() });
            sysInfo.configureArgs[0];
            sysInfo.description.charCodeAt(10);
            sysInfo.group.charCodeAt(10);
            sysInfo.instance.waitForState(2, 30).then(() => {});
            sysInfo.name.charCodeAt(100);
            sysInfo.path === null;
        }
        new Subsystem().addSubsystemsFrom("asd", {});
        new Subsystem().addSubsystemsFrom("asd", { filter: ["a"] });
        new Subsystem().addSubsystemsFrom("asd", { filter: (file) => file.charCodeAt(100) === 100 });
        new Subsystem().addSubsystemsFrom("asd", { filter: async (file) => file.charCodeAt(100) === 100 });
        new Subsystem().addSubsystemsFrom("asd", { bind: "a" });
        new Subsystem().addSubsystemsFrom("asd", { bind: true });
        new Subsystem().addSubsystemsFrom("asd", { configureArgs: [1] });
        new Subsystem().addSubsystemsFrom("asd", { description: "a" });
        new Subsystem().addSubsystemsFrom("asd", { group: "a" });
        new Subsystem().addSubsystemsFrom("asd", { name: "a" });
        new Subsystem().addSubsystemsFrom("asd", { transpile: true });
        new Subsystem().addSubsystemsFrom("asd", { useFilename: true });

        new Subsystem().instantiateSubsystem("asd").waitForState(2, 200).then(() => {});
        new Subsystem().instantiateSubsystem(new Subsystem()).waitForState(2, 200).then(() => {});
        new Subsystem().instantiateSubsystem(new Subsystem(), { transpile: false }).waitForState(2, 200).then(() => {});
        new Subsystem().deleteSubsystem("name");
        new Subsystem().deleteSubsystem("name", true);
        new Subsystem().getSubsystemInfo("name").configureArgs[0];
        new Subsystem().getSubsystems()[0].configureArgs[0];
    }

    namespace applicationTests {
        new Application().isMain === true;
        new Application().main();
        new Application().enableReport();
        new Application().enableReport({});
        new Application().enableReport({ directory: "a" });
        new Application().enableReport({ events: "a" });
        new Application().enableReport({ filename: "a" });
        new Application().enableReport({ signal: "a" });
        new Application().run().then(() => {});
        new Application().exit().then(() => {});
        new Application().exit(1).then(() => {});
        new Application().exitOnSignal("SIGINT", "SIGUSR1");
        new Application().removeProcesshandlers();
        new Application()._uncaughtException;
        new Application()._unhandledRejection;
        new Application()._rejectionHandled;
        new Application()._signalExit("asd");
    }

    namespace cliApplicationTests {
        new CliApplication().run({ ignoreArgs: true }).then(() => {});
        new CliApplication().getVersion().then(() => {});
        new CliApplication().exposeCliInterface();
        new CliApplication().mainCommand;
        new CliApplication().defineMainCommand({
            arguments: [{
                name: "a",
                default: 100500,
                nargs: 100,
                required: false
            }],
            options: [{
                name: "--a",
                default: 1000,
                nargs: 101231
            }],
            optionsGroups: [{
                name: "a",
                description: "a"
            }]
        });
        new CliApplication().defineCommand({
            name: "a",
            arguments: [{
                name: "a",
                default: 100500,
                nargs: 100,
                required: false
            }],
            options: [{
                name: "--a",
                default: 1000,
                nargs: 101231
            }],
            optionsGroups: [{
                name: "a",
                description: "a"
            }]
        });
        new CliApplication().defineCommandFromSubsystem({
            configureArgs: [1],
            description: "a",
            lazily: true,
            subsystem: "a",
            group: "a",
            name: "a",
            transpile: false
        });
        new CliApplication().defineOption({
            name: "--a",
            action: "store"
        });
        new CliApplication().defineOptionsGroup({
            name: "a",
            description: "b"
        });
        new CliApplication().defineCommandsGroup({
            name: "a",
            description: "b"
        });
        new CliApplication().option("a");
        new CliApplication().option("a", { value: true });
    }
}
