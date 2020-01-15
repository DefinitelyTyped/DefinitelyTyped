import * as w2v from "word2vector";

const trainFile = "./build/data/train.data";
const modelFile = "./build/data/test.model.bin";

w2v.train(trainFile, modelFile, {
    cbow: 1, // use the continuous bag of words model //default
    size: 10, // sets the size (dimension) of word vectors // default 100
    window: 8, // sets maximal skip length between words // default 5
    binary: 1, // save the resulting vectors in binary mode // default off
    negative: 25, // number of negative examples; common values are 3 - 10 (0 = not used) // default 5
    hs: 0, // 1 = use  Hierarchical Softmax // default 0
    sample: 1e-4,
    threads: 20,
    iter: 15,
    minCount: 1, // This will discard words that appear less than *minCount* times // default 5
    logOn: false // sets whether any output should be printed to the console // default false
});

w2v.load(modelFile);
w2v.bin2txt("test.model.bin");

const vector: number[] = w2v.getVector("孫悟空");
const vector2: number[] = w2v.getVector("李洵");
const multipleVectors: number[][] = w2v.getVectors(["孫悟空", "李洵"]);

const similiarwords: object[] = w2v.getSimilarWords("唐三藏");
const a: object[] = w2v.getNeighbors(w2v.getVector("唐三藏"), { N: 9 });

// this can be a number or false if word is not in the model
const similarity: any = w2v.similarity("唐三藏", "孫悟空");

let vector3: number[] = w2v.add("孫悟空", "孫悟空");
vector3 = w2v.add(vector, vector2);

vector3 = w2v.substract("孫悟空", "孫悟空");
vector3 = w2v.substract(vector, vector2);
