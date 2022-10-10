import React, { useEffect } from 'react'
import "./aboutPage.css"
import {FaSearch} from "react-icons/fa"
import logo1 from "./logo-1.png"
import {VscLocation} from "react-icons/vsc"
import {GiSmartphone} from "react-icons/gi"
import {AiOutlineMail} from "react-icons/ai"
import image22 from "./image22.png"
import image23 from "./image23.png"
import {BsFillForwardFill} from "react-icons/bs"
import image12 from "./image12.png"
import image13 from "./image13.png"
import image14 from "./image14.png"
// import {Link} from "react-router-dom"
import {BsPerson} from "react-icons/bs"
import {BiShoppingBag} from "react-icons/bi"
import image19 from "./image19.png"
import { FaFacebookF } from 'react-icons/fa'
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
// import {GiHamburgerMenu} from "react-icons/gi"
import {useNavigate} from 'react-router-dom'

function AboutPage(){
    const navigate = useNavigate()

    const homePage=()=>{
        navigate('/')
    }

    const servicePage = () =>{
        navigate('/servicePage')
    }

    const projectsPage = () =>{
        navigate('/projectsPage')
    }

    const contactUsPage = () =>{
        navigate('/servicePage')
    }

    useEffect (() =>{
        const callback = function(entries){
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add("aboutatImgAnimate")
                }
                else{
                    entry.target.classList.remove("aboutatImgAnimate")
                }
            })
        }

        const observer = new IntersectionObserver(callback);

        const targets = document.querySelectorAll(".aboutatImg");
        targets.forEach(target =>{
            observer.observe(target)
        }) 
        const callbac = function(entries){
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add("opaque")
                }
                else{
                    entry.target.classList.remove("opaque")
                }
            })
        }

        const observe = new IntersectionObserver(callbac);

        const target = (document.querySelectorAll(".testing")
        );
        target.forEach(target =>{
            observe.observe(target)
        }) 
    })

        return(
            <div>
                <div className="aboutheadTop testing">
                    <div className="aboutheadTopText"><p className="aboutheadTopTextPara">WE HAVE MORE THAN 25 YEARS OF EXPERIENCES</p></div>
                    <p className="aboutnav1">SITEMAP&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                    <p className="aboutnav2">&nbsp;&nbsp;&nbsp;&nbsp;QUICK LINKS&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                    <p className="aboutnav3">&nbsp;&nbsp;&nbsp;&nbsp;SUPPORT&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                    <div className="aboutnav4">&nbsp;&nbsp;&nbsp;&nbsp;<FaSearch style={{marginBottom:"0px"}} />&nbsp;&nbsp;&nbsp;&nbsp;</div>
                </div>
                <div className="aboutheadTop2 testing">
                    <img alt="" className="aboutlogo1" src={logo1} />
                    <div className="aboutlogo2Box testing">
                        <VscLocation className="aboutlogo" style={{opacity:"0.5"}} />
                        <p className="aboutlogoText"><span className="aboutlogoText1">FIND US</span><br/><span className="aboutlogoText2">22B, LONDON</span></p>
                    </div>
                    <div className="aboutlogo3Box testing">
                        <GiSmartphone className="aboutlogo" style={{opacity:"0.5"}} />
                        <p className="aboutlogoText"><span className="aboutlogoText1">CALL US TODAY</span><br/><span className="aboutlogoText2">+000-2415-145</span></p>
                    </div>
                    <div className="aboutlogo4Box testing">
                        <AiOutlineMail className="aboutlogo" style={{opacity:"0.5"}} />
                        <p className="aboutlogoText"><span className="aboutlogoText1">EMAIL US NOW</span><br/><span className="aboutlogoText2">SITENAME@EMAIL.COM</span></p>
                    </div>
                </div>
                <div className="aboutNavContainer testing">
                    <div className="aboutheadTop3 testing">
                        <div className="aboutheadTop31 aboutht3" onClick={homePage} ><p className="aboutnavText1 aboutnavText">HOME</p></div>
                        <div className="aboutheadTop32 aboutht3"><p className="aboutnavText2 aboutnavText">ABOUT</p></div>
                        <div className="aboutheadTop33 aboutht3" onClick={servicePage} ><p className="aboutnavText3 aboutnavText">SERVICES</p></div>
                        <div className="aboutheadTop34 aboutht3" onClick={projectsPage} ><p className="aboutnavText4 aboutnavText">PROJECTS</p></div>
                        <div className="aboutheadTop35 aboutht3"><p className="aboutnavText5 aboutnavText">BLOG</p></div>
                        <div className="aboutheadTop36 aboutht3" onClick={contactUsPage} ><p className="aboutnavText6 aboutnavText">CONTACTS</p></div>
                        <div className="aboutheadTop37"><p className="aboutnavText7">INQUERY TODAY</p></div>
                    </div>
                    <p className="aboutUs testing">ABOUT US</p>
                    <p className="aboutUsInfo testing">
                        Claritas est etiam processus dynamicus, qui sequitur<br/>
                        mutationem consuetudium lectorum.
                    </p>
                </div>
                <div className="additionalInfoBox testing">
                    <div className="image22Box testing">
                        <img alt="" src={image22} className="image22"/>
                    </div>
                    <img alt="" src={image22} className="image222 testing" />
                    <div className="image22TextInfo testing">
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                        consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                        et iusto odio dignissim qui blandit praesent uptatum zzril delenit augue duis
                        dolore te feugait nulla facilisi.<br/><br/>
                        Claritas est etiam processus dynamicus, qui sequitur mutationem
                        consuetudium lectorum. Mirum est notare quam littera gothica nunc putamus
                        parum claram, anteposuerit litterarum formas humanitatis per seacula quarta
                        decima et quinta decima.
                    </div>
                </div>
                <div className="allInfoBox testing">
                    <div className="infosBox testing">
                        <div className="whoWeAre testing">
                            <p className="infoTopic">WHO WE ARE</p>
                            <p className="infoMessage">
                                Duis autem vel eum iriure dolor in hendrerit in velit esse
                                molestie consequat, vel illum dolore nulla facilisis at vero
                                eros et accumsan et iusto dignissim qui blandit praesent
                                luptatum.
                            </p>
                        </div>
                        <div className="biography testing">
                            <p className="infoTopic">BIOGRAPHY</p>
                            <p className="infoMessage">
                                Duis autem vel eum iriure dolor in hendrerit in velit esse
                                molestie consequat, vel illum dolore nulla facilisis at vero
                                eros et accumsan et iusto dignissim qui blandit praesent
                                luptatum.
                            </p>
                        </div>
                        <div className="ourMission testing">
                            <p className="infoTopic">OUR MISSION</p>
                            <p className="infoMessage">
                                Duis autem vel eum iriure dolor in hendrerit in velit esse
                                molestie consequat, vel illum dolore nulla facilisis at vero
                                eros et accumsan et iusto dignissim qui blandit praesent
                                luptatum.
                            </p>
                        </div>
                        <div className="awards testing">
                            <p className="infoTopic">AWARDS</p>
                            <p className="infoMessage">
                                Duis autem vel eum iriure dolor in hendrerit in velit esse
                                molestie consequat, vel illum dolore nulla facilisis at vero
                                eros et accumsan et iusto dignissim qui blandit praesent
                                luptatum.
                            </p>
                        </div>
                    </div>
                    <img alt="" src={image23} className="image23 testing" />
                </div>
                <div className="aboutfreeConsultant testing">
                    <div className="aboutfreeConsultant1 testing">

                    </div>
                    <div className="aboutfreeConsultant2 testing">
                        <p className="aboutconsultantText1">GET YOUR FREE CONSULTANT</p>
                        <p className="aboutconsultantText2">We are a company that offers design and build services for you from initial sketches to the final construction</p>
                        <div style={{cursor:"pointer"}} onClick={contactUsPage} className="aboutconsultantBox">CONTACT US <BsFillForwardFill /></div>
                    </div>
                </div>
                <div className="aboutawesomeTeamBox testing">
                    <p className="aboutawesomeTeamText1"><span style={{color:"rgb(32,46,49)"}}>AWESOME</span> <span style={{color:"rgb(253,194,54)"}}>TEAM</span></p>
                    <p className="aboutawesomeTeamText2">Claritas est etiam processus dynamicus, qui sequitur<br/>mutationem consuetudium lectorum</p>
                    <div className="aboutawesomeTeamPictures">
                        <div className="aboutawesomeTeamImg aboutawesomeTeamImg1">
                            <div className="aboutat1 aboutat11"></div>
                            <img alt="" src={image12} className="aboutimage12 aboutatImg aboutatImg" />
                            <div className="aboutat2">
                                <p className="abouttxt1">HASIB SHARIF</p>
                                <p className="abouttxt2">CHIEF ACHITECT</p>
                                <div className="aboutat2Box">
                                    <p className="aboutexperience"><BiShoppingBag /> 3 YEARS OF EXPERIENCE</p>
                                    <p className="aboutage"><BsPerson /> AGE: 24 YEARS</p>
                                </div>
                            </div>
                        </div>
                        <div className="aboutawesomeTeamImg aboutawesomeTeamImg2">
                            <div className="aboutat1 aboutat12"></div>
                            <img alt="" src={image13} className="aboutimage13 aboutatImg aboutatImg" />
                            <div className="aboutat2">
                                <p className="abouttxt1">TAHIRATUZZOHORA</p>
                                <p className="abouttxt2">CHIEF ACHITECT</p>
                                <div className="aboutat2Box">
                                    <p className="aboutexperience"><BiShoppingBag /> 3 YEARS OF EXPERIENCE</p>
                                    <p className="aboutage"><BsPerson /> AGE: 24 YEARS</p>
                                </div>
                            </div>
                        </div>
                        <div className="aboutawesomeTeamImg aboutawesomeTeamImg3">
                            <div className="aboutat1 aboutat13"></div>
                            <img alt="" src={image14} className="aboutimage14 aboutatImg aboutatImg" />
                            <div className="aboutat2">
                                <p className="abouttxt1">DAVID MAMAN</p>
                                <p className="abouttxt2">CHIEF ACHITECT</p>
                                <div className="aboutat2Box">
                                    <p className="aboutexperience"><BiShoppingBag /> 3 YEARS OF EXPERIENCE</p>
                                    <p className="aboutage"><BsPerson /> AGE: 24 YEARS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutbottom testing">
                    <div className="aboutbottomFirst testing">
                        <div className="aboutbottomFirst1 testing">
                            <img alt="" src={image19} className="aboutimage19 testing" />
                            <p className="aboutimage19Text testing">
                                Duis autem vel eum iriure dolor in<br/>
                                hendrerit in vulputate velit esse molestie<br/>
                                consequat, vel illum dolo re eu feugiat<br/>
                                nulla facilisis at vero eros et accumsan<br/>
                                et iusto odio.
                            </p>
                        </div>
                        <div className="aboutbottomFirst2 testing">
                            <p className="aboutfirstBottomHead">IMPORTANT LINKS</p>
                            <div className="aboutfirstBottomLinks">
                                <p className="aboutfirstBottomLink1">Themeforest</p>
                                <p className="aboutfirstBottomLink2">Videohive</p>
                                <p className="aboutfirstBottomLink3">Graphicriver</p>
                                <p className="aboutfirstBottomLink4">Audio Jungle</p>
                                <p className="aboutfirstBottomLink5">Photodune</p>
                            </div>
                        </div>
                        <div className="aboutbottomFirst3 testing">
                            <p className="aboutsecondBottomHead">QUICK LINKS</p>
                            <div className="aboutsecondBottomLinks">
                                <p className="aboutsecondBottomLink1">Faq</p>
                                <p className="aboutsecondBottomLink2">Support</p>
                                <p className="aboutsecondBottomLink3">Sitemap</p>
                                <p className="aboutsecondBottomLink4">Blog</p>
                                <p className="aboutsecondBottomLink5">Pricing</p>
                            </div>
                        </div>
                        <div className="aboutbottomFirst4 testing">
                            <p className="aboutthirdBottomHead">ADDRESS</p>
                            <div className="aboutthirdBottomLinks">
                                <p className="aboutthirdBottomLink1"><span style={{fontWeight:"bold"}}>HEAD OFFICE:</span>&nbsp;&nbsp;22B, Becar Street<br/>London, UK</p>
                                <p className="aboutthirdBottomLink2"><span style={{fontWeight:"bold"}}>PHONE:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+000-111-2222 +000-<br/>111-2223</p>
                                <div className="aboutmediaIcons">
                                    <FaFacebookF className="abouticon" />
                                    <FaTwitter className="abouticon" />
                                    <FaInstagram className="abouticon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aboutbottomSecond testing">
                        <p className="aboutbottomSecondText">2021©All Rights Reserved by Themexriver</p>
                    </div>
                </div>
            </div>
        )
    }

export default AboutPage