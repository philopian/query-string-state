import { Link, useParams } from 'react-router-dom'

export default function ApparelPage() {
  const { type } = useParams()

  if (!type) {
    return (
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-semibold">Apparel Types</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <Link to="/apparel/tops" className="p-4 border rounded-lg hover:bg-gray-200">
              Tops
            </Link>
          </li>
          <li>
            <Link to="/apparel/shoes" className="p-4 border rounded-lg hover:bg-gray-200">
              Shoes
            </Link>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline">{type}</h1>
    </div>
  )
}
