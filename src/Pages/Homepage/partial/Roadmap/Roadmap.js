import React from 'react';

function Roadmap(props) {
    const roadmap_object = [
        {
            id: 1,
            name: 'Q-1    2022',
            year_roadmap_list: [
                {
                    id: 1,
                    name: 'Project Concept'
                },
                {
                    id: 2,
                    name: 'First version Website'
                },
                {
                    id: 3,
                    name: 'Start develop Token and NFT Game'
                },
            ]
        },
        {
            id: 2,
            name: 'Q-2    2022',
            year_roadmap_list: [
                {
                    id: 1,
                    name: 'Website v2'
                },
                {
                    id: 2,
                    name: 'Start NFT Sale'
                },
                {
                    id: 3,
                    name: 'Private Sale'
                },
                {
                    id: 4,
                    name: 'Marketing Campaign'
                },
                {
                    id: 5,
                    name: 'IDO/Public Sale'
                },
            ]
        },
        {
            id: 3,
            name: 'Q-3    2022',
            year_roadmap_list: [
                {
                    id: 1,
                    name: 'Beta Test NFT Game'
                },
                {
                    id: 2,
                    name: 'Start NFT Sale'
                },
                {
                    id: 3,
                    name: 'Private Sale'
                },
                {
                    id: 4,
                    name: 'Marketing Campaign'
                },
                {
                    id: 5,
                    name: 'IDO/Public Sale'
                },
            ]
        },
        {
            id: 4,
            name: 'Q-4    2022',
            year_roadmap_list: [
                {
                    id: 1,
                    name: 'Community Events'
                },
                {
                    id: 2,
                    name: 'Launch Mobile version'
                },
                {
                    id: 3,
                    name: 'Monetization of the website and social networks'
                },
                {
                    id: 4,
                    name: 'NFT Marketplace'
                }
            ]
        },
        {
            id: 5,
            name: 'Q-1    2023',
            year_roadmap_list: [
                {
                    id: 1,
                    name: 'New concept Projects for Bit Comp'
                },
                {
                    id: 2,
                    name: 'Launch official Bit Comp Network (Bit Social)'
                },
                {
                    id: 3,
                    name: 'Monetization of the website and social networks'
                },
                {
                    id: 4,
                    name: 'Research Startups for Bit Comp LaunchPad'
                }
            ]
        },
    ]
    return (
        <div id='Roadmap' className='mt-3 mt-md-5'>
            <div className="section_wrapper">
                <div className="section_title mb-5 pb-5">
                    <h2 className="text-center text-white text-uppercase">Roadmap</h2>
                </div>
                <div className="section_body">
                    <div className="row justify-content-center g-4 g-md-5">
                        {
                            roadmap_object.map(v => {
                                return (
                                    <div className="col-md-6 col-lg-4" key={v.id}>
                                        <div className="col_wrapper">
                                            <h4 className='mb-4'>
                                                {v.name}
                                            </h4>
                                            <img className='w-100 d-block my-3' src={require('../../../../Static/img/roadmap_frame.png')} alt="img" />
                                            <ul className="text-white content_list px-5 mx-2">
                                                {v.year_roadmap_list.map(j => {
                                                    return (
                                                        <li className='mb-3' key={j.id}>
                                                            {j.name}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Roadmap;