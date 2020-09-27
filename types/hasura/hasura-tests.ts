import * as hasura from "hasura";

interface Profile {
    id: hasura.ScalarUUID;
    quantity: number;
    name: string;
    phone: {
        code: string;
        phoneNumber: string;
    };
    addresses: [{
        street: string;
        city: string;
    }];
    jsonColumn: hasura.ScalarJSON<{
        foo: string;
    }>;
    jsonbColumn: hasura.ScalarJSONB<{
        foo: string;
    }>;
}

const profileInput: hasura.HasuraInsertInput<Profile> = {
    objects: [{
        name: "foo",
        addresses: {
            data: [{
              street: "N/A"
            }]
        }
    }],
    on_conflict: {
        constraint: "profile_pkey",
        update_columns: ["id"]
    }
};

const profileWhere: hasura.WhereBoolExp<Profile> = {
    name: {
        _eq: "abc",
    },
    _and: [{
        quantity: { _eq: 10 },
        jsonColumn: {_eq: "{}"},
        addresses: {
            city: {_eq: ""}
        }
    }]
};

type ProfileOrderBy = hasura.OrderBy<Profile>;
type ProfileOrderByAggregate = hasura.OrderByAggregate<Profile>;

const profileOrderBy: ProfileOrderBy = {
    id: "desc",
    phone: {
        code: "asc"
    },
    addresses: {
        street: "desc"
    },
    addresses_agregate: {
        max: {
            street: "asc"
        }
    },
    jsonColumn: "desc",
    jsonbColumn: "asc"
};

const profileOrderByAgg: ProfileOrderByAggregate = {
    ...profileOrderBy,
    max: {
        quantity: "asc"
    },
    avg: {
        quantity: "desc"
    }
};

type ProfileQueryResponse = hasura.HasuraQueryResponse<"profiles", Partial<Profile>>;
const profileQueryResp: ProfileQueryResponse = {
    data: {
        profiles: [{
            name: "test",
            quantity: 10,
            addresses: [{
                street: "N/A",
                city: "New York"
            }]
        }]
    }
};

const profileInsertInput: hasura.HasuraInsertInput<Profile> = {
    objects: [{
        quantity: 0,
        addresses: {
            data: [{
                street: ""
            }],
            on_conflict: {
                constraint: "",
                update_columns: ["street"]
            }
        }
    }]
};

const profileUpdateInput: hasura.HasuraUpdateInput<Profile> = {
    _set: {
        name: "foo"
    },
    _inc: {
        quantity: 10
    },
    where: {
        quantity: {
            _gt: 10
        }
    }
};

type ProfileAggregateResponse = hasura.HasuraAggregateQueryResponse<"profiles_aggregate", Partial<Profile>>;
const profileAggregateResp: ProfileAggregateResponse = {
    data: {
        profiles_aggregate: {
            aggregate: {
                min: {
                    quantity: 10
                },
                max: {
                    name: ""
                },
                sum: {
                    quantity: 10
                },
                avg: {
                    quantity: 0.1
                }
            },
            nodes: [{
                name: "test",
                quantity: 10,
                addresses: [{
                    street: "N/A",
                    city: "New York"
                }]
            }]
        }
    }
};
