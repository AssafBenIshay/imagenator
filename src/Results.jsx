import './results.css'
import Card from '../src/Card'
import { useEffect, useState } from 'react';

export default function Results({ results, setPage, page }) {
    const [pics, setPics] = useState([])

    useEffect(() => {
        load()
    }, [page])

    function load() {
                const thepics = results.map(res => (
            <Card image={res.urls.small} alt={res.alt_description } key={res.id} />
            
                ))
        
        setPics(last => last.concat(thepics))
    }

    function handleClick() {
        let pageNumber = page
        pageNumber += 1;
        setPage(pageNumber)
    }


    return (
        <div className='results'>
            {pics}
            {results.length?<button className='btn' onClick={handleClick} style={{ borderRadius: '55px' }}>Show More</button>:null}
        </div>
    )
}