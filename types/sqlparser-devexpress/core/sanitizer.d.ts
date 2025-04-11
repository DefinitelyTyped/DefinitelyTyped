/**
 * Represents the result of sanitizing the SQL query.
 */
export interface SanitizeResult {
    sanitizedSQL: string;
    variables: string[];
}

/**
 * Sanitizes the SQL query by replacing placeholders or pipe-separated variables
 * with standardized `{placeholder}` format and extracts all variable names.
 *
 * Example Input:
 * ```
 * SELECT * FROM Orders WHERE CustomerID = {0} | [CustomerID]
 * ```
 *
 * Output:
 * ```
 * {
 *   sanitizedSQL: "SELECT * FROM Orders WHERE CustomerID = {CustomerID}",
 *   variables: ["CustomerID"]
 * }
 *
 * @param sql - The raw SQL query containing placeholders or pipes.
 * @returns SanitizeResult - The cleaned SQL query and extracted variables.
 */
export function sanitizeQuery(sql: string): SanitizeResult;
