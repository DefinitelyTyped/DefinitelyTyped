import * as mcapi from 'minecraftcommandapi';

const achievement: mcapi.IAchievementCommand = new mcapi.AchievementCommand();

let command: String = achievement
	.Give(mcapi.Achievement.acquireIron)
	.To('@p')
	.Command;

command = achievement
	.Take(mcapi.Achievement.all)
	.From('@p')
	.Command;

const zombie: mcapi.IZombie = new mcapi.Zombie();
zombie.Tag.Fire = 3;
zombie.Tag.Invulnerable = true;

const position: mcapi.Position = new mcapi.Position(1, 2, 3,
	mcapi.PositionType.Absolute);

const summon: mcapi.ISummonCommand = new mcapi.SummonCommand(zombie, position);