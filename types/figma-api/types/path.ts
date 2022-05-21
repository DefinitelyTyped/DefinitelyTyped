type WindingRule = 'NONZERO' | 'EVENODD' | 'NONE';

export interface Path {
  data: string;
  windingRule: WindingRule;
}
