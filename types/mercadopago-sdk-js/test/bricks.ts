import { mpInstance } from ".";

const brickBuilder = mpInstance.bricks({})

brickBuilder.isInitialized();

brickBuilder.create('cardPayment', 'container', {
    initialization: {
        amount: 100
    },
    callbacks: {
        onSubmit: (formData, additionalData) => {
            return new Promise(() => {
                console.log(formData, additionalData)
            })
        }
    }
})