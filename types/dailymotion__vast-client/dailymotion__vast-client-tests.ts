import {
  Ad,
  CompanionAd,
  Creative,
  CreativeCompanion,
  CreativeLinear,
  CreativeNonLinear,
  Macros,
  parseDuration,
  Storage,
  VASTClient,
  VastParseEvent,
  VASTParser,
  VASTTracker
} from '.';

const domParser = new DOMParser();

const isLinearCreative = (creative: Creative): creative is CreativeLinear =>
  true;
const isNonLinearCreative = (
  creative: Creative
): creative is CreativeNonLinear => true;
const isCompanion = (creative: Creative): creative is CreativeCompanion => true;

const url = 'https://test.com';

const clientTests = async () => {
  class TestStorage extends Storage {}

  // With default values
  const vastClient = new VASTClient();

  // With cappingFreeLunch
  new VASTClient(2);

  // With cappingMinimumTimeInterval
  new VASTClient(0, 2000);

  // With customStorage
  new VASTClient(0, 0, new TestStorage());

  const vast = await vastClient.get(url, {
    timeout: 10
  });

  for (const ad of vast.ads) {
    for (const creative of ad.creatives) {
      if (isLinearCreative(creative)) {
        creative.mediaFiles[0].apiFramework;
      } else if (isNonLinearCreative(creative)) {
        creative.variations[0].apiFramework;
      } else if (isCompanion(creative)) {
        creative.type;
      }
    }
  }

  const doc = domParser.parseFromString('<vast></vast>', 'text/xml');

  const parsedVast = await vastClient.parseVAST(doc, {
    urlHandler: {
      get: async (url, opts) => url
    }
  });

  parsedVast.ads;

  vastClient.hasRemainingAds() === true;
  (await vastClient.getNextAds()).ads;
  vastClient.getParser().on(VastParseEvent.AdParsed, () => {});
  vastClient.addURLTemplateFilter((url) => url);
  vastClient.removeLastURLTemplateFilter();
  vastClient.countURLTemplateFilters() === 1;
  vastClient.clearURLTemplateFilters();
};

const vastParserTests = async () => {
  const parser = new VASTParser();

  parser.on(VastParseEvent.Error, ({ maxWrapperDepth }) => {});
  parser.on(VastParseEvent.Warning, ({ ERRORCODE }) => {});
  parser.on(VastParseEvent.Resolving, ({ ERRORMESSAGE }) => {});
  parser.on(VastParseEvent.Resolved, ({ parentElement }) => {});
  parser.on(VastParseEvent.AdParsed, ({ message }) => {});

  parser.trackVastError(
    [
      {
        url
      }
    ],
    {
      anyObj: true
    },
    {
      anyObj: true
    },
    {
      anyObj: true
    }
  );

  await parser.fetchVAST(url);
  await parser.fetchVAST(url, 1);
  await parser.fetchVAST(url, 1, url);
  const fetchedVast = await parser.fetchVAST(url, 1, url, {} as Ad);
  fetchedVast.replace('', '');

  await parser.parseVAST(
    domParser.parseFromString('<vast></vast>', 'text/xml')
  );
  const parsedVast = await parser.parseVAST(
    domParser.parseFromString('<vast></vast>', 'text/xml'),
    {
      allowMultipleAds: false
    }
  );
  parsedVast.ads;

  parser.getEstimatedBitrate() === 5;
};

const vastTrackerTests = async () => {
  const client = new VASTClient();
  const ad = {} as Ad;
  const creative = {} as Creative;
  const variation = {} as CompanionAd;

  // With a client instance
  new VASTTracker(client, ad, creative);
  // For a companion ad
  new VASTTracker(client, ad, creative, variation);
  // With the initial muted state
  new VASTTracker(client, ad, creative, null, false);

  // Without a client instance
  const vastTracker = new VASTTracker(null, ad, creative);

  const macros: Macros = {
    test: '123'
  };

  vastTracker.error();
  vastTracker.error(macros);
  vastTracker.error(macros, false);

  vastTracker.load();
  vastTracker.load(macros);

  vastTracker.complete();
  vastTracker.complete(macros);

  vastTracker.click();
  vastTracker.click(url);
  vastTracker.click(url, macros);

  vastTracker.close();
  vastTracker.close(macros);

  vastTracker.skip();
  vastTracker.skip(macros);

  vastTracker.setDuration(5);

  vastTracker.setExpand(true);

  vastTracker.setFullscreen(true);

  vastTracker.setMuted(true);

  vastTracker.setPaused(true);

  vastTracker.setProgress(5);
  vastTracker.setProgress(5, macros);
  vastTracker.setProgress(5, macros, true);

  vastTracker.setSkipDelay(5);

  vastTracker.trackImpression();
  vastTracker.trackImpression(macros);

  vastTracker.trackViewableImpression();
  vastTracker.trackViewableImpression(macros);

  vastTracker.trackNotViewableImpression();
  vastTracker.trackNotViewableImpression(macros);

  vastTracker.trackUndeterminedImpression();
  vastTracker.trackUndeterminedImpression(macros);

  vastTracker.notUsed();
  vastTracker.notUsed(macros);

  vastTracker.otherAdInteraction();
  vastTracker.otherAdInteraction(macros);

  vastTracker.acceptInvitation();
  vastTracker.acceptInvitation(macros);

  vastTracker.adExpand();
  vastTracker.adExpand(macros);

  vastTracker.adCollapse();
  vastTracker.adCollapse(macros);

  vastTracker.minimize();
  vastTracker.minimize(macros);

  vastTracker.convertToTimecode(5);

  vastTracker.overlayViewDuration('00:00:00');
  vastTracker.overlayViewDuration('00:00:00', macros);

  vastTracker.verificationNotExecuted();
  vastTracker.verificationNotExecuted(macros);

  vastTracker.track('impression');
  vastTracker.track('impression', macros);
  vastTracker.track('impression', macros, true);
};

const otherTests = async () => {
  parseDuration('00:00:00') === 0;

  const storage = new Storage();
  storage.getItem('123');
  storage.setItem('123', '123');
  storage.removeItem('123');
  storage.clear();
};
