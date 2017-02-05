function  test_Vec3D() {
    var Vec3D: SFS2X.Entities.Data.Vec3D = new SFS2X.Entities.Data.Vec3D(0, 0, 0);
    var Vec3Dalt: SFS2X.Entities.Data.Vec3D = new SFS2X.Entities.Data.Vec3D(0, 0);

    var positionX: number = Vec3D.px;
    var positionY: number = Vec3D.py;
    var positionZ: number = Vec3D.pz;

    var isFloat: boolean = Vec3D.isFloat();

    return Vec3D;
};

function test_MatchExpression() {

    var exp = new SFS2X.Entities.Match.MatchExpression('rank', SFS2X.Entities.Match.NumberMatch.GREATER_THAN, 5)
        .and('country', SFS2X.Entities.Match.StringMatch.EQUALS, 'Italy');

    var exp = new SFS2X.Entities.Match.MatchExpression(SFS2X.Entities.Match.RoomProperties.IS_GAME, SFS2X.Entities.Match.BoolMatch.EQUALS, true)
        .and(SFS2X.Entities.Match.RoomProperties.HAS_FREE_PLAYER_SLOTS, SFS2X.Entities.Match.BoolMatch.EQUALS, true)
        .and('isGameStarted', SFS2X.Entities.Match.BoolMatch.EQUALS, false);

    var exp = new SFS2X.Entities.Match.MatchExpression('avatarData.shield.inUse', SFS2X.Entities.Match.BoolMatch.EQUALS, true);

    var exp = new SFS2X.Entities.Match.MatchExpression('avatarData.weapons.3.name', SFS2X.Entities.Match.StringMatch.EQUALS, "Narsil");
}

function test_MMOItemVariable() {
    var MMOItemVar1: SFS2X.Entities.Variables.MMOItemVariable = new SFS2X.Entities.Variables.MMOItemVariable('string', 'vlaue');
    var MMOItemVar2: SFS2X.Entities.Variables.MMOItemVariable = new SFS2X.Entities.Variables.MMOItemVariable('string', 'vlaue', 2);

    var MMOItemTypeName: string = MMOItemVar1.getTypeName(1);
    var MMOItemisNull: boolean = MMOItemVar1.isNull();
    var MMOItemString: string = MMOItemVar1.toString();

    var name: string = MMOItemVar1.name;
    var value: any = MMOItemVar1.value;

    return MMOItemVar1;
}

function test_BuddyListAddBuddyRequest() {
    var sfs = new SFS2X.SmartFox();
    sfs.send(new SFS2X.Requests.BuddyList.AddBuddyRequest('John'));
}

function test_BuddyListBlockBuddyRequest() {
    var sfs = new SFS2X.SmartFox();
    sfs.send(new SFS2X.Requests.BuddyList.BlockBuddyRequest('John', true));
}

function test_BuddyListGoOnlineRequest() {
    var sfs = new SFS2X.SmartFox();
    sfs.send(new SFS2X.Requests.BuddyList.GoOnlineRequest(true));
}

function test_BuddyListInitBuddyListRequest() {
    var sfs = new SFS2X.SmartFox();
    sfs.send(new SFS2X.Requests.BuddyList.InitBuddyListRequest());
}

function test_BuddyListRemoveBuddyRequest() {
    var sfs = new SFS2X.SmartFox();
    sfs.send(new SFS2X.Requests.BuddyList.RemoveBuddyRequest('John'));
}

function test_BuddyListSetBuddyVariablesRequest() {
    var sfs = new SFS2X.SmartFox();
    sfs.send(new SFS2X.Requests.BuddyList.SetBuddyVariablesRequest([]));
}

function test_GameCreateSFSGameRequest() {
    var sfs = new SFS2X.SmartFox();
    var settings = new SFS2X.Requests.Game.SFSGameSettings("DartsGame");
    settings.maxUsers = 2;
    settings.maxSpectators = 8;
    settings.isPublic = true;
    settings.minPlayersToStartGame = 2;
    settings.notifyGameStarted = true;

    sfs.send(new SFS2X.Requests.Game.CreateSFSGameRequest(settings));
}

function test_ErrorCodes() {
    SFS2X.ErrorCodes.setErrorMessage(13, "Le Groupe demandé n'est pas disponible - Salle: {0}; Groupe: {1}");
}

function test_SmartFoxaddEventListener() {
    var sfs = new SFS2X.SmartFox();

    function onConnection(event: SFS2X.ICONNECTION) {
        if(event.success)
        {
            // On Success
        }
    };
    function onConnectionLost(event: SFS2X.ICONNECTION_LOST) {
        // Print why connection was lost
        console.log(event.reason);
    };
    function onLoginError(event: SFS2X.ILOGIN_ERROR) {
        if (event.errorCode)
        {
            // handle error
        }
    };
    sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, onConnection, this);
    sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onConnectionLost, this);
    sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginError, this);
}
