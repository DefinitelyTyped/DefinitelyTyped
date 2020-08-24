import { IdToken } from '../../IdToken';

export interface PublishedGrade {
    scoreGiven: number;
    comment?: string;
    activityProgress: string;
    gradingProgress: string;
}

export interface GradeFilters {
    resourceLinkId?: boolean;
    tag?: boolean;
    limit?: number;
    userId?: boolean;
}

export interface RetrievedGrade {
    id: string;
    scoreOf: string;
    userId: string;
    resultScore: number;
    resultMaximum: number;
    comment: string;
}

export interface GradeService {
    scorePublish(idtoken: IdToken, grade: PublishedGrade): Promise<boolean>;

    result(idtoken: IdToken, filters?: GradeFilters): Promise<RetrievedGrade[] | false>;
}
