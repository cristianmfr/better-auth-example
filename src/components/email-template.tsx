interface EmailTemplateProps {
  firstName: string
  link: string
}

export function EmailTemplate({ firstName, link }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <p>{link}</p>
    </div>
  )
}
