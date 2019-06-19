import React, { Component } from 'react';



class Stat extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { stat } = this.props
        return (<div className="col stat-card" >
            <img className="stat-img" src={stat.src} alt={stat.alt} />
            <h1>{stat.title}</h1>
            <p>{stat.par}</p>
        </div>
        )
    }
}
const Stats = () => {
    return (<div className="row d-flex justify-content-around" >
        <div className="col-4 side-stat">
            <h1>The world's biggest healthcare platform</h1>
            <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
        </div>
        <div className="col-4" id="stat-card">
            {tab1.map((element, i) => <Stat stat={element} key={i} />)}
        </div>
    </div>)
}

const tab1 = [

    {
        src: "https://www.docplanner.com/img/flag.png",
        alt: "flag",
        title: "Leader in 10 countries",
        par: "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
    }
    , {
        src: "https://www.docplanner.com/img/visits.png",
        alt: "booking",
        title: "1.5 million appointments",
        par: "booked last month"
    }
    , {
        src: "https://www.docplanner.com/img/patients.png",
        alt: "patients",
        title: "30 million unique patients",
        par: "visit us every month"
    }
    , {
        src: "https://www.docplanner.com/img/doctors.png",
        alt: "doctors",
        title: "2 million active doctors",
        par: "trust in our solutions"
    }

]


export  default  Stats 