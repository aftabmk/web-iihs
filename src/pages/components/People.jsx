const People = () => {
    let word = 'People'
    const split = word.split('').map(s=>(<span>{s}</span>))
    return ( 
        <div className="component">
            <div className="half">
                {split}
            </div>
            <div className="para">
            Most faculty members at IIHS have graduated from leading Indian and international universities including the Ivy Leagues, and have been educated in more than one discipline, which enables stronger interdisciplinary thinking and problem-solving—a trait that is crucial to teaching-learning. The team at IIHS brims with new ideas, energy, and the passion to work across programmes, domains and disciplines to arrive at comprehensive understanding and innovative solutions to urban issues.
            </div>
        </div>
     );
}
 
export default People;