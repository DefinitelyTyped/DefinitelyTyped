import { ResourceUser } from './resource-user';

export interface BuildCompletedRequest {
    id: number;
    url: string;
    requestedFor: ResourceUser;
}
