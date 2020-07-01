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
let slideMedia:TL.ITimelineMedia = {
  url: 'http://awebsite.com/image.jpg',
  thumbnail: 'http://awebsite.com/thumbnail.jpg',
  caption: 'Caption',
  credit: 'Copyright 2016'
};
let slide: TL.ITimelineSlideData = {
  start_date: date1,
  end_date: date2,
  text: slideText,
  media: slideMedia,
  group: 'group',
  display_date: 'March 1, 1999',
  background: {
    color: 'blue'
  },
  autolink: true,
  unique_id: '123'
}
let timelineConfig: TL.ITimelineConfig = {
  events: [slide],
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
  zoom_sequence: [0.45, 0.8, 2, 4, 8, 16],
  base_class: 'css-class',
  debug: true,
  default_bg_color: 'yellow',
  dragging: true,
  duration: 42,
  height: 400,
  initial_zoom: 2,
  is_embed: false,
  language: 'en',
  use_bc: true,
  hash_bookmark: false,
  script_path: '/scripts',
  marker_height_min: 60,
  marker_width_min: 100,
  marker_padding: 10,
  menubar_height: 80,
  optimal_tick_width: 2,
  start_at_end: false,
  start_at_slide: 1,
  timenav_height: 100,
  timenav_height_min: 80,
  timenav_height_percentage: 50,
  timenav_mobile_height_percentage: 80,
  track_events: ['back_to_start','nav_next','nav_previous','zoom_in','zoom_out'],
  width: 768,
  ga_property_id: '234klj23',
  trackResize: true,
  slide_padding_lr: 8,
  slide_default_fade: '0%'
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
