import {
  AccessInfo,
  AuthorInfo,
  AuthorProfile,
  DistributorInfo,
  DistributorProfile,
  ProfileManager,
  SamsungAuthorInfo,
  SamsungCertManager,
  TVWebApp,
  TizenCertManager
} from "@tizentv/webide-common-tizentv";

const tvWebApp = new TVWebApp("test", "./", "test.test");
tvWebApp.init();

/**
 * Samsung Cert Manager
 */
const samsungAuthorInfo: SamsungAuthorInfo = {
  name: '',
  password: '',
  country: '',
  state: '',
  city: '',
  organization: '',
  department: ''
};
const samsungDistributorInfo: DistributorInfo = {
  distributorPassword: '',
  privilegeLevel: 'Public',
  duidList: []
};
const accessInfo: AccessInfo = {
  accessToken: '',
  userId: '',
  userEmail: ''
};

const samsungCertManager: SamsungCertManager = new SamsungCertManager("./");
samsungCertManager.init();
samsungCertManager.createAuthorCert('test', samsungAuthorInfo, accessInfo);
samsungCertManager.createDistributorCert('test', samsungDistributorInfo, accessInfo);

/**
 * Tizen Cert Manager
 */
 const authorInfo: AuthorInfo = {
  keyFileName: '',
  authorName: '',
  authorPassword: '',
  countryInfo: '',
  stateInfo: '',
  cityInfo: '',
  organizationInfo: '',
  departmentInfo: '',
  emailInfo: ''
};
const tizenCertManager: TizenCertManager = new TizenCertManager("./");
tizenCertManager.init();
tizenCertManager.createCert(authorInfo);
tizenCertManager.getTizenDistributorProfile('public');

/**
 * Tizen Profile Manager
 */
 const authorProfile: AuthorProfile = {
  authorCA: '',
  authorCertPath: '',
  authorPassword: ''
};
const distributorProfile: DistributorProfile = {
  distributorCA: '',
  distributorCertPath: '',
  distributorPassword: ''
};
const profileManager: ProfileManager = new ProfileManager("./");
profileManager.registerProfile("test", authorProfile, distributorProfile);
