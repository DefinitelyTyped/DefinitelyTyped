import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * FlexibleTargeting
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FlexibleTargeting extends AbstractCrudObject {
    static get Fields(): Readonly<{
        behaviors: "behaviors";
        college_years: "college_years";
        connections: "connections";
        custom_audiences: "custom_audiences";
        education_majors: "education_majors";
        education_schools: "education_schools";
        education_statuses: "education_statuses";
        ethnic_affinity: "ethnic_affinity";
        family_statuses: "family_statuses";
        friends_of_connections: "friends_of_connections";
        generation: "generation";
        home_ownership: "home_ownership";
        home_type: "home_type";
        home_value: "home_value";
        household_composition: "household_composition";
        income: "income";
        industries: "industries";
        interested_in: "interested_in";
        interests: "interests";
        life_events: "life_events";
        moms: "moms";
        net_worth: "net_worth";
        office_type: "office_type";
        politics: "politics";
        relationship_statuses: "relationship_statuses";
        user_adclusters: "user_adclusters";
        work_employers: "work_employers";
        work_positions: "work_positions";
    }>;
}
