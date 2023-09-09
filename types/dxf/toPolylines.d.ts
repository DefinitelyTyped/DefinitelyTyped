import * as Information from './Information';
import { Box } from './Utils';

export default function toPolylines(parsed: Information.FileInfo): { bbox: Box, polylines: Information.Polyline[] };
