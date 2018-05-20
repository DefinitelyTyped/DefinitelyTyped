export declare class CloudWatchConfigCtrl {
  static templateUrl: string;
  current: any;
  accessKeyExist: boolean;
  secretKeyExist: boolean;
  /** @ngInject */
  constructor($scope: any);
  resetAccessKey(): void;
  resetSecretKey(): void;
  authTypes: {
    name: string;
    value: string;
  }[];
  indexPatternTypes: ({
    name: string;
    value: any;
  } | {
    name: string;
    value: string;
    example: string;
  })[];
}
