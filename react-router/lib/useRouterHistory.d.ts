import { History } from "history";
import { CreateHistoryEnhancer } from "react-router";

declare const useRouterHistory: CreateHistoryEnhancer<History>;

export default useRouterHistory;
