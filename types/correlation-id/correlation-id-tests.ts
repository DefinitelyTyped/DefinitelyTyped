import { withId, bindId, getId } from "correlation-id";

withId("my-id", () => {
    const id: string = getId() || "";
});

withId(() => {
    const id: string = getId() || "";
});

const num: number = withId(() => {
    return 5;
});

const x: string = bindId("my-id", (foo: string, bar: number): string => {
    const id: string = getId() || "";

    return foo + bar + id;
})("foo", 12);

const y: string = bindId((foo: string, bar: number): string => {
    const id: string = getId() || "";

    return foo + bar + id;
})("foo", 12);
