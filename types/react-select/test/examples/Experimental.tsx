import * as React from 'react';
import * as moment from 'moment';
import * as chrono from '../ChronoNodeDummy';

import Select, { components as SelectComponents } from 'react-select';

const createOptionForDate = (d: any) => {
  const date = moment.isMoment(d) ? d : moment(d);
  return {
    date,
    value: date.toDate(),
    label: date.calendar(undefined, {
      sameDay: '[Today] (Do MMM YYYY)',
      nextDay: '[Tomorrow] (Do MMM YYYY)',
      nextWeek: '[Next] dddd (Do MMM YYYY)',
      lastDay: '[Yesterday] (Do MMM YYYY)',
      lastWeek: '[Last] dddd (Do MMM YYYY)',
      sameElse: 'Do MMMM YYYY',
    }),
  };
};

const defaultOptions: any = ['today', 'tomorrow', 'yesterday'].map(i =>
  createOptionForDate(chrono.parseDate(i))
);

const createCalendarOptions = (date = new Date()) => {
  // $FlowFixMe
  const daysInMonth = Array.apply(null, {
    length: moment(date).daysInMonth(),
  }).map((x: any, i: number) => {
    const d = moment(date).date(i + 1);
    return { ...createOptionForDate(d), display: 'calendar' };
  });
  return {
    label: moment(date).format('MMMM YYYY'),
    options: daysInMonth,
  };
};

defaultOptions.push(createCalendarOptions());

const suggestions = [
  'sunday',
  'saturday',
  'friday',
  'thursday',
  'wednesday',
  'tuesday',
  'monday',
  'december',
  'november',
  'october',
  'september',
  'august',
  'july',
  'june',
  'may',
  'april',
  'march',
  'february',
  'january',
  'yesterday',
  'tomorrow',
  'today',
].reduce((acc: any, str: string) => {
  for (let i = 1; i < str.length; i++) {
    acc[str.substr(0, i)] = str;
  }
  return acc;
}, {});

const suggest = (str: string) =>
  str
    .split(/\b/)
    .map(i => suggestions[i] || i)
    .join('');

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const daysHeaderStyles = {
  marginTop: '5px',
  paddingTop: '5px',
  paddingLeft: '2%',
  borderTop: '1px solid #eee',
};
const daysHeaderItemStyles = {
  color: '#999',
  cursor: 'default',
  // display: 'block',
  fontSize: '75%',
  fontWeight: 500,
  display: 'inline-block',
  width: '12%',
  margin: '0 1%',
  textAlign: 'center' as 'center',
};
const daysContainerStyles = {
  paddingTop: '5px',
  paddingLeft: '2%',
};

const Group = (props: any) => {
  const { Heading, getStyles, children, label, innerProps, headingProps, cx } = props;
  return (
    <div aria-label={label} css={getStyles('group', props)} {...innerProps}>
      <Heading
        getStyles={getStyles}
        cx={cx}
        {...headingProps}
      >
        {label}
      </Heading>
      <div style={daysHeaderStyles}>// TODO css type
        {days.map((day, i) => (
          <span key={`${i}-${day}`} style={daysHeaderItemStyles}>// TODO css type
            {day}
          </span>
        ))}
      </div>
      <div style={daysContainerStyles}>{children}</div>// TODO css type
    </div>
  );
};

const getOptionStyles = (defaultStyles: any) => ({
  ...defaultStyles,
  display: 'inline-block',
  width: '12%',
  margin: '0 1%',
  textAlign: 'center',
  borderRadius: '4px',
});

const Option = (props: any) => {
  const { data, getStyles, innerRef, innerProps } = props;
  if (data.display === 'calendar') {
    const defaultStyles = getStyles('option', props);
    const styles = getOptionStyles(defaultStyles);
    if (data.date.date() === 1) {
      const indentBy = data.date.day();
      if (indentBy) {
        styles.marginLeft = `${indentBy * 14 + 1}%`;
      }
    }
    return (
      <span {...innerProps} css={styles} ref={innerRef}>
        {data.date.format('D')}
      </span>
    );
  } else return <SelectComponents.Option {...props} />;
};

class DatePicker extends React.Component<any> {
  state = {
    options: defaultOptions,
  };
  handleInputChange = (value: string) => {
    if (!value) {
      this.setState({ options: defaultOptions });
      return;
    }
    const date = chrono.parseDate(suggest(value.toLowerCase()));
    if (date) {
      this.setState({
        options: [createOptionForDate(date), createCalendarOptions(date)],
      });
    } else {
      this.setState({
        options: [],
      });
    }
  }
  render() {
    const { value } = this.props;
    const { options } = this.state;
    return (
      <Select
        {...this.props}
        components={{ Group, Option }}
        filterOption={null}
        isMulti={false}
        isOptionSelected={(o, v) => v.some(i => i.date.isSame(o.date, 'day'))}
        maxMenuHeight={380}
        onChange={this.props.onChange}
        onInputChange={this.handleInputChange}
        options={options}
        value={value}
      />
    );
  }
}

export default class Experimental extends React.Component {
  state = {
    value: defaultOptions[0],
  };
  handleChange = (value: any) => {
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    const displayValue = value && value.value ? value.value.toString() : 'null';
    return (
      <div>
        <pre>Value: {displayValue}</pre>
        <DatePicker value={value} onChange={this.handleChange} />
      </div>
    );
  }
}
