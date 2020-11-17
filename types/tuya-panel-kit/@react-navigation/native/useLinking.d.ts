import * as React from 'react';
import { NavigationContainerRef } from '../core';
import type { LinkingOptions } from './types';
export default function useLinking(ref: React.RefObject<NavigationContainerRef>, { enabled, config, getStateFromPath, getPathFromState, }: LinkingOptions): {
    getInitialState: () => PromiseLike<(Partial<Pick<Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
        }> & Readonly<{
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("../core").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>, "key" | "index" | "routeNames" | "history" | "type">> & Readonly<{
        stale?: true | undefined;
        routes: import("../core").PartialRoute<import("../core").Route<string, object | undefined>>[];
    }> & {
        state?: (Partial<Pick<Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[] | undefined;
            routes: (Readonly<{
                key: string;
                name: string;
            }> & Readonly<{
                params?: object | undefined;
            }> & {
                state?: Readonly<any> | import("../core").PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }>, "key" | "index" | "routeNames" | "history" | "type">> & Readonly<{
            stale?: true | undefined;
            routes: import("../core").PartialRoute<import("../core").Route<string, object | undefined>>[];
        }> & any) | undefined;
    }) | undefined>;
};
