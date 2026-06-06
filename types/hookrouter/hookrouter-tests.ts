import {
    A,
    get,
    getBasepath,
    getPath,
    getTitle,
    getWorkingPath,
    interceptRoute,
    navigate,
    prepareRoute,
    remove,
    resolvePath,
    setLinkProps,
    setPath,
    useControlledInterceptor,
    usePath,
    useQueryParams,
    useRedirect,
    useRoutes,
} from "hookrouter";

// $ExpectType AProps
setLinkProps({ href: "/route" });

// @ts-expect-error
setLinkProps({ onClick: () => null });

// $ExpectType ReactHTMLElement<HTMLAnchorElement>
A({ href: "/route" });

// $ExpectType [InterceptedPath, () => void, () => void, () => void]
useControlledInterceptor();

// $ExpectType string[]
interceptRoute("/route1", "/route2");

// $ExpectType RouteObject<any> | null
get(2);

// $ExpectType void
remove(2);

// $ExpectType [QueryParams, (inObj: QueryParams, replace?: boolean | undefined) => void]
useQueryParams();

// $ExpectType void
useRedirect("/route1", "/route2");

// @ts-expect-error
navigate();

// @ts-expect-error
navigate(1);

// $ExpectType string
getBasepath();

// $ExpectType string
resolvePath("path");

// $ExpectType [RegExp, string[]]
prepareRoute("/route");

// $ExpectType void
setPath("/route");

// $ExpectType string
usePath();

// $ExpectType string
usePath(true, true);

// $ExpectType string
getWorkingPath("id");

// $ExpectType string
getTitle();

// $ExpectType number | null
useRoutes({
    "/": () => 42,
});

// $ExpectType (() => number) | null
useRoutes({
    "/": () => () => 1 + 1,
});

// $ExpectType any
useRoutes({} as any);
