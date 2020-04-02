import * as webidl2 from "webidl2";

// $ExpectType IDLRootType[]
const parsed = webidl2.parse("");

for (const rootType of parsed) {
    if (rootType.type !== "includes") {
        console.log(rootType.name);
    }

    switch (rootType.type) {
        case "interface":
            rootType; // $ExpectType InterfaceType
            console.log(rootType.inheritance);
            logMembers(rootType.members);
            console.log(rootType.partial);
            break;
        case "interface mixin":
            rootType; // $ExpectType InterfaceMixinType
            logMembers(rootType.members);
            console.log(rootType.partial);
            break;
        case "namespace":
            rootType; // $ExpectType NamespaceType
            console.log(rootType.partial);
            logNamespaceMembers(rootType.members);
            break;
        case "callback interface":
            rootType; // $ExpectType InterfaceType
            logMembers(rootType.members);
            console.log(rootType.partial);
            break;
        case "callback":
            rootType; // $ExpectType CallbackType
            logArguments(rootType.arguments);
            break;
        case "dictionary":
            rootType; // $ExpectType DictionaryType
            console.log(rootType.inheritance);
            for (const member of rootType.members) {
                member; // $ExpectType FieldType
                logExtAttrs(member.extAttrs);
                console.log(member.required, member.default);
            }
            break;
        case "enum":
            rootType; // $ExpectType EnumType
            for (const v of rootType.values) {
                console.log(v.type);
                console.log(v.value);
            }
            break;
        case "typedef":
            rootType; // $ExpectType TypedefType
            logIdlType(rootType.idlType);
            break;
        case "includes":
            rootType; // $ExpectType IncludesType
            console.log(rootType.target);
            console.log(rootType.includes);
            break;
        default:
            rootType; // $ExpectType never
            break;
    }

    logExtAttrs(rootType.extAttrs);
}

function logMembers(members: webidl2.IDLInterfaceMemberType[]) {
    for (const member of members) {
        switch (member.type) {
            case "constructor":
                member; // $ExpectType ConstructorMemberType
                logArguments(member.arguments);
                break;
            case "operation":
            case "attribute":
                logNamespaceMember(member);
                break;
            case "const":
                member; // $ExpectType ConstantMemberType
                console.log(member.name);
                logIdlType(member.idlType);
                console.log(member.value);
                console.log(member.nullable);
                break;
            case "iterable":
            case "setlike":
            case "maplike":
                member; // $ExpectType DeclarationMemberType
                console.log(member.readonly);
                member.idlType.forEach(logIdlType);
                break;
            default:
                member; // $ExpectType never
                break;
        }
        logExtAttrs(member.extAttrs);
    }
}

function logNamespaceMembers(members: webidl2.IDLNamespaceMemberType[]) {
    for (const member of members) {
        logNamespaceMember(member);
    }
}

function logNamespaceMember(member: webidl2.IDLNamespaceMemberType) {
    switch (member.type) {
        case "operation":
            member; // $ExpectType OperationMemberType
            logArguments(member.arguments);
            console.log(member.name);
            console.log(member.special);
            break;
        case "attribute":
            member; // $ExpectType AttributeMemberType
            console.log(member.name);
            console.log(member.special, member.readonly, member.inherit);
            break;
        default:
            member; // $ExpectType never
            break;
    }
}

function logExtAttrs(extAttrs: webidl2.ExtendedAttribute[]) {
    for (const extAttr of extAttrs) {
        logExtAttr(extAttr);
    }
}

function logExtAttr(extAttr: webidl2.ExtendedAttribute) {
    console.log(extAttr.name, "on", extAttr.parent.type);
    logArguments(extAttr.arguments);
    const { rhs } = extAttr;
    if (rhs !== null) {
        switch (rhs.type) {
            case "identifier":
            case "string":
            case "decimal":
            case "integer":
                logExtAttrRHS(rhs);
                break;
            case "identifier-list":
            case "string-list":
            case "decimal-list":
            case "integer-list":
                logExtAttrRHSList(rhs);
                break;
            default:
                rhs; // $ExpectType never
                break;
        }
    }
}

function logExtAttrRHSList(
    rhsList:
        | webidl2.ExtendedAttributeRightHandSideIdentifierList
        | webidl2.ExtendedAttributeRightHandSideStringList
        | webidl2.ExtendedAttributeRightHandSideDecimalList
        | webidl2.ExtendedAttributeRightHandSideIntegerList
) {
    for (const rhs of rhsList.value) {
        logExtAttrRHS(rhs);
    }
}

function logExtAttrRHS(
    rhs:
        | webidl2.ExtendedAttributeRightHandSideIdentifier
        | webidl2.ExtendedAttributeRightHandSideString
        | webidl2.ExtendedAttributeRightHandSideDecimal
        | webidl2.ExtendedAttributeRightHandSideInteger
) {
    console.log(rhs.type, rhs.value);
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

    if (idlType.union) {
        idlType; // $ExpectType UnionTypeDescription
        for (const t of idlType.idlType) {
            logIdlType(t);
        }
    } else {
        idlType; // $ExpectType SingleTypeDescription
        console.log(idlType);
    }
}
