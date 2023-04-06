export interface Mailable {
  from?: string;
  to: string | string[];
  cc?: string | string[];
  bcc?: string | string[];
  subject: string;
  body: string;
}
export interface SendResponse {
  status: number;
}
export interface ProviderAdapter {
  send(mailable: Mailable): Promise<SendResponse>;
}
