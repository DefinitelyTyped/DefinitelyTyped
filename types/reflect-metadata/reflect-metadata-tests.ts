let target = {
 some_property: {

 }
}

let metadataKey = "key";
let metadataValue = "val";
let propertyKey = "some_property";

// define metadata on an object or property
Reflect.defineMetadata(metadataKey, metadataValue, target);
Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);

// check for presence of a metadata key on the prototype chain of an object or property
let result1 = Reflect.hasMetadata(metadataKey, target);
let result2 = Reflect.hasMetadata(metadataKey, target, propertyKey);

// check for presence of an own metadata key of an object or property
let result3 = Reflect.hasOwnMetadata(metadataKey, target);
let result4 = Reflect.hasOwnMetadata(metadataKey, target, propertyKey);

// get metadata value of a metadata key on the prototype chain of an object or property
let result5 = Reflect.getMetadata(metadataKey, target);
let result6 = Reflect.getMetadata(metadataKey, target, propertyKey);

// get metadata value of an own metadata key of an object or property
let result7 = Reflect.getOwnMetadata(metadataKey, target);
let result8 = Reflect.getOwnMetadata(metadataKey, target, propertyKey);

// get all metadata keys on the prototype chain of an object or property
let result9 = Reflect.getMetadataKeys(target);
let result10 = Reflect.getMetadataKeys(target, propertyKey);

// get all own metadata keys of an object or property
let result11 = Reflect.getOwnMetadataKeys(target);
let result12 = Reflect.getOwnMetadataKeys(target, propertyKey);

// delete metadata from an object or property
let result13 = Reflect.deleteMetadata(metadataKey, target);
let result14 = Reflect.deleteMetadata(metadataKey, target, propertyKey);

// apply metadata via a decorator to a constructor
@Reflect.metadata(metadataKey, metadataValue)
class C {
  // apply metadata via a decorator to a method (property)
  @Reflect.metadata(metadataKey, metadataValue)
  method() {
  }
}
