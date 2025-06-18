export = IDToken;
declare function IDToken(): void;
declare class IDToken {
    private credentialsPathCache_;
    private credentialsContentCache_;
    fetchFromComputeEngine(targetAudience: string): string;
    private formatJWT_;
    private getResponsePlainObject_;
    fetchFromServiceAccount(targetAudience: string): string;
}
