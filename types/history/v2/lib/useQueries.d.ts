import { CreateHistory, HistoryQueries } from '../index';
export default function useQueries<T>(createHistory: CreateHistory<T>): CreateHistory<T & HistoryQueries>;