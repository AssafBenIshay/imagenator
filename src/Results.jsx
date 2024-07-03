import './results.css'
import Card from '../src/Card'
import { useEffect, useState } from 'react';

export default function Results({ results, setPage, page }) {
    const [pics, setPics] = useState([])
    const [scroll,setScrollUp] = useState(false)

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
        setScrollUp(true)
    }

    function scrollUp() {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
            
        });
    }


    return (
        <>
        <div className='results'>
            {pics}
            {results.length?<button className='btn' onClick={handleClick} style={{ borderRadius: '55px' }}>Show More</button>:null}
        </div>
            {scroll && results.length?<button className='btn' onClick={scrollUp} style={{ borderRadius: '55px' }}>^ Scroll back up ^</button>:null}
        </>
    )
}