import { unlessProduction, isDevelopment, isTest, isProduction, getEnv, setEnv } from 'asenv';
import { equal, throws } from 'assert';

// Test isDevelopment()
setEnv('development');
equal(getEnv(), 'development', 'Should return be true');
equal(isDevelopment(), true, 'NODE_ENV should be "development"');
equal(isTest(), false, 'NODE_ENV should be "development"');
equal(isProduction(), false, 'NODE_ENV should be "development"');
equal(unlessProduction(() => true), true, "Shound return true");

// Test isTest()
setEnv('test');
equal(getEnv(), 'test', 'Should return be true');
equal(isDevelopment(), false, 'NODE_ENV should be "test"');
equal(isTest(), true, 'NODE_ENV should be "test"');
equal(isProduction(), false, 'NODE_ENV should be "test"');
equal(unlessProduction(() => true), true, "Shound return true");

// Test isProduction()
setEnv('production');
equal(getEnv(), 'production', 'Should return be true');
equal(isDevelopment(), false, 'NODE_ENV should be "production"');
equal(isTest(), false, 'NODE_ENV should be "production"');
equal(isProduction(), true, 'NODE_ENV should be "production"');
equal(unlessProduction(() => true), false, "Shound return false");
