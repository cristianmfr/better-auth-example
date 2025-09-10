import { SignOutButton } from './_components/signout-button'

export default function HomePage() {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
      <span className='font-semibold text-lg'>Home</span>
      <SignOutButton />
    </div>
  )
}
