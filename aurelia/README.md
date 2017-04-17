# INFORMATION

This are the today (2015-07-26) definitions taken directly from the 
Aurelia source, but with few modifications so it could be used in
TypeScript projects (the original was not working).

# USAGE

The only way to get this working is setting the typescript compiler
target to **es6**. That is not really a problem because to work with
Aurelia, by default, you will need to use the SystemJS, and the TS
ecmascript 6 generated code will be transpiled by babel to the 
ecmascript 5.

You can folow the original steps of configuration from Aurelia,
without a problem. 
