import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdgroupPlacementSpecificReviewFeedback
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdgroupPlacementSpecificReviewFeedback extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_admin: "account_admin";
        ad: "ad";
        ads_conversion_experiences: "ads_conversion_experiences";
        b2c: "b2c";
        b2c_commerce_unified: "b2c_commerce_unified";
        bsg: "bsg";
        city_community: "city_community";
        commerce: "commerce";
        daily_deals: "daily_deals";
        daily_deals_legacy: "daily_deals_legacy";
        dpa: "dpa";
        dri_copyright: "dri_copyright";
        dri_counterfeit: "dri_counterfeit";
        facebook: "facebook";
        facebook_pages_live_shopping: "facebook_pages_live_shopping";
        independent_work: "independent_work";
        instagram: "instagram";
        instagram_shop: "instagram_shop";
        job_search: "job_search";
        lead_gen_honeypot: "lead_gen_honeypot";
        marketplace: "marketplace";
        marketplace_home_rentals: "marketplace_home_rentals";
        marketplace_home_sales: "marketplace_home_sales";
        marketplace_motors: "marketplace_motors";
        marketplace_shops: "marketplace_shops";
        max_review_placements: "max_review_placements";
        neighborhoods: "neighborhoods";
        page_admin: "page_admin";
        product: "product";
        product_service: "product_service";
        profile: "profile";
        seller: "seller";
        shops: "shops";
        traffic_quality: "traffic_quality";
        unified_commerce_content: "unified_commerce_content";
        whatsapp: "whatsapp";
    }>;
}
