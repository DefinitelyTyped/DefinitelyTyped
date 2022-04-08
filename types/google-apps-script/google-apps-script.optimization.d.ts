// Type definitions for Google Apps Script 2020-01-02
// Project: https://developers.google.com/apps-script/
// Definitions by: PopGoesTheWza <https://github.com/PopGoesTheWza>
//                 motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  namespace Optimization {
    /**
     * Object storing a linear constraint of the form lowerBound ≤ Sum(a(i) x(i)) ≤ upperBound
     * where lowerBound and upperBound are constants, a(i) are constant
     * coefficients and x(i) are variables (unknowns).
     *
     * The example below creates one variable x with values between 0 and 5
     * and creates the constraint 0 ≤ 2 * x ≤ 5. This is done by first creating a constraint
     * with the lower bound 5 and upper bound 5. Then the coefficient for variable
     * x in this constraint is set to 2.
     *
     *     var engine = LinearOptimizationService.createEngine();
     *     // Create a variable so we can add it to the constraint
     *     engine.addVariable('x', 0, 5);
     *     // Create a linear constraint with the bounds 0 and 10
     *     var constraint = engine.addConstraint(0, 10);
     *     // Set the coefficient of the variable in the constraint. The constraint is now:
     *     // 0 <= 2 * x <= 5
     *     constraint.setCoefficient('x', 2);
     */
    interface LinearOptimizationConstraint {
      setCoefficient(variableName: string, coefficient: number): LinearOptimizationConstraint;
    }
    /**
     * The engine used to model and solve a linear program. The example below solves the following
     * linear program:
     *
     * Two variables, x and y:
     *
     * 0 ≤ x ≤ 10
     *
     * 0 ≤ y ≤ 5
     *
     * Constraints:
     *
     * 0 ≤ 2 * x + 5 * y ≤ 10
     *
     * 0 ≤ 10 * x + 3 * y ≤ 20
     *
     * Objective:
     * Maximize x + y
     *
     *     var engine = LinearOptimizationService.createEngine();
     *
     *     // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
     *     // Add two variables, 0 <= x <= 10 and 0 <= y <= 5
     *     engine.addVariable('x', 0, 10);
     *     engine.addVariable('y', 0, 5);
     *
     *     // Create the constraint: 0 <= 2 * x + 5 * y <= 10
     *     var constraint = engine.addConstraint(0, 10);
     *     constraint.setCoefficient('x', 2);
     *     constraint.setCoefficient('y', 5);
     *
     *     // Create the constraint: 0 <= 10 * x + 3 * y <= 20
     *     var constraint = engine.addConstraint(0, 20);
     *     constraint.setCoefficient('x', 10);
     *     constraint.setCoefficient('y', 3);
     *
     *     // Set the objective to be x + y
     *     engine.setObjectiveCoefficient('x', 1);
     *     engine.setObjectiveCoefficient('y', 1);
     *
     *     // Engine should maximize the objective
     *     engine.setMaximization();
     *
     *     // Solve the linear program
     *     var solution = engine.solve();
     *     if (!solution.isValid()) {
     *       Logger.log('No solution ' + solution.getStatus());
     *     } else {
     *       Logger.log('Value of x: ' + solution.getVariableValue('x'));
     *       Logger.log('Value of y: ' + solution.getVariableValue('y'));
     *     }
     */
    interface LinearOptimizationEngine {
      addConstraint(lowerBound: number, upperBound: number): LinearOptimizationConstraint;
      addConstraints(lowerBounds: number[], upperBounds: number[], variableNames: string[][], coefficients: number[][]): LinearOptimizationEngine;
      addVariable(name: string, lowerBound: number, upperBound: number): LinearOptimizationEngine;
      addVariable(name: string, lowerBound: number, upperBound: number, type: VariableType): LinearOptimizationEngine;
      addVariable(name: string, lowerBound: number, upperBound: number, type: VariableType, objectiveCoefficient: number): LinearOptimizationEngine;
      addVariables(names: string[], lowerBounds: number[], upperBounds: number[], types: VariableType[], objectiveCoefficients: number[]): LinearOptimizationEngine;
      setMaximization(): LinearOptimizationEngine;
      setMinimization(): LinearOptimizationEngine;
      setObjectiveCoefficient(variableName: string, coefficient: number): LinearOptimizationEngine;
      solve(): LinearOptimizationSolution;
      solve(seconds: number): LinearOptimizationSolution;
    }
    /**
     * The linear optimization service, used to model and solve linear and mixed-integer linear
     * programs. The example below solves the following linear program:
     *
     * Two variables, x and y:
     *
     * 0 ≤ x ≤ 10
     *
     * 0 ≤ y ≤ 5
     *
     * Constraints:
     *
     * 0 ≤ 2 * x + 5 * y ≤ 10
     *
     * 0 ≤ 10 * x + 3 * y ≤ 20
     *
     * Objective:
     * Maximize x + y
     *
     *     var engine = LinearOptimizationService.createEngine();
     *
     *     // Add variables, constraints and define the objective using addVariable(), addConstraint(), etc.
     *     // Add two variables, 0 <= x <= 10 and 0 <= y <= 5
     *     engine.addVariable('x', 0, 10);
     *     engine.addVariable('y', 0, 5);
     *
     *     // Create the constraint: 0 <= 2 * x + 5 * y <= 10
     *     var constraint = engine.addConstraint(0, 10);
     *     constraint.setCoefficient('x', 2);
     *     constraint.setCoefficient('y', 5);
     *
     *     // Create the constraint: 0 <= 10 * x + 3 * y <= 20
     *     var constraint = engine.addConstraint(0, 20);
     *     constraint.setCoefficient('x', 10);
     *     constraint.setCoefficient('y', 3);
     *
     *     // Set the objective to be x + y
     *     engine.setObjectiveCoefficient('x', 1);
     *     engine.setObjectiveCoefficient('y', 1);
     *
     *     // Engine should maximize the objective.
     *     engine.setMaximization();
     *
     *     // Solve the linear program
     *     var solution = engine.solve();
     *     if (!solution.isValid()) {
     *       Logger.log('No solution ' + solution.getStatus());
     *     } else {
     *       Logger.log('Value of x: ' + solution.getVariableValue('x'));
     *       Logger.log('Value of y: ' + solution.getVariableValue('y'));
     *     }
     */
    interface LinearOptimizationService {
      Status: typeof Status;
      VariableType: typeof VariableType;
      createEngine(): LinearOptimizationEngine;
    }
    /**
     * The solution of a linear program. The example below solves the following linear program:
     *
     * Two variables, x and y:
     *
     * 0 ≤ x ≤ 10
     *
     * 0 ≤ y ≤ 5
     *
     * Constraints:
     *
     * 0 ≤ 2 * x + 5 * y ≤ 10
     *
     * 0 ≤ 10 * x + 3 * y ≤ 20
     *
     * Objective:
     * Maximize x + y
     *
     *     var engine = LinearOptimizationService.createEngine();
     *
     *     // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc.
     *     // Add two variables, 0 <= x <= 10 and 0 <= y <= 5
     *     engine.addVariable('x', 0, 10);
     *     engine.addVariable('y', 0, 5);
     *
     *     // Create the constraint: 0 <= 2 * x + 5 * y <= 10
     *     var constraint = engine.addConstraint(0, 10);
     *     constraint.setCoefficient('x', 2);
     *     constraint.setCoefficient('y', 5);
     *
     *     // Create the constraint: 0 <= 10 * x + 3 * y <= 20
     *     var constraint = engine.addConstraint(0, 20);
     *     constraint.setCoefficient('x', 10);
     *     constraint.setCoefficient('y', 3);
     *
     *     // Set the objective to be x + y
     *     engine.setObjectiveCoefficient('x', 1);
     *     engine.setObjectiveCoefficient('y', 1);
     *
     *     // Engine should maximize the objective
     *     engine.setMaximization();
     *
     *     // Solve the linear program
     *     var solution = engine.solve();
     *     if (!solution.isValid()) {
     *       Logger.log('No solution ' + solution.getStatus());
     *     } else {
     *       Logger.log('Objective  value: ' + solution.getObjectiveValue());
     *       Logger.log('Value of x: ' + solution.getVariableValue('x'));
     *       Logger.log('Value of y: ' + solution.getVariableValue('y'));
     *     }
     */
    interface LinearOptimizationSolution {
      getObjectiveValue(): number;
      getStatus(): Status;
      getVariableValue(variableName: string): number;
      isValid(): boolean;
    }
    /**
     * Status of the solution. Before solving a problem the status will be NOT_SOLVED;
     * afterwards it will take any of the other values depending if it successfully found a solution and
     * if the solution is optimal.
     */
    enum Status { OPTIMAL, FEASIBLE, INFEASIBLE, UNBOUNDED, ABNORMAL, MODEL_INVALID, NOT_SOLVED }
    /**
     * Type of variables created by the engine.
     */
    enum VariableType { INTEGER, CONTINUOUS }
  }
}

declare var LinearOptimizationService: GoogleAppsScript.Optimization.LinearOptimizationService;
