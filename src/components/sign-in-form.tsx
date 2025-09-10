'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import { signIn } from '@/app/sign-in/actions'
import { FormInput } from './form-input'
import { Button } from './ui/button'
import { Form } from './ui/form'

const formSchema = z.object({
  email: z.email(),
  password: z.string(),
})

export function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const handleSignIn = (values: z.infer<typeof formSchema>) => {
    signIn({ ...values })
      .then(data => {
        if (!data) {
          toast.error('Error when sign in')
        } else {
          toast.success('Sign in successfully')
          console.log(data)
        }
      })
      .catch(error => {
        toast.error('Error when sign in - server')
        console.error(error)
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSignIn)} className='space-y-4 w-full'>
        <FormInput
          type='email'
          name='email'
          control={form.control}
          label='Email'
          placeholder='acme@example.com'
        />
        <FormInput
          name='password'
          control={form.control}
          label='Password'
          placeholder='**************'
        />
        <Button className='w-full'>Sign in</Button>
      </form>
    </Form>
  )
}
