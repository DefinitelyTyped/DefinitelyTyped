import * as React from "react";

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

export const MulePreviewDiffUrl: React.FC<MulePreviewDiffUrlProps>;
export const MulePreviewDiffContent: React.FC<MulePreviewDiffContentProps>;
export const MulePreviewUrl: React.FC<MulePreviewUrlProps>;
export const MulePreviewContent: React.FC<MulePreviewContentProps>;
