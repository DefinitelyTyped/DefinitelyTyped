/* The index.d.ts type definition file is auto generated from the JS stubs that ship with Bitwig Studio; will add more coverage in the future. */

const transport = host.createTransport();
transport.tempo().markInterested();
transport.getPosition().markInterested();

const application = host.createApplication();

const trackBank = host.createMainTrackBank(8, 0, 0);
trackBank.channelCount().markInterested();
trackBank.setChannelScrollStepSize(8);

const popupBrowser = host.createPopupBrowser();

const sceneBank = host.createSceneBank(16);

const createScene = application.getAction('Create Scene');

const masterTrack = host.createMasterTrack(0);
masterTrack.exists().markInterested();