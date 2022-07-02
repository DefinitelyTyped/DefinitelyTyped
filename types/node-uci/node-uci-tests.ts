import { Engine, EngineChain } from 'node-uci';

(async () => {
    const engine = new Engine('any');
    await engine.getBufferUntil(str => str === 'any');
    engine.write('any');
    engine.chain();
    await engine.init();
    await engine.quit();
    await engine.isready();
    await engine.sendCmd('any');
    await engine.setoption('any');
    await engine.setoption('any', 'any');
    await engine.ucinewgame();
    await engine.ponderhit();
    await engine.position('any');
    await engine.position('any', ['any']);
    const goOptions = {
        searchmoves: ['any'],
        ponder: true,
        wtime: 2,
        btime: 2,
        winc: 2,
        binc: 2,
        movestogo: 2,
        depth: 2,
        nodes: 2,
        mate: 2,
        movetime: 2,
    };

    await engine.go(goOptions);
    engine.goInfinite(goOptions);
    await engine.stop();
    const engineChain = new EngineChain(engine);
    await engineChain
        .init()
        .setoption('any')
        .setoption('any', 'any')
        .isready()
        .ucinewgame()
        .quit()
        .position('any')
        .position('any', ['any'])
        .go(goOptions);

    engineChain.exec();
})();
