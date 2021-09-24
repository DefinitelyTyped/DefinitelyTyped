import * as React from 'react';
import Scheduler, { SchedulerData } from 'react-big-scheduler';

const sd = new SchedulerData();

sd.next(); // #ExpectType void

function ReactBigSchedulerTest() {
    return (
        <Scheduler
            eventItemClick={() => {}}
            eventItemPopoverTemplateResolver={() => {}}
            eventItemTemplateResolver={() => {}}
            nextClick={() => {}}
            onSelectDate={() => {}}
            onViewChange={() => {}}
            prevClick={() => {}}
            schedulerData={sd}
        />
    );
}

export default ReactBigSchedulerTest;
