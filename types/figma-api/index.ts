// figma 数据源 ts 类型 https://www.figma.com/developers/api
import { StyleEnum } from './types/enums';
import { DocumentNode } from './core/node';

/**
 * 源数据组件
 */
export type Component = {
  key: string;
  name: string;
  description: string;
  documentationLinks: string[];
};

/**
 * 源数据样式
 */
export type Style = {
  key: string;
  name: string;
  styleType: StyleEnum;
};

/**
 * figma源数据
 */
export type File = {
  document: DocumentNode;
  components: Map<string, Component>;
  componentSets: Map<string, Component>;
  schemaVersion: number;
  styles: Map<string, Style>;
  name: string;
  lastModified: string;
  thumbnailUrl: string;
  version: string;
  role: string;
  editorType: string;
  linkAccess: string;
};

export * from './core/node';
