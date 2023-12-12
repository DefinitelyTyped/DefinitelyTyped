import { Session } from "../lib/session";
import { EvaluateResultException, EvaluateResultSuccess } from "./evaluateResult";
import { ReferenceValue, RemoteValue } from "./protocolValue";
import { RealmInfo } from "./realmInfo";

type AnyFunction = (...args: any[]) => any;
type ReferenceValueJSON = ReturnType<ReferenceValue["asMap"]>;

declare class ScriptManager {
    constructor(driver: Session);
    _driver: Session;

    init(browsingContextId: string): Promise<void>;

    disownRealmScript(realmId: string, handles: string[]): Promise<void>;

    disownBrowsingContextScript(
        browsingContextId: string,
        handles: string[],
        sandbox?: boolean | null,
    ): Promise<void>;

    callFunctionInRealm<FUNC extends AnyFunction>(
        realmId: string,
        functionDeclaration: FUNC,
        awaitPromise: boolean,
        argumentValueList?: ReferenceValue[] | null,
        thisParameter?: any,
        resultOwnership?: any,
    ): Promise<EvaluateResultSuccess<RemoteValue<Awaited<ReturnType<FUNC>>>> | EvaluateResultException>;

    callFunctionInBrowsingContext<FUNC extends AnyFunction>(
        browsingContextId: string,
        functionDeclaration: FUNC,
        awaitPromise: boolean,
        argumentValueList?: ReferenceValue[] | null,
        thisParameter?: any,
        resultOwnership?: any,
        sandbox?: boolean | null,
    ): Promise<EvaluateResultSuccess<RemoteValue<Awaited<ReturnType<FUNC>>>> | EvaluateResultException>;

    evaluateFunctionInRealm<FUNC extends AnyFunction>(
        realmId: string,
        expression: string,
        awaitPromise: boolean,
        resultOwnership?: any,
    ): Promise<EvaluateResultSuccess<RemoteValue<Awaited<ReturnType<FUNC>>>> | EvaluateResultException>;

    evaluateFunctionInBrowsingContext<FUNC extends AnyFunction>(
        browsingContextId: string,
        expression: string,
        awaitPromise: boolean,
        resultOwnership?: any,
        sandbox?: boolean | null,
    ): Promise<EvaluateResultSuccess<RemoteValue<Awaited<ReturnType<FUNC>>>> | EvaluateResultException>;

    addPreloadScript(
        functionDeclaration: (...args: any) => any,
        argumentValueList?: ReferenceValue[] | null,
        sandbox?: boolean | null,
    ): Promise<any>;

    removePreloadScript(script: string): Promise<any>;

    getCallFunctionParams<FUNC extends AnyFunction>(
        targetType: string,
        id: string,
        sandbox: boolean | null,
        functionDeclaration: FUNC,
        awaitPromise: boolean,
        argumentValueList?: ReferenceValue[] | null,
        thisParameter?: any,
        resultOwnership?: any,
    ): {
        target: { context?: string; realm?: string; sandbox?: boolean };
        functionDeclaration: FUNC;
        awaitPromise: boolean;
        arguments: ReferenceValueJSON[];
        this: any;
        resultOwnership: any;
    };

    getEvaluateParams(
        targetType: string,
        id: string,
        sandbox: boolean | null,
        expression: string,
        awaitPromise: boolean,
        resultOwnership?: any,
    ): {
        target: {
            context?: string;
            realm?: string;
            sandbox?: boolean;
        };
        expression: string;
        awaitPromise: boolean;
        resultOwnership?: any;
    };

    createEvaluateResult<T>(
        response: { result: EvaluateResultSuccess<T> | EvaluateResultException },
    ): EvaluateResultSuccess<T> | EvaluateResultException;

    realmInfoMapper(realms: any[]): RealmInfo[];

    getAllRealms(): Promise<RealmInfo[]>;

    getRealmsByType(type: string): RealmInfo[];

    getRealmsInBrowsingContext(browsingContext: any): Promise<RealmInfo[]>;

    getRealmsInBrowsingContextByType(browsingContext: any, type: string): Promise<RealmInfo[]>;
}

declare function getScriptManagerInstance(browsingContextId: string, driver: Session): ScriptManager;

export = getScriptManagerInstance;
