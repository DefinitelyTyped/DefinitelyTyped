import * as Env from "yeoman-environment";
import * as Generator from "yeoman-generator";

class TestGenerator extends Generator {}

const env = Env.createEnv();
env.registerStub(TestGenerator, "test");
