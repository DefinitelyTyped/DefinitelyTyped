import * as React from 'react';
import { useState } from 'react';
import Timeline, {
    TimelineGroupBase,
    TimelineItemBase,
    TimelineItem,
    TimelineGroup,
    TimelineHeaders,
    SidebarHeader,
    DateHeader,
    CustomHeader,
} from 'react-calendar-timeline';
import * as moment from 'moment';
import { Moment } from 'moment';

const groups1: TimelineGroupBase[] = [{ id: 1, title: 'group 1' }, { id: 'two', title: 'group 2' }];

const items1: TimelineItemBase<Moment>[] = [
    { id: 1, group: 1, title: 'item 1', start_time: moment(), end_time: moment().add(1, 'hour') },
    { id: 2, group: 'two', title: 'item 2', start_time: moment().add(-0.5, 'hour'), end_time: moment().add(0.5, 'hour') },
    { id: 'three', group: 1, title: 'item 3', start_time: moment().add(2, 'hour'), end_time: moment().add(3, 'hour') },
];

class ExampleOfUsingReactCalendarTimeline extends React.Component {
    render() {
        return (
            <div>
                Rendered by react!
                <Timeline<TimelineItemBase<Moment>>
                    groups={groups1}
                    items={items1}
                    defaultTimeStart={moment().add(-12, 'hour')}
                    defaultTimeEnd={moment().add(12, 'hour')}
                />
            </div>
        );
    }
}

type TimelineGroupCustom = TimelineGroup<{ data: string }>;
type TimelineItemCustom = TimelineItem<{ data: string }, Moment>;

const groups2: TimelineGroupCustom[] = [
    { id: 1, title: 'group 1', data: '1' },
    { id: 2, title: 'group 2', data: '1' },
];

const items2: TimelineItemCustom[] = [
    { id: 1, group: 1, title: 'item 1', start_time: moment(), end_time: moment().add(1, 'hour'), data: '1' },
    {
        id: 2,
        group: 2,
        title: 'item 2',
        start_time: moment().add(-0.5, 'hour'),
        end_time: moment().add(0.5, 'hour'),
        data: '1',
    },
    {
        id: 3,
        group: 1,
        title: 'item 3',
        start_time: moment().add(2, 'hour'),
        end_time: moment().add(3, 'hour'),
        data: '1',
    },
];

class ExampleOfUsingReactCalendarTimelineWithCustomGroupAndItemExtension extends React.Component {
    render() {
        return (
            <div>
                Rendered by react!
                <Timeline<TimelineItemCustom, TimelineGroupCustom>
                    groups={groups2}
                    items={items2}
                    defaultTimeStart={moment().add(-12, 'hour')}
                    defaultTimeEnd={moment().add(12, 'hour')}
                />
            </div>
        );
    }
}

const Example: React.FC = () => (
    <Timeline groups={groups2} items={items2}>
        <TimelineHeaders>
            <SidebarHeader>
                {({ getRootProps }) => {
                    return <div {...getRootProps()}>Left</div>;
                }}
            </SidebarHeader>
            <DateHeader unit="primaryHeader" />
            <DateHeader />
            <CustomHeader height={50} headerData={{ someData: 'data' }} unit="year">
                {({ headerContext: { intervals }, getRootProps, getIntervalProps, showPeriod, data }) => {
                    return (
                        <div {...getRootProps()}>
                            {intervals.map(interval => {
                                const intervalStyle = {
                                    lineHeight: '30px',
                                    textAlign: 'center',
                                    borderLeft: '1px solid black',
                                    cursor: 'pointer',
                                    backgroundColor: 'Turquoise',
                                    color: 'white',
                                } as React.CSSProperties;
                                return (
                                    <div
                                        onClick={() => {
                                            showPeriod(interval.startTime, interval.endTime);
                                        }}
                                        {...getIntervalProps({
                                            interval,
                                            style: intervalStyle,
                                        })}
                                    >
                                        <div className="sticky">{interval.startTime.format('YYYY')}</div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                }}
            </CustomHeader>
        </TimelineHeaders>
    </Timeline>
);

const groups: TimelineGroupBase[] = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }];

const items: TimelineItemBase<number>[] = [
    { id: 1, group: 1, title: 'item 1', start_time: 1, end_time: 1 },
    { id: 2, group: 2, title: 'item 2', start_time: 1, end_time: 1 },
    { id: 3, group: 1, title: 'item 3', start_time: 1, end_time: 1 },
];

const defaultTimeStart = moment()
    .startOf('day')
    .toDate();
const defaultTimeEnd = moment()
    .startOf('day')
    .add(1, 'day')
    .toDate();

const Resize = () => {
    const [itemsState, setItems] = useState(items);

    return (
        <Timeline
            groups={groups}
            items={items}
            itemTouchSendsClick={false}
            stackItems
            itemHeightRatio={0.75}
            canMove={true}
            canResize={'both'}
            defaultTimeStart={defaultTimeStart}
            defaultTimeEnd={defaultTimeEnd}
            onItemMove={(itemId, dragTime, newGroupOrder) => {
                const group = groups[newGroupOrder];

                setItems(
                    itemsState.map(item =>
                        item.id === itemId
                            ? {
                                  ...item,
                                  ...{
                                      start_time: dragTime,
                                      end_time: dragTime + (item.end_time - item.start_time),
                                      group: group.id,
                                  },
                              }
                            : item,
                    ),
                );

                console.log('Moved', itemId, dragTime, newGroupOrder);
            }}
            onItemResize={(itemId, time, edge) => {
                setItems(
                    itemsState.map(item =>
                        item.id === itemId
                            ? {
                                  ...item,
                                  ...{
                                      start_time: edge === 'left' ? time : item.start_time,
                                      end_time: edge === 'left' ? item.end_time : time,
                                  },
                              }
                            : item,
                    ),
                );

                console.log('Resized', itemId, time, edge);
            }}
        />
    );
};

const TimelineDragTest = () => {
    const [itemsState, setItems] = useState(items);
    const [draggedItem, setDraggedItem] = useState<
        { item: TimelineItemBase<number>; group: TimelineGroupBase; time: number } | undefined
    >(undefined);

    return (
        <React.Fragment>
            <Timeline
                groups={groups}
                items={items}
                itemTouchSendsClick={false}
                stackItems
                itemHeightRatio={0.75}
                canMove={true}
                canResize={'both'}
                defaultTimeStart={defaultTimeStart}
                defaultTimeEnd={defaultTimeEnd}
                onItemMove={(itemId, dragTime, newGroupOrder) => {
                    const group = groups[newGroupOrder];

                    setItems(
                        itemsState.map(item =>
                            item.id === itemId
                                ? {
                                      ...item,
                                      ...{
                                          start_time: dragTime,
                                          end_time: dragTime + (item.end_time - item.start_time),
                                          group: group.id,
                                      },
                                  }
                                : item,
                        ),
                    );
                    setDraggedItem(undefined);
                    console.log('Moved', itemId, dragTime, newGroupOrder);
                }}
                onItemResize={(itemId, time, edge) => {
                    setItems(
                        itemsState.map(item =>
                            item.id === itemId
                                ? {
                                      ...item,
                                      ...{
                                          start_time: edge === 'left' ? time : item.start_time,
                                          end_time: edge === 'left' ? item.end_time : time,
                                      },
                                  }
                                : item,
                        ),
                    );
                    setDraggedItem(undefined);

                    console.log('Resized', itemId, time, edge);
                }}
                onItemDrag={itemDragObject => {
                    if (itemDragObject.eventType === 'move') {
                        const { itemId, newGroupOrder, time } = itemDragObject;
                        let item = draggedItem ? draggedItem.item : undefined;
                        if (!item) {
                            item = itemsState.find(i => i.id === itemId);
                        }
                        setDraggedItem({ item: item, group: groups[newGroupOrder], time });
                    }
                }}
            />
            {draggedItem && (
                <div
                    style={{
                        position: 'fixed',
                        left: 100,
                        bottom: 50,
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        padding: 10,

                        fontSize: 20,
                        borderRadius: 5,
                        zIndex: 85,
                    }}
                >
                    {`${moment(draggedItem.time).format('LLL')}, ${draggedItem.group ? draggedItem.group.title : ''}`}
                </div>
            )}
        </React.Fragment>
    );
};

const Basic: React.FC = () => {
    return (
        <Timeline
            groups={groups}
            items={items}
            sidebarContent={<div>Above The Left</div>}
            itemTouchSendsClick={false}
            stackItems
            itemHeightRatio={0.75}
            canMove={false}
            canResize={false}
            defaultTimeStart={defaultTimeStart}
            defaultTimeEnd={defaultTimeEnd}
        >
            <TimelineHeaders className="sticky">
                <SidebarHeader>
                    {({ getRootProps }) => {
                        return <div {...getRootProps()}>Left</div>;
                    }}
                </SidebarHeader>
                <DateHeader unit="primaryHeader" />
                <DateHeader />
            </TimelineHeaders>
        </Timeline>
    );
};
