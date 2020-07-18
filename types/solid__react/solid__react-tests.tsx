import * as React from 'react';

import { LoginButton, LogoutButton, AuthButton, useWebId, LoggedIn, LoggedOut, useLoggedIn, useLoggedOut, useLDflexValue, useLDflexList, useLDflex, Like } from "@solid/react";

export const TestElement: React.FC = () => {
  const webId = useWebId();
  const loggedIn = useLoggedIn();
  const loggedOut = useLoggedOut();
  const someValue = useLDflexValue('user.name');
  const someList = useLDflexList('user.friends');
  const someOtherValue: { toString: () => string } | undefined = useLDflex('user.name')[0];
  const someOtherList: Array<{ toString: () => string }> | undefined = useLDflex('user.name', true)[0];

  return (
    <>
      <LoginButton popup="popopfile.html"/>
      <LogoutButton className="logoutButton"/>
      <AuthButton popup="popufile.html" login="Log in" logout="Log out"/>
      <LoggedIn>You are logged in</LoggedIn>
      <LoggedOut>You are logged out</LoggedOut>
      <Like onSubmit={() => undefined}>Like this page</Like>
    </>
  );
};
