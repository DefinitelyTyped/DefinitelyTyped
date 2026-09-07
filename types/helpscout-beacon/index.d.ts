declare function Beacon(method: "init", beaconId: string): void;
declare function Beacon(method: "init", config: { beaconId: string } & Beacon.Config): void;
declare function Beacon(method: "destroy" | "open" | "close" | "toggle" | "reset"): void;
declare function Beacon(method: "search", query: string): void;
declare function Beacon(method: "ask-question", question: string): void;
declare function Beacon(method: "suggest", suggestions?: Array<string | { text: string; url: string }>): void;
declare function Beacon(method: "article", articleId: string, options?: { type: "sidebar" | "modal" }): void;
declare function Beacon(method: "navigate", route: string): void;
declare function Beacon(method: "identify", userObject: Beacon.IdentifyUser): void;
declare function Beacon(method: "prefill", formObject: Beacon.PrefillForm): void;
declare function Beacon(method: "logout", options?: { endActiveChat?: boolean; clearMessages?: boolean }): void;
declare function Beacon(method: "config", options: Beacon.Config): void;
declare function Beacon(method: "on" | "once", event: Beacon.Event, callback: (eventData?: unknown) => void): void;
declare function Beacon(method: "off", event: Beacon.Event, callback?: (eventData?: unknown) => void): void;
declare function Beacon(method: "event", eventObject: { type: "page-viewed"; url: string; title: string }): void;
declare function Beacon(method: "session-data", data: Record<string, string>): void;
declare function Beacon(method: "show-message", messageId: string, options?: { delay?: number; force?: boolean }): void;
declare function Beacon(method: "info"): unknown;

declare namespace Beacon {
    interface DisplayConfig {
        style?: "icon" | "text" | "iconAndText" | "manual";
        text?: string;
        textAlign?: "left" | "right";
        iconImage?: "message" | "beacon" | "search" | "buoy" | "question";
        position?: "left" | "right";
        zIndex?: number;
        horizontalOffset?: number;
        verticalOffset?: number;
        horizontalMobileOffset?: number;
        verticalMobileOffset?: number;
    }

    interface MessagingContactFormConfig {
        customFieldsEnabled?: boolean;
        showName?: boolean;
        showSubject?: boolean;
        allowAttachments?: boolean;
        showGetInTouch?: boolean;
    }

    interface MessagingConfig {
        chatEnabled?: boolean;
        contactForm?: MessagingContactFormConfig;
    }

    interface Config {
        docsEnabled?: boolean;
        messagingEnabled?: boolean;
        enableFabAnimation?: boolean;
        enablePreviousMessages?: boolean;
        enableSounds?: boolean;
        reopenBeaconWithActiveChat?: boolean;
        color?: string;
        mode?: "selfService" | "neutral" | "askFirst";
        hideAvatars?: boolean;
        hideFABOnMobile?: boolean;
        hideFABLabelOnMobile?: boolean;
        disableMessages?: boolean;
        showPrefilledCustomFields?: boolean;
        display?: DisplayConfig;
        messaging?: MessagingConfig;
        labels?: Record<string, string>;
    }

    interface IdentifyUser {
        name?: string;
        email?: string;
        company?: string;
        jobTitle?: string;
        avatar?: string;
        signature?: string;
        companyProperties?: Record<string, string | number | null>;
        [key: string]: string | number | null | undefined | Record<string, string | number | null>;
    }

    interface PrefillForm {
        name?: string;
        email?: string;
        subject?: string;
        text?: string;
        fields?: Array<{ id: number; value: string | number }>;
        attachments?: File[]; 
    }

    type Event =
        | "open"
        | "close"
        | "ready"
        | "article-viewed"
        | "chat-started"
        | "email-sent"
        | "message-clicked"
        | "message-closed"
        | "message-triggered"
        | "search";
}

interface Window {
    Beacon: typeof Beacon & {
        readyQueue?: Array<{ method: string; options?: unknown; data?: unknown }>;
    };
}