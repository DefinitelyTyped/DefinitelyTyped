import {
    combineResolvers,
    pipeResolvers,
    allResolvers,
    resolveDependee,
    resolveDependees,
    isDependee,
    skip
} from "graphql-resolvers";
import { IFieldResolver } from "graphql-tools";

const resolverOne = () => skip;
const resolverTwo = () => skip;

const combined = combineResolvers(resolverOne, resolverTwo);
const piped = pipeResolvers(resolverOne, resolverTwo);
const all = allResolvers([resolverOne, resolverTwo]);
const dependee = resolveDependee("resolverOne");
const dependees = resolveDependees(["resolverOne", "resolverTwo"]);
const isDependent = isDependee(resolverOne);

interface MyArgs {
    targetId: number;
}
const typedResolver: IFieldResolver<any, any> = () => skip;
const typedCombined = combineResolvers(
    typedResolver,
    (obj: undefined, args: MyArgs, context) => skip
);
