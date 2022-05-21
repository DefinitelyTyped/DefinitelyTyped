import { Constraint } from './constraint';
import { ExportFormatEnum } from './enums';

/**
 * 导出设置
 */
export interface ExportSetting {
  suffix: string;
  format: ExportFormatEnum;
  constraint: Constraint;
}
