// Type definitions for turnto-speedflex-widget-browser 5.0
// Project: https://docs.turnto.com/en/speedflex-widget-implementation.html
// Definitions by: Obie Munoz <https://github.com/obiemunoz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace TurnTo {
    type InitializeCommand = Array<'initialize'>;
    type SetCommand = ['set', { sku: string }];
    type Commands = InitializeCommand | SetCommand;

    interface CommandFunction {
        (...args: Commands): void;
        q?: Commands[];
    }

    interface EventHandlerConfig {
        onInstantAnswerClick?: () => void;
        onQuestionSubmit?: (evt: any) => void; // You can replace 'any' with a more specific type if you know the structure of evt
        onAnswerSubmit?: (evt: any) => void;
        onReviewSubmit?: (evt: any) => void;
        onCommentSubmit?: (evt: any) => void;
    }

    interface ModuleConfig {
        onFinish?: () => void;
        onUpdate?: () => void;
    }

    interface TeaserConfig {
        showReviews?: () => void;
        showComments?: () => void;
        showQa?: () => void;
    }

    interface Config {
        locale: string;
        pageId: string;
        eventHandlers: EventHandlerConfig;
        qa?: ModuleConfig;
        reviewsList?: ModuleConfig;
        gallery?: ModuleConfig;
        chatter?: ModuleConfig;
        topComments?: ModuleConfig;
        commentsPinboardTeaser?: ModuleConfig;
        vcPinboard?: ModuleConfig;
        subdimensionTeaser?: TeaserConfig;
        teaser?: TeaserConfig;
    }
}

interface Window {
    TurnToCmd: TurnTo.CommandFunction;
    turnToConfig: TurnTo.Config;
}
