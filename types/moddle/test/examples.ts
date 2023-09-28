// The test cases written based on the moddle github docs.

import { Descriptor, Element, Moddle, PropertyDescriptor } from "moddle";

const carsJSON = {
    name: "Cars",
    uri: "http://cars",
    prefix: "c",
    types: [
        {
            name: "Base",
            properties: [
                {
                    name: "id",
                    type: "String",
                    isAttr: true,
                },
            ],
        },
        {
            name: "Root",
            superClass: ["Base"],
            properties: [
                {
                    name: "cars",
                    type: "Car",
                    isMany: true,
                },
            ],
        },
        {
            name: "Car",
            superClass: ["Base"],
            properties: [
                {
                    name: "name",
                    type: "String",
                    isAttr: true,
                    default: "No Name",
                },
                {
                    name: "power",
                    type: "Integer",
                    isAttr: true,
                },
                {
                    name: "similar",
                    type: "Car",
                    isMany: true,
                    isReference: true,
                },
            ],
        },
    ],
};

const cars: Moddle = new Moddle([carsJSON]);

const taiga: Element = cars.create("c:Car", { name: "Taiga" });
const taiga$type: string = taiga.$type;
const taigaName: string = taiga.name;

const cheapCar: Element = cars.create("c:Car");
const cheapCarName: undefined = cheapCar.name;

cheapCar.get("similar").push(taiga);

const carDescriptor: Descriptor = cheapCar.$descriptor;
const carDescriptorProperties: PropertyDescriptor[] = carDescriptor.properties;
