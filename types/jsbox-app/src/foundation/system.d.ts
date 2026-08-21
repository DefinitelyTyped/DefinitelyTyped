// JSBox System API TypeScript Declaration

declare namespace SystemTypes {
    interface IconOptions {
        title: string;
        url: string;
        icon: UIImage;
    }
}

interface JBSystem {
    /** 0.0 ~ 1.0 */
    brightness: number;
    /** 0.0 ~ 1.0 */
    volume: number;
    call(number: string): void;
    sms(number: string): void;
    mailto(email: string): void;
    facetime(number: string): void;
    makeIcon(options: SystemTypes.IconOptions): void;
}

declare const $system: JBSystem;
