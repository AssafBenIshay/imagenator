import './card.css'

export default function Card({image,alt}) {
    return (
        <div className='card'>
            <img 
                src={image}
                alt={alt}
            />
       </div>
    )
}