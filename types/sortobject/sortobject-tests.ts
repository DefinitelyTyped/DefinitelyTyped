import sortobject = require("sortobject");

interface ObjectType {
	some: string;
}

const sortedObject1: ObjectType = sortobject<ObjectType>({ some: "object" });
const sortedObject2: ObjectType = sortobject({ some: "object" });
const sortedObject3: ObjectType = sortobject({ some: "object" }, (a: string, b: string) => {
	return a > b ? 1 : (a < b ? -1 : 0);
});
