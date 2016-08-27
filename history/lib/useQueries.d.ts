import { CreateHistory, UseQueriesHistoryOptionsMixin } from '../index';

export default function useQueries<THistory, THistoryOptions>(createHistory: CreateHistory<THistory, THistoryOptions>): CreateHistory<THistory, THistoryOptions & UseQueriesHistoryOptionsMixin>;
