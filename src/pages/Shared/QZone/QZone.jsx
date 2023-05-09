import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary mt-3 p-2 text-center'>
            <h2 className='text-white'>Q-Zone</h2>
            <div>
                <img className='img-fluid' src={qzone1} alt="" />
                <img className='img-fluid' src={qzone3} alt="" />
                <img className='img-fluid' src={qzone2} alt="" />
            </div>

        </div>
    );
};

export default QZone;