/// <reference path="timelinejs3.d.ts" />

let date1: TL.ITimelineDate = {
  year: 1999,
  month: 3,
  day: 1,
  hour: 23,
  minute: 59,
  second: 59,
  millisecond: 123,
  display_date: 'Just Before Midnight, March 1'
};
let date2: TL.ITimelineDate = {
  year: 1999,
  month: 6,
  day: 31
};
let slideText: TL.ITimelineText = {
  headline: 'Slide 1',
  text: 'Description of slide one.'
};
let era: TL.ITimelineEra = {
  start_date: {
    year: 1998
  },
  end_date: {
    year: 2000
  },
  text: {
    headline: 'Era'
  }
};
let timelineConfig: TL.ITimelineConfig = {
  events: [
    {
      start_date: date1,
      end_date: date2,
      text: slideText,
      group: 'group',
      display_date: 'March 1, 1999',
      background: {
        color: 'blue'
      },
      autolink: true,
      unique_id: '123'
    }
  ],
  title: {
    text: {
      headline: 'Title',
      text: 'Sub-Title'
    }
  },
  eras: [era],
  scale: 'human'
};
let timelineOptions: TL.ITimelineOptions = {
  timenav_position: 'top',
  scale_factor: 0.8,
  zoom_sequence: [0.45, 0.8, 2, 4, 8, 16]
};

let timeline:TL.ITimeline = new TL.Timeline('timeline-embed', timelineConfig, timelineOptions);

timeline.goToId('123');
timeline.goTo(1);
timeline.goToStart();
timeline.goToEnd();
timeline.goToPrev();
timeline.goToNext();
timeline.add({
  start_date: { year: 1998 },
  text: { text: 'New Slide' }
});
timeline.remove(2);
timeline.removeId('456');
let slideData:TL.ITimelineSlideData = timeline.getData(1);
let slideDataById:TL.ITimelineSlideData = timeline.getDataById('123');
let slideByNumber:TL.ITimelineSlide = timeline.getSlide(1);
let slideById:TL.ITimelineSlide = timeline.getSlideById('123');
let current:TL.ITimelineSlide = timeline.getCurrentSlide();
timeline.updateDisplay();
timeline.setConfig(timelineConfig);
timeline.showMessage('A message.');
timeline.zoomIn();
timeline.zoomOut();
timeline.setZoom(5);
let id:string = timeline.current_id;
