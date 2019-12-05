interface From { readonly type: 'admin', id: string }
interface To { type: 'user' | 'contact', id: string }

export interface Message {
    message_type: string,
    subject: string,
    template: string,
    body: string,
    from: From
    to: To
}