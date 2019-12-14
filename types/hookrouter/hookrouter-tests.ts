import {
    A,
    setLinkProps,
    useControlledInterceptor,
    interceptRoute,
    get,
    remove,
    navigate,
    setPath,
    getPath,
    getTitle,
    useRedirect,
    useRoutes,
    usePath,
    getWorkingPath,
    getBasepath,
    resolvePath,
    prepareRoute,
    useQueryParams
} from 'hookrouter';

// $ExpectType AProps
setLinkProps({ href: '/route' });

// $ExpectError
setLinkProps({ onClick: () => null });

// $ExpectType ReactHTMLElement<HTMLAnchorElement>
A({ href: '/route' });

// $ExpectType [InterceptedPath, () => void, () => void, () => void]
useControlledInterceptor();

// $ExpectType string[]
interceptRoute('/route1', '/route2');

// $ExpectType RouteObject | null
get(2);

// $ExpectType void
remove(2);

// $ExpectType [QueryParams, (inObj: QueryParams, replace?: boolean | undefined) => void]
useQueryParams();

// $ExpectType void
useRedirect('/route1', '/route2');

// $ExpectError
navigate();

// $ExpectError
navigate(1);

// $ExpectType string
getBasepath();

// $ExpectType string
resolvePath('path');

// $ExpectType [RegExp, string[]]
prepareRoute('/route');

// $ExpectType void
setPath('/route');

// $ExpectType string
usePath();

// $ExpectType string
usePath(true, true);

// $ExpectType string
getWorkingPath('id');

// $ExpectType string
getTitle();
