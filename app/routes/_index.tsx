import { next as A } from '@automerge/automerge'

export default function Index() {
  const doc = A.from({ message: 'Automerge works' })
  return (
    <div>
      <h1>Hello world</h1>
      <p>{doc.message}</p>
    </div>
  )
}
