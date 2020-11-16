import auth, { Session } from 'solid-auth-client';

auth.trackSession(session => {
  if (!session)
    console.log('The user is not logged in');
  else
    console.log(`The user is ${session.webId}`);
});

auth.stopTrackSession(session => {
  if (!session)
    console.log('The user is not logged in');
  else
    console.log(`The user is ${session.webId}`);
});

auth.fetch('https://timbl.com/timbl/Public/friends.ttl').then(console.log);

async function login(idp: string) {
  const session = await auth.currentSession();
  if (!session)
    await auth.login(idp);
  else
    alert(`Logged in as ${session.webId}`);
}

async function loginWithOptions(idp: string) {
  const session = await auth.currentSession();
  if (!session)
    await auth.login(idp, {
      callbackUri: '/callback',
      popupUri: 'https://solid.community/common/popup.html',
      storage: localStorage,
    });
  else alert(`Logged in as ${session.webId}`);
}

async function popupLogin() {
  let session = await auth.currentSession();
  const popupUri = 'https://solid.community/common/popup.html';
  if (!session)
    session = await auth.popupLogin({ popupUri });
  alert(`Logged in as ${session.webId}`);
}

async function popupLoginWIthOptions() {
  let session = await auth.currentSession();
  const popupUri = 'https://solid.community/common/popup.html';
  if (!session)
    session = await auth.popupLogin({
      callbackUri: '/callback',
      popupUri,
      storage: localStorage,
    });
  alert(`Logged in as ${session.webId}`);
}

auth.logout().then(() => alert('Goodbye!'));

async function greetUser() {
  const session = await auth.currentSession();
  if (!session)
    alert('Hello stranger!');
  else
    alert(`Hello ${session.webId}!`);
}

auth.on('login', (session: Session) => console.log(session.webId));
auth.once('logout', () => console.log('Logged out'));
auth.addListener('session', (session: Session | null) => console.log('Might have logged out'));
