import React, { useState, useEffect } from "react";
import Nav from '../components/Nav_nothome'
import defpp from '../components/defpp.jpg'
import "./Community.css"

const Community = () => {

    useEffect(() => {
        // Update document title when component mounts
        document.title = 'InnerCalm - Community';
        // Clean up document title when component unmounts
        return () => {
            document.title = 'InnerCalm';
        }
    }, []);

    const [showForm, setShowForm] = useState(false);
    const [suberr, setSubErr] = useState(false);
    const [name, setName] = useState('');
    const [story, setStory] = useState('');
    const [sharesection, setSharesection] = useState({});
    const [cmtpg, setCPGbg] = useState('cmnitypage');
    const handleShareClick = () => {
        setShowForm(true);
    };

    const handleSubmit = (e) => {

        if (!story) {
            setSubErr(true)
            return;
        }

        e.preventDefault();
        fetch('https://innercallmserver.onrender.com/newpost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, story }),
        })
            .then((response) => {
                response.json()
                console.log(response)
                if (response.status === 200) {
                    setName("")
                    setStory("")
                    handleCloseForm();
                    FetchPosts()

                } else {

                    setSubErr(true)
                }
            })
            .then((data) => {
                console.log(data);
                // do something with the response data


            })
            .catch((error) => {
                console.error('Error:', error);
                setSubErr(true)

            });

    };


    // const NOSERVERSTYLE = {
    //     fontFamily: "'Poppins',sans-serif",
    //     color: "white"
    // }

    const handleCloseForm = () => {
        setName("")
        setStory("")
        setShowForm(false);
        setSubErr(false)
    };


    setInterval(() => {
        setCPGbg("cmnitypage linearbgcmitypg")
    }, 800);

    const [allposts, setAllPosts] = useState([])

    const FetchPosts = async () => {
        try {
            const resFromBack = await fetch('https://innercallmserver.onrender.com/allposts', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })

            const data = await resFromBack.json()
            setAllPosts(data)
            console.log(data)


            if (resFromBack.status !== 200 || !data) {
                window.alert("Error")
            }

        }
        catch (err) {
            console.log(err)
            setAllPosts([{
                "_id": "64390829879398ee8f34364f",
                "name": "HK",
                "story": "Grief weighed heavy on my heart when I lost my best friend to cancer. The pain seemed insurmountable, and I withdrew from the world for a while. But slowly, I found solace in cherished memories and sought support from loved ones. I began honoring my friend's memory by living life to the fullest, pursuing my passions, and helping others in need. With time, I learned to carry my friend's love in my heart, and though the sorrow remains, I've grown stronger, more compassionate, and found a way to navigate through the darkness towards the light.",
                "__v": 0
            }, {
                "_id": "64390860879398ee8f343652",
                "name": "hk",
                "story": "My heart shattered when my relationship ended abruptly. But I chose to heal and grow from the pain. I practiced self-care, leaned on my support system, and pursued new passions. Today, I'm stronger, wiser, and living a life that's authentically mine. #RisingFromHeartbreak ",
                "__v": 0
            },
            {
                "_id": "643908c1879398ee8f343655",
                "name": "hk",
                "story": "When I lost my job, I felt like my world was crumbling. But I refused to let despair take over. I dusted off my resume, polished my skills, and tirelessly searched for new opportunities. It wasn't easy, but I remained persistent, fueled by my determination to overcome this setback. I leaned on my support system and stayed positive, focusing on my strengths and passions. Finally, I landed a job that was even better than before. It taught me that resilience, self-belief, and never giving up pays off. Today, I'm living a fulfilling life and grateful for the strength I gained through adversity.",
                "__v": 0
            }, {
                "_id": "64392cc7879398ee8f343677",
                "name": "hk",
                "story": "I battled with depression after experiencing a significant loss in my life,  a traumatic event that deeply affected my emotional well-being. The pain and emptiness I felt were overwhelming, and it was difficult for me to find motivation or joy in anything. The weight of sadness and hopelessness seemed to be constantly with me, making each day a struggle. However, with the support and guidance of a therapist, the right medication, and the unwavering love and support of my family and friends, I took steps towards healing and overcoming my depression. It was a challenging and sometimes lonely journey, but it led me to a place of self-discovery, resilience, and eventual recovery. Today, I am grateful for the lessons I learned and the strength I gained, and I am living a more fulfilling life, appreciating the beauty and joy that surrounds me.",
                "__v": 0
            }, {
                "_id": "64392d24879398ee8f34367a",
                "name": "HK",
                "story": "After a traumatic car accident, I battled depression and anxiety. With the help of a therapist, I learned to process my emotions and rebuild my life. Finding solace in nature and creative outlets, I regained confidence, developed resilience, and found purpose in advocating for road safety. Grateful for the lessons learned, I am proud of the person I have become through my healing journey. \"Grateful for the lessons learned and the inner strength I discovered, I am now empowered to face any challenge with resilience and courage.\"\n",
                "__v": 0
            }])
            setSharesection({ display: "none" })

        }
    }

    useEffect(() => {
        FetchPosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Nav />
            <div className="CMT">
                <div className={cmtpg}>
                    <header>We believe that by sharing our experiences, we can help others feel less alone and inspire them to seek the help they need. Join us in creating a supportive and inclusive space where everyone's voice is heard.</header>
                    <h1 className="head_st">
                        Stories of People
                    </h1>

                    <div className="allposts">

                        {/* ////////////////// */}
                        {/* <div className="post">
        <div className="posthead">
            <img src={defpp} alt="" />
            <p className="name">Anonymous</p>
        </div>

        <div className="post_content">
            <p className="post_text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vero officia quidem aspernatur fugiat eaque quis fuga maiores laudantium expedita quisquam sed nemo itaque unde, quae id sequi facere pariatur facilis eum optio aut accusamus. Ipsam consequuntur voluptate nobis, vel facilis fuga sint praesentium, natus nulla vitae repudiandae nostrum aut distinctio perferendis nisi tempora necessitatibus magnam delectus, modi adipisci voluptates quam? Asperiores corrupti, incidunt perferendis magnam inventore cupiditate labore cumque provident consequuntur, earum repellat ut quas quod hic.
            </p>

        </div>
    </div> */}

                        {allposts.map((val) => {
                            return <>
                                <div className="post">
                                    <div className="posthead">
                                        <img src={defpp} alt="" />
                                        <p className="name">{"User" + Math.floor(Math.random() * 1000000)}</p>
                                    </div>

                                    <div className="post_content">
                                        <p className="post_text">
                                            {val.story}
                                        </p>

                                    </div>
                                </div>
                            </>
                        })}
                        {/* ////////////////// */}

                        {/* {sharesection !== {} ? <><h2 style={sharesection}>Sharing your feature will be available soon</h2></> : <></>} */}
                    </div>



                    <div style={sharesection} className="sharesection">
                        <button className="share_btn" onClick={handleShareClick}>
                            Share your story
                        </button>
                    </div>


                    {showForm && (
                        <div className="form-popup">
                            <form onSubmit={handleSubmit}>

                                <h3>Share Your Story</h3>
                                <label htmlFor="name">Name: <span>(Your name will be hidden)</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label htmlFor="story">Your Story:</label>
                                <textarea
                                    rows={10}
                                    name="story"
                                    value={story}
                                    onChange={(e) => setStory(e.target.value)}
                                />
                                {suberr ? <span className="errormessage"> *Error Posting the story</span> : <></>}
                                <div className="form-buttons">
                                    <button type="submit" className="submitbtn" >Submit</button>
                                    <button className="closebtn" type="button" onClick={handleCloseForm}>
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Community