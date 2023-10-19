import { useParams } from 'react-router-dom'

export default function ShoesPage() {
  const { type } = useParams()

  return (
    <>
      <h1 className="text-3xl font-bold underline">{type}</h1>
    </>
  )
}
