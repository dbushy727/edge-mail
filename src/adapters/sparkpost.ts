import { ProviderAdapter, Mailable, SendResponse } from './adapter'
import { MailConfig, ClientKeyAndSecretKey } from '../config'

interface SparkpostConfig {
  provider: 'sparkpost'
  auth: ClientKeyAndSecretKey
}

export function isSparkpost(config: MailConfig): config is SparkpostConfig {
  return config.provider === 'sparkpost'
}

export class SparkpostAdapter implements ProviderAdapter {
  // @ts-ignore
  private clientKey: string
  // @ts-ignore
  private secretKey: string

  constructor(config: SparkpostConfig) {
    this.clientKey = config.auth.clientKey
    this.secretKey = config.auth.secretKey
  }

  public send(mailable: Mailable): Promise<SendResponse> {
    console.log('Sending with Sparkpost', mailable)
    return Promise.resolve({ status: 200 })
  }
}
