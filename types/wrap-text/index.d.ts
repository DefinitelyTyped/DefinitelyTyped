export = wrapText;

/**
 * Wrap text by a given width.
 *
 * @param input The input text.
 * @param [width=80] The wrapping width.
 *
 * @example
 * import wrapText = require("wrap-text");
 *
 * // Default width (80 chars)
 * console.log(wrapText("Amet ad minima expedita dicta itaque cum debitis odio cupiditate, animi. Libero maiores quisquam consequuntur maiores nihil nobis. Cumque suscipit asperiores"));
 * // =>
 * // Amet ad minima expedita dicta itaque cum debitis odio cupiditate, animi. Libero
 * // maiores quisquam consequuntur maiores nihil nobis. Cumque suscipit asperiores
 *
 * // 20 width
 * console.log(wrapText(
 *     "Lorem vitae quasi quaerat et consectetur quis ea! Eos unde repellendus soluta eaque accusamus deserunt maiores? Facere nihil architecto facilis fuga quidem?"
 *   , 20
 * ));
 * // =>
 * // Lorem vitae quasi
 * // quaerat et
 * // consectetur quis ea!
 * // Eos unde repellendus
 * // soluta eaque
 * // accusamus deserunt
 * // maiores? Facere nihil
 * // architecto facilis
 * // fuga quidem?
 *
 * // Multiline text
 * console.log(wrapText(
 *     `Elit voluptate magni exercitationem voluptatem consequatur inventore. Incidunt reiciendis laudantium vero a voluptas quam! Quod officia consectetur eaque perspiciatis modi.
 *
 * Amet reprehenderit nesciunt eius magnam doloribus porro voluptatum. Repudiandae voluptatum neque neque quos adipisci accusamus. Sunt esse incidunt aperiam voluptate id unde quasi.
 * Lorem eius ullam vero sequi exercitationem maiores nam possimus. Perspiciatis tempore magnam nostrum expedita blanditiis quas laboriosam ipsam corporis.`
 *   , 50
 * ));
 * // =>
 * // Elit voluptate magni exercitationem voluptatem
 * // consequatur inventore. Incidunt reiciendis
 * // laudantium vero a voluptas quam! Quod officia
 * // consectetur eaque perspiciatis modi.
 * //
 * // Amet reprehenderit nesciunt
 * // eius magnam doloribus porro voluptatum. Repudiandae
 * // voluptatum neque neque quos adipisci accusamus.
 * // Sunt esse incidunt aperiam voluptate id unde quasi.
 * // Lorem eius ullam vero sequi exercitationem
 * // maiores nam possimus. Perspiciatis tempore magnam
 * // nostrum expedita blanditiis quas laboriosam ipsam
 * // corporis.
 */
declare function wrapText(input: string, width?: number): string;
