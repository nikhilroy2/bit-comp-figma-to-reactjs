import React from 'react';

function NFTS(props) {
    return (
        <div id='nfts'>
            <div className="section_wrapper">
                <div className="section_title mb-5 pb-5">
                    <h2 className="text-left text_7a">NFTS</h2>
                </div>
            </div>
            <img className='nfts_img' src={require('../../../../Static/img/nfts.png')} alt="img" />
        </div>
    );
}

export default NFTS;