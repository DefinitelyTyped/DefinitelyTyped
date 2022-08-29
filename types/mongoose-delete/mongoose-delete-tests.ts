import mongoose = require('mongoose');
import MongooseDelete = require('mongoose-delete');

interface PetDocument extends MongooseDelete.SoftDeleteDocument {
  name: string;
}
const PetSchema = new mongoose.Schema<PetDocument>({
  name: String,
});
// Override all methods
PetSchema.plugin(MongooseDelete, { overrideMethods: 'all' });
// or
PetSchema.plugin(MongooseDelete, { overrideMethods: true });

// Overide only specific methods
PetSchema.plugin(MongooseDelete, {
  overrideMethods: ['count', 'find', 'findOne', 'findOneAndUpdate', 'update'],
});
// or
PetSchema.plugin(MongooseDelete, {
  overrideMethods: ['count', 'countDocuments', 'find'],
});
// @ts-expect-error (unrecognized method names are disallowed)
PetSchema.plugin(MongooseDelete, { overrideMethods: ['count', 'find', 'errorXyz'] });

PetSchema.plugin(MongooseDelete, { overrideMethods: 'all', deletedAt: true });
PetSchema.plugin(MongooseDelete, { overrideMethods: 'all', deletedBy: true });
PetSchema.plugin(MongooseDelete, {
  overrideMethods: 'all',
  deletedByType: String,
});
PetSchema.plugin(MongooseDelete, { overrideMethods: 'all', deletedBy: true, indexFields: ['deleted'] });
PetSchema.plugin(MongooseDelete, { overrideMethods: 'all', deletedBy: true, indexFields: 'all' });
// @ts-expect-error (unrecognized indexFields are disallowed)
PetSchema.plugin(MongooseDelete, { overrideMethods: 'all', deletedBy: true, indexFields: 'invalid' });

const idUser = new mongoose.Types.ObjectId('53da93b16b4a6670076b16bf');

const Pet = mongoose.model<
  PetDocument,
  MongooseDelete.SoftDeleteModel<PetDocument>
>('Pet', PetSchema);

const Pet2 = mongoose.model(
  'Pet',
  PetSchema,
) as MongooseDelete.SoftDeleteModel<PetDocument>;

const fluffy = new Pet({ name: 'Fluffy' });

fluffy.delete(() => {});

fluffy.delete().then(() => {});

fluffy.delete(idUser, () => {});

fluffy.delete(idUser).then(() => {});

fluffy.restore(() => {});

// INFO: Example usage of deleteById static method
Pet.deleteById(idUser, (err, petDocument) => {
  // mongodb: { deleted: true, name: 'Fluffy', _id: '53da93b1...' }
});

// Delete multiple object, callback
Pet.delete((err: any, result: PetDocument) => {});
Pet.delete({ age: 10 }, (err: any, result: PetDocument) => {});
Pet.delete({}, idUser, (err, result) => {});
Pet.delete({ age: 10 }, idUser, (err, result) => {});

// Delete multiple object, promise
Pet.delete().exec((err, result) => {});
Pet.delete({ age: 10 }).exec((err, result) => {});
Pet.delete({}, idUser).exec((err, result) => {});
Pet.delete({ age: 10 }, idUser).exec((err, result) => {});

// Restore multiple object, callback
Pet.restore((err: any, result: PetDocument) => {});
Pet.restore({ age: 10 }, (err, result) => {});

// Restore multiple object, promise
Pet.restore().exec((err, result) => {});
Pet.restore({ age: 10 }).exec((err, result) => {});

// $ExpectType boolean | undefined
type deletedType = PetDocument["deleted"];

// $ExpectType Date | undefined
type deletedAtType = PetDocument["deletedAt"];

// Additional Methods for overrides
Pet.countDeleted({ age: 10 });
Pet.countWithDeleted({ age: 10 });
Pet.countDocumentsDeleted({ age: 10 });
Pet.countDocumentsWithDeleted({ age: 10 });
Pet.findDeleted({ age: 10 });
Pet.findWithDeleted({ age: 10 });
Pet.findOneDeleted({ age: 10 });
Pet.findOneWithDeleted({ age: 10 });
Pet.findOneAndUpdateDeleted({ age: 10 }, { name: 'Fluffy' });
Pet.findOneAndUpdateWithDeleted({ age: 10 }, { name: 'Fluffy' });
Pet.updateDeleted({ age: 10 }, { name: 'Fluffy' });
Pet.updateWithDeleted({ age: 10 }, { name: 'Fluffy' });
Pet.updateOneDeleted({ age: 10 }, { name: 'Fluffy' });
Pet.updateOneWithDeleted({ age: 10 }, { name: 'Fluffy' });
Pet.updateManyDeleted({ age: 10 }, { name: 'Fluffy' });
Pet.updateManyWithDeleted({ age: 10 }, { name: 'Fluffy' });
Pet.aggregateDeleted([{ $match: { age: 10 } }]);
Pet.aggregateWithDeleted([{ $match: { age: 10 } }]);
