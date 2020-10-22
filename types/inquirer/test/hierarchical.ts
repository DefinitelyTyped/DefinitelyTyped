import inquirer = require("inquirer");

/**
 * Represents answers provided by the user.
 */
interface RPGAnswers {
    /**
     * The weapon chosen by the user.
     */
    weapon: string;

    /**
     * The direction chosen by the user.
     */
    direction: "Forward" | "Right" | "Left" | "Back";
}

/**
 * Heirarchical conversation example
 */
const directionsPrompt: inquirer.DistinctQuestion<RPGAnswers> = {
    type: 'list',
    name: 'direction',
    message: 'Which direction would you like to go?',
    choices: ['Forward', 'Right', 'Left', 'Back']
};

function main() {
    console.log('You find youself in a small room, there is a door in front of you.');
    exitHouse();
}

function exitHouse() {
    inquirer.prompt(directionsPrompt).then(answers => {
        if (answers.direction === 'Forward') {
            console.log('You find yourself in a forest');
            console.log(
                'There is a wolf in front of you; a friendly looking dwarf to the right and an impasse to the left.'
            );
            encounter1();
        } else {
            console.log('You cannot go that way. Try again');
            exitHouse();
        }
    });
}

function encounter1() {
    inquirer.prompt(directionsPrompt).then(answers => {
        const direction = answers.direction;
        if (direction === 'Forward') {
            console.log('You attempt to fight the wolf');
            console.log(
                'Theres a stick and some stones lying around you could use as a weapon'
            );
            encounter2b();
        } else if (direction === 'Right') {
            console.log('You befriend the dwarf');
            console.log('He helps you kill the wolf. You can now move forward');
            encounter2a();
        } else {
            console.log('You cannot go that way');
            encounter1();
        }
    });
}

function encounter2a() {
    inquirer.prompt(directionsPrompt).then(answers => {
        const direction = answers.direction;
        if (direction === 'Forward') {
            let output = 'You find a painted wooden sign that says:';
            output += ' \n';
            output += ' ____  _____  ____  _____ \n';
            output += '(_  _)(  _  )(  _ \\(  _  ) \n';
            output += '  )(   )(_)(  )(_) ))(_)(  \n';
            output += ' (__) (_____)(____/(_____) \n';
            console.log(output);
        } else {
            console.log('You cannot go that way');
            encounter2a();
        }
    });
}

function encounter2b() {
    inquirer
        .prompt<RPGAnswers>({
            type: 'list',
            name: 'weapon',
            message: 'Pick one',
            choices: [
                'Use the stick',
                'Grab a large rock',
                'Try and make a run for it',
                'Attack the wolf unarmed'
            ]
        })
        .then(() => {
            console.log('The wolf mauls you. You die. The end.');
        });
}

main();
