import { History } from "history";
import { CreateHistory } from "react-router";

declare const createMemoryHistory: CreateHistory<History>;

export default createMemoryHistory;
