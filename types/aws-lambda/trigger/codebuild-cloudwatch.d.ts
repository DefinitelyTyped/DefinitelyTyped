import { Handler } from '../handler';
import { CodeBuildCloudWatchStateEvent } from './codebuild-cloudwatch-state';

export type CodeBuildCloudWatchHandler = Handler<CodeBuildCloudWatchEvent, void>;

export type CodeBuildCloudWatchEvent = CodeBuildCloudWatchStateEvent;
