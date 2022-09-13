import createStore from "fragmented-store";
import * as React from "react";

const { Provider, useUsername, useAge, useStore } = createStore({
  username: "Aral",
  age: 31
});

export default function App() {
  return (
    <Provider>
      <Title />
      <UpdateTitle />
      <Age />
      <AllStore />
    </Provider>
  );
}

function Title() {
  const [username] = useUsername();

  return <h1>{username}</h1>;
}

function UpdateTitle() {
  const [username, setUsername] = useUsername();

  return (
    <button onClick={() => setUsername((s) => s + "a")}>
      Update {username}
    </button>
  );
}

function Age() {
  const [age, setAge] = useAge();

  return (
    <div>
      <div>{age}</div>
      <button onClick={() => setAge((s) => s + 1)}>Inc age</button>
    </div>
  );
}

function AllStore() {
  const [store, update] = useStore();

  return (
    <button onClick={() => update({ age: 31, username: "Aral" })}>Reset</button>
  );
}
