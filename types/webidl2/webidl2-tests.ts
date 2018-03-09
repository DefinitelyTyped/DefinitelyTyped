import * as webidl2 from "webidl2";

const parsed = webidl2.parse("");

for (const rootType of parsed) {
    if (rootType.type !== "implements" && rootType.type !== "includes") {
        console.log(rootType.name);
    }
    if (rootType.type === "interface") {
        console.log(rootType.inheritance);
        logMembers(rootType.members);
        console.log(rootType.partial);
    }
    else if (rootType.type === "interface mixin") {
        logMembers(rootType.members);
        console.log(rootType.partial);
    }
    else if (rootType.type === "namespace") {
        console.log(rootType.partial);
        logNamespaceMembers(rootType.members);
    }
    else if (rootType.type === "callback interface") {
        logMembers(rootType.members);
        console.log(rootType.partial);
    }
    else if (rootType.type === "callback") {
        logArguments(rootType.arguments);
    }
    else if (rootType.type === "dictionary") {
        console.log(rootType.inheritance);
        for (const member of rootType.members) {
            console.log(member.required, member.default);
        }
    }
    else if (rootType.type === "enum") {
        for (const v of rootType.values) {
            console.log(v.type);
            console.log(v.value);
        }
    }
    else if (rootType.type === "typedef") {
        logIdlType(rootType.idlType);
    }
    else if (rootType.type === "implements") {
        console.log(rootType.target);
        console.log(rootType.implements);
    }
    else if (rootType.type === "includes") {
        console.log(rootType.target);
        console.log(rootType.includes);
    }

    logExtAttrs(rootType.extAttrs);
}

function logMembers(members: webidl2.IDLInterfaceMemberType[]) {
    for (const member of members) {
        if (member.type === "operation" || member.type === "attribute") {
            logNamespaceMembers([member]);
        }
        else if (member.type === "const") {
            console.log(member.name);
            console.log(member.value);
            console.log(member.nullable);
        }
        else if (member.type === "iterable") {
            console.log(member.readonly);
        }
        else if (member.type === "legacyiterable") {
            console.log(member.readonly);
        }
        else if (member.type === "setlike") {
            console.log(member.readonly);
        }
        else if (member.type === "maplike") {
            console.log(member.readonly);
        }

        logIdlType(member.idlType);
        logExtAttrs(member.extAttrs);
    }
}

function logNamespaceMembers(members: webidl2.IDLNamespaceMemberType[]) {
    for (const member of members) {
        if (member.type === "operation") {
            console.log(member.name);
            console.log(member.getter, member.setter, member.deleter);
            console.log(member.static, member.stringifier);
        }
        else if (member.type === "attribute") {
            console.log(member.name);
            console.log(member.static, member.stringifier, member.readonly, member.inherit);
        }
    }
}

function logExtAttrs(extAttrs: webidl2.ExtendedAttributes[]) {
    console.log(extAttrs[0].name);
    logArguments(extAttrs[0].arguments);
    const { rhs } = extAttrs[0];
    if (rhs.type === "identifier") {
        console.log(rhs);
    }
    else {
        for (const v of rhs.value) {
            console.log(v);
        }
    }
}

function logArguments(args: webidl2.Argument[]) {
    for (const arg of args) {
        console.log(arg.name);
        console.log(arg.default, arg.optional, arg.variadic);
        logIdlType(arg.idlType);
        logExtAttrs(arg.extAttrs);
    }
}

function logIdlType(idlType: string | webidl2.IDLTypeDescription | webidl2.IDLTypeDescription[]) {
    if (typeof idlType === "string") {
        return;
    }
    if (Array.isArray(idlType)) {
        for (const t of idlType) {
            logEachType(t);
        }
        return;
    }
    logEachType(idlType);

    function logEachType(t: webidl2.IDLTypeDescription) {
        console.log(t.type);
        console.log(t.generic, t.nullable, t.sequence, t.union);
        logIdlType(t.idlType);
    }
}
