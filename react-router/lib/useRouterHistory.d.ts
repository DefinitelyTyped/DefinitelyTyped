import { History, HistoryOptions, HistoryQueries, CreateHistory } from 'history';

export default function useRouterHistory<T>(createHistory: CreateHistory<T>): (options?: HistoryOptions) => History & HistoryQueries;
