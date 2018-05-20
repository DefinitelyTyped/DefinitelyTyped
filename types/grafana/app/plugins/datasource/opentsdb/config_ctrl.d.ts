 export class OpenTsConfigCtrl {
    static templateUrl: string;
    current: any;
    /** @ngInject */
    constructor($scope: any);
    tsdbVersions: {
        name: string;
        value: number;
    }[];
    tsdbResolutions: {
        name: string;
        value: number;
    }[];
}
