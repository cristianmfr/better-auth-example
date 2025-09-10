import { SignInForm } from '@/components/sign-in-form'
import { Card, CardContent } from '@/components/ui/card'

export default function SignInPage() {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
      <Card className='w-full max-w-sm'>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  )
}
