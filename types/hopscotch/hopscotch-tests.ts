

var tourDefinition: TourDefinition = {
  id: 'intro-tour',
  steps: [
    {
      target: '.popupTarget',
      placement: 'bottom',
      title: 'A tour step',
      content: 'A tour message'
    },
    {
      target: [".aSelector"],
      placement: 'bottom',

      yOffset: 10,
      width: 400,
      xOffset: -420,
      arrowOffset: 380
    },
    {
      target: '.domainPatterns form',
      placement: 'right',
      title: 'A question?',
      content: "Hello!",
      onShow: function () { }
    },
    {
      target: '.home-button',
      placement: 'left',
      title: "Let's get started",
      content: "Content",

      multipage: true,
      nextOnTargetClick: true,
      showNextButton: false
    },
    {
      target: '.buttons',
      placement: 'top',
      
      title: 'Another title',
      content: "A message",

      showNextButton: false,
      nextOnTargetClick: true,
      onShow: function () { }
    }
  ],
  skipIfNoElement: false,
  onClose: function () { },
  onEnd: function () { }
};

hopscotch.startTour(tourDefinition);
