import { GraphQLResolveInfo } from "graphql";

declare function graphqlFields(info: GraphQLResolveInfo, obj?: object, opts?: graphqlFields.Options): any;

declare namespace graphqlFields {
    interface Options {
        processArguments?: boolean | undefined;
        excludedFields?: string[] | undefined;
    }
}

export = graphqlFields;
