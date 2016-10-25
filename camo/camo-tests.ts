/// <reference path="./camo.d.ts" />

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

	class User extends CamoDocument<DocumentSchema> {
		public name: SchemaTypeExtended = String;
		public password: SchemaTypeExtended = String;
		public friends: SchemaTypeExtended = [String];
		public dateCreated: SchemaTypeExtended = {
			type: Date,
			default: Date.now
		};
		protected static collectionName = () => "users";
	}

	const newUser = User.create<UserSchema>({
		name: "user-1",
		password: "secret",
		friends: ["user-2", "user-3"]
	});

	newUser.save().then(done => {
		console.log(done._id);
	});

	User.find<UserSchema>({ name: "user-1" }).then(users => {
		users.forEach(user => {
			console.log(`Found document #${user._id} of user with name "${user.name}".`);
		});
	});

	User.count({ name: "user-1" }).then(count => console.log(`There are ${count} users with name "user-1"`));

});
