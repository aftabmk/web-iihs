const Teaching = () => {
    let word = 'Teaching & Learning'
    const split = word.split('').map(s=>(<span>{s}</span>))
    return ( 
        <div className="component">
            <div className="half">
                {split}
            </div>
            <div className="para">
                <p>
                    India’s urbanisation is the second largest rural-to-urban transition in human history. IIHS, and the proposed IIHS Institution of Eminence (IIHS IOE), are premised on addressing two core challenges that this transition presents:
                </p>
                <ul>
                    the need for new knowledge that can challenge traditional disciplinary boundaries while remaining rooted in Indian realities; and
                </ul>  
                <ul>
                    the need for a new generation of interdisciplinary urban scholars and practitioners who have the right skills and perspectives to tackle the ‘wicked problems’ of the 21st century.
                </ul>  
            </div>
        </div>
     );
}
 
export default Teaching;