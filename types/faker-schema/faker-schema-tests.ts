import { Schema, withProbability } from "faker-schema";

const bluePrint = () => ({
    firstName: () => 'hello',
});

const personSchema = new Schema(bluePrint);

const person = personSchema.makeOne();
const persons =  personSchema.make(10);

const personOp = withProbability(bluePrint);
const nullablePerson = personOp(personSchema);
