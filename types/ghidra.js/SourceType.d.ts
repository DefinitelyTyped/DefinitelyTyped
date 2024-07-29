export interface SourceType {
  getDisplayString(): string;
  isHigherPriorityThan(source: SourceType): boolean;
  isLowerPriorityThan(source: SourceType): boolean;
}
