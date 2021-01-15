import mongoose = require('mongoose');
import mongoose_delete = require('mongoose-delete');

interface PetDocument extends mongoose_delete.SoftDeleteDocument {
  name: string;
}
const PetSchema = new mongoose.Schema<PetDocument>({
  name: String,
});
// Override all methods
PetSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
// or
PetSchema.plugin(mongoose_delete, { overrideMethods: true });

// Overide only specific methods
PetSchema.plugin(mongoose_delete, {
  overrideMethods: ['count', 'find', 'findOne', 'findOneAndUpdate', 'update'],
});
// or
PetSchema.plugin(mongoose_delete, {
  overrideMethods: ['count', 'countDocuments', 'find'],
});
// or (unrecognized method names will be ignored)
PetSchema.plugin(mongoose_delete, { overrideMethods: ['count', 'find', 'errorXyz'] }); // $ExpectError

PetSchema.plugin(mongoose_delete, { overrideMethods: 'all', deletedAt: true });
PetSchema.plugin(mongoose_delete, { overrideMethods: 'all', deletedBy: true });
PetSchema.plugin(mongoose_delete, {
  overrideMethods: 'all',
  deletedByType: String,
});
PetSchema.plugin(mongoose_delete, { overrideMethods: 'all', deletedBy: true, indexFields: ['deleted'] });
PetSchema.plugin(mongoose_delete, { overrideMethods: 'all', deletedBy: true, indexFields: 'all' });
PetSchema.plugin(mongoose_delete, { overrideMethods: 'all', deletedBy: true, indexFields: 'invalid' }); // $ExpectError

const idUser = mongoose.Types.ObjectId('53da93b16b4a6670076b16bf');

const Pet = mongoose.model<
  PetDocument,
  mongoose_delete.SoftDeleteModel<PetDocument>
>('Pet', PetSchema);

const Pet2 = mongoose.model(
  'Pet',
  PetSchema,
) as mongoose_delete.SoftDeleteModel<PetDocument>;

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
