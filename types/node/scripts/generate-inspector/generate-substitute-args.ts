import * as schema from "./devtools-protocol-schema";
import { createListeners } from "./event-emitter";
import { capitalize, createDocs, flattenArgs, hasElements, isObjectReference, filterNull } from "./utils";

const INDENT = "    ";

// Turns a type into a type representing an array of that type
const arrify = (typeString: string) => {
  return typeString === '{}' ? `Array<${typeString}>` : `${typeString}[]`;
}

// Converts DevTools type to TS type
const createTypeString = (type: schema.Field, domain?: string): string => {
    return isObjectReference(type) ? type.$ref :
        type.type === "any"                ? "any" :
        type.type === "integer"            ? "number" :
        type.type === "number"             ? "number" :
        type.type === "boolean"            ? "boolean" :
        type.type === "string"             ? "string" :
        type.type === "array"              ? arrify(createTypeString(type.items, domain)) :
        type.type === "object"             ? "{}" : "never"; // "never" has yet to be observed
};

// Helper for createInterface -- constructs a list of interface fields
const createFieldsForInterface = (fields: schema.Parameter[], domain: string): string[] => {
    return fields ? [
        ...fields
            .map(prop => [
                ...createDocs(prop),
                `${prop.name}${prop.optional ? "?" : ""}: ${createTypeString(prop, domain)};`,
            ])
            .reduce(flattenArgs(), []),
    ] : [];
};

// Create an interface or type definition (the latter if the given type isn't an object)
const createTypeDefinition = (type: schema.Type, domain: string): string[] => {
    return [
        ...createDocs(type),
        ...(type.type === "object" ? [
            `interface ${type.id} {`,
            ...createFieldsForInterface(type.properties || [], domain)
                .map(line => `${INDENT}${line}`),
            "}",
        ] : [`type ${type.id} = ${createTypeString(type)};`]),
    ];
};

// Helper for for createPostFunctions -- returns the type of a callback
const createCallbackString = (commandName: string, returns: schema.Parameter[], domain: string): string => {
    return hasElements(returns) ?
        `(err: Error | null, params: ${domain}.${capitalize(commandName)}ReturnType) => void` :
        `(err: Error | null) => void`;
};

// Create declarations for overloads of Session#post
const createPostFunctions = (command: schema.Command, domain: string): string[] => {
    const fnName = "post";
    const callbackStr = createCallbackString(command.name, command.returns || [], domain);
    const result = createDocs(command);
    if (hasElements(command.parameters || [])) {
        const parts = [
            `${fnName}(`,
            `method: "${domain}.${command.name}", `,
            `params?: ${domain}.${capitalize(command.name)}ParameterType, `,
            `callback?: ${callbackStr}`,
            "): void;",
        ];
        const joined = parts.join('');
        if ((joined.length + 8) > 200) {
            parts[1] = INDENT + parts[1];
            parts[2] = INDENT + parts[2];
            parts[3] = INDENT + parts[3];
            result.push(...parts);
        } else {
            result.push(joined);
        }
    }
    result.push([
        `${fnName}(`,
        `method: "${domain}.${command.name}", `,
        `callback?: ${callbackStr}`,
        "): void;",
    ].join(""));
    return result;
};

/**
 * Given a parsed DevTools Protocol data file, generate an object that contains text values suitable for being
 * substituted into ./inspector.d.ts.template.
 * @param protocol The parsed contents of the JSON file from which the DevTools Protocol docs are generated.
 */
export const generateSubstituteArgs = (protocol: schema.Schema): NodeJS.Dict<string[]> => {
    const interfaceDefinitions: string[] = protocol.domains
        .map(item => {
            const typePool = (item.types || []).concat(filterNull([
                ...(item.commands || []).map(command => {
                    let result: schema.Type | null = null;
                    if (hasElements(command.parameters)) {
                        result = {
                            id: `${capitalize(command.name)}ParameterType`,
                            type: "object",
                            properties: command.parameters,
                        };
                    }
                    return result;
                }),
                ...(item.commands || []).map(command => {
                    let result: schema.Type | null = null;
                    if (hasElements(command.returns)) {
                        result = {
                            id: `${capitalize(command.name)}ReturnType`,
                            type: "object",
                            properties: command.returns,
                        };
                    }
                    return result;
                }),
                ...(item.events || []).map(event => {
                    let result: schema.Type | null = null;
                    if (hasElements(event.parameters)) {
                        result = {
                            id: `${capitalize(event.name)}EventDataType`,
                            type: "object",
                            properties: event.parameters,
                        };
                    }
                    return result;
                }),
            ]));
            return typePool.length > 0 ? [
                `namespace ${item.domain} {`,
                ...typePool
                    .map(type => createTypeDefinition(type, item.domain))
                    .reduce(flattenArgs(""))
                    .map(line => `${INDENT}${line}`),
                "}",
            ] : [];
        }).reduce(flattenArgs(""), []);

    const postOverloads: string[] = protocol.domains
        .map(item => (item.commands || [])
            .map(command => createPostFunctions(command, item.domain))
            .reduce(flattenArgs(""), []))
        .reduce(flattenArgs(""), []);

    const eventOverloads: string[] = createListeners(protocol.domains
        .map(item => {
            if (!item.events || item.events.length === 0) {
                return [];
            }
            return item.events
                .map(event => ({
                    comment: createDocs(event),
                    name: `${item.domain}.${event.name}`,
                    args: hasElements(event.parameters) ? [{
                        name: "message",
                        type: `InspectorNotification<${item.domain}.${capitalize(event.name)}EventDataType>`,
                    }] : [],
                }));
        })
        .reduce((acc, next) => acc.concat(next), [{
            comment: [
                "/**",
                " * Emitted when any notification from the V8 Inspector is received.",
                " */",
            ],
            name: "inspectorNotification",
            args: [{ name: "message", type: "InspectorNotification<{}>" }],
        }]));

    return {
        interfaceDefinitions,
        postOverloads,
        eventOverloads,
    };
};
