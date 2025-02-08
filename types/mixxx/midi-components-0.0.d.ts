declare namespace components {
    type inputFunc = (channel: string, control: string, value: number, status: string, group: string) => void;

    interface Component {
        deck: number;
        effectUnit: number;
        empty: number;
        group: string;
        inGetParameter(): number | string | boolean | undefined;
        inGetValue: () => void;
        inKey?: string;
        input: inputFunc;
        inSetParameter(value: any): void;
        inSetValue: (value: number) => void;
        inToggle: () => void;
        isLongPressed: boolean;
        key: string;
        max?: number;
        midi: [number, number];
        min?: number;
        name: string;
        number: number;
        outKey: string;
        output: (value: number) => void;
        send: (value: number) => void;
        softTakeover: boolean;
        trigger: () => void;
        type: number;
        volumeByVelocity: boolean;
        outConnect: boolean;
        outTrigger: boolean;

        playing: number;
        on: number;
        off: number;
        longPressTimeout: number;
        looping: number;
        loaded: number;
    }

    type Options = Partial<Component>;

    class ComponentContainer {
        forEachComponent: (operation: (obj: any) => void, recursive: boolean) => void;
        forEachComponentContainer: (operation: (obj: any) => void, recursive: boolean) => void;
        isShifted: boolean;
        shift: () => void;
        unshift: () => void;
        applyLayer: (newLayer: any, reconnectComponents: boolean) => void;
        shutdown: () => void;
        constructor(initialLayer: any);
    }

    class Deck extends ComponentContainer {
        currentDeck: string;
        setCurrentDeck(group: string): void;
        toggle(): void;
        constructor(deckNumbers: number[] | number);
    }

    class Component {
        constructor(options: Options);
    }
    class Button extends Component {
        types: {
            push: number;
            toggle: number;
            powerWindow: number;
        };
    }
    class PlayButton extends Button {}
    class LoopToggleButton extends Button {}
    class CueButton extends Button {}
    class HotcueButton extends Button {}
    class Pot extends Component {
        firstValueReceived: boolean;
    }
    class Encoder extends Component {}
    class SamplerButton extends Button {}
}
