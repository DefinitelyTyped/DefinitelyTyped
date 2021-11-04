import { clean } from 'clean-git-ref';

clean('refs/heads/master'); // $ExpectType string
