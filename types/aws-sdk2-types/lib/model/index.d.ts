export type DocumentType = Scalar | Structure | List;
type Scalar = string | number | boolean | null;
type Structure = { [member: string]: DocumentType };
interface List extends Array<DocumentType> {}
