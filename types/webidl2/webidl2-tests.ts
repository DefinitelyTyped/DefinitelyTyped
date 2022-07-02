import * as webidl2 from "webidl2";

// $ExpectType IDLRootType[]
const parsed = webidl2.parse("");

for (const rootType of parsed) {
    rootType.parent; // $ExpectType null

    if (rootType.type !== "includes") {
        console.log(rootType.name);
    }

    switch (rootType.type) {
        case "interface mixin":
            rootType; // $ExpectType InterfaceMixinType
            console.log(rootType.partial);
            logInterfaceMixinMembers(rootType.members);
            break;

        case "interface":
            rootType; // $ExpectType InterfaceType
            console.log(rootType.inheritance);
            console.log(rootType.partial);
            logInterfaceMembers(rootType.members);
            break;

        case "namespace":
            rootType; // $ExpectType NamespaceType
            console.log(rootType.partial);
            logNamespaceMembers(rootType.members);
            break;

        case "callback interface":
            rootType; // $ExpectType CallbackInterfaceType
            console.log(rootType.inheritance);
            console.log(rootType.partial);
            logCallbackInterfaceMembers(rootType.members);
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
                console.log(member.required);
                if (member.default !== null) {
                    logValueDescription(member.default);
                }
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

    rootType.extAttrs; // $ExpectType ExtendedAttribute[]
    logExtAttrs(rootType.extAttrs);
}

function logInterfaceMembers(members: webidl2.IDLInterfaceMemberType[]) {
    for (const member of members) {
        logInterfaceMember(member);
        logExtAttrs(member.extAttrs);
    }
}

function logInterfaceMember(member: webidl2.IDLInterfaceMemberType) {
    switch (member.type) {
        case "constructor":
            member; // $ExpectType ConstructorMemberType
            member.parent; // $ExpectType InterfaceType
            logArguments(member.arguments);
            break;

        case "operation":
            member; // $ExpectType OperationMemberType
            member.parent; // $ExpectType CallbackInterfaceType | InterfaceMixinType | InterfaceType | NamespaceType
            logInterfaceMixinMember(member);
            break;

        case "attribute":
            member; // $ExpectType AttributeMemberType
            member.parent; // $ExpectType InterfaceMixinType | InterfaceType | NamespaceType
            logInterfaceMixinMember(member);
            break;

        case "const":
            member; // $ExpectType ConstantMemberType
            member.parent; // $ExpectType CallbackInterfaceType | InterfaceMixinType | InterfaceType
            logInterfaceMixinMember(member);
            break;

        case "iterable":
            member; // $ExpectType IterableDeclarationMemberType
            member.parent; // $ExpectType InterfaceMixinType | InterfaceType
            member.async; // $ExpectType boolean
            member.readonly; // $ExpectType false
            member.idlType; // $ExpectType [IDLTypeDescription] | [IDLTypeDescription, IDLTypeDescription]
            member.idlType.forEach(logIdlType);
            member.arguments; // $ExpectType Argument[]
            logArguments(member.arguments);
            break;

        case "maplike":
            member; // $ExpectType MaplikeDeclarationMemberType
            member.parent; // $ExpectType InterfaceMixinType | InterfaceType
            member.async; // $ExpectType false
            member.readonly; // $ExpectType boolean
            member.idlType; // $ExpectType [IDLTypeDescription, IDLTypeDescription]
            member.idlType.forEach(logIdlType);
            member.arguments; // $ExpectType []
            logArguments(member.arguments);
            break;

        case "setlike":
            member; // $ExpectType SetlikeDeclarationMemberType
            member.parent; // $ExpectType InterfaceMixinType | InterfaceType
            member.async; // $ExpectType false
            member.readonly; // $ExpectType boolean
            member.idlType; // $ExpectType [IDLTypeDescription]
            member.idlType.forEach(logIdlType);
            member.arguments; // $ExpectType []
            logArguments(member.arguments);
            break;

        default:
            member; // $ExpectType never
            break;
    }
}

function logInterfaceMixinMembers(members: webidl2.IDLInterfaceMixinMemberType[]) {
    for (const member of members) {
        logInterfaceMixinMember(member);
        logExtAttrs(member.extAttrs);
    }
}

function logInterfaceMixinMember(member: webidl2.IDLInterfaceMixinMemberType) {
    switch (member.type) {
        case "operation":
            member; // $ExpectType OperationMemberType
            member.parent; // $ExpectType CallbackInterfaceType | InterfaceMixinType | InterfaceType | NamespaceType
            logCallbackInterfaceMember(member);
            break;

        case "attribute":
            member; // $ExpectType AttributeMemberType
            member.parent; // $ExpectType InterfaceMixinType | InterfaceType | NamespaceType
            logNamespaceMember(member);
            break;

        case "const":
            member; // $ExpectType ConstantMemberType
            member.parent; // $ExpectType CallbackInterfaceType | InterfaceMixinType | InterfaceType
            logCallbackInterfaceMember(member);
            break;

        default:
            member; // $ExpectType never
            break;
    }
}

function logCallbackInterfaceMembers(members: webidl2.IDLCallbackInterfaceMemberType[]) {
    for (const member of members) {
        logCallbackInterfaceMember(member);
        logExtAttrs(member.extAttrs);
    }
}

function logCallbackInterfaceMember(member: webidl2.IDLCallbackInterfaceMemberType) {
    switch (member.type) {
        case "operation":
            member; // $ExpectType OperationMemberType
            member.parent; // $ExpectType CallbackInterfaceType | InterfaceMixinType | InterfaceType | NamespaceType
            logNamespaceMember(member);
            break;

        case "const":
            member; // $ExpectType ConstantMemberType
            member.parent; // $ExpectType CallbackInterfaceType | InterfaceMixinType | InterfaceType
            console.log(member.name);
            logIdlType(member.idlType);
            logValueDescription(member.value);
            console.log(member.nullable);
            break;

        default:
            member; // $ExpectType never
            break;
    }
}

function logNamespaceMembers(members: webidl2.IDLNamespaceMemberType[]) {
    for (const member of members) {
        logNamespaceMember(member);
        logExtAttrs(member.extAttrs);
    }
}

function logNamespaceMember(member: webidl2.IDLNamespaceMemberType) {
    switch (member.type) {
        case "operation":
            member; // $ExpectType OperationMemberType
            member.parent; // $ExpectType CallbackInterfaceType | InterfaceMixinType | InterfaceType | NamespaceType
            logArguments(member.arguments);
            console.log(member.name);
            console.log(member.special);
            break;

        case "attribute":
            member; // $ExpectType AttributeMemberType
            member.parent; // $ExpectType InterfaceMixinType | InterfaceType | NamespaceType
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
                rhs.value; // $ExpectType string
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

function logExtAttrRHSList(rhsList: webidl2.ExtendedAttributeRightHandSideList) {
    for (const rhs of rhsList.value) {
        logExtAttrRHS(rhs);
    }
}

function logExtAttrRHS(rhs: webidl2.ExtendedAttributeRightHandSideBase) {
    rhs.value; // $ExpectType string
    console.log(rhs.type, rhs.value);
}

function logArguments(args: webidl2.Argument[]) {
    for (const arg of args) {
        console.log(arg.name);
        console.log(arg.optional, arg.variadic);
        if (arg.default) {
            logValueDescription(arg.default);
        }
        logIdlType(arg.idlType);
        logExtAttrs(arg.extAttrs);
    }
}

function logIdlType(idlType: webidl2.IDLTypeDescription) {
    console.log(idlType.type);
    console.log(idlType.generic, idlType.nullable, idlType.union);

    if (idlType.union) {
        idlType; // $ExpectType UnionTypeDescription
        for (const t of idlType.idlType) {
            logIdlType(t);
        }
    } else if (idlType.generic) {
        idlType; // $ExpectType GenericTypeDescription || FrozenArrayTypeDescription | ObservableArrayTypeDescription | PromiseTypeDescription | RecordTypeDescription | SequenceTypeDescription
        idlType.generic; // $ExpectType "FrozenArray" | "ObservableArray" | "Promise" | "record" | "sequence" || "record" | "sequence" | "FrozenArray" | "ObservableArray" | "Promise"
        console.log(idlType);
        switch (idlType.generic) {
            case "FrozenArray":
            case "ObservableArray":
            case "Promise":
            case "sequence":
                idlType.idlType; // $ExpectType [IDLTypeDescription]
                idlType.idlType.length; // $ExpectType 1
                break;

            case "record":
                idlType.idlType.length; // $ExpectType 2
                break;

            default:
                idlType; // $ExpectType never
                break;
        }
    } else {
        idlType; // $ExpectType SingleTypeDescription
        console.log(idlType);
    }
    logExtAttrs(idlType.extAttrs);
}

function logValueDescription(valueDesc: webidl2.ValueDescription) {
    valueDesc.parent; // $ExpectType FieldType | ConstantMemberType | Argument || ConstantMemberType | Argument | FieldType
    console.log(valueDesc.type);
    switch (valueDesc.type) {
        case "string":
            valueDesc; // $ExpectType ValueDescriptionString
            valueDesc.value; // $ExpectType string
            console.log(valueDesc.value);
            break;

        case "number":
            valueDesc; // $ExpectType ValueDescriptionNumber
            valueDesc.value; // $ExpectType string
            console.log(valueDesc.value);
            break;

        case "boolean":
            valueDesc; // $ExpectType ValueDescriptionBoolean
            valueDesc.value; // $ExpectType boolean
            console.log(valueDesc.value);
            break;

        case "null":
            valueDesc; // $ExpectType ValueDescriptionNull
            break;

        case "Infinity":
            valueDesc; // $ExpectType ValueDescriptionInfinity
            valueDesc.negative; // $ExpectType boolean
            console.log(valueDesc.negative);
            break;

        case "NaN":
            valueDesc; // $ExpectType ValueDescriptionNaN
            break;

        case "sequence":
            valueDesc; // $ExpectType ValueDescriptionSequence
            valueDesc.value; // $ExpectType []
            valueDesc.value.length; // $ExpectType 0
            console.log(valueDesc.value);
            break;

        case "dictionary":
            valueDesc; // $ExpectType ValueDescriptionDictionary
            break;

        default:
            valueDesc; // $ExpectType never
            break;
    }
}
