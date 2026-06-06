/** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_feature.html */

declare namespace CKEDITOR {
    interface feature {
        allowedContent?: filter.allowedContentRules | undefined;
        contentForms?: unknown;
        contentTransformations?: unknown;
        name?: string | undefined;
        requiredContent?: string | style | undefined;
        toFeature?: (() => feature) | undefined;
    }
}
