import { betterAuth } from 'better-auth'
import { magicLink } from 'better-auth/plugins'
import { Pool } from 'pg'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const auth = betterAuth({
  database: new Pool({
    connectionString: 'postgresql://docker:docker@localhost:5432/auth',
    // user: 'docker',
    // password: 'docker',
    // host: 'localhost',
    // port: 5432,
    // database: 'prosspecta',
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, url }) => {
        await resend.emails.send({
          from: 'Solvs <no-reply@solvs.dev>',
          to: email,
          subject: 'Magic Link',
          html: `Click the link to login into your account: ${url}`,
        })
      },
    }),
  ],
})
