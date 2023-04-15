import React,{useEffect} from "react"
import Nav from '../components/Nav_nothome'
import Footer from '../components/Footer'
import './Contact.css'


const Contact = () => {

    useEffect(() => {
        // Update document title when component mounts
        document.title = 'InnerCalm - Contact Us';
        // Clean up document title when component unmounts
        return () => {
            document.title = 'InnerCalm';
        }
    }, []);



    return (
        <>
            <Nav />
            <div className="contactpage">

                <section className="contt">
                    <div className="wrapper">
                        <div className="title">
                            <h1>CONTACT US</h1>
                        </div>
                        <div className="contact-form">
                            <div className="input-fields">
                                <input type="text" className="input" placeholder="Name" />
                                <input type="text" className="input" placeholder="Email Address" />
                                <input type="text" className="input" placeholder="Phone" />
                                <input type="text" className="input" placeholder="Subject" />
                            </div>
                            <div className="msg">
                                <textarea placeholder="Message"></textarea>
                                <div className="btnsend">send</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section id="social">
                    <h1 className="h-primary">FOLLOW US</h1>
                    <div id="socialmedia">
                        <div className="social-item">
                            <a href="https://www.instagram.com"><img src="image/instagram-svgrepo-com.svg" alt="" /></a>
                        </div>
                        <div className="social-item">
                            <img src="image/facebook-svgrepo-com.svg" alt="" />
                        </div>
                        <div className="social-item">
                            <img src="image/linkedin-svgrepo-com.svg" alt="" />
                        </div>
                        <div className="social-item">
                            <img src="image/twitter-svgrepo-com.svg" alt="" />
                        </div>
                        <div className="social-item">
                            <img src="image/youtube-svgrepo-com.svg" alt="" />
                        </div>
                        <div className="social-item">
                            <img src="image/path-svgrepo-com.svg" alt="" />
                        </div>
                    </div>
                </section> */}
            </div>
            <Footer />
        </>
    )
}

export default Contact