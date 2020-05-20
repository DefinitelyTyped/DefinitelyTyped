import * as disposable from 'disposable-email-domains';

let length: number = disposable.length;

for (let domain of disposable) {
  console.log(domain);
}
