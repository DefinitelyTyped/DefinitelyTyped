export = JavaImporter;
declare function JavaImporter(): void;
declare class JavaImporter {
    importJavaBean(packageOrClassName: string): void;
    getClassesFromPackages(packageName: string): any[];
}
