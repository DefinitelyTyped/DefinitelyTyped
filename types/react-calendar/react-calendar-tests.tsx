import * as React from 'react';
import Calendar from 'react-calendar';

interface State {
  value: Date | Date[] | null;
}

export default class Sample extends React.Component<{}, State> {
  state = {
    value: null,
  };

  onChange = (value: Date | Date[]) => {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="Sample">
        <header>
          <h1>react-calendar sample</h1>
        </header>
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Calendar
              onChange={this.onChange}
              showWeekNumbers
              value={value}
            />
          </main>
        </div>
      </div>
    );
  }
}
