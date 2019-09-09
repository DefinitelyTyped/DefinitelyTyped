declare module 'tau-prolog' {
  namespace tau {
    namespace type {
      type _Value = Var|Num|Term<number, string>|Substitution|State|Rule;
      type Value = Var|Num|Term<number, string>;

      class Var {
        // private property to ensure types don't overlap
        private _uniqueProperty;

        public readonly id: string;

        public constructor(id: string);

        public unify(obj: _Value, occurs_check: boolean): Substitution|null;

        public clone(): this;

        public equals(obj: _Value): boolean;

        public rename(thread: Thread): this;

        public variables(): string[];

        public apply(subs: Substitution): this;

        public compare(other: this): -1|0|1;
      }

      class Num {
        // private property to ensure types don't overlap
        private _uniqueProperty;

        public readonly is_float: boolean;

        public readonly value: number;

        public constructor(value: number, is_float?: boolean);

        public unify(obj: _Value, occurs_check: boolean): Substitution|null;

        public clone(): this;

        public equals(obj: _Value): boolean;

        public rename(thread: Thread): this;

        public variables(): string[];

        public apply(subs: Substitution): this;

        public compare(other: this): -1|0|1;
      }

      class Term<Arity extends number, Indicator extends string> {
        // private property to ensure types don't overlap
        private _uniqueProperty;

        public readonly indicator: Indicator;

        public readonly id: string;

        public readonly args: Value[]&{length: Arity};

        public constructor(id: string, args?: Value[], ref?: number);

        public unify(obj: _Value, occurs_check: boolean): Substitution|null;

        public clone(): this;

        public equals(obj: _Value): boolean;

        public rename(thread: Thread): this;

        public variables(): string[];

        public apply(subs: Substitution): this;

        public select(): Term<number, string>;

        public replace(term: Term<number, string>): Term<number, string>;

        public search(expr: Term<number, string>): boolean;

        public compare(other: this): -1|0|1;
      }

      class Substitution {
        // private property to ensure types don't overlap
        private _uniqueProperty;

        public readonly links: {};

        public constructor(links?: {});

        public clone(): this;

        public equals(obj: _Value): boolean;

        public apply(subs: Substitution): this;
      }

      class State {
        // private property to ensure types don't overlap
        private _uniqueProperty;

        public readonly goal: Term<number, string>;

        public readonly substitution: Substitution;

        public readonly parent: State|null;

        public constructor(goal?: Term<number, string>, subs?: Substitution, parent?: State);

        public clone(): this;

        public equals(obj: _Value): boolean;
      }

      class Rule {
        // private property to ensure types don't overlap
        private _uniqueProperty;

        public readonly head: Term<number, string>;

        public readonly body: Term<number, string>|null;

        public readonly dynamic: boolean;

        public constructor(
          head: Term<number, string>, body: Term<number, string>|null, dynamic?: boolean);

        public clone(): this;

        public equals(obj: _Value): boolean;

        public rename(thread: Thread): this;

        public variables(): string[];

        public apply(subs: Substitution): this;
      }

      class Session {
        // private property to ensure types don't overlap
        private _uniqueProperty;

        public readonly rules: Record<string, Rule>;

        public readonly modules: string[];

        public readonly threads: Thread[];

        public readonly total_threads: number;

        public constructor(limit?: number);

        public consult(program: string): void;

        public query(query: string): true | Term<1, 'throw'>;

        public answer(callback: (answer: Answer) => void): void;

        public answers(callback: (answer: Answer) => void, maxCount?: number, after?: () => void):
        void;

        public add_rule(rule: Rule, options?: {from?: string}): true;

        public prepend(states: State[]): void;

        public throw_error(error: Term<1, 'error'>): void;

        public success(state: State, parent?: State): void;
      }

      class Thread {
        // private property to ensure types don't overlap
        private _uniqueProperty;

        public readonly epoch: number;
        public readonly session: Session;
        public readonly total_steps: Number;
        public readonly cpu_time: Number;
        public readonly cpu_time_last: Number;
        public readonly points: [];
        public readonly debugger: boolean;
        public readonly debugger_states: [];
        public readonly level: string;
        public readonly current_limit: number;

        public consult(program: string): void;

        public query(query: string): void;

        public answer(callback: (answer: Answer) => void): void;

        public answers(callback: (answer: Answer) => void, maxCount?: number, after?: () => void):
        void;

        public add_rule(rule: Rule, options?: {from?: string}): true;

        public prepend(states: State[]): void;

        public throwError(error: Term<1, 'error'>): void;

        public success(state: State, parent?: State): void;
      }

      interface PredicateFn {
        (thread: Thread, point: State, atom: Term<number, string>): void|true;
      }

      type Predicate = Rule[]|PredicateFn;

      class Module {
        public readonly id: string;

        public readonly predicates: Record<string, Predicate>;

        public readonly exports: string[];

        public constructor(id: string, predicates: Record<string, Predicate>, exports: string[]);

        public exports_predicate(indicator: string): boolean;
      }

      function is_variable(obj: any): obj is Var;

      function is_atom(obj: any): obj is Term<0, string>;

      function is_module(obj: any): obj is Term<1, 'module/1'>;

      function is_error(obj: any): obj is Term<1, 'throw/1'>;
    }

    namespace error {
      function existence(type: string, object: type.Term<number, string>|string, indicator: string):
      type.Term<1, 'error'>;
      function type(expected: string, found: type.Term<number, string>, indicator: string):
      type.Term<1, 'error'>;
      function instantiation(indicator: string): type.Term<1, 'error'>;
      function domain(expected: string, found: type.Term<number, string>, indicator: string):
      type.Term<1, 'error'>;
      function representation(flag: string, indicator: string): type.Term<1, 'error'>;
      function permission(
        operation: string, type: string, found: type.Term<number, string>, indicator: string):
      type.Term<1, 'error'>;
      function evaluation(error: string, indicator: string): type.Term<1, 'error'>;
      function syntax(
        token: undefined|
        {value: string, line: number, column: number, matches: string[], start: number},
        expected: string,
        last: boolean): type.Term<1, 'error'>;
      function syntax_by_predicate(expected: string, indicator: string): type.Term<1, 'error'>;
    }

    interface Answer {
      id: string;

      links: Record<string, Link>;
    }

    interface Link {
      id: string;

      toJavaScript(): string|number|(string|number)[];
    }

    function format_answer(answer: Answer): string;

    function create(limit?: number): type.Session;
  }

  export = tau;
}
