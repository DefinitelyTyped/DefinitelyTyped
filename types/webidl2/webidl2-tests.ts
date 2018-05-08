import * as webidl2 from "webidl2";

const parsed = webidl2.parse("");

for (const rootType of parsed) {
    if (rootType.type !== "implements" && rootType.type !== "includes") {
        console.log(rootType.name);
    }
    switch (rootType.type) {
        case "interface":
            console.log(rootType.inheritance);
            logMembers(rootType.members);
            console.log(rootType.partial);
            break;
        case "interface mixin":
            logMembers(rootType.members);
            console.log(rootType.partial);
            break;
        case "namespace":
            console.log(rootType.partial);
            logNamespaceMembers(rootType.members);
            break;
        case "callback interface":
            logMembers(rootType.members);
            console.log(rootType.partial);
            break;
        case "callback":
            logArguments(rootType.arguments);
            break;
        case "dictionary":
            console.log(rootType.inheritance);
            for (const member of rootType.members) {
                console.log(member.required, member.default);
            }
            break;
        case "enum":
            for (const v of rootType.values) {
                console.log(v.type);
                console.log(v.value);
            }
            break;
        case "typedef":
            logIdlType(rootType.idlType);
            break;
        case "implements":
            console.log(rootType.target);
            console.log(rootType.implements);
            break;
        case "includes":
            console.log(rootType.target);
            console.log(rootType.includes);
            break;
    }

    logExtAttrs(rootType.extAttrs);
}

function logMembers(members: webidl2.IDLInterfaceMemberType[]) {
    for (const member of members) {
        switch (member.type) {
            case "operation":
            case "attribute":
                logNamespaceMembers([member]);
                break;
            case "const":
                console.log(member.name);
                logIdlType(member.idlType);
                console.log(member.value);
                console.log(member.nullable);
                break;
            case "iterable":
                console.log(member.readonly);
                member.idlType.forEach(logIdlType);
                break;
            case "legacyiterable":
                console.log(member.readonly);
                member.idlType.forEach(logIdlType);
                break;
            case "setlike":
                console.log(member.readonly);
                member.idlType.forEach(logIdlType);
                break;
            case "maplike":
                console.log(member.readonly);
                member.idlType.forEach(logIdlType);
                break;
        }
        logExtAttrs(member.extAttrs);
    }
}

function logNamespaceMembers(members: webidl2.IDLNamespaceMemberType[]) {
    for (const member of members) {
        if (member.type === "operation") {
            console.log(member.name);
            console.log(member.getter, member.setter, member.deleter);
            console.log(member.static, member.stringifier);
        } else if (member.type === "attribute") {
            console.log(member.name);
            console.log(member.static, member.stringifier, member.readonly, member.inherit);
        }
    }
}

function logExtAttrs(extAttrs: webidl2.ExtendedAttributes[]) {
    console.log(extAttrs[0].name);
    logArguments(extAttrs[0].arguments);
    const { rhs } = extAttrs[0];
    if (rhs === null) {
        return;
    }
    if (rhs.type === "identifier") {
        console.log(rhs);
    } else {
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

function logIdlType(idlType: webidl2.IDLTypeDescription) {
    console.log(idlType.type);
    console.log(idlType.generic, idlType.nullable, idlType.sequence, idlType.union);
    logSubIdlType(idlType.idlType);
}

function logSubIdlType(idlType: string | webidl2.IDLTypeDescription | webidl2.IDLTypeDescription[] | null) {
    if (!idlType) {
        return;
    }
    if (typeof idlType === "string") {
        console.log(idlType);
        return;
    }
    if (Array.isArray(idlType)) {
        for (const t of idlType) {
            logIdlType(t);
        }
        return;
    }
    logIdlType(idlType);
}
