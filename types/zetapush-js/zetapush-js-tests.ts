import { Authentication, Client, WeakClient } from 'zetapush-js';

const weak = new WeakClient({
  sandboxId: ''
});

weak.onConnectionEstablished(() => {
  // onConnectionEstablished;
});
weak.connect();

const client = new Client({
  apiUrl: '',
  sandboxId: '',
  authentication: () => Authentication.simple({
    login: 'login',
    password: 'password'
  })
});
client.onConnectionEstablished(() => {
  // onConnectionEstablished;
});
client.connect();
