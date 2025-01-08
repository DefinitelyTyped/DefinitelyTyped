/// <reference types="react" />

type Stores = "ios" | "android" | "windows" | "kindle";
type StoreObject = Partial<Record<Stores, string>>;

interface Props {
    position: "top" | "bottom";
    daysHidden?: number;
    daysReminder?: number;
    appStoreLanguage?: string;
    title?: string;
    author?: string;
    button?: React.ReactNode;
    storeText?: StoreObject;
    price?: StoreObject;
    url?: StoreObject;
    appMeta?: StoreObject;
    force?: Stores;
    ignoreIosVersion?: boolean;
    onClose?: () => void;
    onInstall?: () => void;
}

declare const SmartBanner: React.FC<Props>;

declare module "dist/main.css";

export = SmartBanner;
