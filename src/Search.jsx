import './search.css'

export default function Search({setKeyword}) {

    function handleKey(e) {
        let word = ''
        word = String(e.target.value)
        if (e.code === 'Enter') {
            setKeyword(word)
        }
    }

    return (
        <div className='search'>
            <input type='text' className='search-input' onKeyDown={handleKey}></input>
        </div>
    )
}