// Tests for Google Apps Script Advanced Services APIs
// These tests verify that the global service variables are optional
// and that their properties are required when the service is defined.

function testAdsense() {
    if (!Adsense) return;
    // $ExpectType Adsense
    const adsense = Adsense;
    // $ExpectType AccountsCollection
    const accounts = adsense.Accounts;
    // $ExpectType Accounts
    const list = accounts.list();
}

function testCalendar() {
    if (!Calendar) return;
    // $ExpectType Calendar
    const calendar = Calendar;
    // $ExpectType AclCollection
    const acl = calendar.Acl;
    // $ExpectType Acl
    const list = acl.list("primary");
}

function testDriveV2() {
    if (!Drive_v2) return; // Drive v2 global is Drive_v2
    // $ExpectType Drive_v2
    const drive = Drive_v2;
    // $ExpectType FilesCollection
    const files = drive.Files;
    // $ExpectType FileList
    const list = files.list();
}

function testDriveV3() {
    if (!Drive) return; // Drive v3 global is Drive
    // $ExpectType Drive
    const drive = Drive;
    // $ExpectType FilesCollection
    const files = drive.Files;
    // $ExpectType FileList
    const list = files.list();
}

function testAdminDirectory() {
    if (!AdminDirectory) return;
    // $ExpectType AdminDirectory
    const admin = AdminDirectory;
    // $ExpectType UsersCollection
    const users = admin.Users;
    // $ExpectType Users
    const list = users.list();
}

function testSheets() {
    if (!Sheets) return;
    // $ExpectType Sheets
    const sheets = Sheets;
    // $ExpectType SpreadsheetsCollection
    const spreadsheets = sheets.Spreadsheets;
    // $ExpectType Spreadsheet
    const create = spreadsheets.create({});
}

function testSlides() {
    if (!Slides) return;
    // $ExpectType Slides
    const slides = Slides;
    // $ExpectType PresentationsCollection
    const presentations = slides.Presentations;
    // $ExpectType Presentation
    const create = presentations.create({});
}

function testGmail() {
    if (!Gmail) return;
    // $ExpectType Gmail
    const gmail = Gmail;
    // $ExpectType UsersCollection
    const users = gmail.Users;
    // $ExpectType Profile
    const profile = users.getProfile("me");
}

function testTasks() {
    if (!Tasks) return;
    // $ExpectType Tasks
    const tasks = Tasks;
    // $ExpectType TasklistsCollection
    const tasklists = tasks.Tasklists;
    // $ExpectType TaskLists
    const list = tasklists.list();
}

function testYouTube() {
    if (!YouTube) return;
    // $ExpectType YouTube
    const youtube = YouTube;
    // $ExpectType VideosCollection
    const videos = youtube.Videos;
    // $ExpectType VideoListResponse
    const list = videos.list("snippet");
}

function testAnalytics() {
    if (!Analytics) return;
    // $ExpectType Analytics
    const analytics = Analytics;
    // $ExpectType ManagementCollection
    const management = analytics.Management;
    // $ExpectType AccountsCollection
    const accounts = management.Accounts;
    // $ExpectType Accounts
    const list = accounts.list();
}

function testAnalyticsReporting() {
    if (!AnalyticsReporting) return;
    // $ExpectType AnalyticsReporting
    const analyticsreporting = AnalyticsReporting;
    // $ExpectType ReportsCollection
    const reports = analyticsreporting.Reports;
    // $ExpectType GetReportsResponse
    const batchGet = reports.batchGet({});
}

function testAppsactivity() {
    if (!Appsactivity) return;
    // $ExpectType Appsactivity
    const appsactivity = Appsactivity;
    // $ExpectType ActivitiesCollection
    const activities = appsactivity.Activities;
    // $ExpectType ListActivitiesResponse
    const list = activities.list();
}

function testBigQuery() {
    if (!BigQuery) return;
    // $ExpectType BigQuery
    const bigquery = BigQuery;
    // $ExpectType JobsCollection
    const jobs = bigquery.Jobs;
    // $ExpectType JobList
    const list = jobs.list("project-id");
}

function testClassroom() {
    if (!Classroom) return;
    // $ExpectType Classroom
    const classroom = Classroom;
    // $ExpectType CoursesCollection
    const courses = classroom.Courses;
    // $ExpectType ListCoursesResponse
    const list = courses.list();
}

function testDfareporting() {
    if (!Dfareporting) return;
    // $ExpectType Dfareporting
    const dfareporting = Dfareporting;
    // $ExpectType AccountUserProfilesCollection
    const accountUserProfiles = dfareporting.AccountUserProfiles;
    // $ExpectType AccountUserProfilesListResponse
    const list = accountUserProfiles.list('profile-id');
}

function testDocs() {
    if (!Docs) return;
    // $ExpectType Docs
    const docs = Docs;
    // $ExpectType DocumentsCollection
    const documents = docs.Documents;
    // $ExpectType Document
    const create = documents.create({ title: "title" });
}

function testDriveActivity() {
    if (!DriveActivity) return;
    // $ExpectType DriveActivity
    const driveactivity = DriveActivity;
    // $ExpectType ActivityCollection
    const activity = driveactivity.Activity;
    // $ExpectType QueryDriveActivityResponse
    const query = activity.query({ consolidationStrategy: { legacy: {} } });
}

function testAdminGroupsMigration() {
    if (!AdminGroupsMigration) return;
    // $ExpectType AdminGroupsMigration
    const adminGroupsMigration = AdminGroupsMigration;
    // $ExpectType ArchiveCollection
    const archive = adminGroupsMigration.Archive;
    // $ExpectType Groups
    const insert = archive.insert("groupId");
}

function testAdminGroupsSettings() {
    if (!AdminGroupsSettings) return;
    // $ExpectType AdminGroupsSettings
    const adminGroupsSettings = AdminGroupsSettings;
    // $ExpectType GroupsCollection
    const groups = adminGroupsSettings.Groups;
    // $ExpectType Groups
    const get = groups.get("groupUniqueId");
}

function testAdminLicenseManager() {
    if (!AdminLicenseManager) return;
    // $ExpectType AdminLicenseManager
    const adminLicenseManager = AdminLicenseManager;
    // $ExpectType LicenseAssignmentsCollection
    const licenseAssignments = adminLicenseManager.LicenseAssignments;
    // $ExpectType LicenseAssignmentList
    const list = licenseAssignments.listForProduct("productId", "customerId");
}

function testMirror() {
    if (!Mirror) return;
    // $ExpectType Mirror
    const mirror = Mirror;
    // $ExpectType TimelineCollection
    const timeline = mirror.Timeline;
    // $ExpectType TimelineListResponse
    const list = timeline.list();
}

function testPeopleApi() {
    if (!People) return;
    // $ExpectType People
    const people = People;
    // $ExpectType PeopleCollection
    const peopleCollection = people.People;
    // $ExpectType ListConnectionsResponse
    const list = peopleCollection.Connections.list('people/me');
}

function testAdminReports() {
    if (!AdminReports) return;
    // $ExpectType AdminReports
    const adminReports = AdminReports;
    // $ExpectType ActivitiesCollection
    const activities = adminReports.Activities;
    // $ExpectType Activities
    const list = activities.list("userKey", "applicationName");
}

function testAdminReseller() {
    if (!AdminReseller) return;
    // $ExpectType AdminReseller
    const adminReseller = AdminReseller;
    // $ExpectType CustomersCollection
    const customers = adminReseller.Customers;
    // $ExpectType Customer
    const get = customers.get("customerId");
}

function testTagManager() {
    if (!TagManager) return;
    // $ExpectType TagManager
    const tagManager = TagManager;
    // $ExpectType AccountsCollection
    const accounts = tagManager.Accounts;
    // $ExpectType ListAccountsResponse
    const list = accounts.list();
}

function testYouTubeAnalytics() {
    if (!YouTubeAnalytics) return;
    // $ExpectType YouTubeAnalytics
    const youTubeAnalytics = YouTubeAnalytics;
    // $ExpectType ReportsCollection
    const reports = youTubeAnalytics.Reports;
    // $ExpectType QueryResponse
    const query = reports.query();
}

function testYoutubePartner() {
    if (!YoutubePartner) return;
    // $ExpectType YoutubePartner
    const youtubePartner = YoutubePartner;
    // $ExpectType AssetsCollection
    const assets = youtubePartner.Assets;
    // $ExpectType AssetListResponse
    const list = assets.list("id");
}

