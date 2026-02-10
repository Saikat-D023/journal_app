import './App.css'
import { useFetchRes } from '../hooks/useFetchRes'

function App() {
  const { data, error, isFetching, isLoading } = useFetchRes();
  if(isLoading || isFetching) return <div>Loading...</div>
  if(error) return <div>{error.message}</div>
  return (
    <>
      <div>
        <h2>testing the server here:</h2>
        <p>{data?.data.message}</p>
      </div>
    </>
  )
}

export default App
