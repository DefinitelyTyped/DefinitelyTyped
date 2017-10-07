// Type definitions for Commangular 0.9.0
// Project: http://commangular.org
// Definitions by: Hiraash Thawfeek <https://github.com/hiraash>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

declare var commangular: commangular.ICommAngularStatic;

declare module commangular {

	///////////////////////////////////////////////////////////////////////////
    // Commangular Static
    // see http://commangular.org/docs/#commangular-namespace
    ///////////////////////////////////////////////////////////////////////////
	interface ICommAngularStatic {

		/**
         * Use this function to create and register a command with Commangular
         *
         * @param commandName It's the name of the command you are creating. It's useful to reference the command from the command provider.
         * @param commandFunction It's the command class that will be executed when commangular runs this command.
		 * 				It has to be something that implements ICommand. Same as angular syntax
         * @param commandConfig It's and object with paramaters to configure the command execution.
         */
		create (commandName: string, commandFunction: Function, commandConfig?:ICommandConfig) : void;
		command (commandName: string, commandFunction: Function, commandConfig?:ICommandConfig) : void;

		/**
		 * This function allows you to hijack the execution before or after and
		 * execute some cross cutting functionality.
		 * see http://commangular.org/docs/#command-aspects
		 * @param aspectDescriptor The interceptor descriptor has two parts 'Where' and 'What'.
		 * 		Where do you want to intercept? you've 5 options :
		 * 		- @Before : The interceptor will be executed before the command. You will be able to
		 * 				cancel the command or modify the data that will be injected in the command or do
		 * 				some other operation you need before the command execution.
		 * 		- @After : The interceptor will be executed just after the command and before any other next
		 * 				command. You can get the lastResult from the command, cancel execution etc etc.
		 * 		- @AfterExecution : This intercetor is executed just after the command execute method and
		 * 				it can get the result from the command and update it before the onResult method is executed.
		 * 		- @AfterThrowing : This interceptor will be executed if the command or any interceptor of
		 * 				the command throws an exception. You can get the error throwed injected to do what you need.
		 * 		- @Around : The interceptor is executed around a command.That means that a especial
		 * 				object 'processor' will be injected in the interceptor and you can invoke the command
		 * 				or the next interceptor. It will be better explained below.
		 * @param aspectFunction It's the command class execute function that will be run for the given aspect.
		 * @param order You can chain any number of interceptors to the same command, so if you need to executed
		 * 		the interceptor in a specific order you can indicate it here. An order of 0 is assigned by default.
		 */
		aspect ( aspectDescriptor: string, aspectFunction: ICommand, order: number ) : void;

		/**
		 * Event aspects work the same way command aspects do, but they intercept all the command groups instead,
		 * so you can run some function before the command group starts it's execution , after or when any
		 * command or interceptor in the group throw an exception.
		 * see http://commangular.org/docs/#event-aspects
		 * @param aspectDescriptor The interceptor descriptor has two parts 'Where' and 'What'.
		 * 		Where do you want to intercept? you've 3 options :
		 * 		- @Before : The interceptor will be executed before the command. You will be able to
		 * 				cancel the command or modify the data that will be injected in the command or do
		 * 				some other operation you need before the command execution.
		 * 		- @After : The interceptor will be executed just after the command and before any other next
		 * 				command. You can get the lastResult from the command, cancel execution etc etc.
		 * 		- @AfterThrowing : This interceptor will be executed if the command or any interceptor of
		 * 				the command throws an exception. You can get the error throwed injected to do what you need.
		 * @param aspectFunction It's the command class execute function that will be run for the given aspect.
		 * @param order You can chain any number of interceptors to the same command, so if you need to executed
		 * 		the interceptor in a specific order you can indicate it here. An order of 0 is assigned by default.
		 */
		eventAspect( aspectDescriptor: string, aspectFunction: ICommand, order: number ) : void;

		/**
		 * TBD
		 */
		resolver( commandName: string, resolverFunction : Function ) : void;

		/**
		 * Clears all commands and aspects registered with commangular.
		 */
		reset() : void;

		/**
		 * Can be used to enable/disable debug
		 */
		debug( enableDebug : boolean ) : void;

		/**
		 * TBD
		 */
		build() : void;
	}

	/**
	 * The command function/object
	 * see http://commangular.org/docs/#commangular-namespace
	 */
	interface ICommand {
		/**
		 * This function is what gets called when the command executes.
		 * It can take parameters in as injected by angular
		 */
		execute() : any;

	}

	interface IResultCommand extends ICommand{
		/**
		 * Is executed after the execute method and the interception chain and can receive
		 * the result from the execute method of the same command.
		 *
		 * @param result Value/object returned by the execution.
		 */
		onResult ( result: any ) : void;

		/**
		 * Is executed when the executed method ends with an error. Can receive the error throw by the execute method.
		 * @param error The error that occured during execution
		 */
		onError ( error: Error ) : void;
	}

	/**
	 * The result object expected in the promise returned by the dispatch function
	 * This must be extended to add custom result keys
	 * see http://commangular.org/docs/#returning-result-from-commands
	 */
	interface ICommandResult {
		/**
		 * By defualt the result of the command will be found in this property
		 */
		lastResult : any;
	}

	/**
	 * Command creation configuration
	 * see http://commangular.org/docs/#the-command-config-object
	 */
	interface ICommandConfig {
		/**
		 * This property instruct commangular to keep the value returned by the command in the value
		 * key passed in 'resultKey'. It has to be a string. It means that after the execution of this
		 * commands you will be able to inject on the next command using that key and the result of the command will be injected.
		 */
		resultKey : string;
	}

	/**
	 * All the command configuration of your application is done in an angular config block and
	 * with the $commangularProvider. The provider is responsible to build the command strutures and
	 * map them to the desired event names. You can create multiple configs blocks in angular, so you
	 * can have multiple command config blocks to separate functional parts of your application.
	 * see http://commangular.org/docs/#using-the-provider
	 */
	interface ICommAngularProvider {

		/**
		 * This function lets you map a even name to a command sequence
		 * @param eventName An event that will be watched by commangular
		 */
		mapTo( eventName: string ) : ICommAngularDescriptor;

		/**
		 * Used along with mapTo function. Creates a sequence of commands that
		 * execute after one and other
		 * see http://commangular.org/docs/#building-command-sequences
		 */
		asSequence(): ICommAngularDescriptor;

		/**
		 * Used along with mapTo function. Maps commands to be executed parallel
		 * see http://commangular.org/docs/#building-parallel-commands
		 */
		asParallel(): ICommAngularDescriptor;

		 /**
		  * A command flow is a decision point inside the command group.You can have any number
		  * of flows inside a command group and nesting them how you perfer.
		  * see http://commangular.org/docs/#building-command-flows
		  */
		asFlow(): ICommAngularDescriptor;

		findCommand( eventName: string ): ICommAngularDescriptor;

	}

	/**
	 * The service that enables the execution of commands
	 * see http://commangular.org/docs/#dispatching-events
	 */
	interface ICommAngularService {

		/**
		 * This function executes the given command sequence.
		 * see http://commangular.org/docs/#dispatching-events
		 * @param eventName Name of the even that will trigger a command sequence
		 * @param data Data of any type that will be passed to the command.
		 */
		dispatch( eventName: string, data?: any ) : ng.IPromise<any>;
	}

	interface ICommAngularDescriptor {

		/**
		 * Used along with mapTo function. Creates a sequence of commands that
		 * execute after one and other
		 * see http://commangular.org/docs/#building-command-sequences
		 */
		asSequence (): ICommAngularDescriptor;

		/**
		 * Used along with mapTo function. Maps commands to be executed parallel
		 * see http://commangular.org/docs/#building-parallel-commands
		 */
		asParallel(): ICommAngularDescriptor;

		 /**
		  * A command flow is a decision point inside the command group.You can have any number
		  * of flows inside a command group and nesting them how you perfer.
		  * see http://commangular.org/docs/#building-command-flows
		  */
		asFlow(): ICommAngularDescriptor;

		/**
		 * Add commands to a descriptor.
		 * @param command The name that was used to create the command.
		 */
		add ( command: string ): ICommAngularDescriptor;

		/**
		 * Add descriptor to a descriptor.
		 * @param descriptor Another descriptor attached to a sequnce of commands.
		 */
		add ( descriptor: ICommAngularDescriptor ): ICommAngularDescriptor;

		/**
		 * This is to be used with flowing commands to attach an expression that
		 * evaluates using Angular $parse.
		 * see http://commangular.org/docs/#building-command-flows
		 * @param expression A string form expression that can make use of services to validate conditions.
		 * @param services A comma seperated list of services that are used in the above expression
		 */
		link ( expression: string, services?: string ): ICommAngularDescriptor;

		/**
		 * Works with the <code>link</code> function to attach a command to the flow if the
		 * expression becomes truthy.
		 * see http://commangular.org/docs/#building-command-flows
		 * @param command The name that was used to create the command.
		 */
		to ( command: string ): ICommAngularDescriptor;

	}

}

/**
 * Extending the angular rootScope to include the dispatch function in all scopes.
 */
declare module angular {

	interface IRootScopeService {

		/**
		 * Commangular method to execute a command.
		 * @param eventName Name of the even that will trigger a command sequence
		 * @param data Data of any type that will be passed to the command.
		 */
		dispatch( eventName: string, data?: any ) : ng.IPromise<any>;

	}

}
