import React from 'react';

function TokenomicsSection(props) {

    const token_list_object = [
        {
            id: 1,
            icon:
                <svg width={188} height={188} viewBox="0 0 188 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_34_274)">
                        <ellipse cx={94} cy="89.8688" rx={90} ry="89.8688" fill="#08003D" fillOpacity="0.5" shapeRendering="crispEdges" />
                    </g>
                    <g filter="url(#filter1_d_34_274)">
                        <ellipse cx="93.9999" cy="89.8687" rx="74.5189" ry="74.3878" fill="#08003D" fillOpacity="0.7" shapeRendering="crispEdges" />
                    </g>
                    <path d="M34 34C41.8378 25.8043 51.2973 19.0217 61.5676 14.7826C71.8378 10.5435 82.9189 8 94 8" stroke="white" strokeWidth={11} strokeMiterlimit={10} strokeLinecap="round" />
                    <defs>
                        <filter id="filter0_d_34_274" x={0} y={0} width={188} height="187.738" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={2} />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_274" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_274" result="shape" />
                        </filter>
                        <filter id="filter1_d_34_274" x="15.481" y="15.481" width="157.038" height="156.775" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={2} />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_274" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_274" result="shape" />
                        </filter>
                    </defs>
                </svg>,
            percentage: '45%',
            description: 'Play2Earn/Staking'
        },
        {
            id: 2,
            icon:
                <svg width={188} height={188} viewBox="0 0 188 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_34_322)">
                        <ellipse cx={94} cy="89.8688" rx={90} ry="89.8688" fill="#08003D" fillOpacity="0.5" shapeRendering="crispEdges" />
                    </g>
                    <g filter="url(#filter1_d_34_322)">
                        <ellipse cx="93.9999" cy="89.8687" rx="74.5189" ry="74.3878" fill="#08003D" fillOpacity="0.7" shapeRendering="crispEdges" />
                    </g>
                    <path d="M61.5674 14.7826C71.8377 10.5435 82.9187 8 93.9998 8" stroke="white" strokeWidth={11} strokeMiterlimit={10} strokeLinecap="round" />
                    <defs>
                        <filter id="filter0_d_34_322" x={0} y={0} width={188} height="187.738" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={2} />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_322" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_322" result="shape" />
                        </filter>
                        <filter id="filter1_d_34_322" x="15.481" y="15.481" width="157.038" height="156.775" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={2} />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_322" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_322" result="shape" />
                        </filter>
                    </defs>
                </svg>,
            percentage: '23%',
            description: 'Public Sale'
        },
        {
            id: 3,
            icon:
                <svg width={188} height={188} viewBox="0 0 188 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_34_328)">
                        <ellipse cx={94} cy="89.8688" rx={90} ry="89.8688" fill="#08003D" fillOpacity="0.5" shapeRendering="crispEdges" />
                    </g>
                    <g filter="url(#filter1_d_34_328)">
                        <ellipse cx="93.9999" cy="89.8687" rx="74.5189" ry="74.3878" fill="#08003D" fillOpacity="0.7" shapeRendering="crispEdges" />
                    </g>
                    <path d="M94 8C86.0675 8 78.135 9.30341 70.5 11.5992" stroke="white" strokeWidth={11} strokeMiterlimit={10} strokeLinecap="round" />
                    <defs>
                        <filter id="filter0_d_34_328" x={0} y={0} width={188} height="187.738" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={2} />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_328" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_328" result="shape" />
                        </filter>
                        <filter id="filter1_d_34_328" x="15.481" y="15.481" width="157.038" height="156.775" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={2} />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_328" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_328" result="shape" />
                        </filter>
                    </defs>
                </svg>,
            percentage: '15%',
            description: 'Liquidity'
        },

        {
            id: 4,
            icon:
                <svg width={188} height={188} viewBox="0 0 188 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_92_250)">
                        <ellipse cx={94} cy="89.8688" rx={90} ry="89.8688" fill="#08003D" fillOpacity="0.5" shapeRendering="crispEdges" />
                    </g>
                    <g filter="url(#filter1_d_92_250)">
                        <ellipse cx="93.9999" cy="89.8687" rx="74.5189" ry="74.3878" fill="#08003D" fillOpacity="0.7" shapeRendering="crispEdges" />
                    </g>
                    <path d="M94 8C91.3296 8 88.6591 8.14772 86 8.43129" stroke="white" strokeWidth={11} strokeMiterlimit={10} strokeLinecap="round" />
                    <defs>
                        <filter id="filter0_d_92_250" x={0} y={0} width={188} height="187.738" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={2} />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_250" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_250" result="shape" />
                        </filter>
                        <filter id="filter1_d_92_250" x="15.481" y="15.481" width="157.038" height="156.775" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={2} />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_250" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_250" result="shape" />
                        </filter>
                    </defs>
                </svg>,
            percentage: '7%',
            description: 'Private Sale'
        },
        {
            id: 5,
            icon:
                <svg width={188} height={188} viewBox="0 0 188 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_92_250)">
                        <ellipse cx={94} cy="89.8688" rx={90} ry="89.8688" fill="#08003D" fillOpacity="0.5" shapeRendering="crispEdges" />
                    </g>
                    <g filter="url(#filter1_d_92_250)">
                        <ellipse cx="93.9999" cy="89.8687" rx="74.5189" ry="74.3878" fill="#08003D" fillOpacity="0.7" shapeRendering="crispEdges" />
                    </g>
                    <path d="M94 8C91.3296 8 88.6591 8.14772 86 8.43129" stroke="white" strokeWidth={11} strokeMiterlimit={10} strokeLinecap="round" />
                    <defs>
                        <filter id="filter0_d_92_250" x={0} y={0} width={188} height="187.738" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={2} />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_250" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_250" result="shape" />
                        </filter>
                        <filter id="filter1_d_92_250" x="15.481" y="15.481" width="157.038" height="156.775" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={2} />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_250" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_250" result="shape" />
                        </filter>
                    </defs>
                </svg>,
            percentage: '7%',
            description: 'Marketing'
        },
        {
            id: 6,
            icon:
                <svg width={188} height={188} viewBox="0 0 188 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_92_264)">
                        <ellipse cx={94} cy="89.8688" rx={90} ry="89.8688" fill="#08003D" fillOpacity="0.5" shapeRendering="crispEdges" />
                    </g>
                    <g filter="url(#filter1_d_92_264)">
                        <ellipse cx="93.9999" cy="89.8687" rx="74.5189" ry="74.3878" fill="#08003D" fillOpacity="0.7" shapeRendering="crispEdges" />
                    </g>
                    <path d="M94.0002 8C93.2264 8 92.4527 8.0124 91.6792 8.03691" stroke="white" strokeWidth={11} strokeMiterlimit={10} strokeLinecap="round" />
                    <defs>
                        <filter id="filter0_d_92_264" x={0} y={0} width={188} height="187.738" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={2} />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_264" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_264" result="shape" />
                        </filter>
                        <filter id="filter1_d_92_264" x="15.481" y="15.481" width="157.038" height="156.775" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={2} />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_264" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_264" result="shape" />
                        </filter>
                    </defs>
                </svg>,
            percentage: '3%',
            description: 'Development'
        },


    ]
    return (
        <div id='TokenomicsSection' className='position-relative'>
            <div className="section_wrapper">
                <div className="section_title mb-5 pb-5">
                    <h2 className="text-center text-white text-uppercase">Tokenomics?</h2>
                </div>

                <div className="section_body">
                    <div className="row justify-content-center mx-n5 mx-md-0">
                        <div className="col-12 col-md-10">
                            <div className="section_list_box">
                                <ul className="list-unstyled token_list row g-4 p-5">
                                    {token_list_object.map(v => (
                                        <li key={v.id} className="col-6 col-md-4">
                                            <div className="token_circle">
                                                {v.icon}
                                                <h3 className="token_name">
                                                    {v.percentage}
                                                </h3>
                                            </div>
                                            <div className="token_description">
                                                <h4 className='text_7a'>
                                                    {v.description}
                                                </h4>
                                            </div>
                                        </li>

                                    ))}

                                </ul>
                            </div>

                            <div className="btn_control mt-3 mt-md-5 text-center">
                                <a
                                    href="#"
                                    className="btn_frame section_frame_btn me-3 me-md-5"
                                >
                                    details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img className='section_img_outside token_img' src={require('../../../../Static/img/tokenomics.png')} alt="img" />
        </div>
    );
}

export default TokenomicsSection;