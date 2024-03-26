/// <reference types="react" />
declare module 'react-kofi-button' {
    interface KofiArgs {
        username: string;
        label: string;
        title?: string | undefined;
        preset?: "default" | "thin" | "skinny" | "circle" | "no_background" | undefined;
        backgroundColor?: string | undefined;
        animation?: boolean | undefined;
    }
    
    
    function KofiButton(input: KofiArgs): React.ReactElement<KofiArgs>;
    
    export { KofiButton };    
}
