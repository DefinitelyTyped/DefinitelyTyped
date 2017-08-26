// Type definitions for Knuddels UserApps API 1.0
// Project: https://developer.knuddels.de
// Definitions by: Knuddels GmbH & Co. KG <https://github.com/Knuddels>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// JSON definition
interface Json {
	[x: string]: string | number | boolean | Date | Json | JsonArray;
}
// tslint:disable-next-line no-empty-interface
interface JsonArray extends Array<string | number | boolean | Date | Json | JsonArray> { }
// serializable objects (for persistence)
type KnuddelsSerializable = string | number | boolean | User | BotUser;
interface KnuddelsJson {
	[x: string]: string | number | boolean | Date | KnuddelsJson | KnuddelsJsonArray | KnuddelsSerializable;
}
// tslint:disable-next-line no-empty-interface
interface KnuddelsJsonArray extends Array<string | number | boolean | Date | KnuddelsJson | KnuddelsJsonArray | KnuddelsSerializable> { }
// "data" that may be send between apps and between server and client
type KnuddelsEvent = string | Json | KnuddelsEventArray;
// tslint:disable-next-line no-empty-interface
interface KnuddelsEventArray extends Array<string | KnuddelsEvent | KnuddelsEventArray> { }

/**
 * App ist die abstrakte Klasse einer konkreten App, die ein Entwickler schreiben kann.
 * Im eigenen Javascript-Code muss eine Variable mit dem Namen <em>App</em> vorhanden sein, damit eine App lauffähig ist.
 */
interface App {
	/**
	 * Dieses Methode wird aufgerufen, sobald ein Nutzer versucht den Channel zu betreten.
	 * Die App kann nun entscheiden, ob der Nutzer den Channel betreten darf.
	 *
	 * <b style="color:red;">Hinweis:</b> Um ein responsives User Interface für den Nutzer,
	 * der den Channel betreten möchte zu garantieren, muss die App innerhalb von einer Sekunde auf diese Anfrage reagieren,
	 * damit ihre Antwort in das Ergebnis einfliesst.
	 *
	 * Mit bestimmten Smileyfeatures ist es derzeit trotzdem möglich, den Channel zu betreten.
	 * Diese Nutzer können nicht ausgesperrt werden:
	 * <ul>
	 * <li>Channelbesitzer</li>
	 * <li>Channelmoderatoren und HZAs</li>
	 * <li>Admins (sofern notwendig)</li>
	 * <li>Sysadmins</li>
	 * <li>User Apps Team (Mitarbeiter von Knuddels)</li>
	 * </ul>
	 *
	 * Ist der Channel mit einem Passwort geschützt und der Nutzer, der versucht den Channel zu betreten kennt das Passwort,
	 * so kann er nicht aus dem Channel ausgeschlossen werden.
	 */
	mayJoinChannel?(user: User): ChannelJoinPermission;
	/**
	 * Diese Methode wird jedes Mal aufgerufen, sobald ein Nutzer versucht eine öffentliche Nachricht zu senden.
	 * Die App kann nun entscheiden, ob die Nachricht veröffentlicht werden darf.
	 *
	 * Laufen mehrere Apps im selben Channel, so wird die Nachricht veröffentlicht, sofern alle Apps es erlauben.
	 *
	 * Dauert das Fragen aller Apps nach Erlaubnis länger als 10 Sekunden, so wird die Antwort genutzt, die bis dahin
	 * gegeben wurde.
	 */
	mayShowPublicMessage?(publicMessage: PublicMessage): boolean;
	/**
	 * Diese Methode wird jedes Mal aufgerufen, sobald ein Nutzer versucht eine öffentliche Handlung auszuführen.
	 * Die App kann nun entscheiden, ob die Handlung ausgeführt werden darf.
	 *
	 * Laufen mehrere Apps im selben Channel, so wird die Handlung ausgeführt, sofern alle Apps es erlauben.
	 *
	 * Dauert das Fragen aller Apps nach Erlaubnis länger als 10 Sekunden, so wird die Antwort genutzt, die bis dahin
	 * gegeben wurde.
	 */
	mayShowPublicActionMessage?(publicActionMessage: PublicActionMessage): boolean;
	/**
	 * Diese Methode wird aufgerufen, sobald die App startet.
	 * Dies ist der beste Zeipunkt um Werte zu initialisieren und aus der Persistenz zu lesen.
	 */
	onAppStart?(): void;
	/**
	 * Diese Methode wird aufgerufen, wenn ein User Knuddel an den BotUser gesendet hat.
	 * Es ist die Aufgabe der App in dieser Methode zu entscheiden, ob sie die Knuddel annimmt oder ablehnt.
	 * Wird diese Methode von der App nicht implementiert, so werden Knuddel automatisch akzeptiert.
	 * Ist diese Methode implementiert und es treten Fehler (Exceptions, Timeout,...) auf oder der Entwickler entscheidet nicht,
	 * was mit den Knuddel geschehen soll, so werden diese vom App-System automatisch an den Absender zurück geschickt.
	 * <br />
	 * <b style="color:red;">Wichtig:</b> Zum Zeitpunkt des Aufrufs dieser Methode wurden die Knuddel noch nicht an den BotUser übertragen.
	 */
	onBeforeKnuddelReceived?(knuddelTransfer: KnuddelTransfer): void;
	/**
	 * Diese Methode wird aufgerufen, sobald ein BotUser Knuddel von einem User erhalten hat.
	 */
	onKnuddelReceived?(sender: User, receiver: BotUser, knuddelAmount: KnuddelAmount, transferReason: string): void;
	/**
	 * Diese Methode wird aufgerufen, wenn die App sich darauf vorbereiten soll heruntergefahren zu werden.
	 * Als Parameter wird die geschätzte Zeit übergeben, die die App noch hat, bis sie heruntergefahren wird
	 * und der Aufruf App/onShutdown:event folgt.
	 *
	 * App/onPrepareShutdown:event kann dazu benutzt werden das Nutzererlebnis zu verbessern,
	 * sofern eine App heruntergefahren werden muss (bsp. für Updates).
	 * Eine Spiele-App könnte z.B. entscheiden, dass sie keine weiteren Spiele eröffnet und den Spielern offener Spiele
	 * die Information anzeigt, wie lange das Spiel noch läuft, bevor es unentschieden endet.
	 *
	 * <br><br><b style="color:red;">Achtung:</b> Die Methode kann im Lebenszyklus einer App mehrfach aufgerufen werden.
	 */
	onPrepareShutdown?(secondsTillShutdown: number): void;
	/**
	 * Diese Methode wird aufgerufen, wenn ein BotUser privat angeschrieben wird.
	 */
	onPrivateMessage?(privateMessage: PrivateMessage): void;
	/**
	 * Diese Methode wird aufgerufen, wenn im Channel der App
	 * eine öffentliche Nachricht geschrieben wird.
	 * Für Nachrichten von BotUsern wird diese Methode nicht aufgerufen.
	 */
	onPublicMessage?(publicMessage: PublicMessage): void;
	/**
	 * Diese Methode wird aufgerufen, wenn im Channel der App
	 * eine Event-Nachricht veröffentlicht wird.
	 * Für Nachrichten von BotUsern wird diese Methode nicht aufgerufen.
	 */
	onPublicEventMessage?(publicEventMessage: PublicEventMessage): void;
	/**
	 * Diese Methode wird aufgerufen, wenn im Channel der App
	 * eine öffentliche Handlung durchgeführt wird.
	 * Für Handlungen von BotUsern wird diese Methode nicht aufgerufen.
	 */
	onPublicActionMessage?(publicActionMessage: PublicActionMessage): void;
	/**
	 * Diese Methode wird aufgerufen, wenn eine App beendet wird.
	 * Sobald diese Methode aufgerufen wird, steht nur noch ein begrenzter Teil der API zur Verfügung.
	 * Die App sollte den kompletten Zustand in der Persistenz speichern, sodass der Zustand
	 * beim nächsten App/onAppStart:event wiederhergestellt werden kann.
	 *
	 * Während des Shutdowns können asynchrone each-Methoden, wie UserPersistenceNumbers/each:method
	 * und UserAccess/eachAccessibleUser:method nicht zuverlässig genutzt werden.
	 */
	onShutdown?(): void;
	/**
	 * Diese Methode wird aufgerufen, wenn ein User im Channel der App
	 * über die Systemfunktionen (/dice, /diceo) würfelt.
	 * Die App kann auf das Ergebnis zugreifen und die Daten für die Auswertung und Entscheidungen nutzen.
	 */
	onUserDiced?(diceEvent: DiceEvent): void;
	/**
	 * Diese Methode wird aufgerufen, wenn ein User den Channel der App betritt.
	 */
	onUserJoined?(user: User): void;
	/**
	 * Diese Methode wird aufgerufen, wenn ein User den Channel der App verlässt.
	 */
	onUserLeft?(user: User): void;
	/**
	 * Diese Methode wird aufgerufen, wenn aus einer anderen App ein Event mit sendAppEvent versendet wurde.
	 */
	onAppEventReceived?(appInstance: AppInstance, type: string, data: KnuddelsEvent): void;
	/**
	 * Diese Methode wird aufgerufen, wenn aus dem HTML User Interface ein Event mit
	 * sendEvent() gesendet wurde.
	 */
	onEventReceived?(user: User, type: string, data: KnuddelsEvent, appContentSession: AppContentSession): void;
	/**
	 * Diese Methode wird aufgerufen, wenn ein User Knuddel in seinen KnuddelAccount
	 * eingezahlt hat.
	 */
	onAccountReceivedKnuddel?(sender: User, receiver: BotUser, knuddelAmount: KnuddelAmount, transferReason: string, knuddelAccount: KnuddelAccount): void;
	/**
	 * Diese Methode wird aufgerufen, wenn sich die Anzahl der Knuddel auf einem KnuddelAccount eines User
	 * geändert hat.
	 */
	onAccountChangedKnuddelAmount?(user: User, knuddelAccount: KnuddelAccount, oldKnuddelAmount: KnuddelAmount, newKnuddelAmount: KnuddelAmount): void;
	/**
	 * Ermöglicht das Registrieren eigener Chatbefehle.
	 * In einem Channel kann nur eine App laufen, die einen bestimmten Chatbefehl nutzt.
	 * Versucht eine zweite App einen Chatbefehl zu registrieren, den eine andere
	 * App bereits nutzt, so wird ein Fehler geloggt und die App startet nicht bzw. fährt herunter.
	 *
	 * Die Struktur eines registrierten Chatbefehls ist:
	 * <code>commandName: function (user, params, command) {}</code>
	 *
	 *
	 * <ul>
	 * <li><code>commandName</code> ist der Name der Funktion, wie sie aufgerufen wird (beispielsweise /commandname)</li>
	 * <li><code>user</code> ist der Nutzer, der die Funktion aufgerufen hat</li>
	 * <li><code>params</code> sind die Parameter, die der Nutzer hinter dem Befehl eingegeben hat (beispielsweise /commandname params)</li>
	 * <li><code>command</code> ist der Name des Befehl selbst (beispielsweise commandName)</li>
	 * </ul>
	 */
	chatCommands?: { [commandName: string]: (user: User, params: string, command: string) => void };
}

/**
 * Ermöglicht Zugriff auf Informationen zu Apps und Events zwischeneinander.
 *
 * Die Instanz von <code>AppAccess</code> erhält man über den KnuddelsServer
 * mit KnuddelsServer.getAppAccess()
 */
declare class AppAccess {
	/**
	 * Liefert die Instanz der eigenen App.
	 */
	getOwnInstance(): AppInstance;
	/**
	 * Liefert die Instanzen aller anderen Apps, die gerade in diesem Channel laufen.
	 * @since AppServer 82904
	 */
	getAllRunningAppsInChannel(includeSelf?: boolean): AppInstance[];
	/**
	 * Liefert die Instanzen aller anderen Apps, die gerade in diesem Channel laufen.
	 * @since AppServer 82904
	 */
	getRunningAppInChannel(appId: string): (AppInstance|null);
}

/**
 * Repräsentiert den visuellen Inhalt einer Applikation, der Usern angezeigt werden soll.
 */
declare class AppContent {
	/**
	 * Liefert den AppViewMode.
	 */
	getAppViewMode(): AppViewMode;
	/**
	 * Liefert das HTMLFile, das beim Anlegen des AppContents
	 * genutzt wurde.
	 */
	getHTMLFile(): HTMLFile;
	/**
	 * Liefert die Breite des AppContent.
	 */
	getWidth(): number;
	/**
	 * Liefert die Höhe des AppContent.
	 */
	getHeight(): number;
	/**
	 * Liefert die LoadConfiguration, mit der die Optik beim Laden des HTML User Interface beeinflusst werden kann.
	 */
	getLoadConfiguration(): LoadConfiguration;
	/**
	 * Liefert einen AppContent, der das HTMLFile als Overlay oben rechts im Channel anzeigt.
	 */
	static overlayContent(htmlFile: HTMLFile, width: number, height: number): AppContent;
	/**
	 * Liefert einen AppContent, der das HTMLFile als Overlay (200x350) oben rechts im Channel anzeigt.
	 */
	static overlayContent(htmlFile: HTMLFile): AppContent;
	/**
	 * Liefert einen AppContent, der das HTMLFile im Applet/HTML-Chat
	 * als Popup (300x400) und auf Android als Fullscreen-View anzeigt.
	 */
	static popupContent(htmlFile: HTMLFile): AppContent;
	/**
	 * Liefert einen AppContent, der das HTMLFile im Applet/HTML-Chat
	 * als Popup und auf Android als Fullscreen-View anzeigt.
	 */
	static popupContent(htmlFile: HTMLFile, width: number, height: number): AppContent;
	/**
	 * Sendet Daten an alle Nutzer, die diesen AppContent geöffnet haben.
	 */
	sendEvent(type: string, data?: KnuddelsEvent): void;
	/**
	 * Liefert eine Liste aller User, die diesen AppContent
	 * geöffnet haben.
	 */
	getUsers(): User[];
	/**
	 * Liefert eine Liste aller AppContentSessions, die dieses AppContent,
	 * die User gerade geöffnet haben.
	 */
	getSessions(): AppContentSession[];
	/**
	 * Ersetzt den AppContent, bei allen Usern, die diesen AppContent
	 * geöffnet haben durch den neuen AppContent.
	 *
	 * <br /><br /><b><font color="red">Hinweis:</font></b> Es können nur AppContent mit demselben AppViewMode
	 * zum Ersetzen genutzt werden.
	 */
	replaceWithAppContent(newAppContent: AppContent): void;
	/**
	 * Entfernt diesen AppContent, bei allen Usern, die diesen AppContent
	 * geöffnet haben.
	 */
	remove(): void;
	/**
	 * Fügt einen Listener hinzu, der aufgerufen wird, wenn jemand den AppContent schließt.
	 */
	addCloseListener(callback: { user: User; appContent: AppContent; }): void;
}

/**
 * Repräsentiert den visuellen Inhalt einer App, der einem User angezeigt wird.
 */
declare class AppContentSession {
	/**
	 * Sendet Daten an den verbundenen Client.
	 */
	sendEvent(type: string, data?: KnuddelsEvent): void;
	/**
	 * Liefert den AppViewMode.
	 */
	getAppViewMode(): AppViewMode;
	/**
	 * Entfernt die AppContentSession beim verbundenen User.
	 */
	remove(): void;
	/**
	 * Liefert den User.
	 */
	getUser(): User;
	/**
	 * Liefert den verbundenen AppContent.
	 */
	getAppContent(): AppContent;
}

/**
 * Die Instanz von <code>AppInfo</code> zur laufenden App erhält man über die AppInstance
 * mit appInstance.getAppInfo()
 */
declare class AppInfo {
	/**
	 * Liefert die AppUid.
	 * Diese ist für jede Sub-Channel Instanz der App unterschiedlich.
	 * Wenn RootAppUid == AppUid dann ist dies die Root-App-Instanz.
	 */
	getAppUid(): number;
	/**
	 * Liefert die RootAppUid.
	 * Diese ist für jede Sub-Channel Instanz der App gleich.
	 * Wenn RootAppUid == AppUid dann ist dies die Root-App-Instanz.
	 *
	 * Sie wird für den Link für Auszahlungen aus einem Knuddel-Account benötigt: <code>/knuddelaccount payout:&lt;RootAppUid&gt;:&lt;BETRAG&gt;</code>
	 */
	getRootAppUid(): number;
	/**
	 * Liefert den in der Konfiguration eingestellten Namen der App.
	 */
	getAppName(): string;
	/**
	 * Liefert die Version der App, die in der Konfiguration eingestellt wurde.
	 */
	getAppVersion(): string;
	/**
	 * Liefert die eindeutige Id der App.
	 * Die appId setzt sich zusammen aus
	 * <ul>
	 * 	<li>id des Entwicklungsservers</li>
	 * 	<li>FTP-Nutzername</li>
	 * 	<li>Ordnername der App -> appKey</li>
	 * </ul>
	 */
	getAppId(): string;
	/**
	 * Liefert den eindeutigen Key der App.
	 * Der appKey ist der Ordnername, in dem die App liegt.
	 */
	getAppKey(): string;
	/**
	 * Liefert den Entwickler der App, falls die serverId knuddelsDE oder knuddelsDEV ist, ansonsten null.
	 */
	getAppDeveloper(): User;
	/**
	 * Liefert die Liste der AppManager für diese App. Die Channelbesitzer zählen automatisch auch als AppManager.
	 */
	getAppManagers(): User[];
	/**
	 * Liefert den Steuersatz, der bei Auszahlung bereits genutzer Knuddel von einem
	 * KnuddelAccount an einen User
	 * anfällt. Die anfallenden Steuern werden bei Auszahlung vom BotUser
	 * abgezogen.
	 */
	getTaxRate(): number;
	/**
	 * Liefert den KnuddelAmount, der an Steuern anfallen würde,
	 * wenn alle User jetzt all ihre Knuddel aus ihrem
	 * KnuddelAccount abheben würden.
	 */
	getTotalTaxKnuddelAmount(): KnuddelAmount;
	/**
	 * Liefert den KnuddelAmount, der jetzt noch vom
	 * BotUser an KnuddelAccounts
	 * übertragen werden kann, so dass für alle Knuddel noch die Steuern bezahlt werden können.
	 */
	getMaxPayoutKnuddelAmount(): KnuddelAmount;
}

/**
 * Repräsentiert die Instanz einer App.
 *
 * Die eigene Instanz von <code>AppInstance</code> erhält man über das AppAccess-Objekt
 * mit appAccess.getOwnInstance()
 */
declare class AppInstance {
	/**
	 * Liefert die AppInfo.
	 */
	getAppInfo(): AppInfo;
	/**
	 * Sendet ein App-Event an diese App-Instanz.
	 */
	sendAppEvent(type: string, data: KnuddelsEvent): void;
	/**
	 * Informiert, ob die aktuelle AppInstanz eine Root-Instanz ist.
	 */
	isRootInstance(): boolean;
	/**
	 * Liefert die Root-Instanz der aktuellen App-Instanz.
	 */
	getRootInstance(): RootAppInstance;
	/**
	 * Liefert alle App-Instanzen dieser App in diesem Channel und Subchannels.
	 * Mit <code>includeSelf = false</code> kann man die eigene Instanz ausschließen.
	 */
	getAllInstances(includeSelf?: boolean): AppInstance[];
	/**
	 * Liefert den Startzeitpunkt dieser AppInstance.
	 */
	getStartDate(): Date;
	/**
	 * Liefert die Namen der ChatCommands, die diese AppInstnce derzeit registriert hat.
	 */
	getRegisteredChatCommandNames(): (string[]|null);
	/**
	 * Liefert den Namen des Channels in dem diese AppInstance läuft.
	 */
	getChannelName(): string;
}

/**
 * Jede App besitzt eine AppPersistence in der global für diese App
 * Informationen gespeichert werden können. An die Instanz der AppPersistence gelangt man durch den Aufruf
 * KnuddelsServer.getPersistence();.
 */
declare class AppPersistence extends Persistence {
}

/**
 * Eine Instanz eines AppProfileEntry repräsentiert einen von einer App erzeugen Profileintrag in Profilen von Usern.
 */
declare class AppProfileEntry {
	/**
	 * Liefert den key für den die Topliste, die den Profileintrag erzeugt angelegt wurde.
	 */
	getKey(): string;
	/**
	 * Liefert den getDisplayType
	 */
	getDisplayType(): ToplistDisplayType;
	/**
	 * Liefert das Toplist-Objekt.
	 */
	getToplist(): Toplist;
}

/**
 * Mit einer Instanz von AppProfileEntryAccess kann eine App
 * AppProfileEntry-Objekte (Profileinträge) erzeugen und verwalten.
 *
 * Die Instanz für die <code>AppProfileEntryAccess</code> erhält man über das KnuddelsServer-Objekt
 * mit KnuddelsServer.getAppProfileEntryAccess()
 *
 * <br><br><b style="color:red;">Achtung:</b> Derzeit darf eine App bis zu <b>fünf</b> AppProfileEntries haben.
 * <br><br><b style="color:red;">Achtung:</b> Profileinträge werden nur dann angezeigt, wenn der Channel sichtbar ist.
 */
declare class AppProfileEntryAccess {
	/**
	 * Liefert die Liste aller AppProfileEntry-Objekte, die diese App erzeugt hat.
	 */
	getAllProfileEntries(): AppProfileEntry[];
	/**
	 * Liefert den AppProfileEntry für den übergebenen userPersistenceNumberKey.
	 */
	getAppProfileEntry(userPersistenceNumberKey: string): AppProfileEntry;
	/**
	 * Erzeugt oder aktualisiert ein AppProfileEntry anhand der übergebenen Toplist
	 * und dem ToplistDisplayType und liefert den AppProfileEntry im Anschluss zurück.
	 *
	 * Profileinträge, die erzeugt werden, sind nur sichtbar, solange die App läuft und werden im Profil ausgeblendet, sofern die App aus ist.
	 */
	createOrUpdateEntry(toplist: Toplist, toplistDisplayType: ToplistDisplayType): AppProfileEntry;
	/**
	 * Löscht den übergebenen AppProfileEntry.
	 */
	removeEntry(appProfileEntry: AppProfileEntry): void;
}

/**
 * Liefert Informationen über einen AppServer.
 *
 * Die Instanz von <code>AppServerInfo</code> erhält man über den KnuddelsServer
 * mit KnuddelsServer.getAppServerInfo()
 */
declare class AppServerInfo extends ServerInfo {
}

/**
 * null
 */
declare class AppViewMode {
	/**
	 *
	 */
	static readonly Overlay: AppViewMode;
	/**
	 * Zum Öffnen eines Popups durch das HTML User Interface
	 */
	static readonly Popup: AppViewMode;
}

/**
 * Ein BotUser repräsentiert einen Nutzer, der für die App als Nutzer im Channel interagieren kann.
 *
 * Die Instanz für den <code>Standard-BotUser</code> erhält man über das KnuddelsServer-Objekt
 * mit KnuddelsServer.getDefaultBotUser()
 */
declare class BotUser extends User {
	/**
	 * Sendet eine öffentliche Nachricht in den Channel.
	 */
	sendPublicMessage(message: string): void;
	/**
	 * Sendet eine öffentliche Handlung in den Channel.
	 * Dies funktioniert so, als ob der BotUser /me TEXT im Chat eingeben würde.
	 */
	sendPublicActionMessage(actionMessage: string): void;
	/**
	 * Sendet eine private Nachricht an bestimmte Nutzer.
	 */
	sendPrivateMessage(message: string, users?: User[]): void;
	/**
	 * Sendet eine persistente Nachricht an einen bestimmten Nutzer.
	 */
	sendPostMessage(topic: string, text: string, receivingUser?: User): void;
	/**
	 * Transferiert eine bestimmte Anzahl Knuddel an einen Zielnutzer oder KnuddelAccount.<br /><br />
	 * <b style="color:red;">Wichtiger Hinweis:</b> Sollte die App versuchen mehr Knuddel zu transferieren,
	 * als sie besitzt, so wird der <code>onError</code>-Callback aufgerufen und die App transferiert so viele Knuddel, wie möglich.
	 * Zudem werden die Schulden für den Channelbesitzer gemerkt. Sobald sich der Channelbesitzer einloggt, erhält er einen Hinweis über offene Schulden
	 * und sollte diese direkt begleichen.
	 * Hat ein Channelbesitzer eine gewisse Menge Schulden angesammelt, so schalten wir alle Apps in diesem Channel ab.
	 * <br />Es können nur Knuddel transferiert werden zu Nutzern mit <code>UserType.Human</code>.
	 */
	transferKnuddel(
		receivingUserOrAccount: User | KnuddelAccount,
		knuddelAmount: KnuddelAmount,
		displayReasonText: string): void;
	transferKnuddel(
		receivingUserOrAccount: User | KnuddelAccount,
		knuddelAmount: KnuddelAmount,
		parameters?: {
			displayReasonText?: string;
			transferDisplayType?: KnuddelTransferDisplayType;
			onSuccess?(): void;
			onError?(message: string): void;
		}): void;
}

/**
 * Ein Channel ist ein Raum in dem die App läuft.
 *
 * Die Instanz für den <code>Channel</code> erhält man über das KnuddelsServer-Objekt
 * mit KnuddelsServer.getChannel()
 */
declare class Channel {
	/**
	 * Gibt Zugriff auf das ChannelConfiguration-Objekt des Channels.
	 */
	getChannelConfiguration(): ChannelConfiguration;
	/**
	 * Gibt Zugriff auf das ChannelRestrictions-Objekt des Channels.
	 */
	getChannelRestrictions(): ChannelRestrictions;
	/**
	 * Gibt Zugriff auf das ChannelDesign-Objekt des Channels.
	 * @since AppServer 87470, ChatServer 87470
	 */
	getChannelDesign(): ChannelDesign;
	/**
	 * Gibt Zugriff auf Nutzer, die gerade im Channel online sind.
	 */
	getOnlineUsers(...userType: UserType[]): User[];
	/**
	 * Liefert die Information, ob in diesem Channel Videos gestreamt werden können.
	 */
	isVideoChannel(): boolean;
	/**
	 * Liefert die VideoChannelData des Channels.
	 */
	getVideoChannelData(): VideoChannelData;
	/**
	 * Liefert den Namen des Channels.
	 */
	getChannelName(): string;
	/**
	 * Liefert den Namen des Root-Channels (nur relevant, falls die App Tochterchannel haben kann).
	 */
	getRootChannelName(): string;
	/**
	 * Liefert den ChannelTalkMode, in dem sich der Channel gerade befindet.
	 */
	getTalkMode(): ChannelTalkMode;
	/**
	 * Liefert alle User, die bestimmte ChannelTalkPermissions haben.
	 */
	getAllUsersWithTalkPermission(...channelTalkPermission: ChannelTalkPermission[]): User[];
	/**
	 * Liefert die Information, ob der Channel sichtbar (<code>true</code>) oder unsichtbar (<code>false</code>) ist.
	 * @since AppServer 82202
	 */
	isVisible(): boolean;
}

/**
 * Eine ChannelConfiguration erlaubt Zugriff auf verschiedene Details
 * der Konfiguration des Channels, in dem die App läuft.
 *
 * Die Instanz für die <code>ChannelConfiguration</code> erhält man über das Channel-Objekt
 * mit channel.getChannelConfiguration()
 */
declare class ChannelConfiguration {
	/**
	 * Liefert das ChannelRights-Objekt des Channels.
	 */
	getChannelRights(): ChannelRights;
	/**
	 * Liefert das ChannelInformation-Objekt des Channels.
	 */
	getChannelInformation(): ChannelInformation;
}

/**
 * Ermöglicht Zugriff auf Designeinstellungen des Channels.
 * @since AppServer 87470, ChatServer 87470
 */
declare class ChannelDesign {
	/**
	 * Liefert die eingestellte Standard-Schriftgröße des Channels.
	 * @since AppServer 87470, ChatServer 87470
	 */
	getDefaultFontSize(): number;
	/**
	 * Liefert die eingestellte Standard-Schriftfarbe des Channels.
	 * @since AppServer 87470, ChatServer 87470
	 */
	getDefaultFontColor(): Color;
	/**
	 * Liefert die eingestellte Hintergrundfarbe des Channels.
	 * @since AppServer 87470, ChatServer 87470
	 */
	getBackgroundColor(): Color;
}

/**
 * Ermöglicht Zugriff auf textuelle Channelinformationen und persistente Änderungen.
 */
declare class ChannelInformation {
	/**
	 * Liefert das eingestellte Thema des Channels.
	 */
	getTopic(): string;
	/**
	 * Aktualisiert das Thema das Channels.
	 */
	setTopic(topic: string, showMessage: boolean): void;
}

/**
 * Eine Instanz der Klasse ChannelJoinPermission wird als Rückgabewert
 * der Methode <code>App.mayJoinChannel(user)</code> benötigt.
 *
 * Hiermit wird bestimmt, ob der anfragende Nutzer den Channel betreten darf.
 *
 * Erlauben mit <code>ChannelJoinPermission.accepted()</code>
 * Verbieten mit <code>ChannelJoinPermission.denied(denyReason)</code>
 */
declare class ChannelJoinPermission {
	/**
	 * Erzeugt ein ChannelJoinPermission-Objekt, das den Zugriff in den Channel erlaubt.
	 */
	static accepted(): ChannelJoinPermission;
	/**
	 * Erzeugt ein ChannelJoinPermission-Objekt, das den Zugriff in den Channel verbietet.
	 */
	static denied(denyReason: string): ChannelJoinPermission;
}

/**
 * Eine Instanz von ChannelRestrictions ermöglicht es, aktuelle Informationen über Nutzungsbeschränkungen im Channel zu erhalten.
 *
 * Die Instanz für die <code>ChannelRestrictions</code> erhält man über das Channel-Objekt
 * mit channel.getChannelRestrictions()
 */
declare class ChannelRestrictions {
	/**
	 * Liefert alle User die im Channel derzeit für das Schreiben öffentlicher Nachrichten gesperrt sind.
	 */
	getMutedUsers(): User[];
	/**
	 * Liefert alle User die im Channel derzeit für das Nutzen
	 * von Farben, Textformatierung und Smileys in öffentlichen Nachrichten gesperrt sind.
	 */
	getColorMutedUsers(): User[];
	/**
	 * Liefert alle User die für das Betreten des Channel derzeit gesperrt sind.
	 */
	getLockedUsers(): User[];
}

/**
 * Die Instanz für die <code>ChannelRights</code> erhält man über das ChannelConfiguration-Objekt
 * mit channelConfiguration.getChannelRights()
 */
declare class ChannelRights {
	/**
	 * Liefert die Liste aller Channelbesitzer. In öffentlichen Channels sind dies alle hauptzuständigen betreuenden Mitglieder. (HZA/HZE)
	 */
	getChannelOwners(): User[];
	/**
	 * Liefert die Liste aller Channel-Moderatoren.
	 */
	getChannelModerators(): User[];
	/**
	 * Liefert die Liste aller Event-Moderatoren.
	 */
	getEventModerators(): User[];
}

/**
 * ChannelTalkMode repräsentiert das den Gesprächsmodus im Channel.
 *
 * Die Instanz für die <code>ChannelTalkMode</code> erhält man über das Channel-Objekt
 * mit channel.getTalkMode()
 */
declare class ChannelTalkMode {
	/**
	 * Jeder darf gerade im Channel schreiben.
	 */
	static readonly Everyone: ChannelTalkMode;
	/**
	 * Nur Personen, die besondere Rederechte haben dürfen gerade im Channel schreiben.
	 */
	static readonly OnlyWithTalkPermission: ChannelTalkMode;
	/**
	 * Nur Personen, die besondere Rederechte haben dürfen gerade im Channel schreiben.
	 * Die Nachrichten aller anderen Nutzer werden gefiltert und ggf. von den Moderatoren zugelassen.
	 */
	static readonly FilteredByModerators: ChannelTalkMode;
}

/**
 * ChannelTalkPermission repräsentiert das Rederecht eines User
 * im Channel.
 */
declare class ChannelTalkPermission {
	/**
	 * Der User ist gerade nicht im Channel,
	 * daher ist die ChannelTalkPermission nicht bekannnt.
	 */
	static readonly NotInChannel: ChannelTalkPermission;
	/**
	 * Der User hat keine speziellen Rederechte.
	 * Beim ChannelTalkMode Default können diese User
	 * Nachrichten verfassen:
	 */
	static readonly Default: ChannelTalkPermission;
	/**
	 * Der User kann eine öffentliche Nachricht verfassen. Danach wechselt die
	 * ChannelTalkPermission automatisch auf Default.
	 */
	static readonly TalkOnce: ChannelTalkPermission;
	/**
	 * Der User kann permanent öffentliche Nachrichten verfassen.
	 */
	static readonly TalkPermanent: ChannelTalkPermission;
	/**
	 * Der User ist VIP und kann öffentliche Nachrichten verfassen,
	 * die farbig und groß dargestellt werden.
	 */
	static readonly VIP: ChannelTalkPermission;
	/**
	 * Der User ist VIP und kann öffentliche Nachrichten verfassen,
	 * die farbig und groß dargestellt werden. Moderatoren haben zudem weitere Möglichkeiten, die in der
	 * <a href="http://knuddels.de/doku/Moderationssystem.pdf" target="_blank">Anleitung zum Moderationssystem</a>
	 * nachgelesen werden können.
	 */
	static readonly Moderator: ChannelTalkPermission;
}

/**
 * Liefert Informationen über einen ChatServer.
 *
 * Die Instanz von <code>ChatServerInfo</code> erhält man über den KnuddelsServer
 * mit KnuddelsServer.getChatServerInfo()
 */
declare class ChatServerInfo extends ServerInfo {
	/**
	 * Liefert die Information, ob dieser Chat-Server ein Test-System ist.
	 */
	isTestSystem(): boolean;
}

/**
 * Klasse, die es ermöglicht den Client innerhalb des HTML User Interface zu steuern und Daten an den Server zu senden.
 */
declare class Client {
	/**
	 * Schließt das HTML User Interface.
	 */
	static close(): void;
	/**
	 * Sendet ein Event zum Server, das mit dem AppHook onEventReceived in der App
	 * abgefangen werden kann.
	 */
	static sendEvent(type: string, data: KnuddelsEvent): void;
	/**
	 * Sagt dem Chatserver, dass dieser Befehl für den Nutzer, der das HTML User Interface sieht, ausgeführt werden soll.
	 * Ist der Befehl auf einer Whitelist vom Server, so wird er sofort ausgeführt. Im anderen Falle sieht der Nutzer einen
	 * Link zum Bestätigen, mit dem er die Aktion starten kann.
	 *
	 * Derzeit sind diese Befehle auf der Whitelist: w, info, wc, top, h, dice, d, diceo, w2, serverpp, knuddelaccount,
	 * /tf-insert, /tf-inserts, /tf-insertb, /tf-insertsb, /tf-override, /tf-overrides, /tf-overrideb, /tf-overridesb, /autotype
	 */
	static executeSlashCommand(command: string): void;
	/**
	 * Bindet eine Javascript-Datei ein und sorgt dafür, dass immer die aktuellste Version vom Server geladen wird.
	 */
	static includeJS(...files: string[]): void;
	/**
	 * Registriert sich für ein bestimmtes Event, das vom Server mittels User/sendEvent:method oder vom Client via Client/dispatchEvent:method verschickt wurde.
	 */
	static addEventListener(type: string, callback: (event: {type: string, data: KnuddelsEvent}) => void): void;
	/**
	 * Sendet ein bestimmtes Event, so dass alle mit Client/addEventListener:method registrierten Listener aufgerufen werden.
	 */
	static dispatchEvent(event: Client.Event): void;
	/**
	 * Entfernt alle Event-Listener für einen bestimmten Event-Typ.
	 */
	static removeEventListener(type: string): void;
	/**
	 * Bindet eine CSS-Datei ein und sorgt dafür, dass immer die aktuellste Version vom Server geladen wird.
	 */
	static includeCSS(...files: string[]): void;
	/**
	 * Spielt einen Sound ab. Der angegebene Dateiname kann hierbei entweder absolut oder relativ zur angezeigten HTML-Datei sein.
	 * Bisher können nur Dateien mit Wave-Format zuverlässig abgespielt werden.
	 */
	static playSound(fileName: string): void;
	/**
	 * Lädt einen Sound herunter, damit die Datei später ohne Wartezeit abgespielt werden kann.
	 * (Android only)
	 * Der angegebene Dateiname kann hierbei entweder absolut oder relativ zur angezeigten HTML-Datei sein.
	 */
	static prefetchSound(fileName: string): void;
	/**
	 * Gibt einen Sound wieder frei, der in nächster Zeit vom Client nicht mehr gebraucht wird.
	 * (Android only)
	 * Der angegebene Dateiname kann hierbei entweder absolut oder relativ zur angezeigten HTML-Datei sein.
	 */
	static freeSound(fileName: string): void;
	/**
	 * Liefert den HostFrame des aktuellen Inhalts.
	 */
	static getHostFrame(): Client.HostFrame;
	/**
	 * Liefert den Nicknamen des Users, der gerade dieses HTML User Interface angezeigt bekommt.
	 */
	static getNick(): string;
	/**
	 * Liefert den aktuellen ClientType des Nutzers, der gerade dieses HTML User Interface angezeigt bekommt.
	 */
	static getClientType(): ClientType;
	/**
	 * Liefert die Id, die beim Laden von Skripten und Stylesheets an die URL angehängt wird, um sicherzustellen, dass eine neue Version
	 * der Datei vom Server geholt wird, statt die Datei aus dem Cache zu laden.
	 *
	 * Diese Id kann beim Einbinden eigener Ressourcen zum selben Zweck genutzt werden.
	 */
	static getCacheInvalidationId(): string;
	/**
	 * Beinhaltet die JSON-Daten, die beim Erstellen des HTMLFile übergeben wurden.
	 */
	static pageData: Json;
}

/**
 * Klasse, mit der clientseitige Farbobjekte erstellt werden können.
 */
declare namespace Client {
	class Color {
		/**
		 * Erzeugt ein Color-Objekt mit RGB-Werten.
		 */
		static fromRGB(red: number, green: number, blue: number): Color;
		/**
		 * Erzeugt ein Color-Objekt aus einem HexString.
		 */
		static fromHexString(colorString: string): Color;
		/**
		 * Liefert den Rot-Anteil der Farbe als Zahl zwischen 0 und 255.
		 */
		getRed(): number;
		/**
		 * Liefert den Grün-Anteil der Farbe als Zahl zwischen 0 und 255.
		 */
		getGreen(): number;
		/**
		 * Liefert den Blau-Anteil der Farbe als Zahl zwischen 0 und 255.
		 */
		getBlue(): number;
		/**
		 * Liefert die Farbe als in CSS nutzbaren HexString.
		 */
		asHexString(): string;
	}
}

/**
 * Klasse, die es ermöglicht ein Event via Client/dispatchEvent:method zu versenden.
 */
declare namespace Client {
	class Event {
		/**
		 * Erzeugt ein Event.
		 */
		constructor(type: string, data: KnuddelsEvent);
	}
}

/**
 * Klasse, die es ermöglicht den Inhalte zu steuern, die im Bereich liegen, der das HTML User Interface hostet.
 */
declare namespace Client {
	class HostFrame {
		/**
		 * Setzt den Titel der Seite im gezoomten Modus (nur Android).
		 */
		setTitle(newTitle: string): void;
		/**
		 * Ändert die sichtbare Hintergrundfarbe des Hostframes animiert. (Android-only)
		 */
		setBackgroundColor(newColor: Color, durationMillis?: number): void;
		/**
		 * Setzt die Icons, die als Fenster-Icon angezeigt werden sollen. (Applet-only, nur mit AppViewMode.Popup)
		 * Die Bilder müssen von groß nach klein sortiert sein. Die größeren Bilder werden (je nach System) automatisch dann eingesetzt,
		 * wenn größere Bilder benötigt werden (z.B. in der Task-Leiste, oder beim Alt+Tab Fenster-Wechsel).
		 * @since Applet: 9.0bwj, AppServer: 84904
		 */
		setIcons(...path: string[]): void;
		/**
		 * Setzt, ob das Fenster resizable ist. (Applet-only, nur mit AppViewMode.Popup)
		 */
		setResizable(resizable: boolean): void;
		/**
		 * Bringt das Fenster der App (App-Popup bzw. Chat-Fenster) in den Vordergrund. (Applet-only)
		 * @since Applet: 9.0bwj, AppServer: 84904
		 */
		focus(): void;
		/**
		 * Ändert die Größe des App-Fensters (AppViewMode.Popup) bzw. App-Overlays (AppViewMode.Overlay).
		 * @since Applet: 9.0bwj, AppServer: 84516
		 */
		setSize(width: number, height: number): void;
	}
}

/**
 * ClientType repräsentiert die Art der Chat-Verbindung des Users.
 *
 * Eine Instanz von <code>ClientType</code> erhält man über das User-Objekt
 * mit user.getClientType()
 */
declare class ClientType {
	/**
	 * Der User ist mit dem Java Applet im Chat.
	 */
	static readonly Applet: ClientType;
	/**
	 * Der User ist mit dem Browser im Chat (Mini-Chat, HTML-Chat).
	 */
	static readonly Browser: ClientType;
	/**
	 * Der User ist mit der Android-App im Chat.
	 */
	static readonly Android: ClientType;
	/**
	 * Der User ist mit der iOS-App im Chat.
	 */
	static readonly IOS: ClientType;
	/**
	 * Der User ist nicht im Chat.
	 */
	static readonly Offline: ClientType;
}

/**
 * Klasse, mit der serverseitige Farbobjekte erstellt werden können.
 */
declare class Color {
	/**
	 * Erzeugt ein serverseitiges Color-Objekt mit RGB-Werten.
	 * Als Alpha-Wert wird automatisch 255 genutzt.
	 */
	static fromRGB(red: number, green: number, blue: number): Color;
	/**
	 * Erzeugt ein serverseitiges Color-Objekt mit RGBA-Werten.
	 */
	static fromRGBA(red: number, green: number, blue: number, alpha: number): Color;
	/**
	 * Liefert den Alpha-Wert der Farbe als Zahl zwischen 0 und 255.
	 */
	getAlpha(): number;
	/**
	 * Liefert den Blau-Anteil der Farbe als Zahl zwischen 0 und 255.
	 */
	getBlue(): number;
	/**
	 * Liefert den Grün-Anteil der Farbe als Zahl zwischen 0 und 255.
	 */
	getGreen(): number;
	/**
	 * Liefert den Rot-Anteil der Farbe als Zahl zwischen 0 und 255.
	 */
	getRed(): number;
	/**
	 * Liefert die Farbe als KCode zurück.
	 */
	toKCode(): string;
	/**
	 * Liefert die numerische Repräsentation der Farbe zurück.
	 */
	asNumber(): number;
	/**
	 * Erzeugt ein serverseitiges Color-Objekt aus der numerischen Repräsentation einer Farbe.
	 */
	static fromNumber(value: number): Color;
}

/**
 * Eine Instanz von Dice repräsentiert die Anzahl an Würfeln von einerm bestimmten Typ.
 */
declare class Dice {
	/**
	 * Erzeugt ein Dice-Objekt mit der übergebenen Anzahl Würfel und Augenzahl.
	 */
	constructor(count: number /* optional */, value: number);
	/**
	 * Liefert die Anzahl der Würfel.
	 */
	getAmount(): number;
	/**
	 * Liefert die Anzahl der Seiten der Würfel.
	 */
	getNumberOfSides(): number;
}

/**
 * Eine Instanz von DiceConfiguration repräsentiert eindeutig eine Konfiguration zum würfeln.
 * Wurde gewürfelt, so können die Konfigurationen verglichen werden, um zu prüfen, ob exakt die Würfel
 * gewürfelt wurden, die gewürfelt werden sollten.
 */
declare class DiceConfiguration {
	/**
	 * Informiert, ob es sich um einen offenen Würfelwurf handelt.
	 * Offene Würfelwürfe sind speziell. Falls die Augenzahl des Würfels die Maximalsumme zeigt,
	 * so wird noch einmal gewürfelt und die neue Zahl dazu addiert, solange bis der Würfel
	 * nicht mehr die Maximalsumme zeigt.
	 *
	 * <b>Beispiel:</b> /diceo 1w4 -> 4 -> 4 -> 3 = 11
	 */
	isUsingOpenThrow(): boolean;
	/**
	 * Informiert darüber, ob die Würfel privat geworfen worden sind.
	 * Würfelwürfe zählen als privat, wenn am Ende des Würfelbefehls ein Ausrufezeichen steht.
	 * <b>Beispiel:</b> /dice 10w2!
	 */
	isUsingPrivateThrow(): boolean;
	/**
	 * Liefert ein Array mit Würfeln, mit denen gewürfelt wurde.
	 */
	getDices(): Dice[];
	/**
	 * Vergleicht, ob zwei Konfigurationen inhaltlich identisch sind
	 */
	equals(diceConfiguration: DiceConfiguration): boolean;
	/**
	 * Liefert den Befehl, der im Chat eingegeben werden kann, um einen Wurf auszuführen,
	 * der zur DiceConfiguration passt.
	 * @since AppServer 82248
	 */
	getChatCommand(): string;
}

/**
 * Eine Instanz einer DiceConfigurationFactory kann zur Unterstützung genutzt werden, um eine
 * DiceConfiguration zu erzeugen.
 */
declare class DiceConfigurationFactory {
	/**
	 * Fügt der Konfiguration einen Würfel hinzu.
	 */
	addDice(dice: Dice): void;
	/**
	 * Liefert die Anzahl der Würfel, die zur Konfiguration gehören.
	 */
	computeCurrentDiceCount(): number;
	/**
	 * Setzt die Information, ob ein offener Wurf oder ein normaler Wurf stattfinden soll.
	 * Offene Würfelwürfe sind speziell. Falls die Augenzahl des Würfels die Maximalsumme zeigt,
	 * so wird noch einmal gewürfelt und die neue Zahl dazu addiert, solange bis der Würfel
	 * nicht mehr die Maximalsumme zeigt.
	 *
	 * <b>Beispiel:</b> /diceo 1w4 -> 4 -> 4 -> 3 = 11
	 */
	setUseOpenThrow(shouldUseOpenThrow: boolean): void;
	/**
	 * Setzt die Information, ob der Würfelwurf privat stattfinden soll.
	 */
	setShouldUsePrivateThrow(shouldUsePrivateThrow: boolean): void;
	/**
	 * Liefert die erzeugte Würfelkonfiguration.
	 */
	getDiceConfiguration(): DiceConfiguration;
	/**
	 * Erzeugt eine Würfelkonfiguration.
	 */
	static fromString(diceConfigurationString: string): DiceConfiguration;
}

/**
 * Wird in der App die Methode onUserDiced überschrieben, so erhält diese bei jedem Würfelwurf ein DiceEvent.
 * Ein DiceEvent ermöglicht einem detaillierte Informationen rund um diesen Würfelwurf in Erfahrung zu bringen.
 */
declare class DiceEvent {
	/**
	 * Liefert den Nutzer, der gewürfelt hat.
	 */
	getUser(): User;
	/**
	 * Liefert das DiceResult des Würfelwurfs.
	 */
	getDiceResult(): DiceResult;
}

/**
 * Ein DiceResult beinhaltet konkrete Informationen über einen Würfelwurf.
 */
declare class DiceResult {
	/**
	 * Liefert die Konfiguration mit der gewürfelt wurde.
	 */
	getDiceConfiguration(): DiceConfiguration;
	/**
	 * Liefert ein Array mit Details zu den einzelnen Ergebnissen pro Würfeltyp.
	 */
	getSingleDiceResults(): SingleDiceResult[];
	/**
	 * Liefert die Summe der Augenzahlen aller  Würfel
	 */
	totalSum(): number;
}

/**
 * Die Instanz einer Domain beinhaltet alle relevanten Informationen zur Domain.
 */
declare class Domain {
	/**
	 * Liefert ein den Domain-Namen der aktuellen Domain.
	 */
	getDomainName(): string;
}

/**
 * Die Instanz von <code>ExternalServerAccess</code> erhält man über die KnuddelsServer.getExternalServerAccess().
 * Damit der Zugriff auf einen externern Server funktioniert, muss auf dem Server eine Datei <code>knuddelsAccess.txt</code> abgelegt werden, die die FTP-User-ID des Entwicklers enthält.
 */
declare class ExternalServerAccess {
	/**
	 * Liefert eine Liste aller zugreifbaren Domains
	 */
	getAllAccessibleDomains(): Domain[];
	/**
	 * Prüft den Zugriff auf eine bestimmte URL. Wird je Kombination von "Protokoll + Host + Port" geprüft.<br>
	 * Beispiel: http://www.example.de:8080
	 */
	canAccessURL(urlString: string): boolean;
	/**
	 * Macht einen GET-Request auf die übergebene URL und liefert den Inhalt zurück.
	 * Diese Methode ist eine Convenience-Methode für externalServerAccess.callURL().
	 */
	getURL(
		urlString: string,
		parameters?: {
			onSuccess?(responseData: string, externalServerResponse: ExternalServerResponse): void;
			onFailure?(responseData: string, externalServerResponse: ExternalServerResponse): void;
		}): void;
	/**
	 * Macht einen POST-Request auf die übergebene URL und liefert den Inhalt zurück.
	 * Diese Methode ist eine Convenience-Methode für externalServerAccess.callURL().
	 */
	postURL(
		urlString: string,
		parameters?: {
			onSuccess?(responseData: string, externalServerResponse: ExternalServerResponse): void;
			onFailure?(responseData: string, externalServerResponse: ExternalServerResponse): void;
			data?: Json;
		}): void;
	/**
	 * Macht einen GET-Request auf die übergebene URL. Im Gegensatz zum GET-Request wird der Inhalt der Webseite wird nicht ausgelesen.
	 * Aus diesem Grund ist diese Methode schneller.
	 * Diese Methode ist eine Convenience-Methode für externalServerAccess.callURL().
	 */
	touchURL(
		urlString: string,
		parameters?: {
			onSuccess?(responseData: string, externalServerResponse: ExternalServerResponse): void;
			onFailure?(responseData: string, externalServerResponse: ExternalServerResponse): void;
		}): void;
	/**
	 * Macht einen Request auf die übergebene URL.
	 */
	callURL(
		urlString: string,
		parameters?: {
			onSuccess?(responseData: string, externalServerResponse: ExternalServerResponse): void;
			onFailure?(responseData: string, externalServerResponse: ExternalServerResponse): void;
			method?: ("GET" | "POST");
			data?: Json;
		}): void;
}

/**
 * Die Instanz von <code>ExternalServerResponse</code> erhält in den onSuccess- und onFailure-Callbacks der Methoden von
 * ExternalServerAccess. Es enthält alle notwendigen Daten zum Verarbeiten.
 */
declare class ExternalServerResponse {
	/**
	 * Liefert die abgefragte URL.
	 */
	getURLString(): string;
	/**
	 * Liefert den <a href="https://de.wikipedia.org/wiki/HTTP-Statuscode" target="_blank">HTTP-Statuscode</a> der Seite.
	 */
	getResponseCode(): number;
	/**
	 * Liefert ein Objekt, das die Headerdaten der Antwort enthält.
	 */
	getHeaderFields(): { [key: string]: string[] };
}

/**
 * Gender repräsentiert das Geschlecht eines User.
 */
declare class Gender {
	/**
	 * Das Geschlecht ist männlich.
	 */
	static readonly Male: Gender;
	/**
	 * Das Geschlecht ist weiblich.
	 */
	static readonly Female: Gender;
	/**
	 * Das Geschlecht ist nicht bekannt.
	 */
	static readonly Unknown: Gender;
}

/**
 * Repräsentiert eine HTML-Datei, die auf dem Server im Ordner /www liegt.
 */
declare class HTMLFile {
	/**
	 *
	 */
	constructor(assetPath: string, pageData?: Json);
	/**
	 * Liefert den Pfad, der beim Anlegen der HTMLFile-Instanz genutzt wurde.
	 */
	getAssetPath(): string;
	/**
	 * Liefert die pageData, die beim Anlegen der HTMLFile-Instanz genutzt wurden.
	 */
	getPageData(): Json;
}

/**
 * Eine Instanz von KnuddelAccount ermöglicht den Zugriff auf die freigegebenen Knuddel
 *  eines bestimmten User. Knuddel können abgezogen und addiert werden.
 */
declare class KnuddelAccount {
	/**
	 * Liefert den KnuddelAmount eines Users,
	 * über den die App gerade frei verfügen kann.
	 */
	getKnuddelAmount(): KnuddelAmount;
	/**
	 * Liefert den KnuddelAmount aus dem KnuddelAccount,
	 * der bereits von der App genutzt wurde.
	 * Beim Auszahlen dieser Knuddel aus dem KnuddelAccount an den
	 * User fallen Steuern an.
	 */
	getKnuddelAmountUsed(): KnuddelAmount;
	/**
	 * Liefert den KnuddelAmount aus dem KnuddelAccount,
	 * der noch nicht von der App genutzt wurde.
	 * Beim Auszahlen dieser Knuddel aus dem KnuddelAccount an den
	 * User fallen <strong>keine</strong> Steuern an.
	 */
	getKnuddelAmountUnused(): KnuddelAmount;
	/**
	 * Liefert die Summe aller Transfers, die die App an diesen KnuddelAccount bzw. User überwiesen hat.
	 */
	getTotalKnuddelAmountAppToUser(): KnuddelAmount;
	/**
	 * Liefert die Summe aller Transfers, die die App von diesem KnuddelAccount bzw. User abgebucht/erhalten hat.
	 */
	getTotalKnuddelAmountUserToApp(): KnuddelAmount;
	/**
	 * Liefert die Information, ob in diesem Moment genug Knuddel verfügbar sind.
	 */
	hasEnough(knuddelAmount: KnuddelAmount): boolean;
	/**
	 * Liefert den Nutzer, dem der KnuddelAccount gehört.
	 */
	getUser(): User;
	/**
	 * Versucht eine bestimmte Menge Knuddel zu verwenden. Dies ist nur möglich, wenn der User auf seinem KnuddelAccount
	 * genug Knuddel besitzt <strong>und</strong> online im Channel ist.
	 * Vom KnuddelAccount des Besitzer des Channel können Knuddel auch abgebucht werden, wenn dieser nicht im Channel online ist.
	 *
	 * Ist das Event App.onBeforeKnuddelReceived implementiert, so wird diese direkt nach dem <code>use</code> aufgerufen,
	 * um zu entscheiden, ob die Knuddel angenommen werden sollen.
	 *
	 * <br ><br ><b>Hinweis:</b> Knuddel an einen Nutzer senden kannst du mit der Methode BotUser/transferKnuddel:method.
	 */
	use(knuddelAmount: KnuddelAmount, displayReasonText: string, parameters?: { transferReason?: string; onError?(message: string): void; onSuccess?(): void; }): void;
}

/**
 * Eine Instanz von KnuddelAmount repräsentiert eine bestimmte Anzahl von Knuddel.
 */
declare class KnuddelAmount {
	/**
	 * Erzeugt eine Instanz von KnuddelAmount mit der Anzahl Knuddel.
	 */
	constructor(knuddel: number);
	/**
	 * Erzeugt eine Instanz von KnuddelAmount mit einer bestimmten Cent-Anzahl.
	 */
	static fromCents(knuddel: number): KnuddelAmount;
	/**
	 * Erzeugt eine Instanz von KnuddelAmount mit einer bestimmten Knuddel-Anzahl.
	 */
	static fromKnuddel(knuddel: number): KnuddelAmount;
	/**
	 * Liefert die Anzahl der Knuddel in KnuddelCent zurück.
	 */
	getKnuddelCents(): number;
	/**
	 * Gibt den Wert der Knuddel als Zahl zurück.
	 */
	asNumber(): number;
	/**
	 * Liefert eine negierte Kopie des KnuddelAmount zurück.
	 */
	negate(): KnuddelAmount;
	/**
	 * Liefert die Information, ob der Knuddelwert unter 0 ist.
	 */
	isNegative(): boolean;
}

/**
 * Repräsentiert einen KnuddelPot.
 * Ein KnuddelPot kann nur durch Factory-Methoden des KnuddelsServer erzeugt werden:
 * KnuddelsServer/createKnuddelPot:method.
 *
 * Wird die App heruntergefahren, so werden alle KnuddelPots, die nicht gesealt sind automatisch refunded.
 */
declare class KnuddelPot {
	/**
	 * Liefert die id des KnuddelPot.
	 */
	getId(): number;
	/**
	 * Liefert den Status des KnuddelPot.
	 */
	getState(): KnuddelPotState;
	/**
	 * Liefert den beim Kreieren des KnuddelPots festgelegten KnuddelAmount, den jeder Teilnehmer zahlen muss.
	 */
	getKnuddelAmountPerParticipant(): KnuddelAmount;
	/**
	 * Liefert den KnuddelAmount, der bisher insgesamt in den KnuddelPot eingezahlt wurde.
	 */
	getKnuddelAmountTotal(): KnuddelAmount;
	/**
	 * Liefert die Liste der Teilnehmer, die bisher in den KnuddelPot eingezahlt haben.
	 */
	getParticipants(): User[];
	/**
	 * Liefert den höchsten Multiplikator, der gültig ist.
	 */
	getMaxFeeMultiplier(): number;
	/**
	 * Setzt den BotUser, der den Anteil der Einzahlungen nach dem Spiel erhält
	 * und den Anteil, vom Gesamtpot, den er erhalten soll.
	 */
	setFee(feeUser: BotUser, feeMultiplier: number): void;
	/**
	 * Liefert den mit KnuddelPot/setFee:method gesetzten BotUser an den die Gebühr ausbezahlt wird.
	 */
	getFeeUser(): User;
	/**
	 * Liefert den mit KnuddelPot/setFee:method gesetzten Multiplikator der Gebühr.
	 */
	getFeeMultiplier(): number;
	/**
	 * Versiegelt den KnuddelPot, sodass keine weiteren Einzahlungen vorgenommen
	 * werden können und Gewinne ausgeschüttet werden können.
	 */
	seal(): void;
	/**
	 * Bezahlt alle Einsätze an die Teilnehmer zurück und informiert mit dem übergeben Text über den Grund.
	 */
	refund(reason?: string): void;
	/**
	 * Fügt einen Gewinner in die Liste der Gewinner hinzu.
	 * Der zweite Parameter ist die Gewichtung mit der ausgezahlt werden soll.
	 * Wird der Parameter weggelassen, so ist er automatisch 1.
	 */
	addWinner(user: User, weight?: number): void;
	/**
	 * Zahlt den KnuddelPot an die mit addWinner gesetzten Gewinner aus.
	 */
	payout(text?: string): void;
}

/**
 * Repräsentiert den Status eines KnuddelPot.
 */
declare class KnuddelPotState {
	/**
	 * Der KnuddelPot ist geöffnet und kann neue Teilnehmer annehmen.
	 */
	static readonly Open: KnuddelPotState;
	/**
	 * Der KnuddelPot ist versiegelt und kann keine neuen Teilnehmer annehmen.
	 */
	static readonly Sealed: KnuddelPotState;
	/**
	 * Der KnuddelPot ist beendet und die Knuddel bereits ausgezahlt.
	 */
	static readonly Closed: KnuddelPotState;
}

/**
 * Ein KnuddelTransfer ist ein Container-Objekt für die Daten, die bei einer Knuddel-Transaktion von einem User
 * an eine App anfallen.
 *
 * Implementiert man den App-Hook <code>onBeforeKnuddelReceived</code>, so kann man dort entscheiden, ob man den KnuddelTransfer
 * annimmt oder ablehnt.
 */
declare class KnuddelTransfer {
	/**
	 * Liefert den User, der den KnuddelTransfer ausgelöst hat.
	 */
	getSender(): User;
	/**
	 * Liefert den BotUser, der die Knuddel des KnuddelTransfer erhält,
	 * wenn dieser mit accept()</code> angenommen wurde.
	 */
	getReceiver(): BotUser;
	/**
	 * Liefert die Anzahl der Knuddel, die mit diesem Transfer überwiesen werden.
	 */
	getKnuddelAmount(): KnuddelAmount;
	/**
	 * Liefert den Grund für den Transfer, der bei der Überweisung angegeben wurde mit
	 * <code>/appknuddel BOTNICK:KNUDDEL:GRUND</code>.
	 */
	getTransferReason(): string;
	/**
	 * Lehnt die Knuddel aus dem KnuddelTransfer ab und sendet sie zurück an den Absender.
	 * Als Grund sieht der Absender den übergebenen <code>reason</code>.
	 *
	 * Diese Methode wirft eine Exception, wenn sie auf einen bereits verarbeiteten Transfer aufgerufen wird.
	 * Sie kann nur erfolgreich aus dem AppHook <code>onBeforeKnuddelReceived</code> aufgerufen werden.
	 *
	 * In der Methode <code>onBeforeKnuddelReceived</code> kann genau ein Aufruf einer dieser drei Methoden gemacht werden:
	 * KnuddelTransfer/accept:method,
	 * KnuddelTransfer/addToPot:method,
	 * KnuddelTransfer/reject:method
	 */
	reject(reason: string): void;
	/**
	 * Nimmt die Knuddel aus dem KnuddelTransfer an und übergibt sie an den BotUser,
	 * der mit <code>getReceiver()</code> abgefragt werden kann.
	 *
	 * Diese Methode wirft eine Exception, wenn sie auf einen bereits verarbeiteten Transfer aufgerufen wird.
	 * Sie kann nur erfolgreich aus dem AppHook <code>onBeforeKnuddelReceived</code> aufgerufen werden.
	 * In der Methode <code>onBeforeKnuddelReceived</code> kann genau ein Aufruf einer dieser drei Methoden gemacht werden:
	 *
	 * KnuddelTransfer/accept:method,
	 * KnuddelTransfer/addToPot:method,
	 * KnuddelTransfer/reject:method
	 */
	accept(): void;
	/**
	 * Liefert die Information, ob ein bestimmter KnuddelTransfer zu einem KnuddelPot hinzugefügt werden kann.
	 */
	canAddToPot(pot: KnuddelPot): boolean;
	/**
	 * Nimmt die Knuddel aus dem KnuddelTransfer an und übergibt sie an den übergebenen KnuddelPot.
	 *
	 * Diese Methode funktioniert analog zu KnuddelTransfer/accept:method, nur dass die Knuddel im KnuddelPot statt beim BotUser landen.
	 *
	 * Diese Methode wirft eine Exception, wenn sie auf einen bereits verarbeiteten Transfer aufgerufen wird.
	 * Sie kann nur erfolgreich aus dem AppHook <code>onBeforeKnuddelReceived</code> aufgerufen werden.
	 *
	 * In der Methode <code>onBeforeKnuddelReceived</code> kann genau ein Aufruf einer dieser drei Methoden gemacht werden:
	 * KnuddelTransfer/accept:method,
	 * KnuddelTransfer/addToPot:method,
	 * KnuddelTransfer/reject:method
	 */
	addToPot(knuddelPot: KnuddelPot): void;
	/**
	 * Liefert die Information, ob der KnuddelTransfer bereits verarbeitet wurde.
	 * Falls die Methode <code>false</code> zurückliefert muss noch entschieden werden, ob der
	 * KnuddelTransfer angenommen oder abgelehnt wird.
	 */
	isProcessed(): boolean;
}

/**
 * KnuddelTransferDisplayType repräsentiert die Art der Darstellung einer Knuddel-Überweisung.
 */
declare class KnuddelTransferDisplayType {
	/**
	 * Nachricht wird öffentlich angezeigt.
	 */
	static readonly Public: KnuddelTransferDisplayType;
	/**
	 * Nachricht wird privat angezeigt.
	 */
	static readonly Private: KnuddelTransferDisplayType;
	/**
	 * Nachricht wird als /m zugestellt.
	 */
	static readonly Post: KnuddelTransferDisplayType;
}

/**
 * KnuddelsServer ist die 'Einstiegsklasse'. Mit den statischen Methoden des KnuddelsServer erhält man Zugriff auf viele
 * Objekte und Klassen, die im Verlauf der App-Entwicklung benötigt werden.
 */
declare class KnuddelsServer {
	/**
	 * Liefert den BotUser, der standardmäßig zur App gehört.
	 */
	static getDefaultBotUser(): BotUser;
	/**
	 * Liefert die AppPersistence, mit der sich Zahlen, Strings und Javascript-Objekte langfristig und über die Session einer App hinaus gespeichert werden können.
	 */
	static getPersistence(): AppPersistence;
	/**
	 * Liefert den Channel in dem die App läuft.
	 */
	static getChannel(): Channel;
	/**
	 * Liefert das UserAccess-Objekt, über das
	 * User zugreifbar werden.
	 */
	static getUserAccess(): UserAccess;
	/**
	 * Liefert ein ExternalServerAccess-Objekt, mit dem
	 * andere Server angesteuert werden können.
	 */
	static getExternalServerAccess(): ExternalServerAccess;
	/**
	 * Aktualisiert die Liste der genutzten Hooks. Werden zur Laufzeit chatCommands oder App-Hooks (wie mayJoinChannel) dynamisch erzeugt oder gelöscht, so muss danach <code>refreshHooks()</code>
	 * aufgerufen werden, damit diese Änderung wirksam wird.
	 */
	static refreshHooks(): void;
	/**
	 * Liefert den Standard-Logger für diese App. Alles, was geloggt wird, wird vom Nutzer "App-Logs" als private Nachricht zugestellt.
	 */
	static getDefaultLogger(): Logger;
	/**
	 * Liefert den Pfad eines Bildes zur Integration in der eigenen App.
	 * Alle Bilder, die im Ordner /www in der App abgelegt werden können hier referenziert werden.
	 */
	static getFullImagePath(imageName: string): string;
	/**
	 * Liefert den Pfad eines <b>Systembildes</b> zur Integration in der eigenen App.
	 * Alle Bilder, die unter <a href="http://apps4.knuddels.biz/kimg/" target="_blank">http://apps4.knuddels.biz/kimg/</a>
	 * erreichbar sind können hier referenziert werden.
	 */
	static getFullSystemImagePath(imageName: string): string;
	/**
	 * Liefert die Informationen über den ChatServer auf dem die App läuft.
	 */
	static getChatServerInfo(): ChatServerInfo;
	/**
	 * Liefert die Informationen über den AppServer auf dem die App läuft.
	 */
	static getAppServerInfo(): AppServerInfo;
	/**
	 * Liefert das AppAccess-Object.
	 */
	static getAppAccess(): AppAccess;
	/**
	 * Erzeugt einen KnuddelPot.
	 *
	 * Ist ein KnuddelPot 30 Minuten nach dem Erzeugen noch nicht gesealt,
	 * so wird vom Server automatisch ein KnuddelPot/refund:method ausgelöst.
	 */
	static createKnuddelPot(
		knuddelAmount: KnuddelAmount,
		params?: {
			payoutTimeoutMinutes?: number;
			shouldSealPot?(pot: KnuddelPot): boolean;
			onPotSealed?(pot: KnuddelPot): void;
		}): KnuddelPot;
	/**
	 * Liefert den KnuddelPot mit der angegeben id.
	 */
	static getKnuddelPot(id: number): (KnuddelPot|null);
	/**
	 * Liefert alle für die App noch verwaltbaren KnuddelPot-Objekte.
	 */
	static getAllKnuddelPots(): KnuddelPot[];
	/**
	 * Liefert das ToplistAccess-Objekt, über das
	 * Toplisten erzeugt und verwaltet werden können.
	 */
	static getToplistAccess(): ToplistAccess;
	/**
	 * Liefert das AppProfileEntryAccess-Objekt, über das
	 * App-Profileinträge erzeugt und verwaltet werden können.
	 */
	static getAppProfileEntryAccess(): AppProfileEntryAccess;
}

/**
 * Mit einer Instanz einer LoadConfiguration kann gestaltet werden, wie der Inhalt des HTML User Interface aussieht, bevor es fertig geladen ist.
 */
declare class LoadConfiguration {
	/**
	 * Setzt die Farbe des Hintergrundes vom Loading-View, der angezeigt wird, während das HTML User Interface lädt. (standardmäßig weiß)
	 */
	setBackgroundColor(color: Color): void;
	/**
	 * Setzt das Hintergrundbild vom Loading-View, das angezeigt wird, während das HTML User Interface lädt. (standardmäßig nicht gesetzt)
	 */
	setBackgroundImage(imageUrl: string): void;
	/**
	 * Setzt den Text des Ladehinweiseses im Loading-View, der angezeigt wird, während das HTML User Interface lädt. (standardmäßig "Lädt...")
	 * Hinweis: Wird mit setLoadingIndicatorImage ein Loaading-Indicator-Bild gesetzt, so wird der mit setText gesetzte Texte ignoriert.
	 */
	setText(text: string): void;
	/**
	 * Setzt ein Loading-Indicator-Bild im Loading-View, das angezeigt wird, während das HTML User Interface lädt. (standardmäßig nicht gesetzt)
	 * Hinweis: Wird mit setLoadingIndicatorImage ein Loaading-Indicator-Bild gesetzt, so wird der mit setText gesetzte Texte ignoriert.
	 */
	setLoadingIndicatorImage(imageUrl: string): void;
	/**
	 * Setzt die Farbe des Textes im Loading-View, der angezeigt wird, während das HTML User Interface lädt. (standardmäßig schwarz)
	 */
	setForegroundColor(color: Color): void;
	/**
	 * Aktiviert/Deaktiviert die Nutzung vom Loading-View. (standardmäßig aktiviert)
	 * Es kann sinnvoll sein, den Loading-View zu deaktivieren, wenn man selbst einen komplett eigenen Loading-View in seine App einbauen möchte.
	 */
	setEnabled(enabled: boolean): void;
}

/**
 * Eine Instanz eines Logger ermöglicht das Loggen von Inhalten.
 *
 * Diese erhält man über das KnuddelsServer-Objekt
 * mit KnuddelsServer.getDefaultLogger()
 *
 * Die Log-Einträge werden je nach Einstellungen im /apps-Fenster an den Besitzer des Channels,
 * die App-Manager und den App-Entwickler zugestellt.
 */
declare class Logger {
	/**
	 * Logge einen Text mit Level DEBUG. Dieser wird im Chat allen dafür registrierten AppManagern per /p vom App-Logs-User zugestellt. Siehe: /apps, Tab: Logs.
	 *
	 * Die Methode erwartet beliebig viele Strings als Parameter. Diese werden vor dem Logging mit einem Leerzeichen gejoint.
	 */
	debug(...msg: any[]): void;
	/**
	 * Logge einen Text mit Level INFO. Dieser wird im Chat allen dafür registrierten AppManagern per /p vom App-Logs-User zugestellt. Siehe: /apps, Tab: Logs.
	 *
	 * Die Methode erwartet beliebig viele Strings als Parameter. Diese werden vor dem Logging mit einem Leerzeichen gejoint.
	 */
	info(...msg: any[]): void;
	/**
	 * Logge einen Text mit Level WARN. Dieser wird im Chat allen dafür registrierten AppManagern per /p vom App-Logs-User zugestellt, sowie im /apps Fenster im Log angezeigt. Siehe: /apps, Tab: Logs.
	 *
	 * Die Methode erwartet beliebig viele Strings als Parameter. Diese werden vor dem Logging mit einem Leerzeichen gejoint.
	 */
	warn(...msg: any[]): void;
	/**
	 * Logge einen Text mit Level ERROR. Dieser wird im Chat allen dafür registrierten AppManagern per /p vom App-Logs-User zugestellt, sowie im /apps Fenster im Log angezeigt. Siehe: /apps, Tab: Logs.
	 *
	 * Die Methode erwartet beliebig viele Strings als Parameter. Diese werden vor dem Logging mit einem Leerzeichen gejoint.
	 */
	error(...msg: any[]): void;
	/**
	 * Logge einen Text mit Level FATAL. Dieser wird im Chat allen dafür registrierten AppManagern per /p vom App-Logs-User zugestellt, sowie im /apps Fenster im Log angezeigt. Siehe: /apps, Tab: Logs.
	 *
	 * Die Methode erwartet beliebig viele Strings als Parameter. Diese werden vor dem Logging mit einem Leerzeichen gejoint.
	 */
	fatal(...msg: any[]): void;
}

/**
 * Message ist eine abstrakte Klasse und repräsentiert eine Nachricht im Chat.
 */
declare class Message {
	/**
	 * Liefert den User, der die Nachricht verfasst hat.
	 */
	getAuthor(): User;
	/**
	 * Liefert den Inhalt der Nachricht.
	 */
	getText(): string;
	/**
	 * Liefert den genauen Zeitpunkt, zu dem die Nachricht erstellt wurde.
	 */
	getCreationDate(): Date;
}

/**
 * Repräsentiert die Instanz der konkreten App, auf die dieser Code Zugriff hat.
 *
 * Die Instanz von <code>OwnAppInstance</code> erhält man über das AppAccess-Objekt
 * mit appAccess.getOwnInstance()
 */
declare class OwnAppInstance {
	/**
	 * Gibt Zugriff auf Nutzer, die gerade im Channel dieser AppInstance online sind.
	 * @since AppServer 82560
	 */
	getOnlineUsers(otherAppInstance: AppInstance, ...userType: UserType[]): User[];
}

/**
 * Eine Instanz von Persistence ermöglicht die persistente Speicherung von Zahlen, Zeichenketten und JSON-Objekten.
 * Es gibt die zwei Arten AppPersistence und UserPersistence
 *
 * Jeder eigene Datentyp hat seinen eigenen Namensraum.
 * So kann derselbe <code>key</code> für eine Zahl, Zeichenkette und auch JSON-Objekt genutzt werden.
 *
 * <br /><br /><b>Hinweis: </b>Mit der Persistence gespeicherte Informationen überleben
 * sogar die Deinstallation und Neuinstallation der App.
 */
declare class Persistence {
	/**
	 * Informiert darüber, ob unter dem <code>key</code> ein String abgespeichert ist.
	 */
	hasString(key: string): boolean;
	/**
	 * Setzt die Zeichenkette <code>value</code> für den <code>key</code>.
	 * Falls bereits eine Zeichenkette für den <code>key</code> existiert, so wird diese überschrieben.
	 */
	setString(key: string, value: string): void;
	/**
	 * Liefert die Zeichenkette, die für den <code>key</code> gespeichert ist.
	 * Falls für <code>key</code> keine Zeichenkette gespeichert ist, so gibt die Methode
	 * den <code>defaultValue</code> zurück.
	 */
	getString(key: string, defaultValue?: string): string;
	/**
	 * Löscht die Zeichenkette, die unter <code>key</code> gespeichert ist.
	 */
	deleteString(key: string): void;
	/**
	 * Informiert darüber, ob unter dem <code>key</code> eine Zahl abgespeichert ist.
	 */
	hasNumber(key: string): boolean;
	/**
	 * Setzt die Zahl <code>value</code> für den <code>key</code>.
	 * Falls bereits eine Zahl für den <code>key</code> existiert, so wird diese überschrieben.
	 */
	setNumber(key: string, value: number): void;
	/**
	 * Addiert den übergebenen <code>value</code> auf die unter dem Key <code>key</code> vorhandenen Wert drauf.
	 * Value kann auch negativ sein um eine Subtraktion durchzuführen.
	 * Falls keine Zahl für den <code>key</code> existiert, so wird der <code>value</code> für <code>key</code> gespeichert.
	 */
	addNumber(key: string, value: number): number;
	/**
	 * Liefert die Zahl, die für den <code>key</code> gespeichert ist.
	 * Falls für <code>key</code> keine Zahl gespeichert ist, so gibt die Methode
	 * den <code>defaultValue</code> zurück.
	 */
	getNumber(key: string, defaultValue?: number): number;
	/**
	 * Löscht die Zahl, die unter <code>key</code> gespeichert ist.
	 */
	deleteNumber(key: string): void;
	/**
	 * Informiert darüber, ob unter dem <code>key</code> ein Objekt abgespeichert ist.
	 */
	hasObject(key: string): boolean;
	/**
	 * Setzt das Objekt <code>value</code> für den <code>key</code>.
	 * Falls bereits ein Objekt für den <code>key</code> existiert, so wird dieses überschrieben.
	 * Das als JSON serialisierte Objekt darf maximal 100kb groß sein.
	 */
	setObject(key: string, object: (KnuddelsJson | KnuddelsJsonArray | KnuddelsSerializable)): void;
	/**
	 * Liefert das Objekt, das für den <code>key</code> gespeichert ist.
	 * Falls für <code>key</code> kein Objekt gespeichert ist, so gibt die Methode
	 * den <code>defaultValue</code> zurück.
	 */
	getObject(key: string, defaultValue?: (KnuddelsJson | KnuddelsJsonArray | KnuddelsSerializable)): (KnuddelsJson | KnuddelsJsonArray | KnuddelsSerializable);
	/**
	 * Löscht das Objekt, das unter <code>key</code> gespeichert ist.
	 */
	deleteObject(key: string): void;
}

/**
 * Eine Instanz von PrivateMessage repräsentiert eine private Nachricht im Chat.
 * Die App erhält sämtliche private Nachrichten, die an einen ihrer BotUser
 * geschickt werden.
 *
 * <br /><br /><b>Hinweis:</b> Eine App hat keinen Zugriff auf private Nachrichten,
 * die Nutzer untereinander schreiben, ohne dass ein BotUser als Empfänger involviert ist.
 */
declare class PrivateMessage extends Message {
	/**
	 * Liefert die Liste der Empfänger der Nachricht.
	 */
	getReceivingUsers(): User[];
	/**
	 * Sendet eine private Nachricht an alle Beteiligten des Gespräches.
	 */
	sendReply(text: string): void;
}

/**
 * Eine Instanz von PublicActionMessage repräsentiert eine öffentliche Handlung im Chat.
 * Die App erhält die öffentlichen Handlungen.
 */
declare class PublicActionMessage extends Message {
}

/**
 * Eine Instanz von PublicEventMessage repräsentiert ein öffentliches Event im Chat.
 * Die App erhält die öffentlichen Events.
 */
declare class PublicEventMessage extends Message {
}

/**
 * Eine Instanz von PublicMessage repräsentiert eine öffentliche Nachricht im Chat.
 * Die App erhält die öffentlichen Nachrichten, die geschrieben werden.
 */
declare class PublicMessage extends Message {
}

/**
 * Eine Quest ist eine konkrete Aufgabe, die ein  User in der App zu erledigen hat.
 *
 * Im Blog findest du Informationen darüber, wie man eine Quest für seine App erhält:
 * https://blog.developer.knuddels.de/2015/10/29/how-to-get-a-quest/
 */
declare class Quest {
	/**
	 * Löst ein Quest-Event aus.
	 * @since AppServer 82290, ChatServer 82290
	 */
	setSolved(count?: number): void;
	/**
	 * Liefert den Key der Quest.
	 * @since AppServer 82290, ChatServer 82290
	 */
	getQuestKey(): string;
}

/**
 * Ein QuestAccess-Objekt ermöglicht den Zugriff auf die Quests, die ein Nutzer des Chats, für die laufende App hat.
 *
 * Im Blog findest du Informationen darüber, wie man eine Quest für seine App erhält:
 * https://blog.knuddels.de/2015/10/29/how-to-get-a-quest/
 */
declare class QuestAccess {
	/**
	 * Liefert die Quests
	 * für diesen Nutzer in dieser App.
	 * @since AppServer 82290, ChatServer 82290
	 */
	getQuests(): Quest[];
	/**
	 * Liefert die Information, ob eine bestimmte Quest offen ist.
	 * @since AppServer 82290, ChatServer 82290
	 */
	hasQuest(questKey: string): boolean;
	/**
	 * Liefert eine bestimmte Quest, falls vorhanden.
	 * @since AppServer 82290, ChatServer 82290
	 */
	getQuest(questKey: string): (Quest|null);
	/**
	 * Liefert den User, der zu diesem QuestAccess-Objekt gehört.
	 * @since AppServer 82290, ChatServer 82290
	 */
	getUser(): User;
}

/**
 * RandomOperations bietet eine Sammlung verschiedener Zufallsoperationen, die man für Glücksspiele und Ähnliches nutzen kann.
 */
declare class RandomOperations {
	/**
	 * Liefert eine Zufallszahl zwischen <code>minValue</code> (inklusiv) und <code>maxValue</code> (exklusiv).
	 */
	static nextInt(minValue: number /* optional */, maxValue: number): number;
	/**
	 * Liefert ein Array mit Zufallszahlen zwischen minValue (inklusiv) und <code>n</code> (exklusiv).
	 */
	static nextInts(minValue: number /* optional */, maxValue: number, count: number, onlyDifferentNumbers: boolean): number[];
	/**
	 * Liefert <code>true</code> in <code>truePropability</code>/1 Fällen
	 */
	static flipTrue(truePropability: number): boolean;
	/**
	 * Liefert ein zufälliges Objekt aus einem Array.
	 * Falls das Array leer ist, wird <code>null</code> zurückgeliefert.
	 */
	static getRandomObject<T>(objects: T[]): T;
	/**
	 * Mischt das Array der übergebenen Objekte und liefert es zurück.
	 */
	static shuffleObjects<T>(objects: T[]): T[];
	/**
	 * Liefert einen zufälligen String zurück.
	 * @since AppServer 92699
	 */
	static getRandomString(length: number, allowedCharacters?: string): string;
}

/**
 * Repräsentiert die Root-Instanz einer App, die im Hauptchannel läuft.
 *
 * Die Instanz für die <code>RootAppInstance</code> erhält man über das AppInstance-Objekt
 * mit appInstance.getRootInstance()
 */
declare class RootAppInstance extends AppInstance {
	/**
	 * Aktualisiert diese App im Channel (und ggf. vorhandenen Tochterchanneln) auf die neueste Version.
	 */
	updateApp(message: string /* optional */, logMessage?: string): void;
	/**
	 * Stoppt diese App.
	 */
	stopApp(message: string /* optional */, logMessage?: string): void;
}

/**
 * Liefert Informationen über einen Server.
 */
declare class ServerInfo {
	/**
	 * Liefert die interne ServerId des Servers.
	 */
	getServerId(): string;
	/**
	 * Liefert die Code-Revision des Servers.
	 */
	getRevision(): number;
}

/**
 * Ein SingleDiceResult enthält das Ergebnis aller Würfel desselben Typs.
 * Würfelt man beispielsweise mit der Konfiguration "1w2 + 10w5" so gibt es im <code>DiceResult</code>
 * zwei SingleDiceResult-Objekte. Eines für "1w2" und eines für "10w5".
 */
declare class SingleDiceResult {
	/**
	 * Liefert den Würfel zurück, durch den dieses SingleDiceResult erzeugt wurde.
	 */
	getDice(): Dice;
	/**
	 * Liefert die Ziffern, die gewürfelt wurden.
	 */
	valuesRolled(): number[];
	/**
	 * Liefert die Summe der Augenzahlen des SingleDiceResult.
	 */
	sum(): number;
}

/**
 * Diese Dokumentation beschreibt, welche Erweiterungen am <b>serverseitigen String-Objekt</b> vorgenommen wurden.
 */
interface String {
	/**
	 * Die Methode liefert den <code>String</code> zurück, auf dem sie aufgerufen wurde mit KCode escaped.
	 */
	escapeKCode(): string;
	/**
	 * Entfernt jeglichen KCode aus dem <code>String</code> und gibt ihn zurück.
	 */
	stripKCode(): string;
	/**
	 * Diese Methode liefert die Information, ob der <code>String</code> auf dem die Methode aufgerufen wurde
	 * mit einem bestimmten Prefix beginnt.
	 */
	startsWith(prefix: string): boolean;
	/**
	 * Diese Methode liefert die Information, ob der <code>String</code> auf dem die Methode aufgerufen wurde
	 * mit einem bestimmten Suffix endet.
	 */
	endsWith(suffix: string): boolean;
	/**
	 * Liefert die Breite des Strings in der Schriftart Arial mit der gegeben Schriftgröße und Information, ob Text fett dargestellt werden soll.
	 */
	getPixelWidth(fontSize: number, isBold: boolean): number;
	/**
	 * Liefert einen  <code>String</code>, der in der Schriftart Arial mit der gegeben Schriftgröße und Information, ob Text fett dargestellt werden soll
	 * maximal <code>maxPixelWidth</code> breit ist. Wird der Text dafür gekürzt, so wird an das Ende <code>abbreviationMarker</code> angehangen.
	 * Falls <code>abbreviationMarker</code> nicht übergeben wurde, so ist es automatisch '...'.
	 */
	limitString(fontSize: number, isBold: boolean, maxPixelWidth: number, abbreviationMarker?: string): string;
	/**
	 * Liefert die Information, ob ein bestimmter <code>String</code> in diesem <code>String</code> vorhanden ist.
	 */
	contains(needle: string): boolean;
	/**
	 * Liefert die Levenshtein-Distanz zum übergebenen  <code>String</code>.
	 * Levenshtein-Distanz: Minimale Anzahl von Einfüge-, Lösch- und Ersetz-Operationen, um die erste Zeichenkette in die zweite umzuwandeln.
	 * @since AppServer 82271
	 */
	minimalConversionCost(otherString: string): number;
	/**
	 * Liefert die Information, ob der <code>String</code> nur aus Zeichen besteht, die in einem Nicknamen
	 * vorkommen dürfen.
	 * @since AppServer 82271
	 */
	hasOnlyNicknameCharacters(): boolean;
	/**
	 * Liefert die Information, ob der <code>String</code> nur aus Zeichen besteht, die Nummern sind.
	 * @since AppServer 82271
	 */
	hasOnlyDigits(): boolean;
	/**
	 * Liefert die Information, ob der <code>String</code> nur aus Zeichen besteht, die alphanumerisch + Whitespaces sind.
	 * @since AppServer 82271
	 */
	hasOnlyAlphanumericalAndWhitespaceCharacters(): boolean;
	/**
	 * Liefert die Information, ob der <code>String</code> leer oder <code>null</code> ist.
	 * @since AppServer 92695
	 */
	isEmpty(): boolean;
	/**
	 * Liefert den <code>String</code> in CamelCase.
	 * @since AppServer 92695
	 */
	toCamelCase(): string;
	/**
	 * Liefert den <code>String</code> mit dem ersten Buchstaben als Großbuchstaben.
	 * @since AppServer 92695
	 */
	capitalize(): string;
	/**
	 * Erstellt eine Kopie des  <code>String</code>, in dem alle Vorkommnisse des  <code>String</code> <code>search</code> in <code>replacement</code>
	 * ersetzt werden und liefert diesen zurück.
	 */
	replaceAll(search: string | RegExp, replacement: string): string;
	/**
	 * Prüft primitiv, ob der <code>String</code> laut Knuddels-Filterregeln ok ist.
	 * @since ChatServer 82262, AppServer 82262
	 */
	isOk(): boolean;
}

/**
 * Eine Instanz einer Toplist repräsentiert eine eigene Topliste für einen bestimmten userPersistenceNumberKey.
 */
declare class Toplist {
	/**
	 * Liefert den userPersistenceNumberKey mit dem die Topliste erzeugt wurde.
	 */
	getUserPersistenceNumberKey(): string;
	/**
	 * Liefert den Anzeigenamen der Topliste.
	 */
	getDisplayName(): string;
	/**
	 * Liefert den Befehl, der im Chat eingegeben werden kann, um diese Topliste zu öffnen.
	 * Wird ein User oder eine userId übergeben, so öffnet sich die Topliste mit diesem Nutzer im Fokus.
	 */
	getChatCommand(user_or_userId?: (User|number)): string;
	/**
	 * Liefert den Anzeigenamen für den übergebenen User oder eine userId.
	 */
	getLabel(user_or_userId: (User|number)): string;
	/**
	 * Legt einen Change-Listener an, der jedes mal aufgerufen wird, wenn ein User
	 * einen neuen Anzeigenamen erhält.
	 */
	addLabelChangeListener(listener: (labelChangeEvent: ToplistLabelChangeEvent) => void): void;
	/**
	 * Löscht einen LabelChangeListener, der mit Toplist/addLabelChangeListener:method erzeugt wurde.
	 */
	removeLabelChangeListener(listener: (labelChangeEvent: ToplistLabelChangeEvent) => void): void;
	/**
	 * Legt einen Change-Listener an, der jedes mal aufgerufen wird, wenn ein sich der Rang User eines Nutzers ändert.
	 */
	addRankChangeListener(listener: (rankChangeEvent: ToplistRankChangeEvent) => void): void;
	/**
	 * Löscht einen RankChangeListener, der mit Toplist/addRankChangeListener:method erzeugt wurde.
	 */
	removeRankChangeListener(listener: (rankChangeEvent: ToplistRankChangeEvent) => void): void;
}

/**
 * Mit einer Instanz von ToplistAccess kann eine App
 * Toplist erzeugen und verwalten.
 *
 * Die Instanz für die <code>ToplistAccess</code> erhält man über das KnuddelsServer-Objekt
 * mit KnuddelsServer.getToplistAccess()
 */
declare class ToplistAccess {
	/**
	 * Liefert die Liste aller Toplisten, die diese App erzeugt hat.
	 */
	getAllToplists(): Toplist[];
	/**
	 * Liefert die Toplist mit dem Persistenz-Key zurück.
	 */
	getToplist(userPersistenceNumberKey: string): Toplist;
	/**
	 * Löscht die übergebene Toplist oder die Toplist mit dem Persistenz-Key.
	 */
	removeToplist(toplist: Toplist): void;
	/**
	 * Erzeugt oder aktualisiert die Toplist für den übergebenen userPersistenceNumberKey.
	 */
	createOrUpdateToplist(userPersistenceNumberKey: string, displayName: string, parameters?: { labelMapping?: { [minValue: string]: string }; ascending?: boolean; }): Toplist;
}

/**
 * ToplistDisplayType repräsentiert den Anzeigetyp eines Toplisteneintrags im Profil vonUsern.
 */
declare class ToplistDisplayType {
	/**
	 * Nur Anzeigename anzeigen.
	 */
	static readonly Label: ToplistDisplayType;
	/**
	 * Gespeicherten Wert anzeigen.
	 */
	static readonly Value: ToplistDisplayType;
	/**
	 * Anzeigename und Rang anzeigen.
	 */
	static readonly LabelAndRank: ToplistDisplayType;
	/**
	 * Wert und Rang anzeigen.
	 */
	static readonly ValueAndRank: ToplistDisplayType;
}

/**
 * ToplistLabelChangeEvents erhalten EventListener die bei einer
 * Toplist mit der Methode Toplist/addLabelChangeListener:method
 * erzeugt wurden, nachdem sich der Anzeigename für einen User geändert hat.
 *
 * Das ToplistLabelChangeEvent enthält alle wichtigen Daten, um auf die Änderung zu reagieren
 * und dem User beispielsweise für den Aufstieg zu gratulieren.
 */
declare class ToplistLabelChangeEvent {
	/**
	 * Liefert die zugehörige Toplist.
	 */
	getToplist(): Toplist;
	/**
	 * Liefert den vorherigen Anzeigenamen. Hatte der User vorher keinen
	 * Anzeigenamen, so ist dieser Wert <code>null</code>.
	 */
	getOldLabel(): string;
	/**
	 * Liefert den neuen Anzeigenamen. Hatte der User nun keinen
	 * Anzeigenamen mehr, so ist dieser Wert <code>null</code>.
	 */
	getNewLabel(): string;
	/**
	 * Liefert den User für den das Event ausgelöst wurde.
	 */
	getUser(): User;
	/**
	 * Liefert den Wert, der vor der Änderung gespeichert war.
	 */
	getOldValue(): number;
	/**
	 * Liefert den neuen Wert.
	 */
	getNewValue(): number;
}

/**
 * ToplistRankChangeEvents erhalten EventListener die bei einer
 * Toplist mit der Methode Toplist/addRankChangeListener:method
 * erzeugt wurden, nachdem sich der Rang für einen User geändert hat.
 *
 * Das ToplistRankChangeEvent enthält alle wichtigen Daten, um auf die Änderung zu reagieren
 * und den überholten Usern eine Nachricht zu senden.
 */
declare class ToplistRankChangeEvent {
	/**
	 * Liefert die zugehörige Toplist.
	 */
	getToplist(): Toplist;
	/**
	 * Liefert den Toplisten-Rang, den der User vor der Änderung hatte.
	 */
	getOldRank(): number;
	/**
	 * Liefert den neuen Toplisten-Rang, des Users.
	 */
	getNewRank(): number;
	/**
	 * Liefert den User für den das Event ausgelöst wurde.
	 */
	getUser(): User;
	/**
	 * Liefert die User, die bei dieser Änderung überholt worden sind.
	 * <br><br><b style="color:red;">Achtung:</b> Wenn mehr als <b>10 User</b>
	 * überholt wurden, so liefert die Methode die besten 10 überholten User.
	 */
	getUsersOvertook(): User[];
	/**
	 * Liefert den Wert, der vor der Änderung gespeichert war.
	 */
	getOldValue(): number;
	/**
	 * Liefert den neuen Wert.
	 */
	getNewValue(): number;
}

/**
 * Ein User ist ein Nutzer des Chats, in dem die App läuft.
 */
declare class User {
	/**
	 * Liefert die eindeutige Nutzerkennung des Nutzers.
	 */
	getUserId(): number;
	/**
	 * Liefert den Nicknamen des Nutzers.
	 */
	getNick(): string;
	/**
	 * Liefert das Alter des Nutzers. Bei Nutzern, die bereits sehr lange in der Plattform sind kann es vorkommen, dass kein Alter angegeben wurde. In diesem Fall ist das Alter <code>0</code>.
	 */
	getAge(): number;
	/**
	 * Liefert das Geschlecht des Nutzers.
	 */
	getGender(): Gender;
	/**
	 * Liefert den Zeitpunkt der Registrierung des Nutzers.
	 */
	getRegDate(): Date;
	/**
	 * Liefert den UserStatus des Nutzers.
	 */
	getUserStatus(): UserStatus;
	/**
	 * Liefert den UserType des Nutzers.
	 */
	getUserType(): UserType;
	/**
	 * Liefert den aktuellen ClientType des Nutzers oder Offline wenn er nicht im Chat online ist.
	 */
	getClientType(): ClientType;
	/**
	 * Prüft ob der Client des Users den übergebenen AppViewMode (für User/sendAppContent:method) anzeigen kann.
	 */
	canShowAppViewMode(mode: AppViewMode): boolean;
	/**
	 * Prüft ob der Client des User's den übergebenen AppContent anzeigen kann.
	 */
	canSendAppContent(appContent: AppContent): boolean;
	/**
	 * Prüft, ob der User in dem angegebenen Team ist.
	 * Dies funktioniert derzeit nur für Teams, die eine eigene /fa haben.
	 *
	 * <b style="color:red;">Achtung:</b> Bei Nutzern, die neu in ein Team kommen, funktioniert die Abfrage erst dann korrekt,
	 * wenn er sich neu in den Channel eingeloggt hat.
	 */
	isInTeam(teamName: string, subTeamName?: string): boolean;
	/**
	 * Liefert ein UserPersistence-Objekt für diesen Nutzer. Mit diesem Objekt kann eine App sich Dinge über diesen speziellen Nutzer merken.
	 */
	getPersistence(): UserPersistence;
	/**
	 * Shortcut-Funktion um mit dem DefaultBotUser eine private Nachricht zu versenden.
	 */
	sendPrivateMessage(message: string): void;
	/**
	 * Shortcut-Funktion um mit dem DefaultBotUser eine /m zu versenden.
	 */
	sendPostMessage(topic: string, text: string): void;
	/**
	 * Liefert die Information, ob dieser Nutzer Channelbesitzer im Channel der App ist.
	 */
	isChannelOwner(): boolean;
	/**
	 * Liefert die Information, ob der Channel der App
	 *  ein Lieblingschannel des Nutzers ist.
	 */
	isLikingChannel(): boolean;
	/**
	 * Liefert die Information, ob der Nutzer im harten Kern des Channels der App ist.
	 * @since AppServer 92701, ChatServer 92701
	 */
	isChannelCoreUser(): boolean;
	/**
	 * Liefert die Information, ob dieser Nutzer ein AppManager für diese App ist. Die Channelbesitzer zählen automatisch auch als AppManager.
	 */
	isAppManager(): boolean;
	/**
	 * Liefert Information, ob dieser Nutzer derzeit für das Schreiben öffentlicher Nachrichten im Channel gesperrt ist.
	 */
	isMuted(): boolean;
	/**
	 * Liefert Information, ob dieser Nutzer beim Schreiben öffentlicher Nachrichten im Channel
	 * derzeit für die Verwendung von Textformatierungen, Farben und Smileys gesperrt ist.
	 */
	isColorMuted(): boolean;
	/**
	 * Liefert Information, ob dieser Nutzer derzeit für das Betreten des Channel gesperrt ist.
	 */
	isLocked(): boolean;
	/**
	 * Liefert Information, ob dieser Nutzer Channelmoderator im Channel der App ist.
	 */
	isChannelModerator(): boolean;
	/**
	 * Liefert Information, ob dieser Nutzer Eventmoderator im Channel der App ist.
	 */
	isEventModerator(): boolean;
	/**
	 * Liefert Information, ob dieser Nutzers der Entwickler der App ist.
	 */
	isAppDeveloper(): boolean;
	/**
	 * Liefert einen Link zum Profil des Nutzers, den man im Chat anzeigen kann.
	 */
	getProfileLink(displayText?: string): string;
	/**
	 * Liefert die Information, ob der Nutzer online im Channel der App ist.
	 */
	isOnlineInChannel(): boolean;
	/**
	 * Liefert die Anzahl der Knuddel, die der Nutzer besitzt.
	 */
	getKnuddelAmount(): KnuddelAmount;
	/**
	 * Liefert die Information, ob der Nutzer irgendwo im Chat online ist.
	 */
	isOnline(): boolean;
	/**
	 * Liefert die Readme des Nutzers, die er mit /readme TEXT in sein Profil gesetzt hat.
	 */
	getReadme(): string;
	/**
	 * Liefert die vom Nutzer verbrachte Zeit im gesamten Chatsystem In Minuten.
	 * <b>Hinweis:</b> Die Minutenzahl wird derzeit immer nur zu dem Zeitpunkt aktualisiert,
	 * wenn der Nutzer offline geht.
	 */
	getOnlineMinutes(): number;
	/**
	 * Liefert die Information, ob der Nutzer sich mittels /away-Funktion kurz abgemeldet hat.
	 */
	isAway(): boolean;
	/**
	 * Liefert die Information, ob der Nutzer ein Profilfoto hat.
	 */
	hasProfilePhoto(): boolean;
	/**
	 * (Er)setzt den übergebenen AppContent beim Nutzer.
	 */
	sendAppContent(appContent: AppContent): AppContentSession;
	/**
	 * Liefert alle AppContentSession, die der User
	 * aktuell geöffnet hat.
	 */
	getAppContentSessions(): AppContentSession[];
	/**
	 * Liefert die AppContentSession, die der User
	 * mit einem bestimmten AppViewMode aktuell geöffnet hat.
	 */
	getAppContentSession(appViewMode: AppViewMode): AppContentSession;
	/**
	 * Vergleicht den übergebenen Nutzer und liefert <code>true</code>, falls der übergebene Nutzer
	 * identisch ist mit dem aktuellen Nutzer.
	 */
	equals(user: User): boolean;
	/**
	 * Liefert die URL zum Profilfoto des Nutzers. Die übergebene Breite und Höhe
	 * liefern dem Server einen Anhaltswert, um das bestmögliche Foto zu finden,
	 * sind aber keine Garantie, dass das Foto diese Ausmaße haben wird.
	 */
	getProfilePhoto(width: number, height: number): string;
	/**
	 * Liefert das QuestAccess-Objekt
	 * für diesen Nutzer in dieser App.
	 * @since AppServer 82290, ChatServer 82290
	 */
	getQuestAccess(): QuestAccess;
	/**
	 * Liefert die Information, ob der Nutzer gerade sein Video streamt.
	 */
	isStreamingVideo(): boolean;
	/**
	 * Liefert den KnuddelAccount des Nutzers.
	 */
	getKnuddelAccount(): KnuddelAccount;
	/**
	 * Liefert die ChannelTalkPermission für diesen Nutzer in diesem
	 * Channel.
	 */
	getChannelTalkPermission(): ChannelTalkPermission;
	/**
	 * Liefert die Information, ob der User ein verifiziertes Profilbild hat.
	 */
	isProfilePhotoVerified(): boolean;
	/**
	 * Liefert die Information, ob das Alter des Users verifiziert ist.
	 */
	isAgeVerified(): boolean;
	/**
	 * Setzt dem Nutzer ein Icon in die Nickliste, das auf der rechten Seite seines Nicks angezeigt wird.
	 * Der Eintrag wird automatisch entfernt, sobald der Nutzer den Channel verlässt,
	 * kann aber auch mit User/removeNicklistIcon:method
	 * entfernt werden.
	 */
	addNicklistIcon(imagePath: string, imageWidth: number): void;
	/**
	 * Entfernt dem Nutzer ein über die API gesetztes Icon in die Nickliste.
	 */
	removeNicklistIcon(imagePath: string): void;
	/**
	 * Startet einen Würfelwurf für den Nutzer, falls er online im Channel ist und er nicht gemuted ist.
	 * @since AppServer 89159, ChatServer 89159
	 */
	triggerDice(diceConfiguration: DiceConfiguration): void;
}

/**
 * Mit einer Instanz von UserAccess kann eine App
 * auf User zugreifen, die bereits einmal im Channel waren,
 * als die App lief. Für alle nicht zugreifbaren User kann man via UserAccess den korrekt geschriebenen Nicknamen erhalten.
 *
 * Die Instanz für die <code>UserAccess</code> erhält man über das KnuddelsServer-Objekt
 * mit KnuddelsServer.getUserAccess()
 */
declare class UserAccess {
	/**
	 * Liefert die userId des Nutzers mit dem übergebenen Nicknamen.
	 */
	getUserId(nick: string): number;
	/**
	 * Informiert darüber, ob ein Nutzer mit dem übergebenen Nicknamen existiert.
	 */
	exists(nick: string): boolean;
	/**
	 * Informiert darüber, ob der Nutzer mit der übergebenen userId geladen werden darf. Neben dem AppDeveloper können nur Nutzer geladen werden, die sich einmal im Channel befanden, als die App
	 * lief.
	 */
	mayAccess(userId: number): boolean;
	/**
	 * Liefert den Nutzer mit der übergebenen userId. Neben dem AppDeveloper können nur Nutzer geladen werden, die sich einmal im Channel befanden, als die App lief. Es wird empfohlen vor der
	 * Abfrage von <code>getUserById(userId)</code> mit UserAccess/mayAccess:method abzufragen, ob dies funktionieren wird.
	 */
	getUserById(userId: number): User;
	/**
	 * Liefert den Nicknamen des Nutzers mit der übergebenen userId in der korrekten Schreibweise.
	 */
	getNick(userId: number): string;
	/**
	 * Loopt über alle zugreifbaren User sortiert nach Registrierzeitpunkt und
	 * führt für jeden User das übergebene Callback aus.
	 */
	eachAccessibleUser(
		callback: (user: User, index: number, accessibleUserCount: number, key?: string) => boolean,
		parameters?: {
			onStart?(accessibleUserCount: number, key?: string): void;
			onEnd?(accessibleUserCount: number, key?: string): void;
		}): void;
}

/**
 * Für jeden User kann eine UserPersistence angefordert werden, um sich
 * für einen bestimmten Nutzer Dinge persistent zu merken.
 */
declare class UserPersistence extends Persistence {
	/**
	 * Löscht alle Zahlenwerte, die in dieser UserPersistence gespeichert sind.
	 * @since AppServer 88569
	 */
	deleteAllNumbers(): number;
	/**
	 * Löscht alle Objekte, die in dieser UserPersistence gespeichert sind.
	 * @since AppServer 88569
	 */
	deleteAllObjects(): number;
	/**
	 * Löscht alle Zeichenketten, die in dieser UserPersistence gespeichert sind.
	 * @since AppServer 88569
	 */
	deleteAllStrings(): number;
	/**
	 * Löscht alle Daten, die in dieser UserPersistence gespeichert sind.
	 * @since AppServer 88569
	 */
	deleteAll(): number;
}

/**
 * Diese Klasse repräsentiert einen Eintrag der Persistenz.
 */
declare class UserPersistenceNumberEntry {
	/**
	 * Liefert den Nutzer.
	 */
	getUser(): User;
	/**
	 * Liefert den Wert.
	 */
	getValue(): number;
	/**
	 * Liefert den Rang des Elements in der Persistenz.
	 */
	getRank(): number;
	/**
	 * Liefert die Position des Elements in der Persistenz.
	 */
	getPosition(): number;
}

/**
 * Mit dieser Klasse ist es möglich nicht User-spezifische Abfragen auf die <code>UserPersistence</code> auszuführen.
 */
declare class UserPersistenceNumbers {
	/**
	 * Liefert die Summe aller via <code>UserPersistence</code> gespeicherten Zahlen für den übergebenen <code>key</code>.
	 */
	static getSum(key: string): number;
	/**
	 * Löscht alle gespeicherten Zahlen-Werte für den übergebenen <code>key</code>.
	 */
	static deleteAll(key: string): number;
	/**
	 * Liefert die Anzahl aller unterschiedlichen Nutzer, die Werte für einen bestimmten <code>key</code> gespeichert haben.
	 * Hierbei kann optional der Wertebereich über die <code>parameters</code> eingegrenzt werden.
	 */
	static getCount(key: string, parameters?: { minimumValue?: number; maximumValue?: number; }): number;
	/**
	 * Ändert einen bestimmten <code>key</code> bei allen UserPersistence.
	 */
	static updateKey(oldKeyName: string, newKeyName: string): number;
	/**
	 * Ändert alle Werte für einen bestimmten <code>key</code>, die vorher einen bestimmten anderen Wert hatten in der UserPersistence.
	 * <br /><strong>Hinweis:</strong> Da diese Methode ein Batch-Update ist werden keine Change-Listener (ToplistRankChangeEvent, ToplistLabelChangeEvent) ausgelöst.
	 */
	static updateValue(key: string, oldValue: number, newValue: number): number;
	/**
	 * Addiert einen Wert für Einträge mit einem bestimmten <code>key</code> in der UserPersistence.
	 * <br /><strong>Hinweis:</strong> Da diese Methode ein Batch-Update ist werden keine Change-Listener (ToplistRankChangeEvent, ToplistLabelChangeEvent) ausgelöst.
	 */
	static addNumber(key: string, value: number, parameters?: { minimumValue?: number; maximumValue?: number; targetUsers?: User[]; }): number;
	/**
	 * Liefert ein Array mit <code>UserPersistenceNumberEntry</code>-Objekten für einen bestimmten <code>key</code>.
	 * Hierdurch kann beispielsweise eine blätterbare Topliste abgebildet werden.
	 */
	static getSortedEntries(key: string, parameters?: { ascending?: boolean; count?: number; page?: number; minimumValue?: number; maximumValue?: number; }): UserPersistenceNumberEntry[];
	/**
	 * Liefert ein Array mit <code>UserPersistenceNumberEntry</code>-Objekten für einen bestimmten <code>key</code>. Hierbei werden die nähesten Elemente gewählt,
	 * die am übergebenen User/UserId liegen.
	 *
	 * Beispiel: Der Nutzer ist in der Liste auf Position 20, dann werden die Resultate von 14-24 bei einem Count von 10 ausgegeben.
	 * Beispiel: Der Nutzer ist in der Liste auf Position 3, dann werden die Resultate von 1-10 bei einem Count von 10 ausgegeben.
	 */
	static getSortedEntriesAdjacent(key: string, user_or_userId: (User|number), parameters?: { ascending?: boolean; count?: number; }): UserPersistenceNumberEntry[];
	/**
	 * Liefert die absolute Position des Nutzers in der Liste. Die Position ist im Gegensatz zum Rang immer eindeutig.
	 *
	 * Bei gleichem Wert hat der Nutzer die höhere Position, der zuerst einen Eintrag in der Persistenz hatte.
	 *
	 * Mit der Methode UserPersistenceNumbers/getRank:method kann man den Rang des Nutzers herausfinden. Dieser ist identisch, wenn
	 * unterschiedliche Nutzer denselben Wert haben.
	 */
	static getPosition(key: string, user_or_userId: (User|number), parameters?: { ascending?: boolean; minimumValue?: number; }): number;
	/**
	 * Liefert den Rang des Nutzers. Der Rang ist nicht eindeutig. Bei gleicher Punktzahl haben Nutzer denselben Rang.
	 * Mit der Methode UserPersistenceNumbers/getPosition:method kann man die Position eindeutige Position, statt des Ranges herausfinden.
	 */
	static getRank(key: string, user_or_userId: (User|number), parameters?: { ascending?: boolean; minimumValue?: number; }): number;
	/**
	 * Ruft eine Funktion für alle Nutzer auf, die einen bestimmten <code>key</code> in der <code>UserPersistence</code> gesetzt haben.
	 * Hierbei greifen die übergebenen Filter.
	 */
	static each(
		key: string,
		callback: { user: User; value: number; index: number; totalCount: number; key: string; },
		parameters?: {
			ascending?: boolean;
			minimumValue?: number;
			maximumValue?: number;
			maximumCount?: number;
			onStart?(totalCount: number, key: string): void;
			onEnd?(totalCount: number, key: string): void;
		}): void;
	/**
	 * Liefert alle keys, die für User in der Persistence
	 * gespeichert wurden.
	 * @since AppServer 82483
	 */
	static getAllKeys(filterKey?: string): string[];
}

/**
 * Mit dieser Klasse ist es möglich nicht User-spezifische Abfragen auf die <code>UserPersistence</code> auszuführen.
 */
declare class UserPersistenceObjects {
	/**
	 * Löscht alle gespeicherten Objekte für den übergebenen <code>key</code>.
	 * @since AppServer 82478
	 */
	static deleteAll(key: string): number;
	/**
	 * Liefert alle keys, die für User in der Persistence
	 * gespeichert wurden.
	 * @since AppServer 82483
	 */
	static getAllKeys(filterKey?: string): string[];
}

/**
 * Mit dieser Klasse ist es möglich nicht User-spezifische Abfragen auf die <code>UserPersistence</code> auszuführen.
 */
declare class UserPersistenceStrings {
	/**
	 * Liefert die Information, ob für einen bestimmten key und value bei einem beliebigen Nutzer eine Paarung existiert.
	 * @since AppServer 88571
	 */
	static exists(key: string, value: string, ignoreCase?: boolean): boolean;
	/**
	 * Löscht alle gespeicherten Strings für den übergebenen <code>key</code>.
	 * @since AppServer 82478
	 */
	static deleteAll(key: string): number;
	/**
	 * Liefert alle keys, die für User in der Persistence
	 * gespeichert wurden.
	 * @since AppServer 82483
	 */
	static getAllKeys(filterKey?: string): string[];
}

/**
 * Repräsentiert den Status eines User.
 */
declare class UserStatus {
	/**
	 * Liefert den numerischen Wert das UserStatus.
	 */
	getNumericStatus(): number;
	/**
	 * Liefert die Information ob der aktuelle UserStatus mindestens so hoch ist, wie der übergebene UserStatus.
	 */
	isAtLeast(otherUserStatus: UserStatus): boolean;
	/**
	 *
	 */
	static readonly Newbie: UserStatus;
	/**
	 *
	 */
	static readonly Family: UserStatus;
	/**
	 *
	 */
	static readonly Stammi: UserStatus;
	/**
	 *
	 */
	static readonly HonoryMember: UserStatus;
	/**
	 *
	 */
	static readonly Admin: UserStatus;
	/**
	 *
	 */
	static readonly SystemBot: UserStatus;
	/**
	 *
	 */
	static readonly Sysadmin: UserStatus;
}

/**
 * Repräsentiert den Typ eines User.
 */
declare class UserType {
	/**
	 * Bot der App.
	 */
	static readonly AppBot: UserType;
	/**
	 * Bot des Knuddels-Chatsystems.
	 */
	static readonly SystemBot: UserType;
	/**
	 * Menschlicher User.
	 */
	static readonly Human: UserType;
}

/**
 * VideoChannelData hält Informationen zu laufenden Video-Streams im Channel bereit.
 */
declare class VideoChannelData {
	/**
	 * Liefert alle User die im Channel derzeit ihr Video streamen.
	 */
	getStreamingVideoUsers(): User[];
}
