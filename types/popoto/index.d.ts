import { CypherViewer } from "./cypherviewer";
import { DataModel } from "./dataModel";
import { Graph, GraphSchema } from "./graph";
import { Logger } from "./logger";
import { Provider } from "./provider";
import { Query } from "./query";
import { QueryViewer } from "./queryviewer";
import { Result } from "./result";
import { Runner } from "./runner";
import { Taxonomy } from "./taxonomy";
import { Toolbar } from "./toolbar";
import { Tools } from "./tools";

interface Popoto {
    /**
     * Main function to call to use Popoto.js.
     * This function will create all the HTML content based on available IDs in the page.
     *
     * @param startParam Root label or graph schema to use in the graph query builder.
     */
    start: (startParam: string | GraphSchema) => void;

    /**
     * Function to call to update all the generated elements including svg graph, query viewer and generated results.
     */
    update: () => void;

    version: number;

    /**
     * Create the text representation of a node by slicing the text into lines to fit the node.
     *
     * @param selection
     * @param textParam
     * @param radiusParam
     * @param classParam
     */
    appendFittedText: (selection: any, textParam: string, radiusParam: number, classParam?: any) => void;

    /**
     * Function to call to update the graph only.
     */
    updateGraph: () => void;

    cypherviewer: CypherViewer;

    dataModel: DataModel;

    graph: Graph;

    logger: Logger;

    provider: Provider;

    query: typeof Query;

    queryviewer: typeof QueryViewer;

    result: typeof Result;

    runner: typeof Runner;

    taxonomy: typeof Taxonomy;

    toolbar: typeof Toolbar;

    tools: typeof Tools;
}

declare const popoto: Popoto;

export = popoto;

export as namespace popoto;
