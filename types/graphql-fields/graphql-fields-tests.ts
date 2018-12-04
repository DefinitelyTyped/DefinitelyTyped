import { GraphQLResolveInfo } from 'graphql';
import graphqlFields = require('graphql-fields');

const info = ({} as any) as GraphQLResolveInfo;

const fieldsWithSubFieldsArgs = graphqlFields(info, {}, { processArguments: true });
const fieldsWithoutTypeName = graphqlFields(info, {}, { excludedFields: ['__typename'] });
graphqlFields(info);
