import { CreateHistory, BasenameHistoryOptionsMixin } from '../index';

export default function useBasename<THistory, THistoryOptions>(createHistory: CreateHistory<THistory, THistoryOptions>): CreateHistory<THistory, THistoryOptions & BasenameHistoryOptionsMixin>;
