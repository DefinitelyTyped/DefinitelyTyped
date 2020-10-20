import bindings from 'bindings';

// Use your bindings defined in your C files
const result = bindings('binding.node').your_c_function();

// The same with configuration object
const result1 = bindings({ bindings: 'bindings.node' }).your_c_function();
