import { authClient } from '@/lib/auth-client'

export async function signIn({ email, password }: { email: string; password: string }) {
  const { data, error } = await authClient.signIn.email({
    email,
    password,
    callbackURL: '/',
  })

  if (error) {
    console.error(error)
    throw new Error('Error when authenticating!')
  }

  return data
}
