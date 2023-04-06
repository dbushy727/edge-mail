import { ProviderAdapter, Mailable } from "./adapter";
import { MailConfig, ClientKeyAndSecretKey } from "../config";

interface MailgunConfig {
  provider: "mailgun";
  auth: ClientKeyAndSecretKey;
}

export function isMailgun(config: MailConfig): config is MailgunConfig {
  return config.provider === "mailgun";
}

export class MailgunAdapter implements ProviderAdapter {
  // @ts-ignore
  private clientKey: string;
  // @ts-ignore
  private secretKey: string;

  constructor(config: MailgunConfig) {
    this.clientKey = config.auth.clientKey;
    this.secretKey = config.auth.secretKey;
  }

  public send(_mailable: Mailable): Promise<any> {
    console.log("Sending with Mailgun");
    return Promise.resolve();
  }
}
