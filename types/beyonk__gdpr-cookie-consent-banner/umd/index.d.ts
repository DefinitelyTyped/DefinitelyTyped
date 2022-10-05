import { attachBanner } from '../types';

export as namespace GdprConsent;

declare const GdprConsent: {
    attachBanner: typeof attachBanner;
};

export = GdprConsent;
