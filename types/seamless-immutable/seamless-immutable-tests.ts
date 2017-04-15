import SI = require("seamless-immutable");

// Immutable instance method test
const isImmutable: boolean = SI.isImmutable(SI.from([0, 2]));
const error: Error = SI.ImmutableError("error");

// Immutable Array tests
const siArray: SI.ImmutableArray<number> = SI.from([0, 1, 2]);

const mutableArray: Array<number> = siArray.asMutable();
const mutableArray2: Array<number> = siArray.asMutable({ deep: true });
const arrayToObject: SI.ImmutableObject<number> = siArray.asObject((value: number) =>
  [value.toString(), value]
);
const flatMappedArray: SI.ImmutableArray<number> = siArray.flatMap((value: number) =>
  [value, value]
);

// Immutable Object tests
interface User {
  firstName: string;
  lastName: string;
};

interface Address {
  line1: string;
}

interface ExtendedUser extends User {
  address: Address;
}

const siObject: SI.ImmutableObject<User> = SI.from({
  firstName: "Mike",
  lastName: "test"
});
const extUser: SI.ImmutableObject<ExtendedUser> = siObject.set("address", {
  line1: "test"
});

const updatedAddress: SI.ImmutableObject<ExtendedUser> = extUser.setIn(["address", "line1"], "test2");
const mutableUser: ExtendedUser = updatedAddress.asMutable();
const mutableUser2: ExtendedUser = updatedAddress.asMutable({ deep: true });
const mergedUser: SI.ImmutableObject<User> = siObject.merge({ lastName: "hello" });
const updatedUser: SI.ImmutableObject<ExtendedUser> = extUser.update("firstName", (firstName): string =>
  firstName + "hehe"
);
const updatedInUser: SI.ImmutableObject<ExtendedUser> = extUser.updateIn(["address", "line1"], (line): string =>
  line + "new address"
);
const userWithoutAddress: SI.ImmutableObject<User> = extUser.without("address");
