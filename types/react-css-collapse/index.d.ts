declare module "react-css-collapse" {
    interface Props {
        children?: React.ReactNode;
        isOpen: boolean;
        className?: string | null | undefined;
        onRest?: (() => void) | undefined;
        transition?: string | null | undefined;
    }
    class Collapse extends React.Component<Props> {
        render(): React.ReactElement<Props>;
    }
    export default Collapse;
}
