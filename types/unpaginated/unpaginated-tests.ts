// Test the default export of byPage
unpaginated((page: number) => {
    return Promise.resolve([]);
});

unpaginated((page: number) => {
    return Promise.resolve({ data: [], total: 1 });
});

// Test the named export of byPage
unpaginated.byPage((page: number) => {
    return Promise.resolve([]);
});

unpaginated.byPage((page: number) => {
    return Promise.resolve({ data: [], total: 1 });
});

// Test the named export of byOffset
unpaginated.byOffset((offset: number) => {
    return Promise.resolve([]);
});

unpaginated.byOffset((page: number) => {
    return Promise.resolve({ data: [], total: 1 });
});

// Test the named export of byCursor
unpaginated.byCursor((cursor: number) => {
    return Promise.resolve({ data: [], cursor: 1 });
});

unpaginated.byCursor((cursor: string) => {
    return Promise.resolve({ data: [], cursor: "1" });
});
