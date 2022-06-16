import { renderHook } from '@testing-library/react-hooks/dom';
import { cleanup, render, waitFor } from "@testing-library/react";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import { Tinytest } from "meteor/tinytest";
import * as React from 'react';
import {
  useLoggingIn,
  useLoggingOut,
  useUser,
  useUserId,
  withLoggingIn,
  WithLoggingInProps,
  withLoggingOut,
  WithLoggingOutProps,
  withUser,
  withUserId,
  WithUserIdProps,
  WithUserProps,
} from "meteor/react-meteor-accounts";

// Prepare method for clearing DB (doesn't need to be isomorphic).
if (Meteor.isServer) {
  Meteor.methods({
    reset() {
      Meteor.users.remove({});
    },
  });
}

if (Meteor.isClient) {
  // fixture data
  const username = "username";
  const password = "password";

  // common test actions
  async function login() {
    await new Promise<void>((resolve, reject) => {
      Meteor.loginWithPassword(username, password, (error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  }
  async function logout() {
    await new Promise<void>((resolve, reject) => {
      Meteor.logout((error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  }

  // common test arrangements
  async function beforeEach() {
    // reset DB; must complete before creation to avoid potential overlap
    await new Promise((resolve, reject) => {
      Meteor.call("reset", (error, result) => {
        if (error) reject(error);
        else resolve(result);
      });
    });
    // prepare sample user
    await new Promise<void>((resolve, reject) => {
      Accounts.createUser({ username, password }, (error) => {
        if (error) reject(error);
        else resolve();
      });
    });
    // logout since `createUser` auto-logs-in
    await logout();
  }

  // NOTE: each test body has three blocks: Arrange, Act, Assert.

  Tinytest.addAsync(
    "Hooks - useUserId - has initial value of `null`",
    async function (test, onComplete) {
      await beforeEach();

      const { result } = renderHook(() => useUserId());

      test.isNull(result.current);
      onComplete();
    }
  );

  Tinytest.addAsync(
    "Hooks - useUserId - is reactive to login",
    async function (test, onComplete) {
      await beforeEach();

      const { result, waitForNextUpdate } = renderHook(() => useUserId());
      // use `waitFor*` instead of `await`; mimics consumer usage
      login();
      await waitForNextUpdate();

      test.isNotNull(result.current);
      onComplete();
    }
  );

  Tinytest.addAsync(
    "Hooks - useUserId - is reactive to logout",
    async function (test, onComplete) {
      await beforeEach();
      await login();

      const { result, waitForNextUpdate } = renderHook(() => useUserId());
      // use `waitFor*` instead of `await`; mimics consumer usage
      logout();
      await waitForNextUpdate();

      test.isNull(result.current);
      onComplete();
    }
  );

  Tinytest.addAsync(
    "Hooks - useLoggingIn - has initial value of `false`",
    async function (test, onComplete) {
      await beforeEach();

      const { result } = renderHook(() => useLoggingIn());

      test.isFalse(result.current);
      onComplete();
    }
  );

  Tinytest.addAsync(
    "Hooks - useLoggingIn - is reactive to login starting",
    async function (test, onComplete) {
      await beforeEach();

      const { result, waitForNextUpdate } = renderHook(() => useLoggingIn());
      login();
      // first update will be while login strategy is in progress
      await waitForNextUpdate();

      test.isTrue(result.current);
      onComplete();
    }
  );

  Tinytest.addAsync(
    "Hooks - useLoggingIn - is reactive to login finishing",
    async function (test, onComplete) {
      await beforeEach();

      const { result, waitForNextUpdate } = renderHook(() => useLoggingIn());
      login();
      await waitForNextUpdate();
      // second update will be after login strategy finishes
      await waitForNextUpdate();

      test.isFalse(result.current);
      onComplete();
    }
  );

  Tinytest.addAsync(
    "Hooks - useLoggingOut - has initial value of `false`",
    async function (test, onComplete) {
      await beforeEach();

      const { result } = renderHook(() => useLoggingOut());

      test.isFalse(result.current);
      onComplete();
    }
  );

  Tinytest.addAsync(
    "Hooks - useLoggingOut - is reactive to logout starting",
    async function (test, onComplete) {
      await beforeEach();

      const { result, waitForNextUpdate } = renderHook(() => useLoggingOut());
      logout();
      // first update will be while logout is in progress
      await waitForNextUpdate();

      test.isTrue(result.current);
      onComplete();
    }
  );

  Tinytest.addAsync(
    "Hooks - useLoggingOut - is reactive to logout finishing",
    async function (test, onComplete) {
      await beforeEach();

      const { result, waitForNextUpdate } = renderHook(() => useLoggingOut());
      logout();
      await waitForNextUpdate();
      // second update will be after logout finishes
      await waitForNextUpdate();

      test.isFalse(result.current);
      onComplete();
    }
  );

  Tinytest.addAsync(
    "Hooks - useUser - has initial value of `null`",
    async function (test, onComplete) {
      await beforeEach();

      const { result } = renderHook(() => useUser());

      test.isNull(result.current);
      onComplete();
    }
  );

  Tinytest.addAsync(
    "Hooks - useUser - is reactive to login",
    async function (test, onComplete) {
      await beforeEach();

      const { result, waitForNextUpdate } = renderHook(() => useUser());
      // use `waitFor*` instead of `await`; mimics consumer usage
      login();
      await waitForNextUpdate();

      test.isNotNull(result.current);
      test.equal(
        result.current.username,
        username,
        "Expected username to match"
      );
      onComplete();
    }
  );

  Tinytest.addAsync(
    "Hooks - useUser - is reactive to logout",
    async function (test, onComplete) {
      await beforeEach();
      await login();

      const { result, waitForNextUpdate } = renderHook(() => useUser());
      // use `waitFor*` instead of `await`; mimics consumer usage
      logout();
      await waitForNextUpdate();

      test.isNull(result.current);
      onComplete();
    }
  );

  // Since the HOCs wrap with hooks, the logic is already tested in 'Hooks' tests, and we only really need to test for prop forwarding. However, doing so for the "non-initial" case of all these values seems more prudent than just checking the default of `null` or `false`.

  // :NOTE: these tests can be flaky (like 1 in 5 runs).

  Tinytest.addAsync(
    "HOCs - withUserId - forwards reactive value",
    async function (test, onComplete) {
      await beforeEach();
      function Foo({ userId }: WithUserIdProps) {
        // need something we can easily find; we don't know the id
        return <span>{Boolean(userId).toString()}</span>;
      }
      const FooWithUserId = withUserId(Foo);
      const { findByText } = render(<FooWithUserId />);

      login();

      await waitFor(() => findByText("true"));
      cleanup();
      onComplete();
    }
  );

  // :TODO: this is flaky, fails ~1 in 10
  Tinytest.addAsync(
    "HOCs - withUser - forwards reactive value",
    async function (test, onComplete) {
      await beforeEach();
      function Foo({ user }: WithUserProps) {
        return <span>{user?.username || String(user)}</span>;
      }
      const FooWithUser = withUser(Foo);
      const { findByText } = render(<FooWithUser />);

      login();

      await waitFor(() => findByText(username));
      cleanup();
      onComplete();
    }
  );

  Tinytest.addAsync(
    "HOCs - withLoggingIn - forwards reactive value",
    async function (test, onComplete) {
      await beforeEach();
      function Foo({ loggingIn }: WithLoggingInProps) {
        return <span>{loggingIn.toString()}</span>;
      }
      const FooWithLoggingIn = withLoggingIn(Foo);
      const { findByText } = render(<FooWithLoggingIn />);

      login();

      await waitFor(() => findByText("true"));
      cleanup();
      onComplete();
    }
  );

  // :TODO: this is flaky, fails ~1 in 5
  Tinytest.addAsync(
    "HOCs - withLoggingOut - forwards reactive value",
    async function (test, onComplete) {
      await beforeEach();
      function Foo({ loggingOut }: WithLoggingOutProps) {
        return <span>{loggingOut.toString()}</span>;
      }
      const FooWithLoggingOut = withLoggingOut(Foo);
      const { findByText } = render(<FooWithLoggingOut />);
      await login();

      logout();

      await waitFor(() => findByText("true"));
      cleanup();
      onComplete();
    }
  );
}
