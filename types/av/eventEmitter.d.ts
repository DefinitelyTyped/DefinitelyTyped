declare namespace AV {
	class EventEmitter {
		on(event: string, fn: (...args: any[]) => void): void;
		off(event: string, fn: (...args: any[]) => void): void;
		once(event: string, fn: (...args: any[]) => void): void;
		emit(event: string, ...args: any[]): void;
	}
}
