export interface Asset {
  id: string;
  url: string;
  is_image: boolean;
  filename: string;
  file_extension: string;
  file_size?: number;
  meta: any;
  created_at: number;
}
