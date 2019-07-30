import React from 'react';
import InputMoment from 'input-moment';
import moment from 'moment';

const moment = moment.Moment();

const OnChange: (m: moment.Moment) => void = (m: moment.Moment) => console.log(m);
const OnSave: () => void = () => console.log('Save');

const InputMomentTest: React.SFC = () => <InputMoment moment={moment} onChange={OnChange} onSave={OnSave} />;
