// The test cases written based on the moddle library unit tests.

import {
    AnyElement,
    coerceType,
    Descriptor,
    Element,
    Moddle,
    Ns,
    PackageDefinition,
    parseNameNs,
    PropertyDescriptor,
    TypeDefinition,
} from "moddle";

import { meta, properties, propertiesExtended, redefine, replace } from "./describers";
import { base, custom } from "./describers/extension";

const model: Moddle = new Moddle([properties, propertiesExtended]);
const propertiesModel: Moddle = new Moddle([properties]);
const extensionModel: Moddle = new Moddle([base, custom]);
const redefineModel: Moddle = new Moddle([redefine]);
const replaceModel: Moddle = new Moddle([replace]);
const metaModel: Moddle = new Moddle([meta]);

// == Model ==
const propsModdlePackage: PackageDefinition = model.getPackage("props");
const moddleCreatedElement: Element = model.create("props:Complex");

const moddleElement1: Element = model.create("props:ComplexCount");
const moddleElement2: Element = model.create("props:ComplexNesting");
const moddleCreatedElementWithAttr: Element = model.create("props:ReferencingCollection", {
    customElement: moddleElement1,
    key: "foo",
    references: [moddleElement1, moddleElement2],
    value: "bar",
});

const ModdleElementType: typeof Element = model.getType("props:Complex");
const moddleElementTypeDescriptor: Descriptor = model.getElementDescriptor(ModdleElementType);

const moddleCreateAnyElement: AnyElement = model.createAny("other:Foo", "http://other", { bar: "BAR" });
const moddleElementInstacePropertyDescriptor: PropertyDescriptor | undefined = model.getPropertyDescriptor(
    moddleCreatedElement,
    "id",
);
const moddleTypeDescriptor: TypeDefinition = model.getTypeDescriptor("props:Complex");

// == Package ==
const moddlePackage: PackageDefinition = model.getPackage("props");
const moddlePackageName: string = moddlePackage.name;
const moddlePackageUri: string = moddlePackage.uri;
const moddlePackagePrefix: string = moddlePackage.prefix;

// == Element Type ==
const ElementType: typeof Element = model.getType("props:Complex");
const type$escriptor: Descriptor = ElementType.$descriptor;
const type$model: Moddle = ElementType.$model;
const typeInstanceWithAttrs: Element = new ElementType({ body: "BAR" });
const typeInstance: Element = new ElementType();

// == Descriptor ==
const descriptor: Descriptor = model.getType("props:Complex").$descriptor;
const descriptorName: string = descriptor.name;
const descriptorNameSpace: Ns = descriptor.ns;
const descriptorProperties: PropertyDescriptor[] = descriptor.properties;
const descriptorPropertiesByName: Record<string, PropertyDescriptor> = descriptor.propertiesByName;
const descriptorPropertyDescriptor: PropertyDescriptor = descriptor.propertiesByName.id;
const descriptorPropertyDescriptorAlt: PropertyDescriptor = descriptor.propertiesByName["id"];

// == Element ==
const element: Element = model.create("props:Complex");
const element$attrs: Record<string, any> | undefined = element.$attrs;
const element$descriptor: Descriptor = element.$descriptor;
const element$type: string = element.$type;
const element$instaceOf: boolean = element.$instanceOf("props:Complex");

element.set("id", "ATTR_1");
element.set("props:booleanValue", true);
element.set("props:integerValue", -1000);
element.set("id", undefined);

element.$attrs.unknown = "UNKNOWN";

const element$attrsPropertyString: string = element.$attrs.id;
const element$attrsPropertyUndefined: undefined = element.$attrs.id;
const element$attrsPropertyNumber: number = element.$attrs["props:integerValue"];

const elementPropertyByName: any = element.get("props.any");

const elementProperty: any = element.any;
const elementPropertyNumber: number = element.integerValue;
const elementPropertyIdNumric: number | undefined = element.idNumeric;
const elenetPropertyElements: Element[] = element.references;

// == Any Element ==
const anyElement: AnyElement = model.createAny("other:Foo", "http://other", { bar: "BAR" });
const anyElement$type: string = anyElement.$type;
const anyElement$instanceOf: boolean = anyElement.$instanceOf("other:Foo");

interface AnyElementDescriptor {
    name: string;
    isGeneric: true;
    ns: {
        prefix: string;
        localName: string;
        uri: string;
    };
}
const anyElement$descriptor: AnyElementDescriptor = anyElement.$descriptor;

// == Type ==
const moddleType: TypeDefinition = model.getTypeDescriptor("props:Complex");
const moddleTypeMeta: object | undefined = moddleType.meta;

// == Property Descriptor ==
const propertyDescriptor = model.getType("props:Complex").$descriptor.propertiesByName.id;
const propertyDescriptorType: string = propertyDescriptor.type;
const propertyDescriptorInherited: boolean | undefined = propertyDescriptor?.inherited;

// == Namespace ==
interface ModdleNameSpace {
    name: string;
    prefix?: string;
    localName: string;
}
const nameSpaceByName: ModdleNameSpace = parseNameNs("foo");
const nameSpaceByNameAndDefaultPrefix: ModdleNameSpace = parseNameNs("foo", "bar");

// == Types ==
const realNumberModdleType: number = coerceType("Real", "420");
const booleanModdleType: boolean = coerceType("Boolean", "true");
const integerModdleType: number = coerceType("Integer", "12012");

const elementToConvert = { a: "A" };
const elementModdleType: typeof elementToConvert = coerceType("Element", elementToConvert);
