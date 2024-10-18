import { ReactWrapper, ShallowWrapper } from "enzyme";

export default function toJson<P, S>(wrapper: ShallowWrapper<P, S> | ReactWrapper<P, S> | cheerio.Cheerio): object;
