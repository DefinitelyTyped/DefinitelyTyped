import Entities = require("./handlers/entities");
import Information = require("./Information");

export default function denormalise(parsed: Information.FileInfo): Entities.Entity[];
