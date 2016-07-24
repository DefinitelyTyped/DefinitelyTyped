import { CreateHistory, BeforeUnloadHistoryMixin } from '../index';

export default function useBeforeUnload<THistory, THistoryOptions>(createHistory: CreateHistory<THistory, THistoryOptions>): CreateHistory<THistory & BeforeUnloadHistoryMixin, THistoryOptions>;
