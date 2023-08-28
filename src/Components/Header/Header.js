import React from 'react'
import BurgerIcon from "./Assests/Group 1690.png"
import "./header.css"
function Header(props) {
    return (
        <>

            <div className="logo">

                <svg xmlns="http://www.w3.org/2000/svg" width="104" height="35" viewBox="0 0 104 35" fill="none">
                    <path d="M0 19.3878L5.23142 18.2722C5.69308 21.3881 7.53972 23.4654 11.3093 23.4654C14.3486 23.4654 16.0795 22.1191 16.0795 20.0033C16.0799 14.464 0.884882 17.7337 0.884882 7.84747C0.884882 2.8851 4.73179 0 11.0407 0C16.1952 0 20.1574 2.61595 20.9267 7.03966L16.0412 8.57845C15.3875 6.15484 13.7716 4.42387 10.7326 4.42387C8.00173 4.42387 6.23211 5.50103 6.23211 7.34747C6.23211 12.656 21.4267 9.15544 21.4264 19.734C21.4264 24.7734 18.0028 28.0046 11.2709 28.0046C5.15442 28.0046 0.692196 25.1195 0 19.3878Z" fill="black" />
                    <path d="M30.3801 21.7339C30.3801 23.8497 31.034 23.9652 33.8807 23.542V27.5426C32.9573 27.8119 31.7264 28.0042 30.1494 28.0042C26.7258 28.0042 25.2255 26.504 25.2255 23.388L25.2259 11.8478H22.4563V7.65482H25.2259V2.19238H30.3804V7.65482H33.5734V11.8479H30.3804L30.3801 21.7339Z" fill="black" />
                    <path d="M48.4611 7.65529H53.8466L45.2678 30.736C43.9985 34.1211 41.6902 34.9289 38.9977 34.9289C37.4591 34.9289 36.2665 34.7366 35.4201 34.5058L35.4971 30.0435C36.3818 30.1974 37.3051 30.3129 38.1897 30.3129C39.998 30.3129 40.6517 29.8127 41.152 28.4664L41.652 27.1584L34.5742 7.65527H40.0367L44.1522 19.965L48.4611 7.65529Z" fill="black" />
                    <path d="M55.3755 27.5812L55.3758 0.422852H60.5304L60.53 27.5812H55.3755Z" fill="black" />
                    <path d="M63.8906 27.5812L63.891 0.422852H69.0455L69.0452 27.5812H63.8906Z" fill="black" />
                    <path d="M84.6225 27.5819C84.3915 27.1973 84.1609 26.6203 83.9686 25.8125C82.8912 27.1203 81.0832 28.0051 78.352 28.0051C74.0051 28.0051 71.3125 25.6585 71.3125 21.5809C71.3128 17.2725 74.4671 16.2339 77.3524 15.7339L82.3146 14.8106C83.3149 14.6182 83.6996 14.4644 83.6996 13.5028C83.6996 12.041 82.7379 11.2717 80.4683 11.2717C77.9677 11.2717 77.0448 12.1948 76.9678 14.3489L71.8516 14.1951C72.2745 9.3482 75.6981 7.23242 80.7378 7.23242C88.3159 7.23242 88.7006 11.964 88.7006 15.5416L88.7002 21.7732C88.7002 23.6967 88.8156 25.3893 89.3155 27.5819L84.6225 27.5819ZM83.6605 19.0422V18.2343C83.2759 18.3882 82.8142 18.5036 82.3143 18.5805L79.1983 19.196C77.5444 19.5421 76.5057 20.1961 76.5057 21.658C76.5057 23.0043 77.5057 23.9276 79.314 23.9276C82.0066 23.9275 83.6605 21.8503 83.6605 19.0422Z" fill="black" />
                    <path d="M104 7.46321V12.1563C103.615 12.1177 102.923 12.0794 102.307 12.0794C98.922 12.0794 97.0371 13.8874 97.0367 18.2726V27.5819H91.8822L91.8826 7.65554H97.0371V9.96364C97.8834 8.57886 99.653 7.23242 102.307 7.23242C102.961 7.23238 103.538 7.30939 104 7.46321Z" fill="black" />
                    <path d="M101.016 26.3999V26.0801H102.119V26.3999H101.734V27.5813H101.401V26.3999H101.016ZM103.548 26.0801H103.999V27.5813H103.666V26.5566L103.274 27.5813H103.046L102.647 26.5566V27.5813H102.314V26.0801H102.778L103.157 27.0265L103.548 26.0801Z" fill="black" />
                </svg>

            </div>

            <nav className='nav-top'>
                <div className='nav-user'>
                    <div className='user-items'>
                        <div className='user-ellispe-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <circle cx="13.374" cy="13.4072" r="13" fill="url(#paint0_linear_594_12639)" />
                                <defs>
                                    <linearGradient id="paint0_linear_594_12639" x1="0.374023" y1="3.424" x2="26.7155" y2="4.01144" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF00FE" />
                                        <stop offset="0.508" stop-color="#F6CE22" />
                                        <stop offset="1" stop-color="#00AAFF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className='user-email'>
                       <p>tmkpd...958</p>
                           
                            {/* <p>{props.usermail}</p> */}
                            <p>Terra53k5900tmkpd...9589204</p>
                        </div>
                     
                        <div className='email-scroll-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                                <path d="M15.1414 0.478294L8.07031 7.54936L0.999245 0.478294" stroke="black" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='nav-menu'>
                    <div className='menu-items'>
                        <div className='menu-text'>
                            <p className='deafult-text clr-w'>MENU</p>
                        </div>

                        <div className='menu-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
                                <circle cx="13.5" cy="14.4072" r="13" stroke="white" />
                                <circle cx="13.5" cy="14.4072" r="6.75" fill="white" />
                            </svg>
                        </div>

<div className='burger-icon'>
    <img src={BurgerIcon} alt="" />
</div>
                        
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Header