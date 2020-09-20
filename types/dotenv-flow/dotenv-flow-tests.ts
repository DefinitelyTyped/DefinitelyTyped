import dotenv = require('dotenv-flow');

const filenames: string[] = dotenv.listDotenvFiles('/path/to/project');
dotenv.listDotenvFiles('/path/to/project', { node_env: 'development' });

const parsed: { [name: string]: string } = dotenv.parse('/path/to/project/.env');
dotenv.parse(['/path/to/project/.env'], { encoding: 'utf8' });

dotenv.unload('/path/to/project/.env');
dotenv.unload(['/path/to/project/.env'], { encoding: 'utf8' });

const env = dotenv.config();
const dbUrl: string | null = env.error || !env.parsed ? null : env.parsed['BASIC'];

dotenv.config({
    node_env: 'production',
    default_node_env: 'development',
    path: '/path/to/project',
    encoding: 'utf8',
    purge_dotenv: true,
    silent: false,
});
