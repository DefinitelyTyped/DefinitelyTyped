import {
    AuthToken,
    AuthClientTwoLegged,
    AuthClientThreeLegged,
    ActivitiesApi,
    AppPackagesApi,
    BucketsApi,
    DerivativesApi,
    EnginesApi,
    FoldersApi,
    HubsApi,
    ItemsApi,
    ObjectsApi,
    ProjectsApi,
    UserProfileApi,
    VersionsApi,
    WorkItemsApi,
} from 'forge-apis';

const authToken: AuthToken = {
    access_token: '',
    expires_in: 0,
    token_type: '',
    refresh_token: '',
};

// $ExpectType AuthClientTwoLegged
const authClientTwoLegged = new AuthClientTwoLegged('', '', [], true);
// $ExpectType Promise<AuthToken>
authClientTwoLegged.authenticate();
// $ExpectType AuthToken
authClientTwoLegged.getCredentials();
// $ExpectType void
authClientTwoLegged.setCredentials(authToken);
// $ExpectType boolean
authClientTwoLegged.isAuthorized();

// $ExpectType AuthClientThreeLegged
const authClientThreeLegged = new AuthClientThreeLegged('', '', '', [], true);
// $ExpectType string
authClientThreeLegged.generateAuthUrl('');
// $ExpectType Promise<AuthToken>
authClientThreeLegged.getToken('');
// $ExpectType Promise<AuthToken>
authClientThreeLegged.refreshToken(authToken);

// $ExpectType ActivitiesApi
const activitiesApi = new ActivitiesApi();

// $ExpectType Promise<ApiResponse>
activitiesApi.createActivity(
    {
        Id: '',
        Instruction: {},
        AppPackages: [''],
        RequiredEngineVersion: '',
        Parameters: {},
        AllowedChildProcesses: [{}],
        Version: 0,
        Description: '',
        HostApplication: '',
        IsPublic: true,
    },
    authClientTwoLegged,
    authToken,
);
// $ExpectType Promise<ApiResponse>
activitiesApi.deleteActivity('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
activitiesApi.deleteActivityHistory('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
activitiesApi.getActivity('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
activitiesApi.getActivityVersions('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
activitiesApi.getAllActivities(authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
activitiesApi.patchActivity('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
activitiesApi.setActivityVersion('', {}, authClientTwoLegged, authToken);

// $ExpectType AppPackagesApi
const appPackagesApi = new AppPackagesApi();

// $ExpectType Promise<ApiResponse>
appPackagesApi.createAppPackage(
    {
        id: '',
        resource: '',
        references: [''],
        requiredEngineVersion: '',
        version: 0,
        description: '',
        isPublic: true,
        isObjectEnabler: true,
    },
    authClientTwoLegged,
    authToken,
);
// $ExpectType Promise<ApiResponse>
appPackagesApi.deleteAppPackage('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
appPackagesApi.deleteAppPackageHistory('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
appPackagesApi.getAllAppPackages(authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
appPackagesApi.getAppPackage('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
appPackagesApi.getAppPackageVersions('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
appPackagesApi.getUploadUrl(authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
appPackagesApi.getUploadUrlWithRequireContentType(true, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
appPackagesApi.patchAppPackage('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
appPackagesApi.setAppPackageVersion('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
appPackagesApi.updateAppPackage(
    '',
    {
        id: '',
        resource: '',
        references: [''],
        requiredEngineVersion: '',
        version: 0,
        description: '',
        isPublic: true,
        isObjectEnabler: true,
    },
    authClientTwoLegged,
    authToken,
);

// $ExpectType BucketsApi
const bucketsApi = new BucketsApi();

// $ExpectType Promise<ApiResponse>
bucketsApi.createBucket(
    {
        bucketKey: '',
        policyKey: 'transient',
    },
    {},
    authClientTwoLegged,
    authToken,
);
// $ExpectType Promise<ApiResponse>
bucketsApi.deleteBucket('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
bucketsApi.getBucketDetails('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
bucketsApi.getBuckets({}, authClientTwoLegged, authToken);

// $ExpectType DerivativesApi
const derivativesApi = new DerivativesApi();
// $ExpectType Promise<ApiResponse>
derivativesApi.deleteManifest('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.getDerivativeManifest('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.getFormats({}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.getManifest('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.getMetadata('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.getModelviewMetadata('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.getModelviewProperties('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.getThumbnail('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.translate(
    {
        input: {
            urn: '',
            compressedUrn: true,
            rootFilename: '',
        },
        output: {
            formats: [
                {
                    type: 'svf',
                    views: ['2d'],
                    advanced: {
                        exportFileStructure: 'single',
                        modelGuid: '',
                        objectIds: [''],
                    },
                },
            ],
        },
    },
    {},
    authClientTwoLegged,
    authToken,
);

// $ExpectType EnginesApi
const enginesApi = new EnginesApi();
// $ExpectType Promise<ApiResponse>
enginesApi.getAllEngines(authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
enginesApi.getEngine('', authClientTwoLegged, authToken);

// $ExpectType FoldersApi
const foldersApi = new FoldersApi();
// $ExpectType Promise<ApiResponse>
foldersApi.getFolder('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
foldersApi.getFolderContents('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
foldersApi.getFolderParent('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
foldersApi.getFolderRefs('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
foldersApi.getFolderRelationshipsRefs('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
foldersApi.postFolder('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
foldersApi.postFolderRelationshipsRef('', '', {}, authClientTwoLegged, authToken);

// $ExpectType HubsApi
const hubsApi = new HubsApi();
// $ExpectType Promise<ApiResponse>
hubsApi.getHub('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
hubsApi.getHubs({}, authClientTwoLegged, authToken);

// $ExpectType ItemsApi
const itemsApi = new ItemsApi();
// $ExpectType Promise<ApiResponse>
itemsApi.getItem('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
itemsApi.getItemParentFolder('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
itemsApi.getItemRefs('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
itemsApi.getItemRelationshipsRefs('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
itemsApi.getItemTip('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
itemsApi.getItemVersions('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
itemsApi.postItem('', { included: [{ type: '', id: '' }] }, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
itemsApi.postItemRelationshipsRef('', '', {}, authClientTwoLegged, authToken);

// $ExpectType ObjectsApi
const objectsApi = new ObjectsApi();
// $ExpectType Promise<ApiResponse>
objectsApi.copyTo('', '', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.createSignedResource('', '', { minutesExpiration: 0 }, {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.deleteObject('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.deleteSignedResource('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.getObjectDetails('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.getObject('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.getObjects('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.getSignedResource('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.getStatusBySessionId('', '', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.uploadChunk('', '', 0, '', '', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.uploadObject('', '', 0, '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.uploadSignedResource('', 0, '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.uploadSignedResourcesChunk('', 0, '', '', {}, authClientTwoLegged, authToken);

// $ExpectType ProjectsApi
const projectsApi = new ProjectsApi();
// $ExpectType Promise<ApiResponse>
projectsApi.getHubProjects('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
projectsApi.getProject('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
projectsApi.getProjectHub('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
projectsApi.getProjectTopFolders('', '', authClientTwoLegged, authToken);

// $ExpectType Promise<ApiResponse>
projectsApi.postStorage('', {
    jsonapi: {
       version: '1.0'
    },
    data: {
       type: 'objects',
       attributes: {
          name: '{{Filename}}'
       },
       relationships: {
          target: {
             data: {
                type: 'folders',
                id: '{{FolderId}}'
             }
          }
       }
    }
 }, authClientTwoLegged, authToken);

// $ExpectType UserProfileApi
const userProfileApi = new UserProfileApi();
// $ExpectType Promise<ApiResponse>
userProfileApi.getUserProfile(authClientTwoLegged, authToken);

// $ExpectType VersionsApi
const versionsApi = new VersionsApi();
// $ExpectType Promise<ApiResponse>
versionsApi.getVersion('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
versionsApi.getVersionItem('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
versionsApi.getVersionRefs('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
versionsApi.getVersionRelationshipsRefs('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
versionsApi.postVersion('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
versionsApi.postVersion('', {}, authClientTwoLegged, authToken);

// $ExpectType WorkItemsApi
const workItemsApi = new WorkItemsApi();
// $ExpectType Promise<ApiResponse>
workItemsApi.createWorkItem(
    {
        Id: '',
        Arguments: {},
        Status: '',
        StatusDetail: {},
        AvailabilityZone: '',
        ActivityId: '',
        Version: 0,
        Timestamp: '',
    },
    authClientTwoLegged,
    authToken,
);
// $ExpectType Promise<ApiResponse>
workItemsApi.deleteWorkItem('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
workItemsApi.getAllWorkItems(0, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
workItemsApi.getWorkItem('', authClientTwoLegged, authToken);
