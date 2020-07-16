import * as React from 'react';
import { RouterGuard, lazy, RouterGuardConfigProps } from 'react-router-guard';

import checkAuth from './checkAuth';

const config: RouterGuardConfigProps[] = [
    {
        path: '/',
        component: lazy(() => import('./Layout')),
        canActivate: [checkAuth],
        routes: [
            {
                path: '/test',
                component: lazy(() => import('./Page')),
            },
        ],
    },
];

const RouterGuardTest = () => (
    <>
        <RouterGuard
            config={config}
        />
    </>
);

export default RouterGuardTest;
