// tslint:disable: prefer-template

// Create an account label
function createAccountLabels() {
    const labelName = "INSERT_LABEL_NAME_HERE";

    AdsManagerApp.createAccountLabel(labelName);
    Logger.log("Label with text = '%s' created.", labelName);
}

// Apply an account label to multiple accounts
function applyAccountLabels() {
    const accountIds = ["INSERT_ACCOUNT_ID_HERE", "INSERT_ACCOUNT_ID_HERE"];
    const labelName = "INSERT_LABEL_NAME_HERE";

    const accounts = AdsManagerApp.accounts().withIds(accountIds).get();
    while (accounts.hasNext()) {
        const account = accounts.next();
        account.applyLabel(labelName);

        Logger.log('Label with text = "%s" applied to customer id %s.', labelName, account.getCustomerId());
    }
}

// Remove an account label from multiple accounts
function removeLabelFromAccounts() {
    const accountIds = ["INSERT_ACCOUNT_ID_HERE", "INSERT_ACCOUNT_ID_HERE"];
    const labelName = "INSERT_LABEL_NAME_HERE";

    const accounts = AdsManagerApp.accounts().withIds(accountIds).get();
    while (accounts.hasNext()) {
        const account = accounts.next();
        account.removeLabel(labelName);

        Logger.log('Label with text = "%s" removed from customer id %s.', labelName, account.getCustomerId());
    }
}

// Select an account by label name
function selectAccountsByLabelName() {
    const labelName = "INSERT_LABEL_NAME_HERE";

    const accountIterator = AdsManagerApp.accounts()
        .withCondition("LabelNames CONTAINS '" + labelName + "'")
        .get();

    while (accountIterator.hasNext()) {
        const account = accountIterator.next();
        const accountName = account.getName() ? account.getName() : "--";
        Logger.log(
            "%s,%s,%s,%s",
            account.getCustomerId(),
            accountName,
            account.getTimeZone(),
            account.getCurrencyCode(),
        );
    }
}

// Select an account by label ID
function selectAccountsByLabelId() {
    const labelId = "INSERT_LABEL_ID_HERE";
    const accountIterator = AdsManagerApp.accounts()
        .withCondition("LabelIds IN ['" + labelId + "']")
        .get();

    while (accountIterator.hasNext()) {
        const account = accountIterator.next();
        const accountName = account.getName() ? account.getName() : "--";
        Logger.log(
            "%s,%s,%s,%s",
            account.getCustomerId(),
            accountName,
            account.getTimeZone(),
            account.getCurrencyCode(),
        );
    }
}

// Retrieve all account labels
function getAllAccountLabels() {
    const labelIterator = AdsManagerApp.accountLabels().get();
    while (labelIterator.hasNext()) {
        const label = labelIterator.next();

        Logger.log("Label with id = %s and text = %s was found.", label.getId().toFixed(0), label.getName());
    }
}

// Retrieve an account label by its name
function getLabelByName() {
    const labelName = "INSERT_LABEL_NAME_HERE";

    const labelIterator = AdsManagerApp.accountLabels()
        .withCondition("Name CONTAINS '" + labelName + "'")
        .get();

    while (labelIterator.hasNext()) {
        const label = labelIterator.next();

        Logger.log("Label with id = %s and text = %s was found.", label.getId().toFixed(0), label.getName());
    }
}

// Retrieve account labels by their IDs
function getLabelById() {
    const labelIterator = AdsManagerApp.accountLabels()
        .withIds([12345, 67890]) // Replace with label IDs here
        .get();

    while (labelIterator.hasNext()) {
        const label = labelIterator.next();

        Logger.log("Label with id = %s and text = '%s' was found.", label.getId().toFixed(0), label.getName());
    }
}

// Get details on the current account
function getCurrentAccountDetails() {
    const currentAccount = AdsApp.currentAccount();
    Logger.log(
        "Customer ID: " +
            currentAccount.getCustomerId() +
            ", Currency Code: " +
            currentAccount.getCurrencyCode() +
            ", Timezone: " +
            currentAccount.getTimeZone(),
    );
    const stats = currentAccount.getStatsFor("LAST_MONTH");
    Logger.log(stats.getClicks() + " clicks, " + stats.getImpressions() + " impressions last month");
}

// Create an ad customizer data source
function createAdCustomizerSource() {
    AdsApp.newAdCustomizerSourceBuilder()
        .withName("Flowers")
        .addAttribute("flower", "text")
        .addAttribute("price", "price")
        .build();
}

// Find an ad customizer data source by name
function getAdCustomizerSource() {
    const sources = AdsApp.adCustomizerSources().get();
    while (sources.hasNext()) {
        const source = sources.next();
        if (source.getName() === "Flowers") {
            Logger.log(source.getName() + " " + source.getAttributes());
        }
    }
}

// Get a data source's customizer items
function getAdCustomizerItems() {
    const source = AdsApp.adCustomizerSources().get().next();
    const items = source.items().get();
    while (items.hasNext()) {
        const item = items.next();
        Logger.log(item.getAttributeValues());
    }
}

// Create ad customizers
function createAdCustomizers() {
    const source = AdsApp.newAdCustomizerSourceBuilder()
        .withName("Flowers")
        .addAttribute("flower", "text")
        .addAttribute("price", "price")
        .build()
        .getResult();
}

// Create text ad with ad customizers
function setupCustomizedAd() {
    // If you have multiple ad groups with the same name, this snippet will
    // pick an arbitrary matching ad group each time. In such cases, just
    // filter on the campaign name as well:
    //
    // AdsApp.adGroups()
    //      .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
    //      .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();

        // This ad will try to fill in the blanks using the 'flower' and 'price'
        // attributes from the 'Flower' data source.
        adGroup
            .newAd()
            .expandedTextAdBuilder()
            .withHeadlinePart1("Flowers for sale")
            .withHeadlinePart2("Fresh cut {=Flowers.flower}")
            .withDescription("starting at {=Flowers.price}")
            .withFinalUrl("http://example.com/flowers")
            .build();
    }
}

// Add an ad group
function addAdGroup() {
    const campaignIterator = AdsApp.campaigns().withCondition('Name = "INSERT_CAMPAIGN_NAME_HERE"').get();
    if (campaignIterator.hasNext()) {
        const campaign = campaignIterator.next();
        const adGroupOperation = campaign.newAdGroupBuilder().withName("INSERT_ADGROUP_NAME_HERE").withCpc(1.2).build();
    }
}

// Update an ad group
function updateAdGroup() {
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        adGroup.bidding().setCpc(1.2);
        // update other properties as required here
    }
}

// Get all ad groups
function getAlladGroups() {
    // AdsApp.adGroups() will return all ad groups that are not removed by
    // default.
    const adGroupIterator = AdsApp.adGroups().get();
    Logger.log("Total adGroups found : " + adGroupIterator.totalNumEntities());
    while (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        Logger.log("AdGroup Name: " + adGroup.getName());
    }
}

// Get an ad group by name
function getAdGroupByName() {
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        Logger.log("AdGroup Name: " + adGroup.getName());
        Logger.log("Enabled: " + adGroup.isEnabled());
    }
}

// Get an ad group's stats
function getadGroupstats() {
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        // You can also request reports for pre-defined date ranges. See
        // https://developers.google.com/adwords/api/docs/guides/awql,
        // DateRangeLiteral section for possible values.
        const stats = adGroup.getStatsFor("LAST_MONTH");
        Logger.log(adGroup.getName() + ", " + stats.getClicks() + ", " + stats.getImpressions());
    }
}

// Pause an ad group
function pauseAdGroup() {
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        adGroup.pause();
        Logger.log("AdGroup with name = " + adGroup.getName() + " has paused status : " + adGroup.isPaused());
    }
}

// Get an ad group's device bid modifiers
function getAdGroupBidModifiers() {
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        Logger.log("AdGroup name: " + adGroup.getName());
        Logger.log("Mobile bid modifier: " + adGroup.devices().getMobileBidModifier());
        Logger.log("Tablet bid modifier: " + adGroup.devices().getTabletBidModifier());
        Logger.log("Desktop bid modifier: " + adGroup.devices().getDesktopBidModifier());
    }
}

// Create text ad with ad parameters for an ad group
function setupAdParamsInAdGroup() {
    // If you have multiple adGroups with the same name, this snippet will
    // pick an arbitrary matching ad group each time. In such cases, just
    // filter on the campaign name as well:
    //
    // AdsApp.adGroups()
    //     .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
    //     .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();

        adGroup
            .newAd()
            .expandedTextAdBuilder()
            .withHeadlinePart1("Holiday sale")
            .withHeadlinePart2("Starts in {param1: a few} days {param2: and} hours!")
            .withDescription("Everything must go!")
            .withFinalUrl("http://www.example.com/holidaysales")
            .build();

        const keywordIterator = adGroup.keywords().get();
        if (keywordIterator.hasNext()) {
            const keyword = keywordIterator.next();
            // Setup Ad to show as 'Doors open in 5 days, 7 hours!' when searched
            // using this keyword. If the ad is triggered using a keyword
            // without ad param, the ad shows as
            // 'Doors open in a few days, and hours!'
            keyword.setAdParam(1, "5");
            keyword.setAdParam(2, "7");
        }
    }
}

// Get ad parameters for a keyword
function getAdParamsForKeyword() {
    // If you have multiple adGroups with the same name, this snippet will
    // pick an arbitrary matching ad group each time. In such cases, just
    // filter on the campaign name as well:
    //
    // AdsApp.adGroups()
    //     .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
    //     .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        const keywordIterator = adGroup.keywords().withCondition('Text = "Holiday sales"').get();
        if (keywordIterator.hasNext()) {
            const keyword = keywordIterator.next();
            const adParamIterator = keyword.adParams().get();
            while (adParamIterator.hasNext()) {
                const adParam = adParamIterator.next();
            }
        }
    }
}

// Add an expanded text ad
function addExpandedTextAd() {
    // If you have multiple adGroups with the same name, this snippet will
    // pick an arbitrary matching ad group each time. In such cases, just
    // filter on the campaign name as well:
    //
    // AdsApp.adGroups()
    //     .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
    //     .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        adGroup
            .newAd()
            .expandedTextAdBuilder()
            .withHeadlinePart1("First headline of ad")
            .withHeadlinePart2("Second headline of ad")
            .withDescription("Ad description")
            .withPath1("path1")
            .withPath2("path2")
            .withFinalUrl("http://www.example.com")
            .build();
        // ExpandedTextAdBuilder has additional options.
        // For more details, see
        // https://developers.google.com/google-ads/scripts/docs/reference/adsapp/adsapp_expandedtextadbuilder
    }
}

// Add an image ad
function addImageAd() {
    // If you have multiple adGroups with the same name, this snippet will
    // pick an arbitrary matching ad group each time. In such cases, just
    // filter on the campaign name as well:
    //
    // AdsApp.adGroups()
    //     .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
    //     .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    const mediaIterator = AdsApp.adMedia().media().withCondition('Name = "INSERT_IMAGE_NAME_HERE"').get();
    if (adGroupIterator.hasNext() && mediaIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        const image = mediaIterator.next();
        adGroup
            .newAd()
            .imageAdBuilder()
            .withName("Ad name")
            .withImage(image)
            .withDisplayUrl("http://www.example.com")
            .withFinalUrl("http://www.example.com")
            .build();
        // ImageAdBuilder has additional options.
        // For more details, see
        // https://developers.google.com/google-ads/scripts/docs/reference/adsapp/adsapp_imageadbuilder
    }
}

// Pause ads in an ad group
function pauseAdsInAdGroup() {
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        const adsIterator = adGroup.ads().get();
        while (adsIterator.hasNext()) {
            const ad = adsIterator.next();
            ad.pause();
        }
    }
}

// Get expanded text ads in an ad group
function getExpandedTextAdsInAdGroup() {
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        const adsIterator = adGroup.ads().withCondition("Type=EXPANDED_TEXT_AD").get();
        while (adsIterator.hasNext()) {
            const ad = adsIterator.next().asType().expandedTextAd();
        }
    }
}

// Get stats for ads in an ad group
function getAdStats() {
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        // If you want to restrict your search to some ads only, then you could
        // apply a label and retrieve ads as
        //
        //   const label = AdsApp.labels()
        //             .withCondition('Name="INSERT_LABEL_NAME_HERE"')
        //             .get()
        //             .next();
        //   const adsIterator = label.ads().get();

        const adsIterator = adGroup.ads().get();
        while (adsIterator.hasNext()) {
            const ad = adsIterator.next();
            // You can also request reports for pre-defined date ranges. See
            // https://developers.google.com/adwords/api/docs/guides/awql,
            // DateRangeLiteral section for possible values.
            const stats = ad.getStatsFor("LAST_MONTH");
            Logger.log(adGroup.getName() + ", " + stats.getClicks() + ", " + stats.getImpressions());
        }
    }
}

// Get bidding strategies
function getBiddingStrategies() {
    const biddingStrategies = AdsApp.biddingStrategies().get();
    while (biddingStrategies.hasNext()) {
        const biddingStrategy = biddingStrategies.next();

        Logger.log(
            "Bidding strategy with id = %s, name = %s and type = " + "%s was found.",
            biddingStrategy.getId().toFixed(0),
            biddingStrategy.getName(),
            biddingStrategy.getType(),
        );
    }
}

// Get bidding strategy by name
function getBiddingStrategyByName() {
    const biddingStrategies = AdsApp.biddingStrategies().withCondition('Name="INSERT_BIDDING_STRATEGY_NAME_HERE"').get();
    while (biddingStrategies.hasNext()) {
        const biddingStrategy = biddingStrategies.next();

        const stats = biddingStrategy.getStatsFor("LAST_MONTH");

        Logger.log(
            "Bidding strategy with id = %s, name = %s and type = " + "%s was found.",
            biddingStrategy.getId().toFixed(0),
            biddingStrategy.getName(),
            biddingStrategy.getType(),
        );
        Logger.log(
            "Clicks: %s, Impressions: %s, Cost: %s.",
            stats.getClicks(),
            stats.getImpressions(),
            stats.getCost(),
        );
    }
}

// Set campaign bidding strategy
function setCampaignBiddingStrategy() {
    const campaign = AdsApp.campaigns().withCondition('Name="INSERT_CAMPAIGN_NAME_HERE"').get().next();

    // You may also set a flexible bidding strategy for the campaign
    // using the setStrategy() method. Use the
    // AdsApp.biddingStrategies() method to retrieve flexible bidding
    // strategies in your account.
    campaign.bidding().setStrategy("MANUAL_CPM");
}

// Set an ad group's default CPC bids
function setAdGroupDefaultCpcBid() {
    const adGroup = AdsApp.adGroups()
        .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
        .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
        .get()
        .next();

    // This bid will only be used for auction if a corresponding cpc
    // bidding strategy is set to the ad group. E.g.
    //
    // adGroup.bidding().setStrategy('MANUAL_CPC');
    adGroup.bidding().setCpc(3.0);
}

// Set a keyword's CPC bid
function setKeywordCpcBid() {
    const keyword = AdsApp.keywords()
        .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
        .withCondition('AdGroupName = "INSERT_ADGROUP_NAME_HERE"')
        .withCondition('KeywordText = "INSERT_KEYWORD_TEXT_HERE"')
        .get()
        .next();

    // This bid will only be used for auction if a corresponding cpc
    // bidding strategy is set to the parent ad group. E.g.
    //
    // adGroup.bidding().setStrategy('MANUAL_CPC');
    keyword.bidding().setCpc(3.0);
}

// Retrieve base spending limit of budget order
function getBaseSpendingLimit() {
    const budgetOrderIterator = AdsApp.budgetOrders().get();
    while (budgetOrderIterator.hasNext()) {
        const budgetOrder = budgetOrderIterator.next();
        let limitText: string | number = "";
        if (budgetOrder.getSpendingLimit() === null) {
            limitText = "unlimited";
        } else if (budgetOrder.getTotalAdjustments() === null) {
            limitText = budgetOrder.getSpendingLimit();
        } else {
            limitText = budgetOrder.getSpendingLimit() - budgetOrder.getTotalAdjustments();
        }
        Logger.log("Budget Order [" + budgetOrder.getName() + "] base spending limit: " + limitText);
    }
}

// Retrieve the active budget order
function getActiveBudgetOrder() {
    // There will only be one active budget order at any given time.
    const budgetOrderIterator = AdsApp.budgetOrders().withCondition('status="ACTIVE"').get();
    while (budgetOrderIterator.hasNext()) {
        const budgetOrder = budgetOrderIterator.next();
        Logger.log("Budget Order [" + budgetOrder.getName() + "] is currently active.");
    }
}

// Retrieve all budget orders
function getAllBudgetOrders() {
    const budgetOrderIterator = AdsApp.budgetOrders().get();
    while (budgetOrderIterator.hasNext()) {
        const budgetOrder = budgetOrderIterator.next();
        Logger.log("Budget Order [" + budgetOrder.getName() + "]");
    }
}

// Set campaign budget
function setCampaignBudget() {
    const campaignIterator = AdsApp.campaigns().withCondition('Name = "INSERT_CAMPAIGN_NAME_HERE"').get();
    if (campaignIterator.hasNext()) {
        const campaign = campaignIterator.next();
        campaign.getBudget().setAmount(100);
        Logger.log("Campaign with name = " + campaign.getName() + " has budget = " + campaign.getBudget().getAmount());
    }
}

// Get campaign budget
function getBudgetDetails() {
    const campaignIterator = AdsApp.campaigns().withCondition('Name = "INSERT_CAMPAIGN_NAME_HERE"').get();
    if (campaignIterator.hasNext()) {
        const campaign = campaignIterator.next();
        const budget = campaign.getBudget();
        const budgetCampaignIterator = budget.campaigns().get();

        Logger.log("Budget amount : " + budget.getAmount());
        Logger.log("Delivery method : " + budget.getDeliveryMethod());
        Logger.log("Explicitly shared : " + budget.isExplicitlyShared());
        Logger.log("Associated campaigns : " + budgetCampaignIterator.totalNumEntities());
        Logger.log("Details");
        Logger.log("==========");

        // Get all the campaigns associated with this budget. There could be
        // more than one campaign if this is a shared budget.

        while (budgetCampaignIterator.hasNext()) {
            const associatedCampaign = budgetCampaignIterator.next();
            Logger.log(associatedCampaign.getName());
        }
    }
}

// Get all campaigns
function getAllCampaigns() {
    // AdsApp.campaigns() will return all campaigns that are not removed by
    // default.
    const campaignIterator = AdsApp.campaigns().get();
    Logger.log("Total campaigns found : " + campaignIterator.totalNumEntities());
    while (campaignIterator.hasNext()) {
        const campaign = campaignIterator.next();
        Logger.log(campaign.getName());
    }
}

// Get a campaign by name
function getCampaignsByName() {
    const campaignIterator = AdsApp.campaigns().withCondition('Name = "INSERT_CAMPAIGN_NAME_HERE"').get();
    if (campaignIterator.hasNext()) {
        const campaign = campaignIterator.next();
        Logger.log("Campaign Name: " + campaign.getName());
        Logger.log("Enabled: " + campaign.isEnabled());
        Logger.log("Bidding strategy: " + campaign.getBiddingStrategyType());
        Logger.log("Ad rotation: " + campaign.getAdRotationType());
        Logger.log("Start date: " + formatDate(campaign.getStartDate()));
        Logger.log("End date: " + formatDate(campaign.getEndDate()));
    }
}
function formatDate(date: GoogleAdsScripts.AdsApp.GoogleAdsDate) {
    function zeroPad(number: number) {
        return Utilities.formatString("%02d", number);
    }
    return date === null ? "None" : zeroPad(date.year) + zeroPad(date.month) + zeroPad(date.day);
}

// Get a campaign's stats
function getCampaignStats() {
    const campaignIterator = AdsApp.campaigns().withCondition('Name = "INSERT_CAMPAIGN_NAME_HERE"').get();
    if (campaignIterator.hasNext()) {
        const campaign = campaignIterator.next();
        // You can also request reports for pre-defined date ranges. See
        // https://developers.google.com/google-ads/scripts/docs/reference/adsapp/adsapp_campaign#getStatsFor_1,
        // DateRangeLiteral section for possible values.
        const stats = campaign.getStatsFor("LAST_MONTH");
        Logger.log(
            campaign.getName() + ", " + stats.getClicks() + "clicks, " + stats.getImpressions() + " impressions",
        );
    }
}

// Add a placement to an existing ad group
function addPlacementToAdGroup() {
    const adGroup = AdsApp.adGroups()
        .withCondition("Name = 'INSERT_ADGROUP_NAME_HERE'")
        .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
        .get()
        .next();

    // Other display criteria can be built in a similar manner using the
    // corresponding builder method in the AdsApp.Display,
    // AdsApp.CampaignDisplay or AdsApp.AdGroupDisplay class.
    const placementOperation = adGroup
        .display()
        .newPlacementBuilder()
        .withUrl("http://www.site.com") // required
        .withCpc(0.5) // optional
        .build();
    const placement = placementOperation.getResult();
}

// Retrieve all topics in an existing ad group
function getAllTopics() {
    const adGroup = AdsApp.adGroups()
        .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
        .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
        .get()
        .next();

    // Other display criteria can be retrieved in a similar manner using
    // the corresponding selector methods in the AdsApp.Display,
    // AdsApp.CampaignDisplay or AdsApp.AdGroupDisplay class.
    const topicIterator = AdsApp.display()
        .topics()
        .withCondition("Impressions > 100")
        .forDateRange("LAST_MONTH")
        .orderBy("Clicks DESC")
        .get();

    while (topicIterator.hasNext()) {
        const topic = topicIterator.next();

        // The list of all topic IDs can be found on
        // https://developers.google.com/adwords/api/docs/appendix/verticals
        Logger.log(
            "Topic with criterion id = %s and topic id = %s was " + "found.",
            topic.getId().toFixed(0),
            topic.getTopicId().toFixed(0),
        );
    }
}

// Get stats for all audiences in an existing ad group
function getAudienceStats() {
    const adGroup = AdsApp.adGroups()
        .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
        .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
        .get()
        .next();

    // Other display criteria can be retrieved in a similar manner using
    // the corresponding selector methods in the AdsApp.Display,
    // AdsApp.CampaignDisplay or AdsApp.AdGroupDisplay class.
    const audienceIterator = adGroup.display().audiences().get();

    Logger.log("ID, Audience ID, Clicks, Impressions, Cost");

    while (audienceIterator.hasNext()) {
        const audience = audienceIterator.next();
        const stats = audience.getStatsFor("LAST_MONTH");

        // User List IDs (List IDs) are available on the details page of
        // a User List (found under the Audiences section of the Shared
        // Library)
        Logger.log(
            "%s, %s, %s, %s, %s",
            audience.getId().toFixed(0),
            audience.getAudienceId(),
            stats.getClicks(),
            stats.getImpressions(),
            stats.getCost(),
        );
    }
}

// Create a draft campaign
function createDraft() {
    const campaign = AdsApp.campaigns().withCondition("Name = 'INSERT_CAMPAIGN_NAME_HERE'").get().next();

    const draftBuilder = campaign.newDraftBuilder().withName("INSERT_NEW_DRAFT_NAME_HERE").build();

    const draft = draftBuilder.getResult();
}

// Get draft campaigns
function getDrafts() {
    // Get all drafts.
    const drafts = AdsApp.drafts().get();

    Logger.log(drafts.totalNumEntities());

    while (drafts.hasNext()) {
        const draft = drafts.next();
        Logger.log("Draft: " + draft.getName());
    }

    // Get a specific draft.
    const campaignIterator = AdsApp.drafts().withCondition("DraftName = 'INSERT_DRAFT_NAME'").get();

    while (campaignIterator.hasNext()) {
        Logger.log(campaignIterator.next().getName());
    }
}

// Create an experiment
function createExperiment() {
    const draft = AdsApp.drafts().withCondition("DraftName = INSERT_DRAFT_NAME").get().next();

    const experimentBuilder = draft.newExperimentBuilder();

    experimentBuilder.withName("INSERT_NEW_EXPERIMENT_NAME_HERE").withTrafficSplitPercent(50).startBuilding();
}

// Get experiments
function getExperiments() {
    // Get all experiments.
    const exps = AdsApp.experiments().get();

    Logger.log(exps.totalNumEntities());

    while (exps.hasNext()) {
        const exp = exps.next();
        Logger.log("Experiment: " + exp.getName());
    }

    // Get specific experiment.
    const campaignIterator = AdsApp.experiments().withCondition("Name = 'INSERT_EXPERIMENT_NAME'").get();

    while (campaignIterator.hasNext()) {
        Logger.log(campaignIterator.next().getName());
    }
}

// Show all the shared excluded placements in an excluded placement list
function showAllExcludedPlacementsFromList() {
    const EXCLUDED_PLACEMENT_LIST_NAME = "INSERT_LIST_NAME_HERE";

    const excludedPlacementListIterator = AdsApp.excludedPlacementLists()
        .withCondition('Name = "' + EXCLUDED_PLACEMENT_LIST_NAME + '"')
        .get();

    if (excludedPlacementListIterator.totalNumEntities() === 1) {
        const excludedPlacementList = excludedPlacementListIterator.next();
        const sharedExcludedPlacementIterator = excludedPlacementList.excludedPlacements().get();

        while (sharedExcludedPlacementIterator.hasNext()) {
            const sharedExcludedPlacement = sharedExcludedPlacementIterator.next();
            Logger.log(sharedExcludedPlacement.getUrl());
        }
    }
}

// Add a keyword to an existing ad group
function addKeyword() {
    // If you have multiple adGroups with the same name, this snippet will
    // pick an arbitrary matching ad group each time. In such cases, just
    // filter on the campaign name as well:
    //
    // AdsApp.adGroups()
    //     .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
    //     .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();

        adGroup
            .newKeywordBuilder()
            .withText("Hello world")
            .withCpc(1.25) // Optional
            .withFinalUrl("http://www.example.com") // Optional
            .build();

        // KeywordBuilder has a number of other options. For more details see
        // https://developers.google.com/google-ads/scripts/docs/reference/adsapp/adsapp_keywordbuilder
    }
}

// Pause an existing keyword in an ad group
function pauseKeywordInAdGroup() {
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        const keywordIterator = adGroup.keywords().withCondition('Text="INSERT_KEYWORDS_HERE"').get();
        while (keywordIterator.hasNext()) {
            const keyword = keywordIterator.next();
            keyword.pause();
        }
    }
}

// Get all keywords in an ad group
function getKeywordsInAdGroup() {
    const keywordIterator = AdsApp.keywords().withCondition('AdGroupName = "INSERT_ADGROUP_NAME_HERE"').get();
    if (keywordIterator.hasNext()) {
        while (keywordIterator.hasNext()) {
            const keyword = keywordIterator.next();
        }
    }
}

// Get stats for all keywords in an ad group
function getKeywordStats() {
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        const keywordIterator = adGroup.keywords().get();
        while (keywordIterator.hasNext()) {
            const keyword = keywordIterator.next();
            // You can also request reports for pre-defined date ranges. See
            // https://developers.google.com/adwords/api/docs/guides/awql,
            // DateRangeLiteral section for possible values.
            const stats = keyword.getStatsFor("LAST_MONTH");
            Logger.log(
                adGroup.getName() + ", " + keyword.getText() + ", " + stats.getClicks() + ", " + stats.getImpressions(),
            );
        }
    }
}

// Get all labels from a user's account
function getAllLabels() {
    const labelIterator = AdsApp.labels().get();

    while (labelIterator.hasNext()) {
        const label = labelIterator.next();
        Logger.log(label.getName());
    }
}

// Get a label by name
function getLabelsByName() {
    const labelIterator = AdsApp.labels().withCondition('Name = "INSERT_LABEL_NAME_HERE"').get();
    if (labelIterator.hasNext()) {
        const label = labelIterator.next();
        Logger.log("Name: " + label.getName());
        Logger.log("Description: " + label.getDescription());
        Logger.log("Color: " + label.getColor());
        Logger.log("Number of campaigns: " + label.campaigns().get().totalNumEntities());
        Logger.log("Number of ad groups: " + label.adGroups().get().totalNumEntities());
        Logger.log("Number of ads: " + label.ads().get().totalNumEntities());
        Logger.log("Number of keywords: " + label.keywords().get().totalNumEntities());
    }
}

// Apply a label to a campaign
function applyLabel() {
    // Retrieve a campaign, and apply a label to it. Applying labels to other
    // object types are similar.
    const campaignIterator = AdsApp.campaigns().withCondition('Name = "INSERT_CAMPAIGN_NAME_HERE"').get();
    if (campaignIterator.hasNext()) {
        const campaign = campaignIterator.next();
        campaign.applyLabel("Test");
    }
}

// Remove a label from a campaign
function removeLabel() {
    const campaignIterator = AdsApp.campaigns().withCondition('Name = "INSERT_CAMPAIGN_NAME_HERE"').get();
    if (campaignIterator.hasNext()) {
        const campaign = campaignIterator.next();
        campaign.removeLabel("Test");
    }
}

// Construct a new negative keyword list and add it to a campaign
function addNegativeKeywordListToCampaign() {
    const NEGATIVE_KEYWORD_LIST_NAME = "INSERT_LIST_NAME_HERE";
    const CAMPAIGN_NAME = "INSERT_CAMPAIGN_NAME_HERE";

    const negativeKeywordListOperator = AdsApp.newNegativeKeywordListBuilder()
        .withName(NEGATIVE_KEYWORD_LIST_NAME)
        .build();

    if (negativeKeywordListOperator.isSuccessful()) {
        const negativeKeywordList = negativeKeywordListOperator.getResult();
        if (!negativeKeywordList) return;

        negativeKeywordList.addNegativeKeywords([
            "broad match keyword",
            '"phrase match keyword"',
            "[exact match keyword]",
        ]);

        const campaign = AdsApp.campaigns()
            .withCondition('Name = "' + CAMPAIGN_NAME + '"')
            .get()
            .next();
        campaign.addNegativeKeywordList(negativeKeywordList);
    } else {
        Logger.log("Could not add Negative Keyword List.");
    }
}

// Add negative keyword to a campaign
function addNegativeKeywordToCampaign() {
    const campaignIterator = AdsApp.campaigns().withCondition('Name = "INSERT_CAMPAIGN_NAME_HERE"').get();
    if (campaignIterator.hasNext()) {
        const campaign = campaignIterator.next();
        campaign.createNegativeKeyword("[Budget hotels]");
    }
}

// Get negative keywords in a campaign
function getNegativeKeywordForCampaign() {
    const campaignIterator = AdsApp.campaigns().withCondition('Name = "INSERT_CAMPAIGN_NAME_HERE"').get();
    if (campaignIterator.hasNext()) {
        const campaign = campaignIterator.next();
        const negativeKeywordIterator = campaign.negativeKeywords().get();
        while (negativeKeywordIterator.hasNext()) {
            const negativeKeyword = negativeKeywordIterator.next();
            Logger.log("Text: " + negativeKeyword.getText() + ", MatchType: " + negativeKeyword.getMatchType());
        }
    }
}

// Add a negative keyword to an ad group
function addNegativeKeywordToAdGroup() {
    // If you have multiple ad groups with the same name, this snippet will
    // pick an arbitrary matching ad group each time. In such cases, just
    // filter on the campaign name as well:
    //
    // AdsApp.adGroups()
    //     .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
    //     .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        adGroup.createNegativeKeyword("[Budget hotels]");
    }
}

// Get negative keywords in an ad group
function getNegativeKeywordForAdGroup() {
    // If you have multiple ad groups with the same name, this snippet will
    // pick an arbitrary matching ad group each time. In such cases, just
    // filter on the campaign name as well:
    //
    // AdsApp.adGroups()
    //     .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
    //     .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
    const adGroupIterator = AdsApp.adGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        const negativeKeywordIterator = adGroup.negativeKeywords().get();
        while (negativeKeywordIterator.hasNext()) {
            const negativeKeyword = negativeKeywordIterator.next();
            Logger.log("Text: " + negativeKeyword.getText() + ", MatchType: " + negativeKeyword.getMatchType());
        }
    }
}

// Add search audience to an ad group
function addSearchAudienceToAdGroup() {
    const AUDIENCE_LIST_ID = 1; // INSERT_AUDIENCE_ID_HERE
    const CAMPAIGN_NAME = "INSERT_CAMPAIGN_NAME_HERE";
    const ADGROUP_NAME = "INSERT_ADGROUP_NAME_HERE";

    // Retrieve the ad group.
    const adGroup = AdsApp.adGroups()
        .withCondition('Name = "' + ADGROUP_NAME + '"')
        .withCondition('CampaignName = "' + CAMPAIGN_NAME + '"')
        .get()
        .next();

    // Create the search audience.
    const searchAudience = adGroup
        .targeting()
        .newUserListBuilder()
        .withAudienceId(AUDIENCE_LIST_ID)
        .withBidModifier(1.3)
        .build()
        .getResult();

    if (!searchAudience) return;

    // Display the results.
    Logger.log(
        "Search audience with name = %s and ID = %s was added to ad " + "group ID: %s",
        searchAudience.getName(),
        searchAudience.getId().toFixed(0),
        adGroup.getId().toFixed(0),
    );
}

// Get ad group search audience by name
function getAdGroupSearchAudienceByName() {
    const CAMPAIGN_NAME = "INSERT_CAMPAIGN_NAME_HERE";
    const ADGROUP_NAME = "INSERT_ADGROUP_NAME_HERE";
    const AUDIENCE_NAME = "INSERT_AUDIENCE_NAME_HERE";

    // Retrieve the search audience.
    const searchAudience = AdsApp.adGroupTargeting()
        .audiences()
        .withCondition("CampaignName = " + CAMPAIGN_NAME)
        .withCondition("AdGroupName = " + ADGROUP_NAME)
        .withCondition('UserListName = "' + AUDIENCE_NAME + '"')
        .get()
        .next();

    // Display the results.
    Logger.log(
        "Search audience with name = %s and ID = %s was found.",
        searchAudience.getName(),
        searchAudience.getId(),
    );
}

// Filter ad group search audience by stats
function filterAdGroupAudienceByStats() {
    const CAMPAIGN_NAME = "INSERT_CAMPAIGN_NAME_HERE";
    const ADGROUP_NAME = "INSERT_ADGROUP_NAME_HERE";

    // Retrieve top performing search audiences.
    const topPerformingAudiences = AdsApp.adGroupTargeting()
        .audiences()
        .withCondition("CampaignName = " + CAMPAIGN_NAME)
        .withCondition("AdGroupName = " + ADGROUP_NAME)
        .withCondition("Clicks > 30")
        .forDateRange("LAST_MONTH")
        .get();

    while (topPerformingAudiences.hasNext()) {
        const audience = topPerformingAudiences.next();
        Logger.log(
            "Search audience with ID = %s, name = %s and audience list " + "ID = %s has %s clicks.",
            audience.getId().toFixed(0),
            audience.getName(),
            audience.getAudienceId(),
            audience.getStatsFor("THIS_MONTH").getClicks(),
        );
    }
}

// Exclude search audience from a campaign
function addExcludedAudienceToCampaign() {
    const CAMPAIGN_NAME = ""; // INSERT_CAMPAIGN_NAME_HERE
    const AUDIENCE_LIST_ID = 0; // INSERT_AUDIENCE_ID_HERE

    // Retrieve the campaign.
    const campaign = AdsApp.campaigns()
        .withCondition('Name = "' + CAMPAIGN_NAME + '"')
        .get()
        .next();

    // Create the excluded audience.
    const audience = campaign.targeting().newUserListBuilder().withAudienceId(AUDIENCE_LIST_ID).exclude().getResult();
    if (!audience) return;
    Logger.log(
        "Excluded audience with ID = %s and audience list ID = %s was " + 'created for campaign: "%s".',
        audience.getId(),
        audience.getAudienceId(),
        campaign.getName(),
    );
}

// Get excluded search audiences for a campaign
function getExcludedAudiencesForCampaign() {
    const CAMPAIGN_NAME = ""; // INSERT_CAMPAIGN_NAME_HERE

    // Retrieve the campaign.
    const campaign = AdsApp.campaigns()
        .withCondition('Name = "' + CAMPAIGN_NAME + '"')
        .get()
        .next();

    const excludedAudiences = campaign.targeting().excludedAudiences().get();

    while (excludedAudiences.hasNext()) {
        const audience = excludedAudiences.next();
        Logger.log(
            "Excluded audience with ID = %s, name = %s and audience list " + "ID = %s was found.",
            audience.getId(),
            audience.getName(),
            audience.getAudienceId(),
        );
    }
}

// Set AdGroup targeting setting
function setAdGroupTargetSetting() {
    const CAMPAIGN_NAME = "INSERT_CAMPAIGN_NAME_HERE";
    const ADGROUP_NAME = "INSERT_ADGROUP_NAME_HERE";

    // Retrieve the ad group.
    const adGroup = AdsApp.adGroups()
        .withCondition('Name = "' + ADGROUP_NAME + '"')
        .withCondition('CampaignName = "' + CAMPAIGN_NAME + '"')
        .get()
        .next();

    // Change the target setting to TARGET_ALL.
    adGroup.targeting().setTargetingSetting("USER_INTEREST_AND_LIST", "TARGET_ALL_TRUE");
}

// Update audience bid modifier
function updateAudienceBidModifer() {
    const CAMPAIGN_NAME = "INSERT_CAMPAIGN_NAME_HERE";
    const ADGROUP_NAME = "INSERT_ADGROUP_NAME_HERE";
    const AUDIENCE_NAME = "INSERT_AUDIENCE_NAME_HERE";

    // Create the search audience.
    const searchAudience = AdsApp.adGroupTargeting()
        .audiences()
        .withCondition("CampaignName = " + CAMPAIGN_NAME)
        .withCondition("AdGroupName = " + ADGROUP_NAME)
        .withCondition('UserListName = "' + AUDIENCE_NAME + '"')
        .get()
        .next();

    searchAudience.bidding().setBidModifier(1.6);

    // Display the results.
    Logger.log(
        'Bid modifier for Search Audience with Name = "%s" in ' + 'Ad Group ID: "%s" was set to %s.',
        searchAudience.getName(),
        searchAudience.getAdGroup().getId().toFixed(0),
        searchAudience.bidding().getBidModifier(),
    );
}

// Retrieve all shopping campaigns
function getAllShoppingCampaigns() {
    const retval = [];
    const campaignIterator = AdsApp.shoppingCampaigns().get();
    while (campaignIterator.hasNext()) {
        const campaign = campaignIterator.next();

        // Optional: Comment out if you don't need to print details.
        Logger.log("Campaign Name: %s", campaign.getName());

        retval.push(campaign);
    }
    return retval;
}

// Retrieve a shopping campaign by its name
function getShoppingCampaignByName(campaignName: string) {
    const campaignIterator = AdsApp.shoppingCampaigns()
        .withCondition("CampaignName = '" + campaignName + "'")
        .get();
    while (campaignIterator.hasNext()) {
        const campaign = campaignIterator.next();
        Logger.log("Campaign Name: %s", campaign.getName());
    }
}

// Retrieve a shopping adgroup by its name
function getShoppingAdGroup() {
    const campaignName = "INSERT_CAMPAIGN_NAME_HERE";
    const adGroupName = "INSERT_ADGROUP_NAME_HERE";

    const adGroupIterator = AdsApp.shoppingAdGroups()
        .withCondition("CampaignName = '" + campaignName + "' and AdGroupName = '" + adGroupName + "'")
        .get();
    while (adGroupIterator.hasNext()) {
        const adGroup = adGroupIterator.next();
        Logger.log(
            "AdGroup Name: %s, CPC = %s, Mobile Bid " + "Modifier = %s",
            adGroup.getName(),
            adGroup.bidding().getCpc(),
            adGroup.devices().getMobileBidModifier(),
        );
    }
}

// Create a shopping ad group
function createShoppingAdGroup() {
    const campaignName = "INSERT_CAMPAIGN_NAME_HERE";

    const shoppingCampaign = AdsApp.shoppingCampaigns()
        .withCondition("CampaignName = '" + campaignName + "'")
        .get()
        .next();
    const adGroupOperation = shoppingCampaign.newAdGroupBuilder().build();
    const adGroup = adGroupOperation.getResult();
    Logger.log(adGroup);
}

// Create a shopping product group hierarchy
function createTree() {
    const campaignName = "INSERT_CAMPAIGN_NAME_HERE";
    const adGroupName = "INSERT_ADGROUP_NAME_HERE";

    const shoppingAdGroup = AdsApp.shoppingAdGroups()
        .withCondition("CampaignName = '" + campaignName + "' and AdGroupName = '" + adGroupName + "'")
        .get()
        .next();

    const root = shoppingAdGroup.rootProductGroup();

    // The structure created is
    // - root
    //   - cardcow brand
    //     - New
    //     - Refurbished
    //     - Other conditions
    //   - Other brands

    // Add a brand product group for "cardcow" under root product group.
    const brandNode = root.newChild().brandBuilder().withName("cardcow").withBid(1.2).build().getResult();

    if (!brandNode) return;

    // Add new conditions for New and Refurbished cardcow brand items.
    const newItems = brandNode.newChild().conditionBuilder().withCondition("NEW").build().getResult();

    const refurbishedItems = brandNode
        .newChild()
        .conditionBuilder()
        .withCondition("REFURBISHED")
        .withBid(0.9)
        .build()
        .getResult();
}

// Traverses the product group hierarchy
function walkProductPartitionTree() {
    const campaignName = "INSERT_CAMPAIGN_NAME_HERE";
    const adGroupName = "INSERT_ADGROUP_NAME_HERE";

    const shoppingAdGroup = AdsApp.shoppingAdGroups()
        .withCondition("CampaignName = '" + campaignName + "' and AdGroupName = '" + adGroupName + "'")
        .get()
        .next();
    const root = shoppingAdGroup.rootProductGroup();
    walkHierarchy(root, 0);
}

function walkHierarchy(productGroup: GoogleAdsScripts.AdsApp.ProductGroup, level: number) {
    let description = "";

    if (productGroup.isOtherCase()) {
        description = "Other";
    } else if (productGroup.getDimension() === "CATEGORY") {
        // Shows how to process a product group differently based on its type.
        description = productGroup.asCategory().getName();
    } else {
        description = productGroup.getValue();
    }

    const padding = new Array(level + 1).join("-");

    // Note: Child product groups may not have a max cpc if it has been excluded.
    Logger.log(
        "%s %s, %s, %s, %s, %s",
        padding,
        description,
        productGroup.getDimension(),
        productGroup.getMaxCpc(),
        productGroup.isOtherCase(),
        productGroup.getId().toFixed(),
    );
    const childProductGroups = productGroup.children().get();
    while (childProductGroups.hasNext()) {
        const childProductGroup = childProductGroups.next();
        walkHierarchy(childProductGroup, level + 1);
    }
}

// Gets the 'Everything else' product group
function getEverythingElseProductGroup() {
    const campaignName = "INSERT_CAMPAIGN_NAME_HERE";
    const adGroupName = "INSERT_ADGROUP_NAME_HERE";

    const shoppingAdGroup = AdsApp.shoppingAdGroups()
        .withCondition("CampaignName = '" + campaignName + "' and AdGroupName = '" + adGroupName + "'")
        .get()
        .next();

    const rootProductGroup = shoppingAdGroup.rootProductGroup();
    const childProductGroups = rootProductGroup.children().get();
    while (childProductGroups.hasNext()) {
        const childProductGroup = childProductGroups.next();
        if (childProductGroup.isOtherCase()) {
            // Note: Child product groups may not have a max cpc if it has been
            // excluded.
            Logger.log(
                '"Everything else" product group found. Type of the product ' + "group is %s and bid is %s.",
                childProductGroup.getDimension(),
                childProductGroup.getMaxCpc(),
            );
            return;
        }
    }
    Logger.log('"Everything else" product group not found under root ' + "product group.");
}

// Update bids for product groups
function updateProductGroupBid() {
    const productGroups = AdsApp.productGroups()
        .withCondition("Clicks > 5")
        .withCondition("Ctr > 0.01")
        .forDateRange("LAST_MONTH")
        .get();
    while (productGroups.hasNext()) {
        const productGroup = productGroups.next();
        productGroup.setMaxCpc(productGroup.getMaxCpc() + 0.01);
    }
}

// Retrieve product ads
function getProductAds() {
    const adGroupName = "INSERT_ADGROUP_NAME_HERE";

    const shoppingAdGroup = AdsApp.shoppingAdGroups()
        .withCondition("AdGroupName = '" + adGroupName + "'")
        .get()
        .next();

    const productAds = shoppingAdGroup.ads().get();
    while (productAds.hasNext()) {
        const productAd = productAds.next();
        Logger.log("Ad with ID = %s was found.", productAd.getId().toFixed(0));
    }
}

// Create product ads
function createProductAd() {
    const adGroupName = "INSERT_ADGROUP_NAME_HERE";

    const shoppingAdGroup = AdsApp.shoppingAdGroups()
        .withCondition("AdGroupName = '" + adGroupName + "'")
        .get()
        .next();

    const adOperation = shoppingAdGroup.newAdBuilder().withMobilePreferred(true).build();
    const productAd = adOperation.getResult();
    if (!productAd) return;
    Logger.log("Ad with ID = %s was created.", productAd.getId().toFixed(0));
}

// Retrieve all user lists
function getAllUserLists() {
    const userlistIt = AdsApp.userlists().get();
    while (userlistIt.hasNext()) {
        const userList = userlistIt.next();
        Logger.log("Name: " + userList.getName() + " Type: " + userList.getType() + " ID: " + userList.getId());
        Logger.log(
            " Desc: " +
                userList.getDescription() +
                " IsOpen: " +
                userList.isOpen() +
                " MembershipLifeSpan: " +
                userList.getMembershipLifeSpan(),
        );
        Logger.log(
            " SizeForDisplay: " +
                userList.getSizeForDisplay() +
                " SizeRangeForDisplay: " +
                userList.getSizeRangeForDisplay(),
        );
        Logger.log(
            " SizeForSearch: " +
                userList.getSizeForSearch() +
                " SizeRangeForSearch: " +
                userList.getSizeRangeForSearch(),
        );
        Logger.log(
            " IsReadOnly: " +
                userList.isReadOnly() +
                " IsEligibleForSearch: " +
                userList.isEligibleForSearch() +
                " IsEligibleForDisplay: " +
                userList.isEligibleForDisplay(),
        );
        Logger.log(" ");
    }
}

// Get the number of members in a user list
function getUserListMemberCount() {
    const iterator = AdsApp.userlists().get();
    while (iterator.hasNext()) {
        const userlist = iterator.next();
        Logger.log(
            "User List [" +
                userlist.getName() +
                "]  has " +
                userlist.getSizeForDisplay() +
                " members for Search campaigns and  " +
                userlist.getSizeRangeForDisplay() +
                " members for Display campaigns.",
        );
    }
}

// Open a user list
function openUserLists() {
    const iterator = AdsApp.userlists().get();
    while (iterator.hasNext()) {
        const userlist = iterator.next();
        if (userlist.isClosed()) {
            userlist.open();
        }
    }
}

// Retrieve search campaigns targeted by a user list
function getSearchCampaignsTargetedByUserList() {
    const userlistIterator = AdsApp.userlists().get();
    while (userlistIterator.hasNext()) {
        const userList = userlistIterator.next();
        const campaignIterator = userList.targetedCampaigns().get();
        const campaignNames = [];

        while (campaignIterator.hasNext()) {
            const campaign = campaignIterator.next();
            campaignNames.push(campaign.getName());
        }

        Logger.log("User List [" + userList.getName() + "]  is targeting [ " + campaignNames.join(",") + "]");
    }
}

// Retrieve all video campaigns
function getAllVideoCampaigns() {
    // AdsApp.videoCampaigns() will return all campaigns that are not
    // removed by default.
    const videoCampaigns = [];
    const videoCampaignIterator = AdsApp.videoCampaigns().get();
    Logger.log("Total campaigns found : " + videoCampaignIterator.totalNumEntities());
    while (videoCampaignIterator.hasNext()) {
        const videoCampaign = videoCampaignIterator.next();
        Logger.log(videoCampaign.getName());
        videoCampaigns.push(videoCampaign);
    }
    return videoCampaigns;
}

// Retrieve a video campaign by its name
function getVideoCampaignByName() {
    const videoCampaignIterator = AdsApp.videoCampaigns().withCondition('Name = "INSERT_CAMPAIGN_NAME_HERE"').get();
    if (videoCampaignIterator.hasNext()) {
        const videoCampaign = videoCampaignIterator.next();
        Logger.log("Campaign Name: " + videoCampaign.getName());
        Logger.log("Enabled: " + videoCampaign.isEnabled());
        Logger.log("Bidding strategy: " + videoCampaign.getBiddingStrategyType());
        Logger.log("Ad rotation: " + videoCampaign.getAdRotationType());
        Logger.log("Start date: " + formatDate(videoCampaign.getStartDate()));
        Logger.log("End date: " + formatDate(videoCampaign.getEndDate()));
        return videoCampaign;
    }
    return null;
}

// Retrieve a video campaign's stats
function getVideoCampaignStats() {
    const videoCampaignIterator = AdsApp.videoCampaigns().withCondition('Name = "INSERT_CAMPAIGN_NAME_HERE"').get();
    if (videoCampaignIterator.hasNext()) {
        const videoCampaign = videoCampaignIterator.next();
        // Fetch stats for the last month. See the DateRangeLiteral section at
        // https://developers.google.com/adwords/api/docs/guides/awql#formal_grammar
        // for a list of all supported pre-defined date ranges.
        // Note: Reports can also be used to fetch stats. See
        // https://developers.google.com/google-ads/scripts/docs/features/reports
        // for more information.
        const stats = videoCampaign.getStatsFor("LAST_MONTH");
        Logger.log(
            videoCampaign.getName() + ", " + stats.getImpressions() + " impressions, " + stats.getViews() + " views",
        );
        return stats;
    }
    return null;
}

// Pause a video campaign
function pauseVideoCampaign() {
    const videoCampaignIterator = AdsApp.videoCampaigns().withCondition('Name = "INSERT_CAMPAIGN_NAME_HERE"').get();
    if (videoCampaignIterator.hasNext()) {
        const videoCampaign = videoCampaignIterator.next();
        videoCampaign.pause();
    }
}

// Add a video ad group
function addVideoAdGroup() {
    const videoCampaignIterator = AdsApp.videoCampaigns().withCondition('Name = "INSERT_CAMPAIGN_NAME_HERE"').get();
    if (videoCampaignIterator.hasNext()) {
        const videoCampaign = videoCampaignIterator.next();
        const videoAdGroupOperation = videoCampaign
            .newVideoAdGroupBuilder()
            .withName("INSERT_ADGROUP_NAME_HERE")
            // This can also be 'TRUE_VIEW_IN_DISPLAY'
            .withAdGroupType("TRUE_VIEW_IN_STREAM")
            .withCpv(1.2)
            .build();
    }
}

// Update a video ad group
function updateVideoAdGroup() {
    const videoAdGroupIterator = AdsApp.videoAdGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (videoAdGroupIterator.hasNext()) {
        const videoAdGroup = videoAdGroupIterator.next();
        videoAdGroup.bidding().setCpv(1.2);
        // update other properties as required here
    }
}

// Retrieve all video ad groups
function getAllVideoAdGroups() {
    // AdsApp.videoAdGroups() will return all ad groups that are not removed by
    // default.
    const videoAdGroups = [];
    const videoAdGroupIterator = AdsApp.videoAdGroups().get();
    Logger.log("Total adGroups found : " + videoAdGroupIterator.totalNumEntities());
    while (videoAdGroupIterator.hasNext()) {
        const videoAdGroup = videoAdGroupIterator.next();
        Logger.log("AdGroup Name: " + videoAdGroup.getName() + ", AdGroup Type: " + videoAdGroup.getAdGroupType());
        videoAdGroups.push(videoAdGroup);
    }
    return videoAdGroups;
}

// Retrieve a video ad group by name
function getVideoAdGroupByName() {
    const videoAdGroupIterator = AdsApp.videoAdGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (videoAdGroupIterator.hasNext()) {
        const videoAdGroup = videoAdGroupIterator.next();
        Logger.log("AdGroup Name: " + videoAdGroup.getName());
        Logger.log("AdGroup Type: " + videoAdGroup.getAdGroupType());
        Logger.log("Enabled: " + videoAdGroup.isEnabled());
        return videoAdGroup;
    }
    return null;
}

// Retrieve a video ad group's stats
function getVideoAdGroupStats() {
    const videoAdGroupIterator = AdsApp.videoAdGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (videoAdGroupIterator.hasNext()) {
        const videoAdGroup = videoAdGroupIterator.next();
        // You can also request reports for pre-defined date ranges. See
        // https://developers.google.com/adwords/api/docs/guides/awql,
        // DateRangeLiteral section for possible values.
        const stats = videoAdGroup.getStatsFor("LAST_MONTH");
        Logger.log(videoAdGroup.getName() + ", " + stats.getImpressions() + ", " + stats.getViews());
        return stats;
    }
    return null;
}

// Pause a video ad group
function pauseVideoAdGroup() {
    const videoAdGroupIterator = AdsApp.videoAdGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (videoAdGroupIterator.hasNext()) {
        const videoAdGroup = videoAdGroupIterator.next();
        videoAdGroup.pause();
        Logger.log("AdGroup with name: " + videoAdGroup.getName() + " has paused status: " + videoAdGroup.isPaused());
    }
}

// Retrieve any video for use in an ad
function getVideo() {
    // This will just get the first valid YouTube video in the account.
    // It demonstrates how to filter to see if a video is valid for video ads.
    const videos = AdsApp.adMedia().media().withCondition("Type = VIDEO").get();
    let video = null;
    while (videos.hasNext()) {
        video = videos.next();
        // You have to use a YouTube video for True View ads, so only return if
        // the YouTubeVideoId exists.
        if (video.getYouTubeVideoId()) {
            return video;
        }
    }
    return null;
}

// Retrieve a specific video for use in an ad
function getVideoByYouTubeId() {
    // You can filter on the YouTubeVideoId if you already have that video in
    // your account to fetch the exact one you want right away.
    const videos = AdsApp.adMedia().media().withCondition("Type = VIDEO AND YouTubeVideoId = ABCDEFGHIJK").get();
    if (videos.hasNext()) {
        return videos.next();
    }
    return null;
}

// Add an in-stream video ad
function addInStreamVideoAd() {
    // If you have multiple adGroups with the same name, this snippet will
    // pick an arbitrary matching ad group each time. In such cases, just
    // filter on the campaign name as well:
    //
    // AdsApp.videoAdGroups()
    //     .withCondition('Name = "INSERT_ADGROUP_NAME_HERE"')
    //     .withCondition('CampaignName = "INSERT_CAMPAIGN_NAME_HERE"')
    const videoAdGroupIterator = AdsApp.videoAdGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    const video = getVideo(); // Defined above
    if (!video) return;
    if (videoAdGroupIterator.hasNext()) {
        const videoAdGroup = videoAdGroupIterator.next();
        videoAdGroup
            .newVideoAd()
            .inStreamAdBuilder()
            .withAdName("In Stream Ad")
            .withDisplayUrl("http://www.example.com")
            .withFinalUrl("http://www.example.com")
            .withVideo(video)
            .build();
    }
}

// Add video discovery ad
function addVideoDiscoveryAd() {
    const videoAdGroupIterator = AdsApp.videoAdGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    const video = getVideo(); // Defined above
    if (!video) return;
    if (videoAdGroupIterator.hasNext()) {
        const videoAdGroup = videoAdGroupIterator.next();
        videoAdGroup
            .newVideoAd()
            .videoDiscoveryAdBuilder()
            .withAdName("Video Discovery Ad")
            .withDescription1("Description line 1")
            .withDescription2("Description line 2")
            .withHeadline("Headline")
            .withThumbnail("THUMBNAIL1")
            .withDestinationPage("WATCH")
            .withVideo(video)
            .build();
    }
}

// Pause video ads in video ad group
function pauseVideoAdsInVideoAdGroup() {
    const videoAdGroupIterator = AdsApp.videoAdGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (videoAdGroupIterator.hasNext()) {
        const videoAdGroup = videoAdGroupIterator.next();
        const videoAdsIterator = videoAdGroup.videoAds().get();
        while (videoAdsIterator.hasNext()) {
            const videoAd = videoAdsIterator.next();
            videoAd.pause();
        }
    }
}

// Retrieve video ads in video ad group
function getInStreamAdsInVideoAdGroup() {
    const videoAds = [];
    const videoAdGroupIterator = AdsApp.videoAdGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (videoAdGroupIterator.hasNext()) {
        const videoAdGroup = videoAdGroupIterator.next();
        const videoAdsIterator = videoAdGroup.videoAds().withCondition('Type="TRUE_VIEW_IN_STREAM_VIDEO_AD"').get();
        while (videoAdsIterator.hasNext()) {
            const videoAd = videoAdsIterator.next();
            videoAds.push(videoAd);
        }
    }
    return videoAds;
}

// Retrieve ad stats from a video ad group
function getVideoAdGroupAdStats() {
    const statsList = [];
    const videoAdGroupIterator = AdsApp.videoAdGroups().withCondition('Name = "INSERT_ADGROUP_NAME_HERE"').get();
    if (videoAdGroupIterator.hasNext()) {
        const videoAdGroup = videoAdGroupIterator.next();
        const videoAdsIterator = videoAdGroup.videoAds().get();
        while (videoAdsIterator.hasNext()) {
            const videoAd = videoAdsIterator.next();
            // You can also request reports for pre-defined date ranges. See
            // https://developers.google.com/adwords/api/docs/guides/awql,
            // DateRangeLiteral section for possible values.
            const stats = videoAd.getStatsFor("LAST_MONTH");
            Logger.log(videoAd.getVideoAdGroup().getName() + ", " + stats.getViews() + ", " + stats.getImpressions());
            statsList.push(stats);
        }
    }
    return statsList;
}

// Add in-market audience to a video ad group
function addInMarketAudienceToVideoAdGroup() {
    const ag = AdsApp.videoAdGroups().withCondition("CampaignStatus != REMOVED").get().next();

    Logger.log("AdGroup ID %s Campaign ID %s", ag.getId().toString(), ag.getVideoCampaign().getId().toString());

    // Get the audience ID from the list here:
    // https://developers.google.com/adwords/api/docs/appendix/codes-formats#in-market-categories

    const audience = ag
        .videoTargeting()
        .newAudienceBuilder()
        .withAudienceId(80428)
        .withAudienceType("USER_INTEREST")
        .build()
        .getResult();

    if (!audience) return;

    Logger.log("Added Audience ID %s", audience.getId().toString());

    const audiences = ag.videoTargeting().audiences().get();
    while (audiences.hasNext()) {
        const aud = audiences.next();
        Logger.log("Retrieved Audience ID %s", aud.getId().toString());
    }
}

// Bulk upload from Google Drive
function bulkUploadFromGoogleDrive() {
    // See https://developers.google.com/google-ads/scripts/docs/features/bulk-upload
    // for the list of supported bulk upload templates.
    // You can upload a CSV file, or an EXCEL sheet.
    const file = DriveApp.getFilesByName("BulkCampaignUpload.csv").next();
    const upload = AdsApp.bulkUploads().newFileUpload(file);
    upload.forCampaignManagement();

    // Use upload.apply() to make changes without previewing.
    upload.preview();
}

// Bulk upload from remote server
function bulkUploadFromRemoteServer() {
    // See https://developers.google.com/google-ads/scripts/docs/features/bulk-upload
    // for the list of supported bulk upload templates.
    const dataUrl = "INSERT_CSV_FILE_URL_HERE";
    const mimeType = "";
    const blob = UrlFetchApp.fetch(dataUrl).getBlob().getAs(mimeType);

    const upload = AdsApp.bulkUploads().newFileUpload(blob);
    upload.forCampaignManagement();

    // Use upload.apply() to make changes without previewing.
    upload.preview();
}

// Bulk upload from Google Sheets
function bulkUploadFromGoogleSpreadsheet() {
    // The format of this spreadsheet should match a valid bulk upload template.
    // See https://developers.google.com/google-ads/scripts/docs/features/bulk-upload
    // for the list of supported bulk upload templates.
    const SPREADSHEET_URL = "INSERT_SPREADSHEET_URL_HERE";
    const spreadSheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL);
    const sheet = spreadSheet.getActiveSheet();

    const upload = AdsApp.bulkUploads().newFileUpload(sheet);
    upload.forCampaignManagement();

    // Use upload.apply() to make changes without previewing.
    upload.preview();
}

// Bulk upload from Google Ads reports
function bulkUploadFromGoogleAdsReports() {
    // Run a report to fetch all campaigns that spent more than $1000
    // this month.
    const query =
        "SELECT CampaignId,CampaignName,CampaignStatus,Amount " +
        "FROM CAMPAIGN_PERFORMANCE_REPORT " +
        "WHERE Amount > 1000000000 " +
        "DURING THIS_MONTH";
    const report = AdsApp.report(query);

    // Create an upload with the report columns.
    const upload = AdsApp.bulkUploads().newCsvUpload([
        report.getColumnHeader("CampaignId").getBulkUploadColumnName(),
        report.getColumnHeader("CampaignName").getBulkUploadColumnName(),
        report.getColumnHeader("CampaignStatus").getBulkUploadColumnName(),
    ]);
    upload.forCampaignManagement();

    const rows = report.rows();
    while (rows.hasNext()) {
        const row = rows.next();
        // Pause the campaigns.
        row.CampaignStatus = "paused";

        // Convert the report row into an upload row.
        upload.append(row.formatForUpload());
    }

    // Use upload.apply() to make changes without previewing.
    upload.preview();
}

// Create/update campaigns
function createOrUpdateCampaigns() {
    // See https://developers.google.com/google-ads/scripts/docs/features/bulk-upload
    // for the list of supported bulk upload templates and their column names.
    const columns = ["Campaign", "Budget", "Bid Strategy type", "Campaign type"];

    const upload = AdsApp.bulkUploads().newCsvUpload(columns, { moneyInMicros: false });

    // Google Ads identify existing campaigns using its name. To create a new
    // campaign, use a campaign name that doesn't exist in your account.
    upload.append({
        Campaign: "Test Campaign 1",
        Budget: 234,
        "Bid Strategy type": "cpc",
        "Campaign type": "Search Only",
    });
    // Use upload.apply() to make changes without previewing.
    upload.preview();
}

// Retrieve column names in reports
function getColumnsFromReport() {
    const report = AdsApp.report(
        "SELECT CampaignName, CampaignStatus " + "FROM CAMPAIGN_PERFORMANCE_REPORT " + "DURING TODAY",
    );
    Logger.log(
        "%s, %s",
        report.getColumnHeader("CampaignName").getBulkUploadColumnName(),
        report.getColumnHeader("CampaignStatus").getBulkUploadColumnName(),
    );
}

// Create a text report
function runReport() {
    // Google Ads reports return data faster than campaign management methods
    //   and can be used to retrieve basic structural information on
    //   your Account, Campaigns, AdGroups, Ads, Keywords, etc. You can refer to
    //   https://developers.google.com/adwords/api/docs/guides/structure-reports
    //   for more details.

    // See https://developers.google.com/adwords/api/docs/appendix/reports
    //   for all the supported report types.
    // See https://developers.google.com/adwords/api/docs/guides/awql for
    //   details on how to use AWQL.
    // See https://developers.google.com/adwords/api/docs/guides/uireports
    //   for details on how to map an Google Ads UI feature to the corresponding
    //   reporting API feature.
    const report = AdsApp.report(
        "SELECT CampaignName, Clicks, Impressions, Cost " +
            "FROM   CAMPAIGN_PERFORMANCE_REPORT " +
            "WHERE  Impressions < 10 " +
            "DURING LAST_30_DAYS",
    );

    const rows = report.rows();
    while (rows.hasNext()) {
        const row = rows.next();
        const campaignName = row["CampaignName"];
        const clicks = row["Clicks"];
        const impressions = row["Impressions"];
        const cost = row["Cost"];
        Logger.log(campaignName + "," + clicks + "," + impressions + "," + cost);
    }
}

// Create a spreadsheet report
function exportReportToSpreadsheet() {
    const spreadsheet = SpreadsheetApp.create("INSERT_REPORT_NAME_HERE");
    const report = AdsApp.report(
        "SELECT CampaignName, Clicks, Impressions, Cost " +
            "FROM   CAMPAIGN_PERFORMANCE_REPORT " +
            "WHERE  Impressions < 10 " +
            "DURING LAST_30_DAYS",
    );
    report.exportToSheet(spreadsheet.getActiveSheet());
}

// Filter entities by label
function filterReportByLabelIds() {
    const label = AdsApp.labels().withCondition("Name = 'High performance campaigns'").get().next();
    const query =
        "SELECT CampaignName, Clicks, Impressions, Cost from " +
        "CAMPAIGN_PERFORMANCE_REPORT where Labels CONTAINS_ANY " +
        "[" +
        label.getId() +
        "] during THIS_MONTH";

    const report = AdsApp.report(query);

    const rows = report.rows();
    while (rows.hasNext()) {
        const row = rows.next();
        const campaignName = row["CampaignName"];
        const clicks = row["Clicks"];
        const impressions = row["Impressions"];
        const cost = row["Cost"];
        Logger.log(campaignName + "," + clicks + "," + impressions + "," + cost);
    }
}

// Get accounts from customer IDs
function getAllAccounts() {
    const accountIterator = AdsManagerApp.accounts().get();

    while (accountIterator.hasNext()) {
        const account = accountIterator.next();
        const accountName = account.getName() ? account.getName() : "--";
        Logger.log(
            "%s,%s,%s,%s",
            account.getCustomerId(),
            accountName,
            account.getTimeZone(),
            account.getCurrencyCode(),
        );
    }
}

// Get accounts by label
function getAccountsByLabel() {
    // Only CONTAINS and DOES_NOT_CONTAIN operators are supported.
    const accountIterator = AdsManagerApp.accounts().withCondition("LabelNames CONTAINS 'High spend accounts'").get();

    while (accountIterator.hasNext()) {
        const account = accountIterator.next();
        const accountName = account.getName() ? account.getName() : "--";
        Logger.log(
            "%s,%s,%s,%s",
            account.getCustomerId(),
            accountName,
            account.getTimeZone(),
            account.getCurrencyCode(),
        );
    }
}

// Get accounts by stats
function getAccountByStats() {
    // This is useful when you need to identify accounts that were performing
    // well (or poorly) in a given time frame.

    const accountIterator = AdsManagerApp.accounts()
        .withCondition("Clicks > 10")
        .forDateRange("LAST_MONTH")
        .orderBy("Clicks DESC")
        .get();

    while (accountIterator.hasNext()) {
        const account = accountIterator.next();
        const stats = account.getStatsFor("LAST_MONTH");
        Logger.log(
            "%s,%s,%s",
            account.getCustomerId(),
            stats.getClicks().toFixed(0),
            stats.getImpressions().toFixed(0),
        );
    }
}

// Get accounts under a child account
function getAccountsUnderAChildManagerAccount() {
    // This is useful if you want to restrict your script to process only accounts
    // under a specific child manager account. This allows you to manage specific
    // child manager account hierarchies from the top-level manager account
    // without having to duplicate your script in the child manager account.

    const accountIterator = AdsManagerApp.accounts().withCondition("ManagerCustomerId = '1234567890'").get();

    while (accountIterator.hasNext()) {
        const account = accountIterator.next();
        const accountName = account.getName() ? account.getName() : "--";
        Logger.log(
            "%s,%s,%s,%s",
            account.getCustomerId(),
            accountName,
            account.getTimeZone(),
            account.getCurrencyCode(),
        );
    }
}

// Update multiple accounts in series
function updateAccountsInSeries() {
    // You can use this approach when you have only minimal processing to
    // perform in each of your client accounts.

    // Select the accounts to be processed.
    const accountIterator = AdsManagerApp.accounts().withCondition("LabelNames CONTAINS 'Cars'").get();

    // Save the manager account, to switch back later.
    const managerAccount = AdsApp.currentAccount();

    while (accountIterator.hasNext()) {
        const account = accountIterator.next();

        // Switch to the account you want to process.
        AdsManagerApp.select(account);

        // Retrieve all campaigns to be paused.
        const campaignIterator = AdsApp.campaigns().withCondition("LabelNames = 'Christmas promotion'").get();

        while (campaignIterator.hasNext()) {
            const campaign = campaignIterator.next();
            Logger.log("Pausing campaign %s in account %s", campaign.getName(), account.getCustomerId());
            campaign.pause();
        }
    }
}

// Update multiple accounts in parallel
function updateAccountsInParallel() {
    // You can use this approach when you have a large amount of processing
    // to do in each of your client accounts.

    // Select the accounts to be processed. You can process up to 50 accounts.
    const accountSelector = AdsManagerApp.accounts()
        .withCondition("LabelNames CONTAINS 'High spend accounts'")
        .withLimit(50);

    // Process the account in parallel. The callback method is optional.
    accountSelector.executeInParallel("processAccount", "allFinished");
}

/**
 * Process one account at a time. This method is called by the executeInParallel
 * method call in updateAccountsInParallel function for every account that
 * it processes.
 *
 * @return The number of campaigns paused by this method.
 */
function processAccount() {
    // executeInParallel will automatically switch context to the account being
    // processed, so all calls to AdsApp will apply to the selected account.
    const account = AdsApp.currentAccount();
    const campaignIterator = AdsApp.campaigns().withCondition("LabelNames = 'Christmas promotion'").get();

    while (campaignIterator.hasNext()) {
        const campaign = campaignIterator.next();
        Logger.log("Pausing campaign %s in account %s", campaign.getName(), account.getCustomerId());
        campaign.pause();
    }
    // Optional: return a string value. If you have a more complex JavaScript
    // object to return from this method, use JSON.stringify(value). This value
    // will be passed on to the callback method, if specified, in the
    // executeInParallel method call.
    return campaignIterator.totalNumEntities().toFixed(0);
}

/**
 * Post-process the results from processAccount. This method will be called
 * once all the accounts have been processed by the executeInParallel method
 * call.
 *
 * @param results An array of ExecutionResult objects,
 * one for each account that was processed by the executeInParallel method.
 */
function allFinished(results: GoogleAdsScripts.AdsManagerApp.ExecutionResult[]) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < results.length; i++) {
        // Get the ExecutionResult for an account.
        const result = results[i];

        Logger.log("Customer ID: %s; status = %s.", result.getCustomerId(), result.getStatus());

        // Check the execution status. This can be one of ERROR, OK, or TIMEOUT.
        if (result.getStatus() === "ERROR") {
            Logger.log("-- Failed with error: '%s'.", result.getError());
        } else if (result.getStatus() === "OK") {
            // This is the value you returned from processAccount method. If you
            // used JSON.stringify(value) in processAccount, you can use
            // JSON.parse(text) to reconstruct the JavaScript object.
            const retval = result.getReturnValue();
            Logger.log("--Processed %s campaigns.", retval);
        } else {
            // Handle timeouts here.
        }
    }
}
