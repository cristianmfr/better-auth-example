import { authClient } from '@/lib/auth-client'

export async function signUp({
  email,
  name,
  password,
}: {
  email: string
  password: string
  name: string
}) {
  const { data, error } = await authClient.signUp.email({
    email,
    password,
    name,
    callbackURL: '/',
  })

  if (error) {
    console.error(error)
    throw new Error('Error when authenticating!')
  }

  return data
}
