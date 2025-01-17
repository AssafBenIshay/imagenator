import React from 'react'
import './App.css'
import Header from './Header'
import Results from './Results'


function App() {
  const [keyword, setKeyword] = React.useState('')
  const [results, setResults] = React.useState([])
  const [page, setPage] = React.useState(1)

  
  const get = async () => {
    let url = `${'https://api.unsplash.com/search/photos/'}?page=${page}&query=${keyword}&client_id=${import.meta.env.VITE_REACT_APP_API_KEY}` 
    const response = await fetch(url)
    const rawData = await response.json()
    const res = rawData.results

    
    setResults(res)
  }

  React.useEffect(() => {
    if (keyword.length > 0) {
      get()
    }
  },[keyword, page])

  return (
    <div className='App'>
      <Header setKeyword={ setKeyword}/>
      <Results results={results} setPage={setPage} page={page } />
      
    </div>
  )
}

export default App
