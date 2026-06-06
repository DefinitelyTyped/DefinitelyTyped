import nameInitials from "name-initials";

// @ts-expect-error
nameInitials();
// @ts-expect-error
nameInitials(null);
// @ts-expect-error
nameInitials(undefined);
// $ExpectType string
nameInitials("name initials");
