import React from 'react';
import './Footer.css';
function Footer(props) {
    return (
        <footer>
            <div className="section_wrapper">
                <div className="row">
                    <div className="col-6 col-lg-5 order-1">
                        <a href="#">
                            <img src={require('../../Static/img/BitCompBlueBlack.png')} alt="img" className="logo" />
                        </a>

                        <ul className="list-unstyled">
                            <li>
                                <div className="text_strong mx-4">
                                    bit comp <br />
                                    All Rights Reserved 2022
                                </div>
                            </li>
                        </ul>

                        <p className="copyright_text d-none d-lg-block">
                            © 2022 bit comp. All right reserved.
                        </p>
                    </div>
                    <div className="col-6 col-lg-2 order-3 order-lg-2">
                        <h3 className="footer_title">
                            ABOUT US
                        </h3>

                        <ul className="list-unstyled">
                            <li>
                                <a className='list_action' href="#">
                                    Bit Comp Whitepaper
                                </a>
                            </li>

                            <li>
                                <a className='list_action' href="#">
                                    Bit Royale Whitepaper
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 ps-5 order-4 order-lg-3">
                        <h3 className="footer_title">
                            INFO
                        </h3>

                        <ul className="list-unstyled">
                            <li>
                                <a className='list_action' href="#">
                                    GAMEPLAY
                                </a>
                            </li>
                            <li>
                                <a className='list_action' href="#">
                                    LAUNCHPAD
                                </a>
                            </li>
                            <li>
                                <a className='list_action' href="#">
                                    NFTs
                                </a>
                            </li>
                            <li>
                                <a className='list_action' href="#">
                                    TOKENOMICS
                                </a>
                            </li>
                            <li>
                                <a className='list_action' href="#">
                                    ROADMAP
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-3 order-2 order-lg-4">
                        <h3 className="footer_title text-end d-none d-lg-block">
                            JOIN OUR COMMUNITY
                        </h3>
                        <SocialAction></SocialAction>

                        <h3 className="footer_title text-end d-lg-none mt-3">
                            JOIN OUR COMMUNITY
                        </h3>
                        <div className="btn_action text-end d-none d-lg-block">
                            <a href="#" className='d-block mb-3'>
                                <img src={require('../../Static/img/footer_google_play.png')} alt="img" />
                            </a>
                            <a href="#">
                                <img src={require('../../Static/img/footer_google_play.png')} alt="img" />
                            </a>
                        </div>
                    </div>



                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="mt-3 text-end d-flex justify-content-center d-lg-none">
                            <a href="#" className='d-block mb-3 me-4'>
                                <img src={require('../../Static/img/footer_google_play.png')} alt="img" />
                            </a>
                            <a href="#">
                                <img src={require('../../Static/img/footer_google_play.png')} alt="img" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright_wrapper py-4 pt-5 mt-4 d-lg-none">
                <div className="section_wrapper">
                    <p>© 2022 bit comp. All right reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


const SocialAction = () => {
    const action_object = [
        {
            id: 1,
            icon: <svg width={27} height={23} viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27 1.68441C26.8734 2.267 26.7467 2.8496 26.6254 3.43759C25.9816 6.5124 25.3432 9.58181 24.7047 12.6566C24.0979 15.5696 23.4911 18.488 22.8738 21.401C22.7999 21.7462 22.6891 22.0968 22.5308 22.4097C22.267 22.9168 21.7973 23.111 21.2591 22.9384C20.9689 22.8466 20.6787 22.7226 20.436 22.5392C18.4837 21.0989 16.5472 19.6424 14.6107 18.1805C14.4419 18.051 14.3469 18.0564 14.1939 18.2075C13.223 19.1731 12.2363 20.1225 11.2654 21.0827C10.9699 21.374 10.6375 21.5628 10.1731 21.5736C10.1995 21.1043 10.2206 20.6403 10.2523 20.1818C10.3156 19.2863 10.3842 18.3909 10.4475 17.4954C10.5003 16.7618 10.5478 16.0281 10.6111 15.2945C10.6164 15.2082 10.685 15.1165 10.7483 15.0571C12.6215 13.3309 14.4999 11.6047 16.3783 9.8839C18.2832 8.13611 20.188 6.38833 22.0876 4.64054C22.1456 4.5866 22.2036 4.52726 22.2458 4.45713C22.3619 4.26833 22.2828 4.08492 22.0717 4.11729C21.8132 4.14965 21.5335 4.21978 21.3119 4.35464C19.8345 5.27708 18.3782 6.2265 16.9113 7.15973C13.719 9.20421 10.5267 11.2433 7.33438 13.2932C7.16025 13.4064 7.02306 13.4118 6.82783 13.3471C4.89134 12.7214 2.94958 12.1118 1.01309 11.4968C0.596248 11.362 0.211061 11.184 0 10.7524C0 10.6607 0 10.5744 0 10.4827C0.142466 10.3155 0.253273 10.1051 0.427399 9.99179C0.733438 9.7868 1.06058 9.60339 1.39828 9.47393C8.73266 6.58253 16.0829 3.70192 23.4331 0.826699C24.1137 0.562374 24.7839 0.27647 25.4804 0.0606943C26.2085 -0.160476 26.7889 0.23871 26.942 0.99932C26.9525 1.04787 26.9789 1.09642 27 1.14497C27 1.32298 27 1.50639 27 1.68441Z" fill="#13004A" />
            </svg>,
            link: '#'
        },
        {
            id: 2,
            icon: <svg width={27} height={22} viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.8474 3.20352C25.8938 3.62815 24.8706 3.91614 23.7956 4.04471C24.8933 3.38412 25.7335 2.33633 26.1318 1.09165C25.1021 1.70339 23.9656 2.1476 22.7546 2.38841C21.7848 1.34874 20.4054 0.701172 18.8755 0.701172C15.9403 0.701172 13.5604 3.0929 13.5604 6.04107C13.5604 6.4592 13.6073 6.86758 13.698 7.2581C9.28148 7.03517 5.3652 4.90866 2.74409 1.67736C2.28591 2.46486 2.02526 3.38246 2.02526 4.36196C2.02526 6.21516 2.96427 7.85032 4.38898 8.80698C3.51796 8.77771 2.69875 8.53691 1.98157 8.13665V8.20336C1.98157 10.7903 3.81425 12.9494 6.24431 13.4408C5.79908 13.5612 5.3296 13.6279 4.8439 13.6279C4.5007 13.6279 4.1688 13.5937 3.84338 13.5286C4.52009 15.6519 6.48231 17.1959 8.80717 17.2383C6.98905 18.67 4.69658 19.521 2.20662 19.521C1.7776 19.521 1.35502 19.4949 0.938965 19.4478C3.29134 20.9658 6.08408 21.8509 9.08565 21.8509C18.8626 21.8509 24.2069 13.7125 24.2069 6.65448L24.189 5.963C25.2333 5.21451 26.1366 4.27411 26.8474 3.20352Z" fill="#13004A" />
            </svg>,
            link: '#'
        },
        {
            id: 3,
            icon:
                <svg width={29} height={29} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.8021 6.85517C10.7828 6.85517 7.51305 10.125 7.51305 14.1442C7.51305 18.1633 10.7828 21.4329 14.8021 21.4329C18.8213 21.4329 22.0911 18.1633 22.0911 14.1442C22.0911 10.125 18.8213 6.85517 14.8021 6.85517ZM14.8021 18.9229C12.1669 18.9229 10.0229 16.7792 10.0229 14.144C10.0229 11.5087 12.1668 9.36483 14.8021 9.36483C17.4374 9.36483 19.5813 11.5087 19.5813 14.144C19.5813 16.7792 17.4372 18.9229 14.8021 18.9229Z" fill="#13004A" />
                    <path d="M21.0967 5.26578C21.4382 4.92277 21.9132 4.727 22.3968 4.727C22.882 4.727 23.3572 4.92277 23.6985 5.26578C24.0416 5.60712 24.2373 6.08231 24.2373 6.56754C24.2373 7.0511 24.0416 7.5263 23.6985 7.86931C23.3555 8.21064 22.882 8.40808 22.3968 8.40808C21.9132 8.40808 21.438 8.21064 21.0967 7.86931C20.7537 7.5263 20.5562 7.05127 20.5562 6.56754C20.5562 6.08231 20.7535 5.60712 21.0967 5.26578Z" fill="#13004A" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.1394 0H8.46443C4.16008 0 0.658203 3.50204 0.658203 7.80639V20.4813C0.658203 24.7859 4.16008 28.2877 8.46443 28.2877H21.1394C25.4441 28.2877 28.9459 24.7857 28.9459 20.4813V7.80639C28.9461 3.50204 25.4441 0 21.1394 0ZM26.4363 20.4813C26.4363 23.402 24.0602 25.7779 21.1396 25.7779H8.46443C5.544 25.7781 3.16803 23.402 3.16803 20.4813V7.80639C3.16803 4.88596 5.544 2.50983 8.46443 2.50983H21.1394C24.06 2.50983 26.4361 4.88596 26.4361 7.80639L26.4363 20.4813Z" fill="#13004A" />
                </svg>,
            link: '#'
        },
    ]
    return (
        <div className="social_action_list d-flex align-items-center justify-content-end">
            {action_object.map(v => {
                return (
                    <a href={v.link} key={v.id}>
                        {v.icon}
                    </a>
                )
            })}
        </div>
    )
}