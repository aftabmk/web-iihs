const About = () => {
    let word = 'About'
    const split = word.split('').map(s=>(<span>{s}</span>))
    return ( 
        <div className="component">
            <div className="half">
                {split} 
            </div>
            <div className="para">
            India’s urbanisation is the second largest rural to urban transition in human history. By the middle of the century, at least 800 million Indians will live in cities and they will constitute more than half of India’s population. This is not just a demographic transition. Urbanisation is fundamentally changing India’s economy, society, culture, natural and built environments as well as politics. Our national development now hinges on urbanisation being handled with wisdom.
            </div>
        </div>
     );
}
 
export default About;