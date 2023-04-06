export interface ApiToken {
  apiKey: string;
}
export interface ClientKeyAndSecretKey {
  clientKey: string;
  secretKey: string;
}

export type Provider = "sendgrid" | "mailgun" | "sparkpost";
export type ProviderAuth = ApiToken | ClientKeyAndSecretKey;

export interface MailConfig {
  provider: Provider;
  auth: ProviderAuth;
}
