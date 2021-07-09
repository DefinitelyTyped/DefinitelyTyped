import * as React from 'react';
import Calendar from 'react-calendar';

interface State {
  value: Date | null;
}

export default class Sample extends React.Component<{}, State> {
  state = {
    value: null,
  };

  onChange = (value: Date, e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
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
              closeCalendar={true}
              value={value}
              locale="ko-KR"
              formatDay={(locale, date) => date.getDate().toString()}
            />
          </main>
        </div>
      </div>
    );
  }
}
