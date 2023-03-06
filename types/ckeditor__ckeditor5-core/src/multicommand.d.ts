import Command from './command';

export default class MultiCommand extends Command {
    registerChildCommand(command: Command): void;
}
