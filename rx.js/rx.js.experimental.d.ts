// Type definitions for RxJS/Experimental
// Project: https://github.com/Reactive-Extensions/RxJS/
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="rx.js.d.ts"/>

declare module Rx {

	interface IObservable<T> {
		/**
		 *  Returns an observable sequence that is the result of invoking the selector on the source sequence, without sharing subscriptions.
		 *  This operator allows for a fluent style of writing queries that use the same sequence multiple times.
		 *
		 * @param selector Selector function which can use the source sequence as many times as needed, without sharing subscriptions to the source sequence.
		 * @returns An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
		 */
		let<TResult>(selector: (source: IObservable<T>) => IObservable<TResult>): IObservable<TResult>;

		/**
		 *  Returns an observable sequence that is the result of invoking the selector on the source sequence, without sharing subscriptions.
		 *  This operator allows for a fluent style of writing queries that use the same sequence multiple times.
		 *
		 * @param selector Selector function which can use the source sequence as many times as needed, without sharing subscriptions to the source sequence.
		 * @returns An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
		 */
		letBind<TResult>(selector: (source: IObservable<T>) => IObservable<TResult>): IObservable<TResult>;

		/**
		 *  Repeats source as long as condition holds emulating a do while loop.
		 * @param condition The condition which determines if the source will be repeated.
		 * @returns An observable sequence which is repeated as long as the condition holds. 
		 */
		doWhile(condition: () => boolean): IObservable<T>;

		/**
		 *  Expands an observable sequence by recursively invoking selector.
		 *  
		 * @param selector Selector function to invoke for each produced element, resulting in another sequence to which the selector will be invoked recursively again.
		 * @param [scheduler] Scheduler on which to perform the expansion. If not provided, this defaults to the current thread scheduler.
		 * @returns An observable sequence containing all the elements produced by the recursive expansion.
		 */
		expand(selector: (item: T) => IObservable<T>, scheduler?: IScheduler): IObservable<T>;

		/**
		 *  Runs two observable sequences in parallel and combines their last elemenets.
		 *
		 * @param second Second observable sequence.
		 * @param resultSelector Result selector function to invoke with the last elements of both sequences.
		 * @returns An observable sequence with the result of calling the selector function with the last elements of both input sequences.
		 */
		forkJoin<TSecond, TResult>(second: IObservable<TSecond>, resultSelector: (left: T, right: TSecond) => TResult): IObservable<TResult>;

		/**
		 * Comonadic bind operator.
		 * @param selector A transform function to apply to each element.
		 * @param [scheduler] Scheduler used to execute the operation. If not specified, defaults to the ImmediateScheduler.
		 * @returns An observable sequence which results from the comonadic bind operation.
		 */
		manySelect<TResult>(selector: (item: IObservable<T>, index: number, source: IObservable<T>) => TResult, scheduler?: IScheduler): IObservable<TResult>;
	}

	interface Observable {
		/**
		 *  Determines whether an observable collection contains values. There is an alias for this method called 'ifThen' for browsers <IE9
		 *  
		 * @example
		 * res = Rx.Observable.if(condition, obs1, obs2);
		 * @param condition The condition which determines if the thenSource or elseSource will be run.
		 * @param thenSource The observable sequence that will be run if the condition function returns true.
		 * @param elseSource The observable sequence that will be run if the condition function returns false.
		 * @returns An observable sequence which is either the thenSource or elseSource.
		 */
		if<T>(condition: () => boolean, thenSource: IObservable<T>, elseSource: IObservable<T>): IObservable<T>;

		/**
		 *  Determines whether an observable collection contains values. There is an alias for this method called 'ifThen' for browsers <IE9
		 *  
		 * @example
		 * res = Rx.Observable.if(condition, obs1, scheduler);
		 * @param condition The condition which determines if the thenSource or empty sequence will be run.
		 * @param thenSource The observable sequence that will be run if the condition function returns true.
		 * @param scheduler Scheduler used to create Rx.Observabe.Empty.
		 * @returns An observable sequence which is either the thenSource or empty sequence.
		 */
		if<T>(condition: () => boolean, thenSource: IObservable<T>, scheduler?: IScheduler): IObservable<T>;

		/**
		 *  Determines whether an observable collection contains values. There is an alias for this method called 'ifThen' for browsers <IE9
		 *  
		 * @example
		 * res = Rx.Observable.if(condition, obs1, obs2);
		 * @param condition The condition which determines if the thenSource or elseSource will be run.
		 * @param thenSource The observable sequence that will be run if the condition function returns true.
		 * @param elseSource The observable sequence that will be run if the condition function returns false.
		 * @returns An observable sequence which is either the thenSource or elseSource.
		 */
		ifThen<T>(condition: () => boolean, thenSource: IObservable<T>, elseSource: IObservable<T>): IObservable<T>;

		/**
		 *  Determines whether an observable collection contains values. There is an alias for this method called 'ifThen' for browsers <IE9
		 *  
		 * @example
		 * res = Rx.Observable.if(condition, obs1, scheduler);
		 * @param condition The condition which determines if the thenSource or empty sequence will be run.
		 * @param thenSource The observable sequence that will be run if the condition function returns true.
		 * @param scheduler Scheduler used to create Rx.Observabe.Empty.
		 * @returns An observable sequence which is either the thenSource or empty sequence.
		 */
		ifThen<T>(condition: () => boolean, thenSource: IObservable<T>, scheduler?: IScheduler): IObservable<T>;

		/**
		 *  Concatenates the observable sequences obtained by running the specified result selector for each element in source.
		 * There is an alias for this method called 'forIn' for browsers <IE9
		 * @param sources An array of values to turn into an observable sequence.
		 * @param resultSelector A function to apply to each item in the sources array to turn it into an observable sequence.
		 * @returns An observable sequence from the concatenated observable sequences.  
		 */
		for<T, TResult>(sources: T[], resultSelector: (item: T) => IObservable<TResult>): IObservable<TResult>;

		/**
		 *  Concatenates the observable sequences obtained by running the specified result selector for each element in source.
		 * There is an alias for this method called 'forIn' for browsers <IE9
		 * @param sources An array of values to turn into an observable sequence.
		 * @param resultSelector A function to apply to each item in the sources array to turn it into an observable sequence.
		 * @returns An observable sequence from the concatenated observable sequences.  
		 */
		forIn<T, TResult>(sources: T[], resultSelector: (item: T) => IObservable<TResult>): IObservable<TResult>;

		/**
		 *  Repeats source as long as condition holds emulating a while loop.
		 * There is an alias for this method called 'whileDo' for browsers <IE9
		 * @param condition The condition which determines if the source will be repeated.
		 * @param source The observable sequence that will be run if the condition function returns true.
		 * @returns An observable sequence which is repeated as long as the condition holds.  
		 */
		while<T>(condition: () => boolean, source: IObservable<T>): IObservable<T>;

		/**
		 *  Repeats source as long as condition holds emulating a while loop.
		 * There is an alias for this method called 'whileDo' for browsers <IE9
		 * @param condition The condition which determines if the source will be repeated.
		 * @param source The observable sequence that will be run if the condition function returns true.
		 * @returns An observable sequence which is repeated as long as the condition holds.  
		 */
		whileDo<T>(condition: () => boolean, source: IObservable<T>): IObservable<T>;

		/**
		 *  Uses selector to determine which source in sources to use.
		 *  There is an alias 'switchCase' for browsers <IE9.
		 *  
		 * @example
		 *  res = Rx.Observable.case(selector, { '1': obs1, '2': obs2 }, obs0);
		 * @param selector The function which extracts the value for to test in a case statement.
		 * @param sources A object which has keys which correspond to the case statement labels.
		 * @param elseSource The observable sequence that will be run if the sources are not matched.
		 *       
		 * @returns An observable sequence which is determined by a case statement.  
		 */
		case<T>(selector: () => string, sources: { [key: string]: IObservable<T>; }, elseSource: IObservable<T>): IObservable<T>;

		/**
		 *  Uses selector to determine which source in sources to use.
		 *  There is an alias 'switchCase' for browsers <IE9.
		 *  
		 * @example
		 *  res = Rx.Observable.case(selector, { '1': obs1, '2': obs2 });
		 *  res = Rx.Observable.case(selector, { '1': obs1, '2': obs2 }, scheduler);
		 * 
		 * @param selector The function which extracts the value for to test in a case statement.
		 * @param sources A object which has keys which correspond to the case statement labels.
		 * @param scheduler Scheduler used to create Rx.Observabe.Empty.
		 *       
		 * @returns An observable sequence which is determined by a case statement.  
		 */
		case<T>(selector: () => string, sources: { [key: string]: IObservable<T>; }, scheduler?: IScheduler): IObservable<T>;

		/**
		 *  Uses selector to determine which source in sources to use.
		 *  There is an alias 'switchCase' for browsers <IE9.
		 *  
		 * @example
		 *  res = Rx.Observable.case(selector, { '1': obs1, '2': obs2 }, obs0);
		 * @param selector The function which extracts the value for to test in a case statement.
		 * @param sources A object which has keys which correspond to the case statement labels.
		 * @param elseSource The observable sequence that will be run if the sources are not matched.
		 *       
		 * @returns An observable sequence which is determined by a case statement.  
		 */
		case<T>(selector: () => number, sources: { [key: number]: IObservable<T>; }, elseSource: IObservable<T>): IObservable<T>;

		/**
		 *  Uses selector to determine which source in sources to use.
		 *  There is an alias 'switchCase' for browsers <IE9.
		 *  
		 * @example
		 *  res = Rx.Observable.case(selector, { '1': obs1, '2': obs2 });
		 *  res = Rx.Observable.case(selector, { '1': obs1, '2': obs2 }, scheduler);
		 * 
		 * @param selector The function which extracts the value for to test in a case statement.
		 * @param sources A object which has keys which correspond to the case statement labels.
		 * @param scheduler Scheduler used to create Rx.Observabe.Empty.
		 *       
		 * @returns An observable sequence which is determined by a case statement.  
		 */
		case<T>(selector: () => number, sources: { [key: number]: IObservable<T>; }, scheduler?: IScheduler): IObservable<T>;

		/**
		 *  Uses selector to determine which source in sources to use.
		 *  There is an alias 'switchCase' for browsers <IE9.
		 *  
		 * @example
		 *  res = Rx.Observable.case(selector, { '1': obs1, '2': obs2 }, obs0);
		 * @param selector The function which extracts the value for to test in a case statement.
		 * @param sources A object which has keys which correspond to the case statement labels.
		 * @param elseSource The observable sequence that will be run if the sources are not matched.
		 *       
		 * @returns An observable sequence which is determined by a case statement.  
		 */
		switchCase<T>(selector: () => string, sources: { [key: string]: IObservable<T>; }, elseSource: IObservable<T>): IObservable<T>;

		/**
		 *  Uses selector to determine which source in sources to use.
		 *  There is an alias 'switchCase' for browsers <IE9.
		 *  
		 * @example
		 *  res = Rx.Observable.case(selector, { '1': obs1, '2': obs2 });
		 *  res = Rx.Observable.case(selector, { '1': obs1, '2': obs2 }, scheduler);
		 * 
		 * @param selector The function which extracts the value for to test in a case statement.
		 * @param sources A object which has keys which correspond to the case statement labels.
		 * @param scheduler Scheduler used to create Rx.Observabe.Empty.
		 *       
		 * @returns An observable sequence which is determined by a case statement.  
		 */
		switchCase<T>(selector: () => string, sources: { [key: string]: IObservable<T>; }, scheduler?: IScheduler): IObservable<T>;

		/**
		 *  Uses selector to determine which source in sources to use.
		 *  There is an alias 'switchCase' for browsers <IE9.
		 *  
		 * @example
		 *  res = Rx.Observable.case(selector, { '1': obs1, '2': obs2 }, obs0);
		 * @param selector The function which extracts the value for to test in a case statement.
		 * @param sources A object which has keys which correspond to the case statement labels.
		 * @param elseSource The observable sequence that will be run if the sources are not matched.
		 *       
		 * @returns An observable sequence which is determined by a case statement.  
		 */
		switchCase<T>(selector: () => number, sources: { [key: number]: IObservable<T>; }, elseSource: IObservable<T>): IObservable<T>;

		/**
		 *  Uses selector to determine which source in sources to use.
		 *  There is an alias 'switchCase' for browsers <IE9.
		 *  
		 * @example
		 *  res = Rx.Observable.case(selector, { '1': obs1, '2': obs2 });
		 *  res = Rx.Observable.case(selector, { '1': obs1, '2': obs2 }, scheduler);
		 * 
		 * @param selector The function which extracts the value for to test in a case statement.
		 * @param sources A object which has keys which correspond to the case statement labels.
		 * @param scheduler Scheduler used to create Rx.Observabe.Empty.
		 *       
		 * @returns An observable sequence which is determined by a case statement.  
		 */
		switchCase<T>(selector: () => number, sources: { [key: number]: IObservable<T>; }, scheduler?: IScheduler): IObservable<T>;

		/**
		 *  Runs all observable sequences in parallel and collect their last elements.
		 *  
		 * @example
		 * res = Rx.Observable.forkJoin([obs1, obs2]);
		 * @param sources Array of source sequences.
		 * @returns An observable sequence with an array collecting the last elements of all the input sequences.
		 */
		forkJoin<T>(sources: IObservable<T>[]): IObservable<T[]>;

		/**
		 *  Runs all observable sequences in parallel and collect their last elements.
		 *  
		 * @example
		 * res = Rx.Observable.forkJoin(obs1, obs2, ...);
		 * @param args Source sequences.
		 * @returns An observable sequence with an array collecting the last elements of all the input sequences.
		 */
		forkJoin<T>(...args: IObservable<T>[]): IObservable<T[]>;
	}
}
