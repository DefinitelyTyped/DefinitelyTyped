import { CreateHistory, HistoryBeforeUnload } from '../history-v2';
export default function useBeforeUnload<T>(createHistory: CreateHistory<T>): CreateHistory<T & HistoryBeforeUnload>;
