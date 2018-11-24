import * as ldap2date from "ldap2date";

const time: string = ldap2date.toGeneralizedTime(new Date());
const date: Date = ldap2date.parse(time);
date.getFullYear();
