// Type definitions for @tizentv/webide-common-tizentv 1.0
// Project: https://github.com/Samsung/webIDE-common-tizentv
// Definitions by: Bart van den Ende <https://github.com/bartvandenende-wm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface AuthorInfo {
  keyFileName: string;
  authorName: string;
  authorPassword: string;
  countryInfo: string;
  stateInfo: string;
  cityInfo: string;
  organizationInfo: string;
  departmentInfo: string;
  emailInfo: string;
}

export interface SamsungAuthorInfo {
  name: string;
  password: string;
  country: string;
  state: string;
  city: string;
  organization: string;
  department: string;
}

export interface DistributorInfo {
  distributorPassword: string;
  privilegeLevel: SamsungPrivilegeLevel;
  duidList: string[];
}

export interface AccessInfo {
  accessToken: string;
  userId: string;
  userEmail: string;
}

export interface AuthorProfile {
  authorCA: string;
  authorCertPath: string;
  authorPassword: string;
}

export interface DistributorProfile {
  distributorCA: string;
  distributorCertPath: string;
  distributorPassword: string;
}

export interface ProfileItem {
  authorKey: string;
  authorPwd: string;
  distributorKey1: string;
  distributorPwd1: string;
  distributorKey2: string;
  distributorPwd2: string;
}

export type PrivilegeLevel = 'partner' | 'public';
export type SamsungPrivilegeLevel = 'Partner' | 'Public';
export type ItemType = 'author' | 'distributor1' | 'distributor2';

export class TVWebApp {
  constructor(name: string, location: string, id: string);
  init(): void;
  buildWidget(profilePath: string, excludeFiles?: string): Promise<void>;
  launchOnSimulator(simulatorLocation: string): Promise<void>;
  launchOnEmulator(chromeExecPath?: string, isDebug?: boolean): Promise<void>;
  launchOnTV(tvIP: string, chromeExecPath?: string, isDebug?: boolean): Promise<void>;
  getAppScreenWidth(): string;
  static openProject(projectPath: string): TVWebApp;
  static getProjectId(projectPath: string): string;
}

export class TizenCertManager {
  constructor(resourcePath: string);
  init(): Promise<void>;
  loadCaCert(): string;
  createCert(authorInfo: AuthorInfo): void;
  getTizenDeveloperCA(): string;
  getTizenDistributorProfile(privilegeLevel: PrivilegeLevel): DistributorProfile;
}

export class SamsungCertManager {
  constructor(resourcePath: string);
  init(): Promise<void>;
  createAuthorCert(profileName: string, authorInfo: SamsungAuthorInfo, accessInfo: AccessInfo): Promise<string>;
  createDistributorCert(profileName: string, distrbutorInfo: DistributorInfo, accessInfo: AccessInfo): Promise<string>;
  generateAuthorCSR(authorInfo: SamsungAuthorInfo): void;
  generateDistributorCSR(duidList: string[], accessInfo: AccessInfo): void;
  fetchAuthorCRT(accessInfo: AccessInfo): Promise<void>;
  fetchDistributorCRT(isCrt: boolean): Promise<void>;
  generateAuthorPCKS12(password: string): void;
  generateDistributorPCKS12(password: string, privilegeLevel: SamsungPrivilegeLevel): void;
  loadCaCert(certFile: string): string;
}

export class ProfileManager {
  constructor(resourcePath: string);
  registerProfile(profileName: string, authorProfile: AuthorProfile, distributorProfile: DistributorProfile): Promise<void>;
  setActivateProfile(profileName: string): boolean;
  removeProfile(profileName: string): boolean;
  modifyProfile(profileName: string, itemType: ItemType, certpath: string, password: string): boolean;
  isProfileExist(profileName: string): boolean;
  listProfile(): string[] | null;
  getProfileKeys(profileName: string): string[] | null;
  getProfileItems(profileName: string): ProfileItem | null;
}
