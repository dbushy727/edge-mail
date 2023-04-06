import { ProviderAdapter, Mailable } from "./adapter";
import { MailConfig, ApiToken } from "../config";

interface SendgridConfig {
  provider: "sendgrid";
  auth: ApiToken;
}

export function isSendgrid(config: MailConfig): config is SendgridConfig {
  return config.provider === "sendgrid";
}

export class SendgridAdapter implements ProviderAdapter {
  // @ts-ignore
  private apiKey: string;

  constructor(config: SendgridConfig) {
    this.apiKey = config.auth.apiKey;
  }

  public send(_mailable: Mailable): Promise<any> {
    console.log("Sending with Sendgrid");
    return Promise.resolve();
  }
}
