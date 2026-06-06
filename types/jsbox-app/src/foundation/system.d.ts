// JSBox System API TypeScript Declaration

declare namespace SystemTypes {
    interface IconOptions {
        title: string;
        url: string;
        icon: UIImage;
    }
}

interface JBSystem {
    brightness: number; // 0.0 ~ 1.0
    volume: number; // 0.0 ~ 1.0
    call(number: string): void;
    sms(number: string): void;
    mailto(email: string): void;
    facetime(number: string): void;
    makeIcon(options: SystemTypes.IconOptions): void;
}

declare const $system: JBSystem;
