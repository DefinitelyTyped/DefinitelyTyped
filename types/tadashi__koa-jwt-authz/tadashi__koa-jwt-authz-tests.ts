import jwtAuthz from 'tadashi__koa-jwt-authz';

jwtAuthz(['read:documents']);
jwtAuthz(['read:documents'], { checkAllScopes: true, customScopeKey: 'test' });

// @ts-expect-error
jwtAuthz({});

// @ts-expect-error
jwtAuthz(["read:documents"], { nonExistentProperty: true });
