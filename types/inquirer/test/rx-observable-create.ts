import inquirer = require("inquirer");
import { Observable, Observer } from "rxjs";

const observe = Observable.create((obs: Observer<inquirer.DistinctQuestion>) => {
  obs.next({
    type: 'input',
    name: 'first_name',
    message: "What's your first name"
  });

  obs.next({
    type: 'input',
    name: 'last_name',
    message: "What's your last name",
    default() {
      return 'Doe';
    }
  });

  obs.next({
    type: 'input',
    name: 'phone',
    message: "What's your phone number",
    validate(value) {
      const pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    }
  });
  obs.complete();
});

inquirer.prompt(observe).then(answers => {
  console.log(JSON.stringify(answers, null, '  '));
});
