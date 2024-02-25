/**
 * Renders the given mustache template with the given data.
 * https://mokapi.io/docs/javascript-api/mokapi-mustache/render
 * @param template template - A mustache template.
 * @param data data - A scope object that contains the data needed to render the template.
 * @returns The rendered template
 * @example
 * export default function() {
 *   const scope = {
 *     firstname: fake({
 *       type: 'string',
 *       format: '{firstname}'
 *     }),
 *     calc: () => ( 3 + 4 )
 *   }
 *
 *   const output = render("{{firstname}} has {{calc}} apples", scope)
 *   console.log(output)
 * }
 */
export function render(template: string, data: any): string