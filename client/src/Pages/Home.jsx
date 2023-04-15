import React, { useEffect } from "react";
import './Home.css';
import Nav from '../components/Nav'
import imglink from '../components/linksofimgs'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
const Home = () => {

    useEffect(() => {
        // Update document title when component mounts
        document.title = 'InnerCalm - Home';
        // Clean up document title when component unmounts
        return () => {
            document.title = 'InnerCalm';
        }
    }, []);


    let img1, img2, img3;

    // Generate img1
    img1 = Math.floor(Math.random() * 30);

    // Generate img2, making sure it's not equal to img1
    do {
        img2 = Math.floor(Math.random() * 30);
    } while (img2 === img1);

    // Generate img3, making sure it's not equal to img1 or img2
    do {
        img3 = Math.floor(Math.random() * 30);
    } while (img3 === img1 || img3 === img2);


    return (
        <>
            <Nav />
            <section className="banner">
                <div className="backdrop">
                    <div className="banner_tag">
                        <h1>
                            WE'RE HERE FOR YOU
                        </h1>
                        <h2 className="clrpink">
                            WE ARE INNERCALM
                        </h2>
                    </div>
                </div>
            </section>


            <section className="share_story">
                <div className="share_story_content">
                    <h2>
                        Share Your Story
                    </h2>
                    <p>
                        If you're feeling sorrow or sadness, don't hesitate to share your story with our community. Your words have the power to heal, inspire, and uplift others who may be going through similar experiences. You are not alone, and together, we can support each other on this journey towards healing and well-being.
                    </p>
                    <button className="share_story_button">
                        <span className="link">
                            <Link to="/community">Share Your Story Now</Link>
                        </span>
                    </button>
                </div>
            </section>


            {/* 
            <section className="listen_music">
                <div className="listen_music_content">
                    <h2>
                        MUSIC HEALS ..
                    </h2>
                    <p>
                        Music has the power to heal and soothe our souls. Listening to our peaceful music and sounds can bring relaxation, tranquility, and a sense of inner peace. It can help reduce stress, anxiety, and promote overall well-being. Our carefully curated collection of music is designed to elevate your mood, calm your mind, and rejuvenate your spirit.
                    </p>

                </div>

                <div className="listen_music_right">
                <button className="listen_button">
                    <span className="link">
                        <Link to="/music">Listen Now</Link>
                    </span>
                </button>
                </div>
            </section> */}

            <section className="mtimgs">
                <div className="mt_content">
                    <h2>We are with you. <br /></h2>
                </div>
                <div className="imgs">
                    <img src={imglink[img1]} alt="" />
                    <img src={imglink[img2]} alt="" />
                    <img src={imglink[img3]} alt="" />
                </div>
            </section>

            <section className="about">
                <div className="about_content">
                    <h2>About Us </h2>
                    <p>
                        Welcome to InnerCalm! We are a team of students who are committed to helping you find peace and tranquility in
                        your daily life. Our mission is to provide you with the tools
                        and resources you need to achieve a simple - mental, emotional, and physical
                        well-being.
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home