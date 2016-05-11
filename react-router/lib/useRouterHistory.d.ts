import { History, HistoryOptions, HistoryQueries, CreateHistory } from 'history';

interface CreateRouterHistory {
    (options?: HistoryOptions): History & HistoryQueries;
}

export default function useRouterHistory<T>(createHistory: CreateHistory<T>): CreateRouterHistory;
