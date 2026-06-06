let app: EngineAPI.IApp;

async function main() {
    const session: EngineAPI.IGlobal = {} as unknown as EngineAPI.IGlobal;

    const docs = await session.getDocList();
    const doc = docs[0];
    session.openDoc(doc.qDocId);
}
