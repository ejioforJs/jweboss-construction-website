import React, { useEffect } from "react" 
import "./projectsPage.css"
import {FaSearch} from "react-icons/fa"
import logo1 from "./logo-1.png"
import {VscLocation} from "react-icons/vsc"
import {GiSmartphone} from "react-icons/gi"
import {AiOutlineMail} from "react-icons/ai"
import { GrMoney } from "react-icons/gr"
import { SiTimescale } from "react-icons/si"
import image7 from "./image7.jpg"
import image8 from "./image8.jpg"
import image9 from "./image9.jpg"
import image10 from "./image10.jpg"
import image11 from "./image11.jpg"
import image24 from "./image24.jpg"
import image25 from "./image25.jpg"
import image26 from "./image26.jpg"
import { BsFillForwardFill } from "react-icons/bs"
import image19 from "./image19.png"
import { FaFacebookF } from 'react-icons/fa'
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
// import {GiHamburgerMenu} from "react-icons/gi"
import {useNavigate} from 'react-router-dom'

function ProjectsPage(){

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

    const contactUsPage = () =>{
        navigate('/servicePage')
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
                <div className="projectsheadTop testing">
                    <div className="projectsheadTopText"><p className="projectsheadTopTextPara">WE HAVE MORE THAN 25 YEARS OF EXPERIENCES</p></div>
                    <p className="projectsnav1">SITEMAP&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                    <p className="projectsnav2">&nbsp;&nbsp;&nbsp;&nbsp;QUICK LINKS&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                    <p className="projectsnav3">&nbsp;&nbsp;&nbsp;&nbsp;SUPPORT&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                    <div className="projectsnav4">&nbsp;&nbsp;&nbsp;&nbsp;<FaSearch style={{marginBottom:"0px"}} />&nbsp;&nbsp;&nbsp;&nbsp;</div>
                </div>
                <div className="projectsheadTop2 testing">
                    <img alt="" className="projectslogo1" src={logo1} />
                    <div className="projectslogo2Box testing">
                        <VscLocation className="projectslogo" style={{opacity:"0.5"}} />
                        <p className="projectslogoText"><span className="projectslogoText1">FIND US</span><br/><span className="projectslogoText2">22B, LONDON</span></p>
                    </div>
                    <div className="projectslogo3Box testing">
                        <GiSmartphone className="projectslogo" style={{opacity:"0.5"}} />
                        <p className="projectslogoText"><span className="projectslogoText1">CALL US TODAY</span><br/><span className="projectslogoText2">+000-2415-145</span></p>
                    </div>
                    <div className="projectslogo4Box testing">
                        <AiOutlineMail className="projectslogo" style={{opacity:"0.5"}} />
                        <p className="projectslogoText"><span className="projectslogoText1">EMAIL US NOW</span><br/><span className="projectslogoText2">SITENAME@EMAIL.COM</span></p>
                    </div>
                </div>
                <div className="projectsNavContainer testing">
                    <div className="projectsheadTop3">
                        <div className="projectsheadTop31 projectsht3" onClick={homePage} ><p className="projectsnavText1 projectsnavText">HOME</p></div>
                        <div className="projectsheadTop32 projectsht3" onClick={aboutPage} ><p className="projectsnavText2 projectsnavText">ABOUT</p></div>
                        <div className="projectsheadTop33 projectsht3" onClick={servicePage} ><p className="projectsnavText3 projectsnavText">SERVICES</p></div>
                        <div className="projectsheadTop34 projectsht3"><p className="projectsnavText4 projectsnavText">PROJECTS</p></div>
                        <div className="projectsheadTop35 projectsht3"><p className="projectsnavText5 projectsnavText">BLOG</p></div>
                        <div className="projectsheadTop36 projectsht3" onClick={contactUsPage} ><p className="projectsnavText6 projectsnavText">CONTACTS</p></div>
                        <div className="projectsheadTop37"><p className="projectsnavText7">INQUERY TODAY</p></div>
                    </div>
                    <p className="projectsUs testing">OUR PROJECTS</p>
                    <p className="projectsUsInfo testing">
                        Claritas est etiam processus dynamicus, qui sequitur<br/>
                        mutationem consuetudium lectorum.
                    </p>
                </div>
                <div className="projectsimagesPallete">
                    <div className="projectsimageBox testing">
                        <img alt="" src={image7} className="projectsimg" />
                        <div className="projectsimage7SideBox1">
                            <p className="projectsimage7Text1">ROOFING WORKS</p>
                            <p className="projectsimage7Text2">PRE WORK</p>
                            <div className="projectsimage7SideBox2">
                                <p className="projectsbudget"><GrMoney/>&nbsp;&nbsp;<span className="projectsbudgetText">BUDGET: $10 000</span></p>
                                <p className="projectsduration"><SiTimescale/>&nbsp;&nbsp;<span className="projectsdurationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="projectstransparentBox">
                            +
                        </div>
                    </div>
                    <div className="projectsimageBox testing">
                        <img alt="" src={image8} className="projectsimg" />
                        <div className="projectsimage7SideBox1">
                            <p className="projectsimage7Text1">CONSTRUCTON WORKS</p>
                            <p className="projectsimage7Text2">PRE WORK</p>
                            <div className="projectsimage7SideBox2">
                                <p className="projectsbudget"><GrMoney/>&nbsp;&nbsp;<span className="projectsbudgetText">BUDGET: $10 000</span></p>
                                <p className="projectsduration"><SiTimescale/>&nbsp;&nbsp;<span className="projectsdurationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="projectstransparentBox">
                            +
                        </div>
                    </div>
                    <div className="projectsimageBox testing">
                        <img alt="" src={image9} className="projectsimg" />
                        <div className="projectsimage7SideBox1">
                            <p className="projectsimage7Text1">RENOVATION WORKS</p>
                            <p className="projectsimage7Text2">PRE WORK</p>
                            <div className="projectsimage7SideBox2">
                                <p className="projectsbudget"><GrMoney/>&nbsp;&nbsp;<span className="projectsbudgetText">BUDGET: $10 000</span></p>
                                <p className="projectsduration"><SiTimescale/>&nbsp;&nbsp;<span className="projectsdurationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="projectstransparentBox">
                            +
                        </div>
                    </div>
                    <div className="projectsimageBox testing">
                        <img alt="" src={image10} className="projectsimg" />
                        <div className="projectsimage7SideBox1">
                            <p className="projectsimage7Text1">BUILDING WORKS</p>
                            <p className="projectsimage7Text2">PRE WORK</p>
                            <div className="projectsimage7SideBox2">
                                <p className="projectsbudget"><GrMoney/>&nbsp;&nbsp;<span className="projectsbudgetText">BUDGET: $10 000</span></p>
                                <p className="projectsduration"><SiTimescale/>&nbsp;&nbsp;<span className="projectsdurationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="projectstransparentBox">
                            +
                        </div>
                    </div>
                    <div className="projectsimageBox testing">
                        <img alt="" src={image11} className="projectsimg" />
                        <div className="projectsimage7SideBox1">
                            <p className="projectsimage7Text1">ACHITECT WORKS</p>
                            <p className="projectsimage7Text2">PRE WORK</p>
                            <div className="projectsimage7SideBox2">
                                <p className="projectsbudget"><GrMoney/>&nbsp;&nbsp;<span className="projectsbudgetText">BUDGET: $10 000</span></p>
                                <p className="projectsduration"><SiTimescale/>&nbsp;&nbsp;<span className="projectsdurationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="projectstransparentBox">
                            +
                        </div>
                    </div>
                    <div className="projectsimageBox testing">
                        <img alt="" src={image24} className="projectsimg" />
                        <div className="projectsimage7SideBox1">
                            <p className="projectsimage7Text1">ARCHITECTURE WORKS</p>
                            <p className="projectsimage7Text2">PRE WORK</p>
                            <div className="projectsimage7SideBox2">
                                <p className="projectsbudget"><GrMoney/>&nbsp;&nbsp;<span className="projectsbudgetText">BUDGET: $10 000</span></p>
                                <p className="projectsduration"><SiTimescale/>&nbsp;&nbsp;<span className="projectsdurationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="projectstransparentBox">
                            +
                        </div>
                    </div>
                    <div className="projectsimageBox testing">
                        <img alt="" src={image25} className="projectsimg" />
                        <div className="projectsimage7SideBox1">
                            <p className="projectsimage7Text1">WOOD MAKING</p>
                            <p className="projectsimage7Text2">PRE WORK</p>
                            <div className="projectsimage7SideBox2">
                                <p className="projectsbudget"><GrMoney/>&nbsp;&nbsp;<span className="projectsbudgetText">BUDGET: $10 000</span></p>
                                <p className="projectsduration"><SiTimescale/>&nbsp;&nbsp;<span className="projectsdurationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="projectstransparentBox">
                            +
                        </div>
                    </div>
                    <div className="projectsimageBox testing">
                        <img alt="" src={image26} className="projectsimg" />
                        <div className="projectsimage7SideBox1">
                            <p className="projectsimage7Text1">ARCHITECTURE</p>
                            <p className="projectsimage7Text2">PRE WORK</p>
                            <div className="projectsimage7SideBox2">
                                <p className="projectsbudget"><GrMoney/>&nbsp;&nbsp;<span className="projectsbudgetText">BUDGET: $10 000</span></p>
                                <p className="projectsduration"><SiTimescale/>&nbsp;&nbsp;<span className="projectsdurationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="projectstransparentBox">
                            +
                        </div>
                    </div>
                </div>
                <div className="projectsfreeConsultant testing">
                    <div className="projectsfreeConsultant1 testing">

                    </div>
                    <div className="projectsfreeConsultant2 testing">
                        <p className="projectsconsultantText1">GET YOUR FREE CONSULTANT</p>
                        <p className="projectsconsultantText2">We are a company that offers design and build projects for you from initial sketches to the final construction</p>
                        <div style={{cursor:"pointer"}} onClick={contactUsPage} className="projectsconsultantBox">CONTACT US <BsFillForwardFill /></div>
                    </div>
                </div>
                <div className="projectsbottom testing">
                    <div className="projectsbottomFirst testing">
                        <div className="projectsbottomFirst1 testing">
                            <img alt="" src={image19} className="projectsimage19 testing" />
                            <p className="projectsimage19Text testing">
                                Duis autem vel eum iriure dolor in<br/>
                                hendrerit in vulputate velit esse molestie<br/>
                                consequat, vel illum dolo re eu feugiat<br/>
                                nulla facilisis at vero eros et accumsan<br/>
                                et iusto odio.
                            </p>
                        </div>
                        <div className="projectsbottomFirst2 testing">
                            <p className="projectsfirstBottomHead">IMPORTANT LINKS</p>
                            <div className="projectsfirstBottomLinks">
                                <p className="projectsfirstBottomLink1">Themeforest</p>
                                <p className="projectsfirstBottomLink2">Videohive</p>
                                <p className="projectsfirstBottomLink3">Graphicriver</p>
                                <p className="projectsfirstBottomLink4">Audio Jungle</p>
                                <p className="projectsfirstBottomLink5">Photodune</p>
                            </div>
                        </div>
                        <div className="projectsbottomFirst3 testing">
                            <p className="projectssecondBottomHead">QUICK LINKS</p>
                            <div className="projectssecondBottomLinks">
                                <p className="projectssecondBottomLink1">Faq</p>
                                <p className="projectssecondBottomLink2">Support</p>
                                <p className="projectssecondBottomLink3">Sitemap</p>
                                <p className="projectssecondBottomLink4">Blog</p>
                                <p className="projectssecondBottomLink5">Pricing</p>
                            </div>
                        </div>
                        <div className="projectsbottomFirst4 testing">
                            <p className="projectsthirdBottomHead">ADDRESS</p>
                            <div className="projectsthirdBottomLinks">
                                <p className="projectsthirdBottomLink1"><span style={{fontWeight:"bold"}}>HEAD OFFICE:</span>&nbsp;&nbsp;22B, Becar Street<br/>London, UK</p>
                                <p className="projectsthirdBottomLink2"><span style={{fontWeight:"bold"}}>PHONE:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+000-111-2222 +000-<br/>111-2223</p>
                                <div className="projectsmediaIcons">
                                    <FaFacebookF className="projectsicon" />
                                    <FaTwitter className="projectsicon" />
                                    <FaInstagram className="projectsicon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projectsbottomSecond testing">
                        <p className="projectsbottomSecondText">2021©All Rights Reserved by Themexriver</p>
                    </div>
                </div>
            </div>
        )
    }

export default ProjectsPage