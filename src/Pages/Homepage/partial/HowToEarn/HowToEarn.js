import React from 'react';

function HowToEarn(props) {
    const card_object = [
        {
            id: 1,
            title: 'Play 2 Earn',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,'
        }
        ,
        {
            id: 2,
            title: 'Staking',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,'
        },
        {
            id: 3,
            title: 'New tokens',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,'
        }
    ]
    return (
        <div id='HowToEarn'>
            <div className="section_wrapper">
                <div className="section_title mb-5 pb-5">
                    <h2 className="text-left text-white">HOW TO EARN?</h2>
                </div>

                <div className="section_body">
                    <div className="row g-4 g-md-5">
                        {card_object.map(v => {
                            return (
                                <div className="col-md-6 col-xl-4" key={v.id}>
                                    <div className="col_wrapper">
                                        <div className="circle_header">
                                            <h3 className='text_f1'>{v.title}</h3>
                                        </div>
                                        <p className="section_pera text-white text-center">
                                            {v.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowToEarn;