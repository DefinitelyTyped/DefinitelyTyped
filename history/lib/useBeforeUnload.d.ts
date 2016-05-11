import { CreateHistory, HistoryBeforeUnload } from 'history';
export default function useBeforeUnload<T>(createHistory: CreateHistory<T>): CreateHistory<T & HistoryBeforeUnload>;
