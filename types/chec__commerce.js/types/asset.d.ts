export interface Asset {
  id: string;
  url: string;
  description: string | null;
  is_image: boolean;
  filename: string;
  file_extension: string;
  image_dimensions: {
    width: number;
    height: number;
  };
  file_size?: number;
  meta: any;
  created_at: number;
  updated_at: number;
}
