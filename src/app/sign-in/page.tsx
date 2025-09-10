import { SignInForm } from '@/components/sign-in-form'
import { Card, CardContent } from '@/components/ui/card'
import { EmailButton } from '../_components/email-button'
import { GoogleButton } from '../_components/google-button'

export default function SignInPage() {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
      <Card className='w-full max-w-sm'>
        <CardContent>
          <div className='flex flex-col w-full gap-4'>
            <SignInForm />
            <GoogleButton />
            <EmailButton />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
