import { ITermStore } from "./types";
export { ITermStore, TermStore, ITaxonomyUserInfo, ITermGroup, ITermGroupInfo, ITermGroups, ITermSetInfo, ITermSets, ITermStoreInfo, TermGroup, TermGroups, TermSets, ITaxonomyProperty, ITermInfo, ITermSet, ITerms, TermSet, Terms, IRelation, IRelationInfo, IRelations, ITerm, Relation, Relations, Term, } from "./types";
declare module "../rest" {
    interface SPRest {
        readonly termStore: ITermStore;
    }
}
//# sourceMappingURL=index.d.ts.map