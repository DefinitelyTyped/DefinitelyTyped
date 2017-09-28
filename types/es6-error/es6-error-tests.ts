import * as ExtendableError from "es6-error"

class TestError extends ExtendableError {
    constructor (message: string = "TestError") {
        super(message)
    }
}

throw new TestError("Test Message")
