import React, { useState } from 'react';

function NftPreSale(props) {
    const [nftCount, setNftCount] = useState(1)
    return (
        <div id='NftPreSale'>
            <div className="presale_wrapper text-center py-5 px-3 px-md-5">
                <img className='presale_img' style={{ height: '310px' }} src={require('../../Static/img/bit_royale_box.png')} alt="img" />
                <h1 className='mt-n5'>
                    NFT Pre Sale
                </h1>

                <div className="d-flex flex-wrap justify-content-between px-4 px-md-5">
                    <div className="flex_box text_7a">
                        <strong className='font_36 text-uppercase' style={{ fontWeight: '700' }}>
                            bit royale NFT <br />
                            5 busd
                        </strong>
                    </div>
                    <div className="flex_box align-self-end d-none d-sm-block">
                        <button className="btn_frame family_barlow font_36 text_6d">
                            MINT NOW
                        </button>
                    </div>
                    <div className="flex_box">
                        <strong className='font_36 text-uppercase text_7a' style={{ fontWeight: '700' }}>
                            {nftCount + 6}/30000
                        </strong>

                        <br />
                        <div className="d-flex align-items-center font_36 text_7a font-weight-bold">
                            <button onClick={() => setNftCount(nftCount + 1)} className='counter_btn text_7a me-4 '>
                                <i style={{ fontSize: '22px' }} className=" fas fa-plus    "></i>
                            </button>
                            <span className='me-4 font-weight-bold'>{nftCount}</span>
                            <button onClick={() => setNftCount(nftCount - 1)} className='counter_btn text_7a '>
                                <i style={{ fontSize: '22px' }} className=" fas fa-minus    "></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex_box align-self-end d-sm-none mt-4">
                    <button className="btn_frame family_barlow font_36 text_6d">
                        MINT NOW
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NftPreSale;