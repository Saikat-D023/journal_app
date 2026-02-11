import './App.css'
import { useFetchRes } from '../hooks/useFetchRes'

function App() {
  const { data, error, isFetching, isLoading } = useFetchRes();
  if (isLoading || isFetching) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <>
      <div>
        <div>
          <form>
            <input type="text" placeholder='title' />
            <input type="text" placeholder='content' />
            <input type="text" placeholder='mood' />
            <input type="text" placeholder='summary' />
            <button type='submit'
              onClick={handleSubmit}>Add Journal</button>
          </form>
        </div>

        <h2>The journal datas are</h2>
        {data?.data.map((item) => {
          return (
            <>
              <h3>Title: {item.title}</h3>
              <p>Content: {item.content}</p>
              <p>Mood: {item.mood}</p>
              <p>Summary: {item.summary}</p>
            </>
          )
        })}
      </div>
    </>
  )
}
export default App
