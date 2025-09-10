'use client'

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'

export function EmailButton() {
  const emailSignIn = async () => {
    const { data, error } = await authClient.signIn.magicLink({
      email: 'cristian@solvs.dev',
    })

    if (error) {
      console.error(error)
    }

    console.log(data)
  }

  return (
    <Button variant='outline' onClick={emailSignIn}>
      Email
    </Button>
  )
}
