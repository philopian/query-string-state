import { useSearchParams } from 'react-router-dom'

export default function TopsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const size = searchParams.get('size')
  const color = searchParams.get('color')

  const handleSizeClick = (size: string) =>
    setSearchParams({ ...Object.fromEntries(searchParams), size })
  const handleColorClick = (color: string) =>
    setSearchParams({ ...Object.fromEntries(searchParams), color })
  const handleClearAll = () => setSearchParams({})

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline">TOPS</h1>
      <div className="flex m-2 space-x-4">
        <SizeGroup {...{ size, handleSizeClick }} />
      </div>
      <div className="flex m-2 space-x-4">
        <ColorGroup {...{ color, handleColorClick }} />
      </div>

      <br />
      <br />
      <button
        className="px-4 py-2 font-bold text-white bg-black rounded-full cursor-pointer hover:bg-gray-700"
        onClick={handleClearAll}
      >
        Clear All
      </button>
    </div>
  )
}

function SizeGroup({ size, handleSizeClick }: any) {
  return (
    <div className="flex space-x-4">
      <button
        className={`${
          size === 'large' ? 'bg-black hover:bg-gray-700' : 'bg-gray-300'
        } text-white font-bold py-2 px-4 rounded-full cursor-pointer`}
        onClick={() => handleSizeClick('large')}
      >
        Large
      </button>

      <button
        className={`${
          size === 'medium' ? 'bg-black hover:bg-gray-700' : 'bg-gray-300'
        } text-white font-bold py-2 px-4 rounded-full cursor-pointer`}
        onClick={() => handleSizeClick('medium')}
      >
        Medium
      </button>

      <button
        className={`${
          size === 'small' ? 'bg-black hover:bg-gray-700' : 'bg-gray-300'
        } text-white font-bold py-2 px-4 rounded-full cursor-pointer`}
        onClick={() => handleSizeClick('small')}
      >
        Small
      </button>
    </div>
  )
}

function ColorGroup({ color, handleColorClick }: any) {
  return (
    <div className="flex space-x-4">
      <button
        className={`${
          color === 'blue' ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-300'
        } text-white font-bold py-2 px-4 rounded-full cursor-pointer`}
        onClick={() => handleColorClick('blue')}
      >
        blue
      </button>

      <button
        className={`${
          color === 'green' ? 'bg-green-500 hover:bg-green-700' : 'bg-gray-300'
        } text-white font-bold py-2 px-4 rounded-full cursor-pointer`}
        onClick={() => handleColorClick('green')}
      >
        green
      </button>

      <button
        className={`${
          color === 'red' ? 'bg-red-500 hover:bg-red-700' : 'bg-gray-300'
        } text-white font-bold py-2 px-4 rounded-full cursor-pointer`}
        onClick={() => handleColorClick('red')}
      >
        red
      </button>
    </div>
  )
}
