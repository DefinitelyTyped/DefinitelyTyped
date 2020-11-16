// Type definitions for @agiledigital/mule-preview 2.1
// Project: https://github.com/agiledigital/mule-preview
// Definitions by: Sean Dawson <https://github.com/NoxHarmonium>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import * as React from 'react';

export interface MulePreviewDiffUrlProps {
    readonly contentUrls: readonly [string?, string?];
    readonly contentRoot: string;
}

export interface MulePreviewDiffContentProps {
    readonly contentStrings: readonly [string?, string?];
    readonly contentRoot: string;
}

export interface MulePreviewUrlProps {
    readonly contentUrl: string;
    readonly contentRoot: string;
}

export interface MulePreviewContentProps {
    readonly contentString: string;
    readonly contentRoot: string;
}

export const MulePreviewDiffUrl: React.SFC<MulePreviewDiffUrlProps>;
export const MulePreviewDiffContent: React.SFC<MulePreviewDiffContentProps>;
export const MulePreviewUrl: React.SFC<MulePreviewUrlProps>;
export const MulePreviewContent: React.SFC<MulePreviewContentProps>;
