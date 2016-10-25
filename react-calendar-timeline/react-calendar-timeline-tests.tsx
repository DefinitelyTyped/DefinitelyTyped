/// <reference path="../react/react.d.ts" />
/// <reference path="../moment/moment.d.ts" />
/// <reference path="./react-calendar-timeline.d.ts"/>

import * as React from "react";
import * as moment from 'moment';
import ReactCalendarTimeline from 'react-calendar-timeline';

const groups = [
  {id: 1, title: 'group 1'},
  {id: 2, title: 'group 2'}
]

const items = [
  {id: 1, group: 1, title: 'item 1', start_time: moment(), end_time: moment().add(1, 'hour')},
  {id: 2, group: 2, title: 'item 2', start_time: moment().add(-0.5, 'hour'), end_time: moment().add(0.5, 'hour')},
  {id: 3, group: 1, title: 'item 3', start_time: moment().add(2, 'hour'), end_time: moment().add(3, 'hour')}
]

class ExampleOfUsingReactCalendarTimeline extends React.Component<{}, {}> {
     render(){
         return(
             <div>
                Rendered by react!
                <ReactCalendarTimeline groups={groups}
                          items={items}
                          defaultTimeStart={moment().add(-12, 'hour')}
                          defaultTimeEnd={moment().add(12, 'hour')}
                          />
            </div>
         );
    }      
};