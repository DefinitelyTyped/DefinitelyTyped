import TimePicker from 'rc-time-picker';
import * as React from 'react';
import moment from 'moment';

<TimePicker
    value={moment()}
    onChange={(value: moment.Moment) => {}}
    placeholder={'Input time'}
    showSecond={false}
    onOpen={({open}: { open: boolean }) => {}}/>;
