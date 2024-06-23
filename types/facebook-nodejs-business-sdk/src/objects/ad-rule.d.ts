import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
/**
 * AdRule
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRule extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        created_by: "created_by";
        created_time: "created_time";
        evaluation_spec: "evaluation_spec";
        execution_spec: "execution_spec";
        id: "id";
        name: "name";
        schedule_spec: "schedule_spec";
        status: "status";
        updated_time: "updated_time";
    }>;
    static get Status(): Readonly<{
        deleted: "DELETED";
        disabled: "DISABLED";
        enabled: "ENABLED";
        has_issues: "HAS_ISSUES";
    }>;
    static get UiCreationSource(): Readonly<{
        am_account_overview_recommendations: "AM_ACCOUNT_OVERVIEW_RECOMMENDATIONS";
        am_activity_history_table: "AM_ACTIVITY_HISTORY_TABLE";
        am_ad_object_name_card: "AM_AD_OBJECT_NAME_CARD";
        am_amfe_l3_recommendation: "AM_AMFE_L3_RECOMMENDATION";
        am_autoflow_guidance_card: "AM_AUTOFLOW_GUIDANCE_CARD";
        am_auto_apply_widget: "AM_AUTO_APPLY_WIDGET";
        am_editor_card: "AM_EDITOR_CARD";
        am_info_card: "AM_INFO_CARD";
        am_name_cell_dropdown: "AM_NAME_CELL_DROPDOWN";
        am_optimization_tip_guidance_card: "AM_OPTIMIZATION_TIP_GUIDANCE_CARD";
        am_performance_summary: "AM_PERFORMANCE_SUMMARY";
        am_rule_landing_page_banner: "AM_RULE_LANDING_PAGE_BANNER";
        am_syd_resolution_flow: "AM_SYD_RESOLUTION_FLOW";
        am_syd_resolution_flow_modal: "AM_SYD_RESOLUTION_FLOW_MODAL";
        am_table_delivery_column_popover: "AM_TABLE_DELIVERY_COLUMN_POPOVER";
        am_table_toggle_popover: "AM_TABLE_TOGGLE_POPOVER";
        am_toolbar_create_rule_dropdown: "AM_TOOLBAR_CREATE_RULE_DROPDOWN";
        pe_campaign_structure_menu: "PE_CAMPAIGN_STRUCTURE_MENU";
        pe_editor_card: "PE_EDITOR_CARD";
        pe_info_card: "PE_INFO_CARD";
        pe_toolbar_create_rule_dropdown: "PE_TOOLBAR_CREATE_RULE_DROPDOWN";
        rules_management_page_action_dropdown: "RULES_MANAGEMENT_PAGE_ACTION_DROPDOWN";
        rules_management_page_rule_group: "RULES_MANAGEMENT_PAGE_RULE_GROUP";
        rules_management_page_rule_name: "RULES_MANAGEMENT_PAGE_RULE_NAME";
        rules_management_page_top_nav: "RULES_MANAGEMENT_PAGE_TOP_NAV";
        rules_view_active_rules_dialog: "RULES_VIEW_ACTIVE_RULES_DIALOG";
        rule_creation_success_dialog: "RULE_CREATION_SUCCESS_DIALOG";
        rule_syd_redirect: "RULE_SYD_REDIRECT";
        rule_templates_dialog: "RULE_TEMPLATES_DIALOG";
    }>;
    createExecute(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getHistory(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getHistory(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getHistory(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPreview(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<AdRule>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<AdRule>;
    update(fields: string[], params?: Record<any, any>): Promise<AdRule>;
}
