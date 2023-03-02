const Event = () => {
    let word = 'Event'
    const split = word.split('').map(s=>(<span>{s}</span>))
    return ( 
        <div className="component">
            <div className="half">
                {split}
            </div>
            <div className="para">
            IIHS conducts lectures, film screenings, workshops, exhibitions, theatre and music performances, book launches, conferences and community engagement with schools. These events are designed to engage with people from all age groups with diverse interests, around urban concerns.
            </div>
        </div>
     );
}
 
export default Event;