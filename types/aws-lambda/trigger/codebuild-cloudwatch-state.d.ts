import { EventBridgeEvent, EventBridgeHandler } from "./eventbridge";

export type CodeBuildCloudWatchStateHandler = EventBridgeHandler<
    "CodeBuild Build State Change",
    CodeBuildStateEventDetail,
    void
>;

export type CodeBuildStateType = "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | "STOPPED";
export type CodeBuildPhaseType =
    | "COMPLETED"
    | "FINALIZING"
    | "UPLOAD_ARTIFACTS"
    | "POST_BUILD"
    | "BUILD"
    | "PRE_BUILD"
    | "INSTALL"
    | "QUEUED"
    | "DOWNLOAD_SOURCE"
    | "PROVISIONING"
    | "SUBMITTED";
export type CodeBuildPhaseStatusType = "TIMED_OUT" | "STOPPED" | "FAILED" | "SUCCEEDED" | "FAULT" | "CLIENT_ERROR";
export type CodeBuildCacheType = "NO_CACHE" | "LOCAL" | "S3";
export type CodeBuildSourceLocationType =
    | "CODECOMMIT"
    | "CODEPIPELINE"
    | "GITHUB"
    | "GITHUB_ENTERPRISE"
    | "BITBUCKET"
    | "S3"
    | "NO_SOURCE";
export type CodeBuildEnvironmentType =
    | "LINUX_CONTAINER"
    | "LINUX_GPU_CONTAINER"
    | "WINDOWS_CONTAINER"
    | "ARM_CONTAINER";
export type CodeBuildEnvironmentPullCredentialsType = "CODEBUILD" | "SERVICE_ROLE";
export type CodeBuildEnvironmentComputeType =
    | "BUILD_GENERAL1_SMALL"
    | "BUILD_GENERAL1_MEDIUM"
    | "BUILD_GENERAL1_LARGE"
    | "BUILD_GENERAL1_2XLARGE";
export type CodeBuildEnvironmentVariableType = "PARAMETER_STORE" | "PLAINTEXT" | "SECRETS_MANAGER";

export interface CodeBuildStateEventDetail {
    "build-status": CodeBuildStateType;
    "project-name": string;
    "build-id": string;
    "current-phase": CodeBuildPhaseType;
    "current-phase-context": string;
    version: string;
    "additional-information": {
        cache: {
            type: CodeBuildCacheType;
        };
        "build-number": number;
        "timeout-in-minutes": number;
        "build-complete": boolean;
        initiator: string;
        "build-start-time": string;
        source: {
            buildspec: string;
            location: string;
            type: CodeBuildSourceLocationType;
        };
        "source-version": string;
        artifact: {
            location: string;
        };
        environment: {
            image: string;
            "privileged-mode": boolean;
            "image-pull-credentials-type"?: CodeBuildEnvironmentPullCredentialsType | undefined;
            "compute-type": CodeBuildEnvironmentComputeType;
            type: CodeBuildEnvironmentType;
            "environment-variables": Array<{
                name: string;
                type?: CodeBuildEnvironmentVariableType | undefined;
                value: string;
            }>;
        };
        "project-file-system-locations": [];
        logs: {
            "group-name": string;
            "stream-name": string;
            "deep-link": string;
        };
        phases: Array<{
            "phase-context"?: string[] | undefined; // Not available for COMPLETED phase-type
            "start-time": string;
            "end-time"?: string | undefined; // Not available for COMPLETED phase-type
            "duration-in-seconds"?: number | undefined; // Not available for COMPLETED phase-type
            "phase-type": CodeBuildPhaseType;
            "phase-status"?: CodeBuildPhaseStatusType | undefined; // Not available for COMPLETED phase-type
        }>;
        "queued-timeout-in-minutes": number;
    };
}

export interface CodeBuildCloudWatchStateEvent
    extends EventBridgeEvent<"CodeBuild Build State Change", CodeBuildStateEventDetail>
{
    source: "aws.codebuild";
}
