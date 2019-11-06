import { setupPolly } from 'setup-polly-jest';

setupPolly();
setupPolly({ recordIfExpired: true });
setupPolly({ adapters: ['xhr'] });

const context = setupPolly();

context.polly.recordingName;
context.polly.mode;

context.polly.stop();
context.polly.configure({});
context.polly.record();
