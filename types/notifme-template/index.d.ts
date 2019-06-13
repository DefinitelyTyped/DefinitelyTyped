// Type definitions for notifme-template 1.0
// Project: https://github.com/notifme/notifme-template
// Definitions by: Ziv <https://github.com/ziv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/
// TypeScript Version: 3.2

/// <reference types="node" />

export default function RenderFactory(renderer: RendererType, folder: string, options?: OptionsType): RendererFunction;

export type  RendererFunction = (templateName: string, data: object, lang?: string) => Promise<TemplateType>;

export type RendererType = (renderer: string, path: object) => string | Promise<string>;

export interface OptionsType {
    juice?: false | {
        applyAttributesTableElements?: boolean,
        applyHeightAttributes?: boolean,
        applyStyleTags?: boolean,
        applyWidthAttributes?: boolean,
        extraCss?: string,
        insertPreservedExtraCss?: boolean,
        inlinePseudoElements?: boolean,
        preserveFontFaces?: boolean,
        preserveImportant?: boolean,
        preserveMediaQueries?: boolean,
        removeStyleTags?: boolean,
        webResources?: object,
        xmlMode?: boolean
    };
}

export interface TemplateType {
    name: string;
    title: string;
    version: number;
    channels: {
        email?: {
            from: string,
            to: string,
            subject: string,
            cc?: string[],
            bcc?: string[],
            replyTo?: string,
            text?: string,
            html?: string,
            attachments?: Array<{
                contentType: string,
                filename: string,
                content: string | Buffer
            }>,
            headers?: { [key: string]: string | number | boolean }
        },
        sms?: {
            from: string,
            to: string,
            text: string,
            type?: 'text' | 'unicode',
            nature?: 'marketing' | 'transactional',
            ttl?: number,
            messageClass?: 0 | 1 | 2 | 3
        },
        push?: {
            registrationToken: string,
            title: string,
            body: string,
            custom?: object,
            priority?: 'high' | 'normal',
            collapseKey?: string,
            delayWhileIdle?: boolean,
            restrictedPackageName?: string,
            dryRun?: boolean,
            icon?: string,
            tag?: string,
            color?: string,
            clickAction?: string,
            locKey?: string,
            bodyLocArgs?: string,
            retries?: number,
            encoding?: string,
            badge?: number,
            sound?: string,
            alert?: string | object,
            titleLocKey?: string,
            titleLocArgs?: string,
            launchImage?: string,
            action?: string,
            topic?: string,
            category?: string,
            contentAvailable?: string,
            mdm?: string,
            urlArgs?: string,
            truncateAtWordEnd?: boolean,
            mutableContent?: number,
            expiry?: number,
            timeToLive?: number,
            headers?: { [key: string]: string | number | boolean },
            launch?: string,
            duration?: string,
            consolidationKey?: string
        },
        webpush?: {
            subscription: {
                endpoint: string,
                keys: {
                    auth: string,
                    p256dh: string
                }
            },
            title: string,
            body: string,
            actions?: Array<{
                action: string,
                title: string,
                icon?: string
            }>,
            badge?: string,
            dir?: 'auto' | 'rtl' | 'ltr',
            icon?: string,
            image?: string,
            redirects?: { [key: string]: string },
            requireInteraction?: boolean
        }
    };
}
