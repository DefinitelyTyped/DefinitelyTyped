// from https://developers.google.com/adwords/scripts/docs/reference/adwordsapp/adwordsapp_campaignselector

function main() {
    const campaignSelector = AdWordsApp
        .campaigns()
        .withCondition("Impressions > 100")
        .forDateRange("LAST_MONTH")
        .orderBy("Clicks DESC");

    const campaignIterator = campaignSelector.get();
    while (campaignIterator.hasNext()) {
        const campaign = campaignIterator.next();
        Logger.log(campaign.getName());
    }
}
