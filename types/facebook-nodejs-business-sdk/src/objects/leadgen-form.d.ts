import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import Lead from './lead';
/**
 * LeadgenForm
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadgenForm extends AbstractCrudObject {
    static get Fields(): Readonly<{
        allow_organic_lead: "allow_organic_lead";
        block_display_for_non_targeted_viewer: "block_display_for_non_targeted_viewer";
        context_card: "context_card";
        created_time: "created_time";
        creator: "creator";
        expired_leads_count: "expired_leads_count";
        follow_up_action_text: "follow_up_action_text";
        follow_up_action_url: "follow_up_action_url";
        id: "id";
        is_optimized_for_quality: "is_optimized_for_quality";
        leads_count: "leads_count";
        legal_content: "legal_content";
        locale: "locale";
        name: "name";
        organic_leads_count: "organic_leads_count";
        page: "page";
        page_id: "page_id";
        privacy_policy_url: "privacy_policy_url";
        question_page_custom_headline: "question_page_custom_headline";
        questions: "questions";
        status: "status";
        thank_you_page: "thank_you_page";
        tracking_parameters: "tracking_parameters";
    }>;
    static get Status(): Readonly<{
        active: "ACTIVE";
        archived: "ARCHIVED";
        deleted: "DELETED";
        draft: "DRAFT";
    }>;
    static get Locale(): Readonly<{
        ar_ar: "AR_AR";
        cs_cz: "CS_CZ";
        da_dk: "DA_DK";
        de_de: "DE_DE";
        el_gr: "EL_GR";
        en_gb: "EN_GB";
        en_us: "EN_US";
        es_es: "ES_ES";
        es_la: "ES_LA";
        fi_fi: "FI_FI";
        fr_fr: "FR_FR";
        he_il: "HE_IL";
        hi_in: "HI_IN";
        hu_hu: "HU_HU";
        id_id: "ID_ID";
        it_it: "IT_IT";
        ja_jp: "JA_JP";
        ko_kr: "KO_KR";
        nb_no: "NB_NO";
        nl_nl: "NL_NL";
        pl_pl: "PL_PL";
        pt_br: "PT_BR";
        pt_pt: "PT_PT";
        ro_ro: "RO_RO";
        ru_ru: "RU_RU";
        sv_se: "SV_SE";
        th_th: "TH_TH";
        tr_tr: "TR_TR";
        vi_vn: "VI_VN";
        zh_cn: "ZH_CN";
        zh_hk: "ZH_HK";
        zh_tw: "ZH_TW";
    }>;
    getLeads(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getLeads(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getLeads(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getTestLeads(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getTestLeads(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getTestLeads(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createTestLead(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<Lead>;
    get(fields: string[], params?: Record<any, any>): Promise<LeadgenForm>;
    update(fields: string[], params?: Record<any, any>): Promise<LeadgenForm>;
}
