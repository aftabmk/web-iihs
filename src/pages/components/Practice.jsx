const Practice = () => {
    let word = 'Practice'
    const split = word.split('').map(s=>(<span>{s}</span>))
    return ( 
        <div className="component">
            <div className="half">
                {split}
            </div>
            <div className="para">
            The IIHS Practice Programme provides advisory services to national and state governments, public, parastatal and municipal agencies, international development agencies and private firms at the interface of human settlements and urbanisation. Practice forms a core part of the IIHS mission of contributing towards sustainable urban transformation. Practitioners also teach learners—both in theory classes and in practica. Learners also have opportunities to work on IIHS Practice projects, thereby getting exposure to a variety of work in real contexts. This enables synergies between teaching, research and practice.
            </div>
        </div>
     );
}
 
export default Practice;