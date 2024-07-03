import Search from './Search';
import './header.css'

export default function Header({setKeyword}) {

    return (
        <div className='header'>
            <h1>Imagenator</h1>
            <Search setKeyword={setKeyword}/>
        </div>
    )
}