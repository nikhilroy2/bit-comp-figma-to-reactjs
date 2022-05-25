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
            id: 2,
            name: 'Trainers',
            link: '#'
        },
        {
            id: 3,
            name: 'Lands',
            link: '#',


        },
    ]

    const heroes_list_object = [
        {
            id: 1,
            avatar: require('../../Static/img/avatar.png'),
            user_id: '#15687',
            heroes_img: require('../../Static/img/heroes_name.png'),
            heroes_item_1_img: require('../../Static/img/h_img1.png'),
            heroes_item_1_count: 15,
            heroes_item_2_img: require('../../Static/img/h_img2.png'),
            heroes_item_2_count: 15,
            heroes_item_3_img: require('../../Static/img/h_img3.png'),
            heroes_item_3_count: 15,
        },
        {
            id: 2,
            avatar: require('../../Static/img/avatar2.png'),
            user_id: '#15687',
            heroes_img: require('../../Static/img/heroes_name2.png'),
            heroes_item_1_img: require('../../Static/img/h_img1.png'),
            heroes_item_1_count: 15,
            heroes_item_2_img: require('../../Static/img/h_img2.png'),
            heroes_item_2_count: 15,
            heroes_item_3_img: require('../../Static/img/h_img3.png'),
            heroes_item_3_count: 15,
        },
        {
            id: 3,
            avatar: require('../../Static/img/avatar3.png'),
            user_id: '#15687',
            heroes_img: require('../../Static/img/heroes_name3.png'),
            heroes_item_1_img: require('../../Static/img/h_img1.png'),
            heroes_item_1_count: 15,
            heroes_item_2_img: require('../../Static/img/h_img2.png'),
            heroes_item_2_count: 15,
            heroes_item_3_img: require('../../Static/img/h_img3.png'),
            heroes_item_3_count: 15,
        },
        {
            id: 4,
            avatar: require('../../Static/img/avatar4.png'),
            user_id: '#15687',
            heroes_img: require('../../Static/img/heroes_name4.png'),
            heroes_item_1_img: require('../../Static/img/h_img1.png'),
            heroes_item_1_count: 15,
            heroes_item_2_img: require('../../Static/img/h_img2.png'),
            heroes_item_2_count: 15,
            heroes_item_3_img: require('../../Static/img/h_img3.png'),
            heroes_item_3_count: 15,
        },
    ]
    return (
        <div id='NftInvestory'>
            <Header></Header>

            <aside id='nftAside' className='d-none d-lg-block'>
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

            <menu id='nft_menu'>
                <h2 className='mb-4 mb-md-5 text-center text-lg-start'>
                    15 HEROES
                </h2>
                <ul className="list-unstyled heroes_list">
                    {heroes_list_object.map(v => {
                        return (
                            <li key={v.id} className="heroes_list_item d-flex align-items-center px-3 py-2 mb-4">
                                <div className="user_heroes d-flex align-items-center pb-3">
                                    <img src={v.avatar} alt="img" className="avatar me-0 me-lg-5" />
                                    <div className="content d-none d-lg-block">
                                        <strong className='user_id text_7a font-weight-bold'>{v.user_id}</strong>
                                        <br />
                                        <img src={v.heroes_img} alt="img" />
                                    </div>
                                </div>
                                <div className="heroes_counter_wrapper d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between flex-grow-1">
                                    <div className="heroes_item w-100 d-lg-none">
                                        <div className="content d-flex justify-content-between align-items-center">
                                            <strong className='user_id text_7a font-weight-bold'>{v.user_id}</strong>
                                            <br />
                                            <img className='heroes_img' src={v.heroes_img} alt="img" />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center heroes_item">
                                        <img className='me-1 me-lg-4 heroes_item_img' style={{ height: '58px' }} src={v.heroes_item_1_img} alt="img" />
                                        <span className="heroes_counter text_7a font-weight-bold">{v.heroes_item_1_count}</span>
                                    </div>
                                    <div className="d-flex align-items-center heroes_item">
                                        <img className='me-1 me-lg-4 heroes_item_img' style={{ height: '58px' }} src={v.heroes_item_2_img} alt="img" />
                                        <span className="heroes_counter text_7a font-weight-bold">{v.heroes_item_2_count}</span>
                                    </div>
                                    <div className="d-flex align-items-center heroes_item">
                                        <img className='me-1 me-lg-4 heroes_item_img' style={{ height: '58px' }} src={v.heroes_item_3_img} alt="img" />
                                        <span className="heroes_counter text_7a font-weight-bold">{v.heroes_item_3_count}</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })}



                </ul>
            </menu>
        </div>
    );
}

export default NftInvestory;