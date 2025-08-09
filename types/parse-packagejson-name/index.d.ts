declare function parsePackagejsonName(name: string | { name: string }): {
  scope: string | null,
  fullName: string,
  projectName: string | null,
  moduleName: string | null,
};

export default parsePackagejsonName;
