const BookCard = ({title, author, image})=>{
    return(
        <div>
            <h3>{title}</h3>
            <p>{author}</p>
            <img src={image} alt='Capa:Fundação'/>
        </div>
    )
}

export default BookCard