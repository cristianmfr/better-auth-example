import { SignUpForm } from '@/components/sign-up-form'
import { Card, CardContent } from '@/components/ui/card'

export default function SignUpPage() {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
      <Card className='w-full max-w-sm'>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  )
}
