import api from "../../data/api.json";
const Team = () => {
  // console.time('f')
  const data = api.data;
  const reduce = data.reduce(
    (acc, cur, i) => {
      if (i < 160) {
        acc.first.push(cur);
      } else {
        acc.second.push(cur);
      }
      return acc;
    },
    { first: [], second: [] }
  );
  // console.timeEnd('f')
  // console.time('start')
  // let  [list,chunkSize] = [data, 106];
  // list = [...Array(Math.ceil(list.length / chunkSize))].map(_ => list.splice(0,chunkSize))
  console.log(reduce);
  // console.timeEnd('start')

  console.log(reduce);
  return (
    <div className="container wrap team">
      <div style={{ position: "sticky", top: "10px"}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <h2 style={{ color: "white" }}>Team</h2>
        </div>
        <div style={{ padding: 0, margin: 0 }} className="marqueeContainer">
          <div className="team marquee">
            {reduce.first.map((el) => (
              <div className="team glass social">
                <img src={el.img} alt="img" />
                <h4>{el.name}</h4>
                <p>{el.job.substr(0, 20)}</p>
              </div>
            ))}
          </div>
          <div className="marquee team">
            {reduce.first.map((el) => (
              <div className="glass social team">
                <img src={el.img} alt="img" />
                <h4>{el.name}</h4>
                <p>{el.job.substr(0, 10)}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: 0, margin: 0 }} className="marqueeContainer">
          <div className="team marquee">
            {reduce.second.map((el) => (
              <div className="team glass social">
                <img src={el.img} alt="img" />
                <h4>{el.name}</h4>
                <p>{el.job.substr(0, 20)}</p>
              </div>
            ))}
          </div>
          <div className="marquee team">
            {reduce.second.map((el) => (
              <div className="glass social team">
                <img src={el.img} alt="img" />
                <h4>{el.name}</h4>
                <p>{el.job.substr(0, 10)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
