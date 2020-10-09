declare namespace Chai {
  interface TypeComparison {
    age: any;
    model: Assertion;
    typed(type: string): Assertion;
  }
}
