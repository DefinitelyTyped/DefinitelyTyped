import * as React from 'react';
import Rheostat, { Orientation, Algorithm, PublicState } from 'rheostat';

type Element = React.ReactElement<any>;

function Basic(props: {}): Element {
  return <Rheostat />;
}

function MultiHandles(props: {}): Element {
  return (
    <Rheostat
      min={1}
      max={100}
      values={[1, 100]}
    />
  );
}

function CustomAlgorithm(props: {}): Element {
  const geometric: Algorithm = {
    getPosition(x: number, min: number, max: number) {
      return ((max / (max - min)) ** 0.5) * (((x - min) / max) ** 0.5) * 100;
    },

    getValue(x: number, min: number, max: number) {
      return (Math.floor(((x / 100) ** 2) * (max - min)) + min);
    }
  };

  return <Rheostat algorithm={geometric} />;
}

function ComponentOverrides(props: {}): Element {
  function Bar(props: {}): Element { return <hr />; }
  return (
    <Rheostat
      handle="button"
      progressBar={Bar}
    />
  );
}

function Vertical(props: {}): Element {
  return <Rheostat orientation="vertical" />;
}

function Pits(props: {}): Element {
  function Pit(props: {}): Element { return <input type="radio" />; }
  return (
    <Rheostat
      pitComponent={Pit}
      pitPoints={[50]}
    />
  );
}

function CustomValues(props: {}): Element {
  return (
    <Rheostat
      values={[1, 3, 5, 7, 9]}
    />
  );
}

function Handlers(props: {}): Element {
  function handler(data: PublicState): void {}
  return (
    <Rheostat
      onChange={handler}
      onValuesUpdated={handler}
    />
  );
}
