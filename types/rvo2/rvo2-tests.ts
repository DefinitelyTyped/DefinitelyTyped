import { Vector2, vectorvector, RVOSimulator, absSq, normalize } from './index';

// Some examples of vector functions.
const v1 = new Vector2(-1, 2);
const v2 = new Vector2(1, 2);
const v3 = v1.mul(3);  // -3, 6
const v4 = v1.sub(v2); // -2, 0
const v5 = v1.add(v2); //  0, 4

function setupScenario(sim: RVOSimulator, goals: vectorvector) {
  sim.setTimeStep(0.25);
 	/* Specify the default parameters for agents that are subsequently added. */
  sim.setAgentDefaults(15, 10, 5, 5, 2, 2);

	/*
	 * Add agents, specifying their start position, and store their goals on the
	 * opposite side of the environment.
	 */
	for (var i = 0; i < 5; ++i) {
		for (var j = 0; j < 5; ++j) {
			var index = sim.addAgent(new Vector2(55 + i * 10,  55 + j * 10));
			goals[index] = new Vector2(-75, -75);

			index = sim.addAgent(new Vector2(-55 - i * 10,  55 + j * 10));
			goals[index] = new Vector2(75, -75);

			index = sim.addAgent(new Vector2(55 + i * 10, -55 - j * 10));
			goals[index] = new Vector2(-75, 75);

			index = sim.addAgent(new Vector2(-55 - i * 10, -55 - j * 10));
			goals[index] = new Vector2(75, 75);
		}
	}

	/*
	 * Add (polygonal) obstacles, specifying their vertices in counterclockwise
	 * order.
	 */
	const obstacle1 = new vectorvector(4)
    , obstacle2 = new vectorvector(4)
    , obstacle3 = new vectorvector(4)
    , obstacle4 = new vectorvector(4);

	obstacle1[0] = new Vector2(-10, 40);
	obstacle1[1] = new Vector2(-40, 40);
	obstacle1[2] = new Vector2(-40, 10);
	obstacle1[3] = new Vector2(-10, 10);

	obstacle2[0] = new Vector2(10, 40);
	obstacle2[1] = new Vector2(10, 10);
	obstacle2[2] = new Vector2(40, 10);
	obstacle2[3] = new Vector2(40, 40);

	obstacle3[0] = new Vector2(10, -40);
	obstacle3[1] = new Vector2(40, -40);
	obstacle3[2] = new Vector2(40, -10);
	obstacle3[3] = new Vector2(10, -10);

	obstacle4[0] = new Vector2(-10, -40);
	obstacle4[1] = new Vector2(-10, -10);
	obstacle4[2] = new Vector2(-40, -10);
	obstacle4[3] = new Vector2(-40, -40);

	sim.addObstacle(obstacle1);
	sim.addObstacle(obstacle2);
	sim.addObstacle(obstacle3);
	sim.addObstacle(obstacle4);

	/* Process the obstacles so that they are accounted for in the simulation. */
	sim.processObstacles();
}

function updateVisualization(sim: RVOSimulator)
{
	/* Output the current global time. */
	const time = sim.getGlobalTime();
  // console.log(`Time: ${time}`);
	/* Output the current position of all the agents. */
	for (let i = 0; i < sim.getNumAgents(); ++i) {
    const p = sim.getAgentPosition(i);
    // console.log(`#${i}) x: ${p.x()}, y: ${p.y()}`);
  }
}

function setPreferredVelocity(sim: RVOSimulator, goals: vectorvector) {
  for (var i = 0; i < sim.getNumAgents(); i++) {
    const delta = goals[i].sub(sim.getAgentPosition(i));

		/*
		 * Perturb a little to avoid deadlocks due to perfect symmetry.
		 */
		const angle = Math.random() * 2.0 * Math.PI;
		const dist = Math.random() * 0.0001;

    var goalVector = new Vector2(delta.x() + dist * Math.cos(angle), delta.y() + dist * Math.sin(angle));

    if (absSq(goalVector) > 1.0) {
      goalVector = normalize(goalVector);
    }

    sim.setAgentPrefVelocity(i, goalVector);
  }
}

function reachedGoal(sim: RVOSimulator, goals: vectorvector) {
  /* Check if all agents have reached their goals. */
  for (var i = 0; i < sim.getNumAgents(); ++i) {
    const dist = sim.getAgentPosition(i).sub(goals[i]);
    if (absSq(dist) > 400) { // 400 <= 20 x 20
      return false;
    }
  }
  return true;
}

function main(debug = false) {
  const nbrAgents = 100;
  const sim = new RVOSimulator();
  const goals = new vectorvector(nbrAgents);

  setupScenario(sim, goals);

  // sim.addObstacle(vv);
  var i = 0;
  do {
    if (++i % 10 === 0) {
      // console.log('TIME: ' + i);
    }
    setPreferredVelocity(sim, goals);
    if (debug) { updateVisualization(sim); }
    sim.doStep();
  } while (!reachedGoal(sim, goals));

  // console.log('Done');
}

main();
