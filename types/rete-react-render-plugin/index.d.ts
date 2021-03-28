import { Component } from "react";
import {
    NodeEditor,
    Node as ReteNode,
    Output,
    Control as ReteControl,
    Input,
    Socket as ReteSocket,
    IO as ReteIO,
} from "rete";

declare module "rete-react-render-plugin" {
    class Node extends Component {
        props: {
            node: ReteNode;
            bindSocket: (...args: any[]) => void;
            bindControl: (...args: any[]) => void;
            editor: NodeEditor;
        };
        state: {
            outputs: Output[];
            controls: ReteControl[];
            inputs: Input[];
            selected: "selected" | "";
        };
    }

    class Socket extends Component {
        props: {
            innerRef: (...args: any[]) => void;
            type: string;
            io: ReteIO;
            socket: ReteSocket;
        };
        createRef: (el: any) => void;
    }
    class Control extends Component {
        props: {
            innerRef: (...args: any[]) => void;
            control: ReteControl;
            className: string;
        };
        createRef: (el: any) => void;
    }

    function install(editor: any, option: any): void;
}

declare const _default: {
    name: string;
    install: typeof install;
};
export default _default;
