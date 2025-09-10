'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import { signUp } from '@/app/sign-up/actions'
import { FormInput } from './form-input'
import { Button } from './ui/button'
import { Form } from './ui/form'

const formSchema = z.object({
  email: z.email(),
  name: z.string(),
  password: z.string(),
})

export function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const handleSignUp = (values: z.infer<typeof formSchema>) => {
    signUp({ ...values })
      .then(data => {
        if (!data) {
          toast.error('Error when sign up')
        } else {
          toast.success('Sign up successfully')
          console.log(data)
        }
      })
      .catch(error => {
        toast.error('Error when sign up - server')
        console.error(error)
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSignUp)} className='space-y-4 w-full'>
        <FormInput name='name' control={form.control} label='Name' placeholder='John Doe' />
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
        <Button type='submit' className='w-full'>
          Entrar
        </Button>
      </form>
    </Form>
  )
}
