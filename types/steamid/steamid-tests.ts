import SteamID = require("steamid");

let sid: SteamID;

sid = new SteamID("76561198006409530");
sid = SteamID.fromIndividualAccountID(46143802);

sid.universe = SteamID.Universe.PUBLIC;
sid.type = SteamID.Type.INDIVIDUAL;
sid.instance = SteamID.Instance.DESKTOP;
sid.accountid = 46143802;

sid.isValid();
sid.isGroupChat();
sid.isLobby();
sid.getSteam2RenderedID();
sid.getSteam2RenderedID(true);
sid.getSteam3RenderedID();
sid.getSteamID64();
