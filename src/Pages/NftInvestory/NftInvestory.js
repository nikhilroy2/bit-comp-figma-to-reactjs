import React from 'react';
import './NftInvestory.css';
import Header from '../../Layout/Header/Header';

function NftInvestory(props) {
    const aside_object = [
        {
            id: 1,
            name: 'Hero',
            link: '#'
        },
        {
            id: 1,
            name: 'Trainers',
            link: '#'
        },
        {
            id: 1,
            name: 'Lands',
            link: '#'
        },
    ]
    return (
        <div id='NftInvestory'>
            <Header></Header>

            <aside id='nftAside'>
                <ul className="list-unstyled">
                    {aside_object.map(v => {
                        return (
                            <li key={v.id}>
                                <a href={v.link}>
                                    {v.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </aside>

            <menu>

            </menu>
        </div>
    );
}

export default NftInvestory;