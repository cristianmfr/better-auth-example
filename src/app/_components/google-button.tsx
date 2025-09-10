'use client'

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'

export function GoogleButton() {
  const googleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: 'google',
    })

    if (error) {
      console.log(error)
    }

    console.log(data)
  }

  return (
    <Button variant='outline' onClick={googleSignIn}>
      Google
    </Button>
  )
}
