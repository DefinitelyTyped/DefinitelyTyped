import { Then, Given } from 'cypress-cucumber-preprocessor/steps';

Then(`I see {string} in the title`, (title: string) => {}); // $ExpectType void
Given('I open Google page', () => {}); // $ExpectType void
