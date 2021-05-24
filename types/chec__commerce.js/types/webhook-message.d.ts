export interface WebhookMessage {
    webhook_id: string | null,
    event: string,
    url: string,
    response_code: number,
    created: number,
}