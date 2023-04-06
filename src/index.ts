import { Mailable, ProviderAdapter } from './adapters/adapter'
import { MailConfig } from './config'
import { SendgridAdapter, isSendgrid } from './adapters/sendgrid'
import { MailgunAdapter, isMailgun } from './adapters/mailgun'
import { SparkpostAdapter, isSparkpost } from './adapters/sparkpost'

class Mail {
  private provider: ProviderAdapter | undefined
  private static instance: Mail

  private constructor() {}

  public static getInstance(): Mail {
    if (!Mail.instance) {
      Mail.instance = new Mail()
    }

    return Mail.instance
  }

  public static init(config: MailConfig): Mail {
    const instance = Mail.getInstance()

    instance.setConfig(config)

    return instance
  }

  private setConfig(config: MailConfig) {
    const instance = Mail.getInstance()

    if (isSendgrid(config)) {
      instance.provider = new SendgridAdapter(config)
    } else if (isMailgun(config)) {
      instance.provider = new MailgunAdapter(config)
    } else if (isSparkpost(config)) {
      instance.provider = new SparkpostAdapter(config)
    } else {
      throw new Error(`Invalid provider: ${config.provider} not supported.`)
    }
  }

  public sendMail(mailable: Mailable) {
    const instance = Mail.getInstance()

    if (!instance.provider) {
      throw new Error('Send failed: no provider configured.')
    }

    return instance.provider.send(mailable)
  }
}

export function sendMail(mailable: Mailable) {
  const instance = Mail.getInstance()

  return instance.sendMail(mailable)
}

export default Mail
