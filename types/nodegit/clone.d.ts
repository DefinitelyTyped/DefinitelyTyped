import { Repository } from './repository';
import { CloneOptions } from './clone-options';

/**
 * Patch repository cloning to automatically coerce objects.
 */
export function Clone(url: string, localPath: string, options?: CloneOptions): Promise<Repository>;
