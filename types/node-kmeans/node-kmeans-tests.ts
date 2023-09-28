import kmeans = require("node-kmeans");

const clusterizePromise = (
    vectors: number[][],
    options: kmeans.ClusterizeOptions,
): Promise<kmeans.ClusteringOutput[]> => {
    return new Promise((resolve, reject) => {
        kmeans.clusterize(vectors, options, (err, result) => {
            if (err) reject(err);
            else if (result === undefined) reject(new Error("ClusteringOutput is undefined"));
            else resolve(result);
        });
    });
};

const vectors = [[1], [2]];
const clusterizeOptions: kmeans.ClusterizeOptions = { k: 1 };

clusterizePromise(vectors, clusterizeOptions)
    .then(clusteringOutput => {
        // clusteringOutput: [{ "centroid": [1.5], "cluster": [[1], [2]], "clusterInd": [0, 1] }]
    })
    .catch(err => {
        // handle error
    });
