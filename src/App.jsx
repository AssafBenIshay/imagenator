import React from 'react'
import './App.css'
import Header from './Header'
import Results from './Results'
import Card from './Card'


function App() {
  const ACCESS_KEY = 'a04iyGi24MbuKU8hjgt4nvV1OO_ntZ-x0PMEfFPPIOU'
  const API_URL = 'https://api.unsplash.com/search/photos/'
  const [keyword, setKeyword] = React.useState('')
  const [results, setResults] = React.useState([])
  const [page, setPage] = React.useState(1)
  
  const get = async () => {
    let url = `${API_URL}?page=${page}&query=${keyword}&client_id=${ACCESS_KEY}` 
    const response = await fetch(url)
    const rawData = await response.json()
    const res = rawData.results

    console.log('res', res)
    
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
