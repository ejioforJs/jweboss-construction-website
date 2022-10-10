import React, { useEffect } from "react"
import "./contactUsPage.css"
import {FaSearch} from "react-icons/fa"
import logo1 from "./logo-1.png"
import {VscLocation} from "react-icons/vsc"
import {GiSmartphone} from "react-icons/gi"
import {AiOutlineMail} from "react-icons/ai"
import {BsFillForwardFill} from "react-icons/bs"
import image19 from "./image19.png"
import { FaFacebookF } from 'react-icons/fa'
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
// import {GiHamburgerMenu} from "react-icons/gi"
import {useNavigate} from 'react-router-dom'

function ContactUsPage(){
    const navigate = useNavigate()

    const homePage=()=>{
        navigate('/')
    }

    const aboutPage=()=>{
        navigate('/aboutPage')
    }

    const servicePage = () =>{
        navigate('/servicePage')
    }

    const projectsPage = () =>{
        navigate('/projectsPage')
    }

    useEffect (() => {
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
                <div className="contactUsheadTop testing">
                    <div className="contactUsheadTopText"><p className="contactUsheadTopTextPara">WE HAVE MORE THAN 25 YEARS OF EXPERIENCES</p></div>
                    <p className="contactUsnav1">SITEMAP&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                    <p className="contactUsnav2">&nbsp;&nbsp;&nbsp;&nbsp;QUICK LINKS&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                    <p className="contactUsnav3">&nbsp;&nbsp;&nbsp;&nbsp;SUPPORT&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                    <div className="contactUsnav4">&nbsp;&nbsp;&nbsp;&nbsp;<FaSearch style={{marginBottom:"0px"}} />&nbsp;&nbsp;&nbsp;&nbsp;</div>
                </div>
                <div className="contactUsheadTop2 testing">
                    <img className="contactUslogo1" src={logo1} alt="" />
                    <div className="contactUslogo2Box testing">
                        <VscLocation className="contactUslogo" />
                        <p className="contactUslogoText"><span className="contactUslogoText1">FIND US</span><br/><span className="contactUslogoText2">22B, LONDON</span></p>
                    </div>
                    <div className="contactUslogo3Box testing">
                        <GiSmartphone className="contactUslogo" />
                        <p className="contactUslogoText"><span className="contactUslogoText1">CALL US TODAY</span><br/><span className="contactUslogoText2">+000-2415-145</span></p>
                    </div>
                    <div className="contactUslogo4Box testing">
                        <AiOutlineMail className="contactUslogo" />
                        <p className="contactUslogoText"><span className="contactUslogoText1">EMAIL US NOW</span><br/><span className="contactUslogoText2">SITENAME@EMAIL.COM</span></p>
                    </div>
                </div>
                <div className="contactUsNavContainer testing">
                    <div className="contactUsheadTop3">
                        <div className="contactUsheadTop31 contactUsht3" onClick={homePage} ><p className="contactUsnavText1 contactUsnavText">HOME</p></div>
                        <div className="contactUsheadTop32 contactUsht3" onClick={aboutPage} ><p className="contactUsnavText2 contactUsnavText">ABOUT</p></div>
                        <div className="contactUsheadTop33 contactUsht3" onClick={servicePage} ><p className="contactUsnavText3 contactUsnavText">SERVICES</p></div>
                        <div className="contactUsheadTop34 contactUsht3" onClick={projectsPage} ><p className="contactUsnavText4 contactUsnavText">PROJECTS</p></div>
                        <div className="contactUsheadTop35 contactUsht3"><p className="contactUsnavText5 contactUsnavText">BLOG</p></div>
                        <div className="contactUsheadTop36 contactUsht3"><p className="contactUsnavText6 contactUsnavText">CONTACTS</p></div>
                        <div className="contactUsheadTop37"><p className="contactUsnavText7">INQUERY TODAY</p></div>
                    </div>
                    <p className="contactUs testing">NEWS DETAILS</p>
                    <p className="contactUsInfo testing">
                        Claritas est etiam processus dynamicus, qui sequitur<br/>
                        mutationem consuetudium lectorum.
                    </p>
                </div>
                <div className="mapData testing">

                </div>
                <div className="contactUsPage testing">
                    <div className="sendAMessage testing">SEND US A MESSAGE</div>
                    <div className="contactUsInputs testing">
                        <input type="text" name="name" className="inputName input testing" placeholder="YOUR NAME" />
                        <input type="email" name="email" className="inputEmail input testing" placeholder="EMAIL ADDRESS"  />
                        <input type="number" name="number" className="inputNumber input testing" placeholder="PHONE NUMBER" />
                        <input type="text" name="subject" className="inputSubject input testing" placeholder="SUBJECT" />
                        <textarea name="message"  placeholder="MESSAGE" className="textarea testing" ></textarea>
                        <div className="sendNowBox testing">
                            <button className="sendNowButton">SEND NOW <BsFillForwardFill/></button>
                        </div>
                    </div>
                    <div className="contactUsIcons testing">
                        <div className="iconsBox1 iconsBox"><VscLocation className="mainIcon" style={{opacity:"0.5"}} /> 
                            <p className="iconsText" ><span className="icons1">FIND US</span><br/><span className="icons2">22B,LONDON</span></p>
                        </div>
                        <div className="iconsBox2 iconsBox"><GiSmartphone className="mainIcon" style={{opacity:"0.5"}} /> 
                            <p className="iconsText" ><span className="icons1">CALL US TODAY</span><br/><span className="icons2">+000-2415-145</span></p>
                        </div>
                        <div className="iconsBox3 iconsBox"><AiOutlineMail className="mainIcon" style={{opacity:"0.5"}} />
                            <p className="iconsText" ><span className="icons1">EMAIL US NOW</span><br/><span className="icons2">SITENAME@EMAIL.COM</span></p>
                        </div>
                    </div>
                </div>
                <div className="contactUsbottom testing">
                    <div className="contactUsbottomFirst testing">
                        <div className="contactUsbottomFirst1 testing">
                            <img alt="" src={image19} className="contactUsimage19 testing" />
                            <p className="contactUsimage19Text testing">
                                Duis autem vel eum iriure dolor in<br/>
                                hendrerit in vulputate velit esse molestie<br/>
                                consequat, vel illum dolo re eu feugiat<br/>
                                nulla facilisis at vero eros et accumsan<br/>
                                et iusto odio.
                            </p>
                        </div>
                        <div className="contactUsbottomFirst2 testing">
                            <p className="contactUsfirstBottomHead">IMPORTANT LINKS</p>
                            <div className="contactUsfirstBottomLinks">
                                <p className="contactUsfirstBottomLink1">Themeforest</p>
                                <p className="contactUsfirstBottomLink2">Videohive</p>
                                <p className="contactUsfirstBottomLink3">Graphicriver</p>
                                <p className="contactUsfirstBottomLink4">Audio Jungle</p>
                                <p className="contactUsfirstBottomLink5">Photodune</p>
                            </div>
                        </div>
                        <div className="contactUsbottomFirst3 testing">
                            <p className="contactUssecondBottomHead">QUICK LINKS</p>
                            <div className="contactUssecondBottomLinks">
                                <p className="contactUssecondBottomLink1">Faq</p>
                                <p className="contactUssecondBottomLink2">Support</p>
                                <p className="contactUssecondBottomLink3">Sitemap</p>
                                <p className="contactUssecondBottomLink4">Blog</p>
                                <p className="contactUssecondBottomLink5">Pricing</p>
                            </div>
                        </div>
                        <div className="contactUsbottomFirst4 testing">
                            <p className="contactUsthirdBottomHead">ADDRESS</p>
                            <div className="contactUsthirdBottomLinks">
                                <p className="contactUsthirdBottomLink1"><span style={{fontWeight:"bold"}}>HEAD OFFICE:</span>&nbsp;&nbsp;22B, Becar Street<br/>London, UK</p>
                                <p className="contactUsthirdBottomLink2"><span style={{fontWeight:"bold"}}>PHONE:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+000-111-2222 +000-<br/>111-2223</p>
                                <div className="contactUsmediaIcons">
                                    <FaFacebookF className="contactUsicon" />
                                    <FaTwitter className="contactUsicon" />
                                    <FaInstagram className="contactUsicon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contactUsbottomSecond testing">
                        <p className="contactUsbottomSecondText">2021©All Rights Reserved by Themexriver</p>
                    </div>
                </div>
            </div>
        )
    }

export default ContactUsPage