export default class CreateContextParameters {
    private map: Map<string, string | boolean>;

    referenceContext(id: string): CreateContextParameters;

    background(background: boolean): CreateContextParameters;

    userContext(userContext: string): CreateContextParameters;

    asMap(): Map<string, string | boolean>;
}
