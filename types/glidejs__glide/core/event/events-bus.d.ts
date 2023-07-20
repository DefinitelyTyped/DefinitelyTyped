import { AutoplayEventsBus } from '../../components/autoplay';
import { BuildEventsBus } from '../../components/build';
import { MoveEventsBus } from '../../components/move';
import { ResizeEventsBus } from '../../components/resize';
import { RunEventsBus } from '../../components/run';
import { SwipeEventsBus } from '../../components/swipe';
import { TranslateEventsBus } from '../../components/translate';

type DefaultEvents = 'mount.before' | 'mount.after' | 'update' | 'destroy' | 'play' | 'pause';

interface DefaultEventsBus {
    readonly events: Record<string, unknown[]>;

    on(event: DefaultEvents, handler: () => void): { remove(): void };
    on(event: DefaultEvents[], handler: () => void): void;
    on(event: string, handler: (context?: any) => void): { remove(): void };
    on(event: string[], handler: (context?: any) => void): void;

    emit(event: DefaultEvents | DefaultEvents[]): void;
    emit(event: string | string[], context?: any): void;
}

type EventsBus = AutoplayEventsBus &
    BuildEventsBus &
    MoveEventsBus &
    ResizeEventsBus &
    RunEventsBus &
    SwipeEventsBus &
    TranslateEventsBus &
    DefaultEventsBus;

export default EventsBus;
