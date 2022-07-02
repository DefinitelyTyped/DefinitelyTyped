/**
 * Represents an icon.
 */
export interface Icon {
    /**
     * Parses the input to an icon-id.
     *
     * @param id
     * The id of the icon to get.
     *
     * @param params
     * Additional parameters for getting the icon.
     *
     * @return
     * The id of the icon to get.
     */
    iconIdParser?(id: string, params: string[]): string;
}
