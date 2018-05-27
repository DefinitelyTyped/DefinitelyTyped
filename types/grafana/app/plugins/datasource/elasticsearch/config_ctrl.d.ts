/// 
export class ElasticConfigCtrl {
    static templateUrl: string;
    current: any;
    /** @ngInject */
    constructor($scope: any);
    indexPatternTypes: ({
        name: string;
        value: any;
    } | {
        name: string;
        value: string;
        example: string;
    })[];
    esVersions: {
        name: string;
        value: number;
    }[];
    indexPatternTypeChanged(): void;
}
