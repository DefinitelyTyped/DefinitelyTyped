import inquirer = require("inquirer");
import askName = require("inquirer-npm-name");

(async () => {
    (await askName("name", inquirer)).name.toUpperCase();
})();
