const CoreConcept = ({image, title, description}) =>{
    return (
        <>
            
                <img src={image} alt=""/>
                <h1>{title}</h1>
                <p>{description}</p>
        
            
        </>
    )
}

export default CoreConcept;