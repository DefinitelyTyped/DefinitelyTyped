import { AssertCore } from "./AssertCore";

export default function Assert(o: any) {
    return new AssertCore(o);
}