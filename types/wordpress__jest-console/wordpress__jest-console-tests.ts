it('uses the console', () => {
    expect(console).toHaveErrored();
    expect(console).toHaveErroredWith('message');

    expect(console).toHaveInformed();
    expect(console).toHaveInformedWith('message');

    expect(console).toHaveLogged();
    expect(console).toHaveLoggedWith('message');

    expect(console).toHaveWarned();
    expect(console).toHaveWarnedWith('message');
});
