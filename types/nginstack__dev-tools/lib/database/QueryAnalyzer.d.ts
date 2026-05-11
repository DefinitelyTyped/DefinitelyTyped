export function getTxtExecutionPlan(
    sql: string,
    options?: {
        disableHeader?: boolean;
    },
): string;
export function getHtmlExecutionPlan(
    sql: string,
    options?: {
        disableHeader?: boolean;
    },
): string;
