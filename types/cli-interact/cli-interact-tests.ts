import * as cliInteract from 'cli-interact';

cliInteract.getChar('Tell me one of', 'abcdef');
cliInteract.getChoiceByChar('frequency', ['daily', 'weekly', 'monthly']);
cliInteract.getChoiceByChar('frequency', ['daily', 'weekly', 'monthly'], true);
cliInteract.getChoice('frequency', ['daily', 'weekly', 'monthly']);
cliInteract.getChoice('frequency', ['daily', 'weekly', 'monthly'], {
  returnNumeric: true,
});
cliInteract.getIPversion(true);
cliInteract.getNumber('Case 1: You MAY give me a number: ', {allowNoAnswer: true});
cliInteract.getNumber('Case 2: You MUST give me a number: ');
cliInteract.getNumber('Case 3: You MUST give me an integer: ', true);
cliInteract.getNumber('Case 4: You MAY give me an answer. If you do, it MUST be an integer', {
    allowNoAnswer: true,
    requireInteger: true,
});
cliInteract.getYesNo('Is it true', true);
cliInteract.getYesNo('Is it true');
cliInteract.question('Tell me what do you want: ', {
  charlist: 'yn'
});
