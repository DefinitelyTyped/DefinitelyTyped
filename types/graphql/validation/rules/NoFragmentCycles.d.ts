import ValidationContext from "../ValidationContext";
import { ASTVisitor } from "../../language/visitor";

export function cycleErrorMessage(fragName: string, spreadNames: Array<string>): string;

export function NoFragmentCycles(context: ValidationContext): ASTVisitor;
