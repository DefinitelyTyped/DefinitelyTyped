import React = require('react');
import InputMoment from 'input-moment';
import moment = require('moment');

const momentI = moment();

const OnChange: (m: moment.Moment) => void = (m: moment.Moment) => console.log(m);
const OnSave: () => void = () => console.log('Save');

const InputMomentTest: React.SFC = () => <InputMoment moment={momentI} onChange={OnChange} onSave={OnSave} />;
