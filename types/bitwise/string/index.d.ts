import stringToBits from './to-bits';

declare namespace string {
  const toBits: typeof stringToBits;
}

export default string;
