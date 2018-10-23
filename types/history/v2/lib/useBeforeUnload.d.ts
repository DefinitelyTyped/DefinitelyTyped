import { CreateHistory, HistoryBeforeUnload } from '../index';
export default function useBeforeUnload<T>(createHistory: CreateHistory<T>): CreateHistory<T & HistoryBeforeUnload>;
