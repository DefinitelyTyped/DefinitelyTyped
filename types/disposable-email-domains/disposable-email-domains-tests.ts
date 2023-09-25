import disposableDomains from "disposable-email-domains";
import wildcardDomains from "disposable-email-domains/wildcard";

let length: number = disposableDomains.length;
let lengthWildcard: number = wildcardDomains.length;

for (let domain of disposableDomains) {
    console.log(domain);
}

for (let domain of wildcardDomains) {
    console.log(domain);
}
