import { lowestCommonAncestor } from 'lowest-common-ancestor';

// $ExpectType string
lowestCommonAncestor(
  '/foo/bar/abc',
  '/foo/bar/def',
  '/foo/xyz'
);
