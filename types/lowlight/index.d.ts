declare module "lowlight" {
    export { highlight, highlightAuto, registerLanguage } from "lowlight/lib/core";
}

declare module "lowlight/lib/core" {
    export function highlight(
        language: string,
        value: string,
        options?: lowlight.HighlightOptions,
    ): lowlight.HighlightResult;
    export function highlightAuto(value: string, options?: lowlight.HighlightAutoOptions): lowlight.HighlightAutoResult;
    export function registerLanguage(name: string, syntax: Function): void;
    export function listLanguages(): string[];
}

declare namespace lowlight {
    namespace AST {
        namespace Unist {
            interface Data {
                [index: string]: any;
            }

            interface Position {
                line: number;
                column: number;
                offset?: number | undefined;
            }

            interface Location {
                start: Position;
                end: Position;
                indent?: Array<number> | undefined;
            }

            export interface Node {
                type: string;
                data?: Data | undefined;
                position?: Location | undefined;
            }

            export interface Parent extends Node {
                children: Array<Node>;
            }

            export interface Text extends Node {
                value: string;
            }
        }

        interface Properties {
            [index: string]: any;
        }

        export interface Root extends Unist.Parent {
            type: "root";
        }

        export interface Element extends Unist.Parent {
            type: "element";
            tagName: string;
            properties: Properties;
        }

        export interface Doctype extends Unist.Node {
            type: "doctype";
            name: string;
            public?: string | undefined;
            system?: string | undefined;
        }

        export interface Comment extends Unist.Text {
            type: "comment";
        }

        export interface Text extends Unist.Text {
            type: "text";
        }
    }

    type HastNode = AST.Root | AST.Element | AST.Doctype | AST.Comment | AST.Text;

    interface HighlightOptions {
        prefix?: string | undefined;
    }

    interface HighlightAutoOptions extends HighlightOptions {
        subset?: Array<string> | undefined;
    }

    interface HighlightResult {
        relevance: number;
        language: string;
        value: Array<HastNode>;
    }

    interface HighlightAutoResult extends HighlightResult {
        secondBest?: HighlightAutoResult | undefined;
    }
}
