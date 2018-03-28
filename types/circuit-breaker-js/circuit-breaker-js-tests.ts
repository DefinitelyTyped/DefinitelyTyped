import CircuitBreaker = require('circuit-breaker-js');

const breaker = new CircuitBreaker();
breaker.isOpen();

const options: CircuitBreaker.Options = {};

let status: number = CircuitBreaker.CLOSED;
status = CircuitBreaker.OPEN;

breaker.forceOpen();
breaker.forceClose();
