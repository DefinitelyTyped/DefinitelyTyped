export interface Item {
  /** Nome do item. */
  title?: string | undefined;
  /** Descrição do artigo. */
  description?: string | undefined;
  /** URL da imagem. */
  picture_url?: string | undefined;
  /** Categoria do item. */
  category_id?: string | undefined;
  /** Quantidade de itens. */
  quantity?: number | undefined;
  /** Preço unitário. */
  unit_price?: number | undefined;
}
