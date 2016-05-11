import { CreateHistory, HistoryQueries } from 'history';
export default function useQueries<T>(createHistory: CreateHistory<T>): CreateHistory<T & HistoryQueries>;