import LexerAction from "antlr4/action/LexerAction";
import LexerActionType from "antlr4/atn/LexerActionType";
import HashCode from "antlr4/misc/HashCode";

// LexerAction
class NewLexerAction extends LexerAction {}
const newLexerActionInstance = new NewLexerAction(LexerActionType.CUSTOM);
newLexerActionInstance.actionType; // $ExpectType LexerActionType
newLexerActionInstance.isPositionDependent; // $ExpectType boolean
newLexerActionInstance.hashCode(); // $ExpectType number
newLexerActionInstance.updateHashCode(new HashCode()); // $ExpectType void
newLexerActionInstance.equals(newLexerActionInstance); // $ExpectType boolean
