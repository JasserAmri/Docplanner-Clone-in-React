import React, { Component } from 'react';
import { Button } from 'react-bootstrap';





const tab3 = [{
    src: "https://www.docplanner.com/images/warsaw.png",
    city: "Warsaw",
    alt: "Warsaw",
    link: "https://www.docplanner.com/career",
}, {
    src: "https://www.docplanner.com/images/warsaw.png",
    city: "Barcelona",
    alt: "Barcelona",
    link: "https://www.docplanner.com/career",
}, {
    src: "https://www.docplanner.com/images/istanbul.png",
    city: "Istanbul",
    alt: "Istanbul",
    link: "https://www.docplanner.com/career",
}, {
    src: "https://www.docplanner.com/images/rome.png",
    city: "Rome",
    alt: "Rome",
    link: "https://www.docplanner.com/career",
}, {
    src: "https://www.docplanner.com/images/mexico-city.png",
    city: "Mexico",
    alt: "Mexico",
    link: "https://www.docplanner.com/career",
}, {
    src: "https://www.docplanner.com/images/curitiba.png",
    city: "Curitiba",
    alt: "Curitiba",
    link: "https://www.docplanner.com/career",
}
]


class City extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { city } = this.props
        return (<div className="col city-card" >
            <img className="city-img" src={city.src} alt={city.alt} />
            <div className="openings">
            <h4>{city.city}</h4>
            <Button variant='primary' href={city.link}>See Openings</Button>
            </div>

        </div>
        )
    }
}


const Cities = () => {
    return (<div className=' row'>
      
            {tab3.map((el, index) => <City city={el} key={index} />)}
       

    </div>)
}

export default Cities