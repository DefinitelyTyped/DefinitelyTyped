import * as React from "react";
import { NavigationContainerRef } from "../core";
import type { LinkingOptions } from "./types";
export default function useLinking(
    ref: React.RefObject<NavigationContainerRef>,
    { enabled, config, getStateFromPath, getPathFromState }: LinkingOptions,
): {
    getInitialState: () => PromiseLike<
        (
            & Partial<
                Pick<
                    Readonly<{
                        key: string;
                        index: number;
                        routeNames: string[];
                        // tslint:disable-next-line no-redundant-undefined
                        history?: unknown[] | undefined;
                        // tslint:disable-next-line array-type
                        routes: Array<
                            & Readonly<{
                                key: string;
                                name: string;
                            }>
                            & Readonly<{
                                // tslint:disable-next-line no-redundant-undefined
                                params?: object | undefined;
                            }>
                            & {
                                // tslint:disable-next-line no-redundant-undefined
                                state?: Readonly<any> | import("../core").PartialState<Readonly<any>> | undefined;
                            }
                        >;
                        type: string;
                        stale: false;
                    }>,
                    "key" | "index" | "routeNames" | "history" | "type"
                >
            >
            & Readonly<{
                // tslint:disable-next-line no-redundant-undefined
                stale?: true | undefined;
                // tslint:disable-next-line array-type
                routes: Array<import("../core").PartialRoute<import("../core").Route<string, object | undefined>>>;
            }>
            & {
                state?:
                    | (
                        & Partial<
                            Pick<
                                Readonly<{
                                    key: string;
                                    index: number;
                                    routeNames: string[];
                                    // tslint:disable-next-line no-redundant-undefined
                                    history?: unknown[] | undefined;
                                    // tslint:disable-next-line array-type
                                    routes: Array<
                                        & Readonly<{
                                            key: string;
                                            name: string;
                                        }>
                                        & Readonly<{
                                            // tslint:disable-next-line no-redundant-undefined
                                            params?: object | undefined;
                                        }>
                                        & {
                                            // tslint:disable-next-line no-redundant-undefined
                                            state?:
                                                | Readonly<any>
                                                | import("../core").PartialState<Readonly<any>>
                                                | undefined;
                                        }
                                    >;
                                    type: string;
                                    stale: false;
                                }>,
                                "key" | "index" | "routeNames" | "history" | "type"
                            >
                        >
                        & Readonly<{
                            // tslint:disable-next-line no-redundant-undefined
                            stale?: true | undefined;
                            // tslint:disable-next-line array-type
                            routes: Array<
                                import("../core").PartialRoute<
                                    import("../core").Route<string, object | undefined>
                                >
                            >;
                            // tslint:disable-next-line no-redundant-undefined
                        }>
                        & any
                    )
                    | undefined;
            }
        ) | undefined
    >;
};
