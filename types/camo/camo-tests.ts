import {
	connect,
	Document as CamoDocument,
	DocumentSchema,
	SchemaTypeExtended
} from "camo";

connect("mongodb://user:password@localhost:27017/database?authSource=admin").then(() => {
	let document = new CamoDocument();

	interface UserSchema extends DocumentSchema {
		name: string;
		password: string;
		friends: string[];
		dateCreated?: Date;
	}

	class User extends CamoDocument<UserSchema> {
		private readonly name: SchemaTypeExtended = String;
		private readonly password: SchemaTypeExtended = String;
		private readonly friends: SchemaTypeExtended = [String];
		private readonly dateCreated: SchemaTypeExtended = {
			type: Date,
			default: Date.now
		};
		static collectionName() {
			return "users";
		}
	}

	var newUser = User.create<UserSchema>({
		name: "user-1",
		password: "secret",
		friends: ["user-2", "user-3"]
	});

	newUser.save().then(done => {
		console.log(done._id);
	});

});
