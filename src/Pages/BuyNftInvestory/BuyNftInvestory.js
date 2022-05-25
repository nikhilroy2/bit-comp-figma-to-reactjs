import React from 'react';
import './BuyNftInvestory.css';
import Header from '../../Layout/Header/Header';
import NftPreSale from '../../Components/NftPreSale/NftPreSale';
function BuyNftInvestory(props) {
    return (
        <div id='BuyNftInvestory'>
            <Header></Header>
            
            <menu>
                <NftPreSale></NftPreSale>
            </menu>
        </div>
    );
}
export default BuyNftInvestory;