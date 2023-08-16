const configTest: TurnTo.Config = {
    locale: "en_US",
    pageId: "pdp-page",
    eventHandlers: {
        onInstantAnswerClick: () => { console.log("Instant Answer Clicked"); },
        onQuestionSubmit: (evt) => { console.log("Question Submitted:", evt); },
        onAnswerSubmit: (evt) => { console.log("Answer Submitted:", evt); },
        onReviewSubmit: (evt) => { console.log("Review Submitted:", evt); },
        onCommentSubmit: (evt) => { console.log("Comment Submitted:", evt); }
    },
    qa: {
        onFinish: () => { console.log("QA Finished"); }
    },
    reviewsList: {
        onFinish: () => { console.log("Review List Finished"); },
        onUpdate: () => { console.log("Review List Updated"); }
    },
    gallery: {
        onFinish: () => { console.log("Gallery Finished"); }
    },
    chatter: {
        onFinish: () => { console.log("Chatter Finished"); }
    },
    topComments: {
        onFinish: () => { console.log("Top Comments Finished"); }
    },
    commentsPinboardTeaser: {
        onFinish: () => { console.log("Comments Pinboard Teaser Finished"); }
    },
    vcPinboard: {
        onFinish: () => { console.log("VC Pinboard Finished"); }
    },
    subdimensionTeaser: {
        showReviews: () => { console.log("Showing Subdimension Reviews"); }
    },
    teaser: {
        showReviews: () => { console.log("Showing Teaser Reviews"); },
        showComments: () => { console.log("Showing Teaser Comments"); },
        showQa: () => { console.log("Showing Teaser Q&A"); }
    }
};

window.turnToConfig = configTest;
window.TurnToCmd('initialize');
window.TurnToCmd('set', { sku: "NEW_SAMPLE_SKU" });