import {
    contain,
    convert,
    equal,
    invert,
    max,
    min,
    normalize,
    not,
    ObjectPermission,
    Permission,
    PermissionTransformResult,
    PermissionTriple,
    PermissionType,
    positive,
    set,
    SpecialPermissionTriple,
    type,
} from "unix-permissions";

// test type exports
type Perm = Permission;
type PermRes = PermissionTransformResult<string>;
type PermType = PermissionType;
type ObjPerm = ObjectPermission;
type Triple = PermissionTriple;
type SpecTriple = SpecialPermissionTriple;

convert.octal("a=x"); // $ExpectType string
convert.octal(1); // $ExpectType string
convert.octal({ user: { read: true } }); // $ExpectType string

convert.number("a=x"); // $ExpectType number
convert.number(1); // $ExpectType number
convert.number({ user: { read: true } }); // $ExpectType number

convert.stat("a=x"); // $ExpectType string
convert.stat(1); // $ExpectType string
convert.stat({ user: { read: true } }); // $ExpectType string

convert.symbolic("a=x"); // $ExpectType string
convert.symbolic(1); // $ExpectType string
convert.symbolic({ user: { read: true } }); // $ExpectType string

convert.object("a=x"); // $ExpectType ObjectPermission
convert.object(1); // $ExpectType ObjectPermission
convert.object({ user: { read: true } }); // $ExpectType ObjectPermission

// this is needed instead of `$ExpectType PermissionType | "invalid"` because TypeScript 4.1 and
// TypeScript 4.3 produce different (but equivalent) types here.
let typeResult: "number" | "object" | "octal" | "stat" | "symbolic" | "invalid";
typeResult = type("a=x");
typeResult = type(1);
typeResult = type({ user: { read: true } });

normalize("a=x"); // $ExpectType string
normalize(1); // $ExpectType number
normalize({ user: { read: true } }); // $ExpectType ObjectPermission

positive("a=x"); // $ExpectType string
positive(1); // $ExpectType number
positive({ user: { read: true } }); // $ExpectType ObjectPermission

contain("a=x"); // $ExpectType boolean
contain(1); // $ExpectType boolean
contain({ user: { read: true } }); // $ExpectType boolean

equal("a=x"); // $ExpectType boolean
equal(1); // $ExpectType boolean
equal({ user: { read: true } }); // $ExpectType boolean
equal("a=x", 1); // $ExpectType boolean
equal(1, "a=x"); // $ExpectType boolean
equal({ user: { read: true } }, 1, "a=x"); // $ExpectType boolean

set("a=x"); // $ExpectType string
set(1); // $ExpectType number
set({ user: { read: true } }); // $ExpectType ObjectPermission
set("a=x", 1); // $ExpectType string
set(1, "a=x"); // $ExpectType number
set({ user: { read: true } }, 1, "a=x"); // $ExpectType ObjectPermission

not("a=x"); // $ExpectType string
not(1); // $ExpectType number
not({ user: { read: true } }); // $ExpectType ObjectPermission

invert("a=x"); // $ExpectType string
invert(1); // $ExpectType number
invert({ user: { read: true } }); // $ExpectType ObjectPermission

min(); // $ExpectType undefined
min("a=x"); // $ExpectType string
min(1); // $ExpectType number
min({ user: { read: true } }); // $ExpectType ObjectPermission
min("a=x", 1); // $ExpectType string
min(1, "a=x"); // $ExpectType number
min({ user: { read: true } }, 1, "a=x"); // $ExpectType ObjectPermission

max(); // $ExpectType undefined
max("a=x"); // $ExpectType string
max(1); // $ExpectType number
max({ user: { read: true } }); // $ExpectType ObjectPermission
max("a=x", 1); // $ExpectType string
max(1, "a=x"); // $ExpectType number
max({ user: { read: true } }, 1, "a=x"); // $ExpectType ObjectPermission

const objectPermission = convert.object("a=x");
objectPermission.user; // $ExpectType PermissionTriple | undefined
objectPermission.group; // $ExpectType PermissionTriple | undefined
objectPermission.others; // $ExpectType PermissionTriple | undefined
objectPermission.user?.read; // $ExpectType boolean | undefined
objectPermission.user?.write; // $ExpectType boolean | undefined
objectPermission.user?.execute; // $ExpectType boolean | undefined
objectPermission.special; // $ExpectType SpecialPermissionTriple | undefined
objectPermission.special?.setuid; // $ExpectType boolean | undefined
objectPermission.special?.setgid; // $ExpectType boolean | undefined
objectPermission.special?.sticky; // $ExpectType boolean | undefined
