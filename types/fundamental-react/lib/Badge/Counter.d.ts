export type CounterProps = {
    className?: string;
    localizedText?: {
        /* The aria-label for the <span> element. */
        counterLabel: string;
    };
    /* Set to **true** to enable counter with notification. */
    notification?: boolean;
} & { [x: string]: any };

declare const Counter: React.FunctionComponent<CounterProps>;

export default Counter;
