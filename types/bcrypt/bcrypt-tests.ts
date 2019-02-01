
import bcrypt = require("bcrypt");

let num: number;
let str: string;
let bool: boolean;
let error: Error;

str = bcrypt.genSaltSync();
str = bcrypt.genSaltSync(num);
str = bcrypt.genSaltSync(num, str);

bcrypt.genSalt(num, (err: Error, salt: string): void => { error = err; str = salt; })
      .then(salt => str = salt)
      .catch(err => error = err);

bcrypt.genSalt(num, str, (err: Error, salt: string): void => { error = err; str = salt; })
      .then(salt => str = salt)
      .catch(err => error = err);

bcrypt.genSalt(num)
      .then(salt => str = salt)
      .catch(err => error = err);

bcrypt.genSalt(num, str)
      .then(salt => str = salt)
      .catch(err => error = err);

bcrypt.genSalt((err: Error, salt: string): void => { error = err; str = salt; })
      .then(salt => str = salt)
      .catch(err => error = err);

bcrypt.genSalt()
      .then(salt => str = salt)
      .catch(err => error = err);


str = bcrypt.hashSync(str, str);
str = bcrypt.hashSync(str, num);

bcrypt.hash(str, str, (err: Error, encrypted: string):void => { str = encrypted; })
      .then(encrypted => str = encrypted)
      .catch(err => error = err);
bcrypt.hash(str, str)
      .then(encrypted => str = encrypted)
      .catch(err => error = err);

bcrypt.hash(str, num, (err: Error, encrypted: string): void => { str = encrypted; })
      .then(encrypted => str = encrypted)
      .catch(err => error = err);
bcrypt.hash(str, num)
      .then(encrypted => str = encrypted)
      .catch(err => error = err);


bool = bcrypt.compareSync(str, str);

bcrypt.compare(str, str, (err: Error, same: boolean): void => { bool = same; })
      .then(same => bool = same)
      .catch(err => error = err);
bcrypt.compare(str, str)
      .then(same => bool = same)
      .catch(err => error = err);

num = bcrypt.getRounds(str);
