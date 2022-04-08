export interface Item {
  /** Nome do item. */
  title?: string;
  /** Descrição do artigo. */
  description?: string;
  /** URL da imagem. */
  picture_url?: string;
  /** Categoria do item. */
  category_id?: string;
  /** Quantidade de itens. */
  quantity?: number;
  /** Preço unitário. */
  unit_price?: number;
}
