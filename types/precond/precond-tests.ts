
import precond = require('precond');

precond.checkArgument(true);
precond.checkArgument(true, "msg");
precond.checkArgument(true, "%s %s %s", 1, "two");

precond.checkState(true);
precond.checkState(true, "msg");
precond.checkState(true, "%s %s %s", 1, "two");

precond.checkIsDef(true);
precond.checkIsDef(true, "msg");
precond.checkIsDef(true, "%s %s %s", 1, "two");

precond.checkIsDefAndNotNull(true);
precond.checkIsDefAndNotNull(true, "msg");
precond.checkIsDefAndNotNull(true, "%s %s %s", 1, "two");

precond.checkIsString(true);
precond.checkIsString(true, "msg");
precond.checkIsString(true, "%s %s %s", 1, "two");

precond.checkIsArray(true);
precond.checkIsArray(true, "msg");
precond.checkIsArray(true, "%s %s %s", 1, "two");

precond.checkIsNumber(true);
precond.checkIsNumber(true, "msg");
precond.checkIsNumber(true, "%s %s %s", 1, "two");

precond.checkIsBoolean(true);
precond.checkIsBoolean(true, "msg");
precond.checkIsBoolean(true, "%s %s %s", 1, "two");

precond.checkIsFunction(true);
precond.checkIsFunction(true, "msg");
precond.checkIsFunction(true, "%s %s %s", 1, "two");

precond.checkIsObject(true);
precond.checkIsObject(true, "msg");
precond.checkIsObject(true, "%s %s %s", 1, "two");
