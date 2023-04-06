import { MailgunAdapter } from './mailgun'

const config = {
  provider: 'mailgun',
  auth: {
    clientKey: 'key-123',
    secretKey: 'secret-123',
  },
} as const

describe('Mailgun', () => {
  it('can send mail', async () => {
    const mailgun = new MailgunAdapter(config)

    const response = await mailgun.send({
      from: 'danny@example.com',
      to: 'jim@example.com',
      subject: 'subject',
      body: 'Hello',
    })

    expect(response.status).toBe(200)
  })
})
