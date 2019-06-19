import React, { Component } from 'react';
import Domain from './domain-switcher';
import marketplace from './marketplace.png';
import saas from './saas.png';


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { item } = this.props
        return (<div className='col' style={{backgroundColor:item.color}}>
            
                <div >
                    {item.title}
            
                <h1>{item.par}</h1>
                {item.bool ? <Domain /> : ""}
            </div>
            {item.bool ? <img className='audience' src={marketplace} alt={item.alt} /> : <img className='audience' src={saas} alt={item.alt} />}
            
        </div>);
    }
}

export default Item;