export = EngineCluster;
declare function EngineCluster(): void;
declare class EngineCluster {
    nodes: EngineClusterNode[];
    key: number;
    name: string;
    dbName: string;
    assign(engineCluster: Partial<EngineCluster>): void;
}
declare namespace EngineCluster {
    function fromConfig(key: number): EngineCluster;
}
import EngineClusterNode = require('./EngineClusterNode.js');
