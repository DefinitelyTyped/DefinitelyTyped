// Neurons
// =======
{
    // project
    {
        const A = new Neuron();
        const B = new Neuron();
        A.project(B); // A now projects a connection to B
        A.project(A); // Neurons can also self-connect
    }

    // gate
    {
        const A = new Neuron();
        const B = new Neuron();
        const connection = A.project(B);

        const C = new Neuron();
        C.gate(connection); // now C gates the connection between A and B
    }

    // activate
    {
        const A = new Neuron();
        const B = new Neuron();
        A.project(B);

        A.activate(0.5); // 0.5
        B.activate(); // 0.3244554645
    }

    // propagate
    {
        const A = new Neuron();
        const B = new Neuron();
        A.project(B);

        const learningRate = .3;

        for (let i = 0; i < 20000; i++) {
            // when A activates 1
            A.activate(1);

            // train B to activate 0
            B.activate();
            B.propagate(learningRate, 0);
        }

        // test it
        A.activate(1);
        B.activate(); // 0.006540565760853365
    }

    {
        // squashing function and bias
        const A = new Neuron();
        A.squash = Neuron.squash.TANH;
        A.bias = 1;
    }
}

// Layers
// ======
{
    // project
    {
        const A = new Layer(5);
        const B = new Layer(3);
        A.project(B, Layer.connectionType.ALL_TO_ALL); // All the neurons in layer A now project a connection to all the neurons in layer B
        A.project(A, Layer.connectionType.ONE_TO_ONE);
    }

    // gate
    {
        const A = new Layer(5);
        const B = new Layer(3);
        const connection = A.project(B);

        const C = new Layer(4);
        C.gate(connection, Layer.gateType.INPUT); // now C gates the connection between A and B (input gate)
    }

    // activate
    {
        const A = new Layer(5);
        const B = new Layer(3);
        A.project(B);

        A.activate([1, 0, 1, 0, 1]); // [1,0,1,0,1]
        B.activate(); // [0.3280457, 0.83243247, 0.5320423]
    }

    // propagate
    {
        const A = new Layer(5);
        const B = new Layer(2);
        A.project(B);

        const learningRate = .3;

        for (let i = 0; i < 20000; i++) {
            // when A activates [1, 0, 1, 0, 1]
            A.activate([1, 0, 1, 0, 1]);

            // train B to activate [0,0]
            B.activate();
            B.propagate(learningRate, [0, 0]);
        }

        // test it
        A.activate([1, 0, 1, 0, 1]);
        B.activate(); // [0.004606949693864496, 0.004606763721459169]

        // squashing function and bias
        A.set({
            squash: Neuron.squash.TANH,
            bias: 0
        })

        // neurons
        // -------
        A.neurons();
    }
}

// Networks
// ========
{
    let inputLayer = new Layer(4);
    let hiddenLayer = new Layer(6);
    let outputLayer = new Layer(2);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    const A = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });

    const B = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });

    // project
    // -------
    A.project(B, Layer.connectionType.ALL_TO_ALL);

    // gate
    // ----

    const C = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });
    const connection = A.project(B);
    C.gate(connection, Layer.gateType.INPUT); // now C's output layer gates the connection between A's output layer and B's input layer (input gate)

    // activate
    // --------
    inputLayer = new Layer(4);
    hiddenLayer = new Layer(6);
    outputLayer = new Layer(2);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    let myNetwork = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });

    myNetwork.activate([1, 0, 1, 0]); // [0.5200553602396137, 0.4792707231811006]

    // propagate
    // ---------
    // create the network
    inputLayer = new Layer(2);
    hiddenLayer = new Layer(3);
    outputLayer = new Layer(1);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    myNetwork = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });

    // train the network
    let learningRate = .3;
    for (let i = 0; i < 20000; i++) {
        // 0,0 => 0
        myNetwork.activate([0, 0]);
        myNetwork.propagate(learningRate, [0]);

        // 0,1 => 1
        myNetwork.activate([0, 1]);
        myNetwork.propagate(learningRate, [1]);

        // 1,0 => 1
        myNetwork.activate([1, 0]);
        myNetwork.propagate(learningRate, [1]);

        // 1,1 => 0
        myNetwork.activate([1, 1]);
        myNetwork.propagate(learningRate, [0]);
    }

    // test the network
    myNetwork.activate([0, 0]); // [0.015020775950893527]
    myNetwork.activate([0, 1]); // [0.9815816381088985]
    myNetwork.activate([1, 0]); // [0.9871822457132193]
    myNetwork.activate([1, 1]); // [0.012950087641929467]

    // optimize
    // --------

    // extend
    // ------

    // toJSON/fromJSON
    // ---------------
    const exported = myNetwork.toJSON();
    const imported = Network.fromJSON(exported);

    // worker
    // ------
    // training set
    learningRate = .3;
    const trainingSet = [
        {
            input: [0, 0],
            output: [0]
        },
        {
            input: [0, 1],
            output: [1]
        },
        {
            input: [1, 0],
            output: [1]
        },
        {
            input: [1, 1],
            output: [0]
        },
    ];

    // create a network
    inputLayer = new Layer(2);
    hiddenLayer = new Layer(3);
    outputLayer = new Layer(1);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    myNetwork = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });

    // create a worker
    const myWorker = myNetwork.worker();

    // activate the network
    function activateWorker(input: number[]) {
        myWorker.postMessage({
            action: "activate",
            input: input,
            memoryBuffer: myNetwork.optimized.memory
        }, [myNetwork.optimized.memory.buffer]);
    }

    // backpropagate the network
    function propagateWorker(target: number[]) {
        myWorker.postMessage({
            action: "propagate",
            target: target,
            rate: learningRate,
            memoryBuffer: myNetwork.optimized.memory
        }, [myNetwork.optimized.memory.buffer]);
    }

    // train the worker
    myWorker.onmessage = function (e) {
        // give control of the memory back to the network - this is mandatory!
        myNetwork.optimized.ownership(e.data.memoryBuffer);

        if (e.data.action == "propagate") {
            if (index >= 4) {
                index = 0;
                iterations++;
                if (iterations % 100 == 0) {
                    const output00 = myNetwork.activate([0, 0]);
                    const output01 = myNetwork.activate([0, 1]);
                    const output10 = myNetwork.activate([1, 0]);
                    const output11 = myNetwork.activate([1, 1]);

                    console.log("0,0 => ", output00);
                    console.log("0,1 => ", output01);
                    console.log("1,0 => ", output10);
                    console.log("1,1 => ", output11, "\n");
                }
            }

            activateWorker(trainingSet[index].input);
        }

        if (e.data.action == "activate") {
            propagateWorker(trainingSet[index].output);
            index++;
        }
    }

    // kick it
    let index = 0;
    let iterations = 0;
    activateWorker(trainingSet[index].input);

    // standalone
    // ----------
    inputLayer = new Layer(4);
    hiddenLayer = new Layer(6);
    outputLayer = new Layer(2);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    myNetwork = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });

    const standalone = myNetwork.standalone();

    myNetwork.activate([1, 0, 1, 0]);  // [0.5466397925108878, 0.5121246668637663]
    standalone([1, 0, 1, 0]);   // [0.5466397925108878, 0.5121246668637663]

    // clone
    // -----
    inputLayer = new Layer(4);
    hiddenLayer = new Layer(6);
    outputLayer = new Layer(2);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    myNetwork = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });

    const clone = myNetwork.clone();

    myNetwork.activate([1, 0, 1, 0]);  // [0.5466397925108878, 0.5121246668637663]
    clone.activate([1, 0, 1, 0]);   // [0.5466397925108878, 0.5121246668637663]

    // neurons
    // -------
    myNetwork.neurons();

    // set
    // ---
    inputLayer = new Layer(4);
    hiddenLayer = new Layer(6);
    outputLayer = new Layer(2);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    myNetwork = new Network();

    myNetwork.set({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });
}

// Architect
// =========
{
    // Perceptron
    // ----------
    const myPerceptron = new Architect.Perceptron(2, 3, 1);

    // LSTM
    // ----
    const myLSTM = new Architect.LSTM(2, 6, 1);

    // Liquid
    // ------
    const input = 2;
    const pool = 20;
    const output = 1;
    const connections = 30;
    const gates = 10;

    const myLiquidStateMachine = new Architect.Liquid(input, pool, output, connections, gates);

    // Hopfield
    // --------
    const hopfield = new Architect.Hopfield(10) // create a network for 10-bit patterns

    // teach the network two different patterns
    hopfield.learn([
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    ])

    // feed new patterns to the network and it will return the most similar to the ones it was trained to remember
    hopfield.feed([0, 1, 0, 1, 0, 1, 0, 1, 1, 1]) // [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
    hopfield.feed([1, 1, 1, 1, 1, 0, 0, 1, 0, 0]) // [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
}

// Trainer
// =======
{
    // train
    // -----
    let myNetwork = new Architect.Perceptron(2, 2, 1)
    let trainer = new Trainer(myNetwork)

    let trainingSet = [
        {
            input: [0, 0],
            output: [0]
        },
        {
            input: [0, 1],
            output: [1]
        },
        {
            input: [1, 0],
            output: [1]
        },
        {
            input: [1, 1],
            output: [0]
        },
    ]

    trainer.train(trainingSet);

    const traningOptions = {
        rate: .1,
        iterations: 20000,
        error: .005,
        shuffle: true,
        log: 1000,
        cost: Trainer.cost.CROSS_ENTROPY,
        schedule: {
            every: 500, // repeat this task every 500 iterations
            do: function (data: Synaptic.Trainer.TrainingScheduleDoData) {
                // custom log
                console.log("error", data.error, "iterations", data.iterations, "rate", data.rate);
                if (data.error > .5)
                    return true; // abort/stop training
            }
        }
    };

    trainer.train(trainingSet, traningOptions);

    // trainAsync
    // ----------
    trainer = new Trainer(myNetwork);
    trainer.trainAsync(trainingSet, traningOptions)
        .then((results: any) => console.log('done!', results))

    myNetwork = new Architect.Perceptron(2, 2, 1)
    trainer = new Trainer(myNetwork)

    trainingSet = [
        {
            input: [0, 0],
            output: [0]
        },
        {
            input: [0, 1],
            output: [1]
        },
        {
            input: [1, 0],
            output: [1]
        },
        {
            input: [1, 1],
            output: [0]
        },
    ]

    trainer.trainAsync(trainingSet)
        .then((results: any) => console.log('done!', results))

    // test
    // ----

    // XOR
    // ---
    trainer = new Trainer(myNetwork);
    trainer.XOR(); // {error: 0.004999821588193305, iterations: 21333, time: 111}

    // DSR
    // ---
    trainer.DSR({
        targets: [2, 4],
        distractors: [3, 5],
        prompts: [0, 1],
        length: 10
    });

    // ERG
    // ---
    trainer.ERG();

    // timingTask
    // ----------
}
