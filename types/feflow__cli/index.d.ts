/// <reference types="node"/>
/**
 *  feflow namespace
 */
declare namespace Feflow {
    /**
     * feflow context
     */
    interface ctx {
        /**
         * Feflow context params
         */
        args: {
            _: Array<number | string>;
        };
        /**
         * Feflow configuration file in the current directory
         * ( .feflowrc.json/.feflowrc.js/.feflowrc.yml )
         */
        projectConfig: string;
        /**
         * Current project path
         */
        projectPath: string;
        /**
         * Feflow version
         */
        version: string;
        /**
         * Feflow logger includes: (trace、debug、info、warn、error、fatal)
         */
        logger: Logger;
        /**
         * Feflow command includes: (register)
         */
        commander: Command;
        /**
         * Feflow hook includes: (hook)
         */
        hook: Hook;
        /**
         * Feflow home directory path
         */
        root: string;
        /**
         * Feflow home directory package.json path
         */
        rootPkg: string;
        /**
         * feflow config
         */
        config: string;
        /**
         * feflow config path
         */
        configPath: string;
    }
}

interface Command {
    /**
     * Plugin registration command method parameter description
     * @param cmd  Plugin command name eg：devtool
     * @param desc Plugin command description eg： Feflow devtool for better develop a devkit or plugin
     * @param fn   Plugin callback function
     */
    register(cmd: string, desc: string, fn: () => void): void;
}

interface Hook {
    /**
     * Hook will execute befor any command
     * Hook registration command method parameter description
     * @param type  Hook name eg：report
     * @param fn  Hook callback function eg：report
     */
    hook(type: string, fn: () => void): void;
}

interface Logger {
    /**
     * Print trace level log, The Color is gray
     * @param desc log detail
     */
    trace(desc: string): void;
    /**
     * Print trace level log, The Color is gray
     * @param desc log detail
     */
    debug(desc: string): void;

    /**
     * Print trace level log, The Color is green
     * @param desc log detail
     */
    info(desc: string): void;

    /**
     * Print trace level log, The Color is yellow
     * @param desc log detail
     */
    warn(desc: string): void;

    /**
     * Print trace level log, The Color is red
     * @param desc log detail
     */
    error(desc: string): void;

    /**
     * Print trace level log, The Color is red
     * @param desc log detail
     */
    fatal(desc: string): void;
}
