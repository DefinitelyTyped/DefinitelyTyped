export as namespace ReduxDefine;

export type SubActionProps<
    SubAction extends string, // This is necessary to force narrowing of the subaction type, as described here https://github.com/microsoft/TypeScript/issues/30680
    SubActions extends SubAction[],
    Namespace extends string | undefined,
    OwnAction extends string,
> = {
    [k in SubActions[number]]: `${Namespace extends string ? `${Namespace}/` : ""}${OwnAction}_${k}`;
};

export type NamespaceString<Namespace extends Action | string> = Namespace extends Action ? Namespace["ACTION"]
    : Namespace;

export type WithNamespace<OwnAction extends string, Namespace extends string | undefined> = Namespace extends string
    ? `${Namespace}/${OwnAction}`
    : OwnAction;

export interface PlainAction<OwnAction extends string, Namespace extends string | undefined> {
    ACTION: WithNamespace<OwnAction, Namespace>;
    defineAction: defineChildAction & defineChildActionWithNamespace & defineChildActionWithSubactionsAndNamespace;
    toString: () => WithNamespace<OwnAction, Namespace>;
}

export type Action<
    OwnAction extends string = string,
    SubAction extends string | undefined = undefined,
    Namespace extends string | undefined = undefined,
    SubActions extends SubAction[] = SubAction[],
> = SubAction extends string
    ? PlainAction<OwnAction, Namespace> & SubActionProps<SubAction, SubActions, Namespace, OwnAction>
    : PlainAction<OwnAction, Namespace>;

export function defineAction<OwnAction extends string>(actionType: OwnAction): Action<OwnAction>;
export function defineAction<OwnAction extends string, SubAction extends string, SubActions extends SubAction[]>(
    actionType: OwnAction,
    subactions: SubActions,
): Action<OwnAction, SubAction, undefined, SubActions>;
export function defineAction<
    OwnAction extends string,
    SubAction extends string,
    SubActions extends SubAction[],
    Namespace extends string | Action,
>(
    actionType: OwnAction,
    subactions: SubActions,
    namespace: Namespace,
): Action<OwnAction, SubAction, NamespaceString<Namespace>, SubActions>;
export function defineAction<OwnAction extends string, Namespace extends string | Action>(
    actionType: OwnAction,
    namespace: Namespace,
): Action<OwnAction, string, NamespaceString<Namespace>, []>;

export type defineChildAction = <Parent extends Action, OwnAction extends string>(
    this: Parent,
    actionType: OwnAction,
) => Action<OwnAction, string, Parent["ACTION"], []>;

export type defineChildActionWithNamespace = <OwnAction extends string, Namespace extends string | Action>(
    this: Action,
    actionType: OwnAction,
    namespace: Namespace,
    // Here we use the namespace passed as an argument, rather than the one from `this`.
    // This is accurate reflection of the lib behaviour, but possibly a bug.
) => Action<OwnAction, string, NamespaceString<Namespace>, []>;

export type defineChildActionWithSubactionsAndNamespace = <
    Parent extends Action,
    OwnAction extends string,
    SubAction extends string,
    SubActions extends SubAction[],
>(
    this: Parent,
    actionType: OwnAction,
    subactions: SubActions,
    namespace?: string | Action, // Has no effect but is permitted.
) => Action<OwnAction, SubAction, Parent["ACTION"], SubActions>;
