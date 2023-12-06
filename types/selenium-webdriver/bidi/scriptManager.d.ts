// Licensed to the Software Freedom Conservancy (SFC) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The SFC licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

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
        resultOwnership: any,
        sandbox?: boolean | null,
    ): Promise<EvaluateResultSuccess<RemoteValue<Awaited<ReturnType<FUNC>>>> | EvaluateResultException>;

    addPreloadScript(
        functionDeclaration: (...args: any) => any,
        argumentValueList: ReferenceValue[] | null,
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
