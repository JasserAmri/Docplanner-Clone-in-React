import React from 'react';
import logo from './logo.jpg';


const MainSection = () => {
    return (
        <div>
            <div className='Main'>
                <div><img id='logo-header' src={logo} alt='logo' /></div>
                <h1>Making the healthcare experience more human</h1>
            </div>
            <div className='row justify-content-around'>
                <div className="col " >
                    <p className="lead">We want patients to find the perfect doctor and book an<br />
                        appointment in the most easy way.The patient journey should<br />
                        be enjoyable, and that's why we are always next to them: to help<br />
                        them find the best possible care. Anytime, anywhere.
                        </p>
                </div>
                <div className="col " >
                    <p className="lead">We also help doctors to better manage their practice and build<br />
                        their online reputation. With our integrated end-to-end solution,<br />
                        doctors are able not only to improve their online presence, <br />
                        but also to devote their time to what really matters: their patients.
                        </p>
                </div>
            </div>
        </div>
    );
}
export default MainSection
