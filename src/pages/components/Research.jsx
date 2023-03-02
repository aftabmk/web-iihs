const Research = () => {
    let word = 'Research'
    const split = word.split('').map(s=>(<span>{s}</span>))
    return ( 
        <div className="component">
            <div className="half">
                {split}
            </div>
            <div className="para">
            The IIHS Research Programme locates itself within two simultaneous global transitions. Globally, cities and regions are being recognised as being central to the agenda of transformation to an equitable, and sustainable world. International policy developments such as the adoption of Goal 11 of the 2015 UN Sustainable Development Goals (SDGs) that focuses on urban settlements, mark this emergence. At the same time, a knowledge transition is needed from the traditional models of disciplinary expertise to new, interdisciplinary ways of thinking that can address the developmental, innovation and technological opportunities of the 21st century—the rural to urban transition chief among them.
            </div>
        </div>
     );
}
 
export default Research;