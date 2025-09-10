import { betterAuth } from 'better-auth'
import { Pool } from 'pg'

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
  // socialProviders: {
  //   github: {
  //     clientId: process.env.GITHUB_CLIENT_ID as string,
  //     clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
  //   },
  // },
})
