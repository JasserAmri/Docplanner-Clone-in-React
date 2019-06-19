import * as React from 'react';
import Masonry from 'react-masonry-component';

const tab2 = [

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

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const childElements = this.props.content2.map(function (element) {
            return (<div><li className="image-element-class">
                <img src={element.src} alt={element.alt} />
                <h1>{element.title}</h1>
                <p>{element.par}</p>
            </li>
            </div>
            );
        });

        return (
            <Masonry
                className={'my-gallery-class'} 
                elementType={'ul'} 
                options={masonryOptions} 
                disableImagesLoaded={false} 
                updateOnEachImageLoad={false} 
                imagesLoadedOptions={imagesLoadedOptions} 
            >
                {childElements}
            </Masonry>
        );
    }
}

export default { Gallery, tab2, Masonry };