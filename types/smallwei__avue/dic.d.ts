type DicItem<T = Record<string, any>> = {
    label?: string;
    value?: any;
    display?: boolean;
    disabled?: boolean;
} & T;

interface DicProps {
    label?: string;
    value?: string;
    children?: string;
    res?: string;
}
