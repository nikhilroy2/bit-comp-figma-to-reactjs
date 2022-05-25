import React, { useState } from "react";
import "./Header.css";
import { CountDownStart } from "../../Components/HeaderCountDown/HeaderCountDown";
import { Link } from "react-router-dom";
function Header(props) {
  // toggleBtn action

  const [toggleBtn, setToggleBtn] = useState(false);
  const toggleMemo = React.useMemo(() => {
    return toggleBtn
  }, [toggleBtn])



  // header activation
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      //console.log(true)
      setIsHeaderActive(true)
    } else {
      setIsHeaderActive(false)
    }
  }

  console.log(window.location.pathname)
  const [nftPathName, setNftPathName] = useState(false);

  React.useEffect(() => {
    setNftPathName(window.location.pathname);
  }, [])


  return (
    <header className={isHeaderActive ? 'active_header' : ''}>
      {!(nftPathName === '/buy_nft_investory') && !(nftPathName === '/nft_investory') ?
        <div className="section_wrapper h-100">
          <nav className="d-flex align-items-center h-100 navbar shadow-0 justify-content-between">
            <div className="nav_item">
              <a href="#" className="logo ms-n5">
                <img
                  src={require("../../Static/img/BitCompBlue.png")}
                  alt="logo"
                />
              </a>
            </div>

            <div className="nav_item nav_sale_content ps-5 ms-5 d-none d-lg-block">
              <div className="text-center">
                <strong>Private Sale Start In</strong>
                <div className="sale_start_wrapper">
                  <CountDownStart></CountDownStart>
                </div>
              </div>
            </div>
            <div className="nav_item nav_action d-flex align-items-center">
              <button className="btn_frame family_barlow font_36 text_6d">
                BUY TOKEN
              </button>

              <div className="toggle_btn_wrapper">
                <button
                  type="button"
                  className="btn_toggle"
                  onClick={() => setToggleBtn(!toggleBtn)}
                >
                  <img
                    style={{ width: "36px", height: "26px", objectFit: 'contain' }}
                    src={
                      toggleMemo
                        ? require("../../Static/img/menu_close.png")
                        : require("../../Static/img/menu_bar.png")
                    }
                    alt="img"
                  />
                </button>
              </div>
            </div>
          </nav>
        </div> : <div className="section_wrapper h-100">
          <nav className="d-flex align-items-center h-100 navbar shadow-0 justify-content-between">
            <div className="nav_item">
              <a href="#" className="logo ms-n5">
                <img
                  src={require("../../Static/img/bit_royale.png")}
                  alt="logo"
                />
              </a>
            </div>

            {(nftPathName === '/nft_investory') && (
              <div className="nav_item nav_action_link_wrapper_mobile d-lg-none">

                <Link to="/buy_nft_investory" className={`font_36 text-white  me-2 `} style={{ fontWeight: '700', fontStyle: 'normal' }}>
                  Hero
                </Link>
                <Link to="/nft_investory" className={`font_36 text-white  me-2`} style={{ fontWeight: '700', fontStyle: 'normal' }}>
                  Trainers
                </Link>
                <Link to="/nft_investory" className={`font_36 text-white `} style={{ fontWeight: '700', fontStyle: 'normal' }}>
                  Lands
                </Link>
              </div>
            )}

            <div className="nav_item nav_action_link_wrapper d-none d-lg-block">

              <Link to="/buy_nft_investory" className={`font_36 text_5d text-uppercase me-5 ${nftPathName === '/buy_nft_investory' ? 'active_link' : ''}`} style={{ fontWeight: '700' }}>
                BUY hero
              </Link>
              <Link to="/nft_investory" className={`font_36 text_5d text-uppercase ${nftPathName === '/nft_investory' ? 'active_link' : ''}`} style={{ fontWeight: '700' }}>
                inventory
              </Link>
            </div>

            <div className="nav_item nav_action d-flex align-items-center">
              <div className="user_token_wrapper d-flex align-items-center">
                <img src={require('../../Static/img/bcomp.png')} alt="img" />
                1 BCOMP <br /> 0xAc...807h
              </div>
              <button className="btn_frame family_barlow font_36 text_6d d-none d-lg-block">
                BUY TOKEN
              </button>
            </div>
          </nav>
        </div>
      }

      {/* Mobile Menu */}
      <div className="mobile_nft_menu d-lg-none">
        <div className="section_wrapper ms-0 w-100">
          <div className="nav_item nav_action_link_wrapper d-flex justify-content-between align-items-center w-100">

            <div className="action_wrapper">
              <Link to="/nft_investory" className={`font_36 text_5d text-uppercase ${nftPathName === '/nft_investory' ? 'active_link' : ''}`} style={{ fontWeight: '700' }}>
                inventory
              </Link>

              <Link to="/buy_nft_investory" className={`font_36 text_5d text-uppercase me-5 ${nftPathName === '/buy_nft_investory' ? 'active_link' : ''}`} style={{ fontWeight: '700' }}>
                BUY hero
              </Link>

            </div>
            <div className="action_wrapper">
              <button className="btn_frame family_barlow font_36 text_6d d-block d-lg-none">
                BUY TOKEN
              </button>
            </div>
          </div>
        </div>
      </div>
      {toggleMemo ? <Menu></Menu> : ""}
    </header>
  );
}


export default Header;


const Menu = () => {
  const menu_object = [
    {
      id: 1,
      name: "About us",
      link: "#AboutSection",
    },
    {
      id: 2,
      name: "Gameplay",
      link: "#GameplaySection",
    },
    {
      id: 3,
      name: "Launchpad",
      link: "#LaunchpadSection",
    },
    {
      id: 4,
      name: "NFTs",
      link: "#nfts",
    },
    {
      id: 5,
      name: "How to Earn?",
      link: "#HowToEarn",
    },
    {
      id: 6,
      name: "Tokenomics",
      link: "#TokenomicsSection",
    },
    {
      id: 7,
      name: "Roadmap",
      link: "#Roadmap",
    },
  ];
  const menu_social_object = [
    {
      id: 1,
      icon: (
        <svg
          width={14}
          height={26}
          viewBox="0 0 14 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2217 0.308655L9.92635 0.303368C6.22409 0.303368 3.83153 2.75806 3.83153 6.55734V9.44084H0.518168C0.231854 9.44084 0 9.67296 0 9.95927V14.1371C0 14.4234 0.232118 14.6553 0.518168 14.6553H3.83153V25.1974C3.83153 25.4837 4.06339 25.7155 4.3497 25.7155H8.6727C8.95901 25.7155 9.19087 25.4834 9.19087 25.1974V14.6553H13.065C13.3513 14.6553 13.5831 14.4234 13.5831 14.1371L13.5847 9.95927C13.5847 9.8218 13.53 9.69014 13.433 9.59285C13.3359 9.49556 13.2038 9.44084 13.0663 9.44084H9.19087V6.99646C9.19087 5.82159 9.47084 5.22517 11.0013 5.22517L13.2212 5.22438C13.5073 5.22438 13.7391 4.99226 13.7391 4.70621V0.826823C13.7391 0.541038 13.5075 0.309184 13.2217 0.308655Z"
            fill="#55DFFF"
          />
        </svg>
      ),
      link: "#",
    },
    {
      id: 2,
      icon: (
        <svg
          width={27}
          height={22}
          viewBox="0 0 27 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.8474 2.92092C25.8938 3.34556 24.8706 3.63355 23.7956 3.76212C24.8933 3.10153 25.7335 2.05374 26.1318 0.809053C25.1021 1.4208 23.9656 1.86501 22.7546 2.10581C21.7848 1.06615 20.4054 0.418579 18.8755 0.418579C15.9403 0.418579 13.5604 2.81031 13.5604 5.75848C13.5604 6.17661 13.6073 6.58499 13.698 6.97551C9.28148 6.75257 5.3652 4.62607 2.74409 1.39476C2.28591 2.18227 2.02526 3.09987 2.02526 4.07937C2.02526 5.93257 2.96427 7.56773 4.38898 8.52439C3.51796 8.49512 2.69875 8.25431 1.98157 7.85405V7.92076C1.98157 10.5077 3.81425 12.6668 6.24431 13.1582C5.79908 13.2786 5.3296 13.3453 4.8439 13.3453C4.5007 13.3453 4.1688 13.3111 3.84338 13.246C4.52009 15.3693 6.48231 16.9133 8.80717 16.9557C6.98905 18.3875 4.69658 19.2384 2.20662 19.2384C1.7776 19.2384 1.35502 19.2124 0.938965 19.1652C3.29134 20.6832 6.08408 21.5683 9.08565 21.5683C18.8626 21.5683 24.2069 13.4299 24.2069 6.37189L24.189 5.68041C25.2333 4.93192 26.1366 3.99152 26.8474 2.92092Z"
            fill="#55DFFF"
          />
        </svg>
      ),
      link: "#",
    },
    {
      id: 3,
      icon: (
        <svg
          width={29}
          height={30}
          viewBox="0 0 29 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.8021 7.57237C10.7828 7.57237 7.51305 10.8422 7.51305 14.8614C7.51305 18.8805 10.7828 22.1501 14.8021 22.1501C18.8213 22.1501 22.0911 18.8805 22.0911 14.8614C22.0911 10.8422 18.8213 7.57237 14.8021 7.57237ZM14.8021 19.6401C12.1669 19.6401 10.0229 17.4964 10.0229 14.8612C10.0229 12.2259 12.1668 10.082 14.8021 10.082C17.4374 10.082 19.5813 12.2259 19.5813 14.8612C19.5813 17.4964 17.4372 19.6401 14.8021 19.6401Z"
            fill="#55DFFF"
          />
          <path
            d="M21.0967 5.98298C21.4382 5.63997 21.9132 5.44421 22.3968 5.44421C22.882 5.44421 23.3572 5.63997 23.6985 5.98298C24.0416 6.32432 24.2373 6.79951 24.2373 7.28474C24.2373 7.7683 24.0416 8.2435 23.6985 8.58651C23.3555 8.92784 22.882 9.12528 22.3968 9.12528C21.9132 9.12528 21.438 8.92784 21.0967 8.58651C20.7537 8.2435 20.5562 7.76847 20.5562 7.28474C20.5562 6.79951 20.7535 6.32432 21.0967 5.98298Z"
            fill="#55DFFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.1394 0.717201H8.46443C4.16008 0.717201 0.658203 4.21924 0.658203 8.5236V21.1985C0.658203 25.5031 4.16008 29.0049 8.46443 29.0049H21.1394C25.4441 29.0049 28.9459 25.5029 28.9459 21.1985V8.5236C28.9461 4.21924 25.4441 0.717201 21.1394 0.717201ZM26.4363 21.1985C26.4363 24.1192 24.0602 26.4951 21.1396 26.4951H8.46443C5.544 26.4953 3.16803 24.1192 3.16803 21.1985V8.5236C3.16803 5.60316 5.544 3.22703 8.46443 3.22703H21.1394C24.06 3.22703 26.4361 5.60316 26.4361 8.5236L26.4363 21.1985Z"
            fill="#55DFFF"
          />
        </svg>
      ),
      link: "#",
    },
  ];

  const [menuListActive, setMenuListActive] = useState();

  const menuListActiveHandle = (actionIndex) => {
    setMenuListActive(actionIndex)
  }

  return (
    <menu id="header_menu" className="m-0 p-0 ">
      <div className="section_wrapper d-xxl-flex align-items-center justify-content-between w-100 text-center p-5 p-xxl-0">
        <ul className="menu_list list-unstyled d-xxl-flex p-0">
          {menu_object.map((v) => {
            return (
              <li key={v.id}>
                <a href={v.link} onClick={() => menuListActiveHandle(v.id)} className={menuListActive === v.id ? 'active_action' : ''}>{v.name}</a>
              </li>
            );
          })}
        </ul>

        <ul className="list-unstyled menu_social_list d-flex justify-content-center justify-content-xxl-stretch p-0">
          {menu_social_object.map((v) => {
            return (
              <li
                key={v.id}
                className={v.id === menu_social_object.length ? "" : "me-5"}
              >
                <a href={v.link}>{v.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </menu>
  );
};
