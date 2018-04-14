declare var describe: (test: string, callback: Function) => void
declare var beforeAll: (callback: Function) => void
declare var afterAll: (callback: Function) => void
declare var test: (test: string, callback: Function) => void


describe('Test', () => {
    beforeAll(async () => {
        await device.reloadReactNative()
    })

    afterAll(async () => {
        await element(by.id('element')).clearText()
    })

    test('Test', async () => {
        await element(by.id('element')).replaceText('text')
        await element(by.id('element')).tap()
        await expect(element(by.id('element')).atIndex(0)).toNotExist()

        await waitFor(element(by.id('element'))).toBeVisible().withTimeout(2000)
    })
})
