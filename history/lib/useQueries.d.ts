import { CreateHistory, HistoryQueries } from '../history-v2';
export default function useQueries<T>(createHistory: CreateHistory<T>): CreateHistory<T & HistoryQueries>;
