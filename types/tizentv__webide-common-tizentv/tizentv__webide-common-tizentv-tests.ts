import {
  TVWebApp,
  TizenCertManager,
  SamsungCertManager,
  ProfileManager,
  AuthorProfile,
  DistributorProfile
} from "@tizentv/webide-common-tizentv";

const tvWebApp = new TVWebApp("test", "./", "test.test");
tvWebApp.init();

const tizenCertManager: TizenCertManager = new TizenCertManager("./");
tizenCertManager.init();

const samsungCertManager: SamsungCertManager = new SamsungCertManager("./");
samsungCertManager.init();

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
