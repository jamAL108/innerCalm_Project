import { useState, useRef, useEffect } from "react";
import {
    faPlay,
    faPause,
    faStepBackward,
    faStepForward,
    // faVolumeMute,
    // faVolumeUp,
    faExpand
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from '../components/Nav_music'

import './Music.css'

//MUSIC

import music1 from "../components/music/music1.mp3";
import music2 from "../components/music/music2.mp3";
import music3 from "../components/music/music3.mp3";
import music4 from "../components/music/music4.mp3";
import music5 from "../components/music/music5.mp3";
import music6 from "../components/music/music6.mp3";
import music7 from "../components/music/music7.mp3";
import music8 from "../components/music/music8.mp3";
import music9 from "../components/music/music9.mp3";
import music10  from "../components/music/music10.mp3";
import music11  from "../components/music/music11.mp3";
import music12  from "../components/music/music12.mp3";
import music13  from "../components/music/music13.mp3";
import music14  from "../components/music/music14.mp3";
import music15  from "../components/music/music15.mp3";
import music16  from "../components/music/music16.mp3";
import music17  from "../components/music/music17.mp3";
import music18  from "../components/music/music18.mp3";
import music19  from "../components/music/music19.mp3";
import music20  from "../components/music/music20.mp3";
import music21  from "../components/music/music21.mp3";
import music22  from "../components/music/music22.mp3";
import music23  from "../components/music/music23.mp3";
import music24  from "../components/music/music24.mp3";
import music25  from "../components/music/music25.mp3";
import music26  from "../components/music/music26.mp3";
import music27  from "../components/music/music27.mp3";
import music28  from "../components/music/music28.mp3";
import music29  from "../components/music/music29.mp3";
import music30  from "../components/music/music30.mp3";
import music31  from "../components/music/music31.mp3";
import music32  from "../components/music/music32.mp3";
import music33  from "../components/music/music33.mp3";
import music34  from "../components/music/music34.mp3";
import music35  from "../components/music/music35.mp3";
import music36  from "../components/music/music36.mp3";
import music37  from "../components/music/music37.mp3";
import music38  from "../components/music/music38.mp3";
import music39  from "../components/music/music39.mp3";
import music40  from "../components/music/music40.mp3";
import music41  from "../components/music/music41.mp3";
import music42  from "../components/music/music42.mp3";
import music43  from "../components/music/music43.mp3";
import music44  from "../components/music/music44.mp3";
import music45  from "../components/music/music45.mp3";
import music46  from "../components/music/music46.mp3";
import music47  from "../components/music/music47.mp3";
import music48  from "../components/music/music48.mp3";
import music49  from "../components/music/music49.mp3";
import music50  from "../components/music/music50.mp3";
import music51  from "../components/music/music51.mp3";
import music52 from "../components/music/music52.mp3";

let pic1 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-1.jpg'
let pic2 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-2.jpg'
let pic3 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-3.jpg'
let pic4 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-4.jpg'
let pic5 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-5.jpg'
let pic6 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-6.gif'
let pic7 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-7.gif'
let pic8 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-8.gif'
const musicList = [music1, music2, music3, music4, music5, music6, music7, music8, music9, music10, music11, 
    music12, music13, music14, music15, music16, music17, music18, music19, music20, music21, music22, music23, 
    music24, music25, music26, music27, music28, music29, music30, music31, music32, music33, music34, music35, 
    music36, music37, music38, music39, music40, music41, music42, music43, music44, music45, music46, music47, 
    music48, music49, music50, music51, music52];


/////////////////
const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "0px",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    filter: " drop-shadow(#000 1px 1px 3px)"
};

const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    filter: " drop-shadow(#000 1px 1px 10px)"
};


const ImageSlider = ({ slides }) => {
    useEffect(() => {
        // Update document title when component mounts
        document.title = 'InnerCalm - Music';
        // Clean up document title when component unmounts
        return () => {
            document.title = 'InnerCalm';
        }
    }, []);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(4);
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
    const audioRef = useRef(null);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);


    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const msGoToNext = async () => {
        let audio = audioRef.current;
        await audio.pause();
        setIsPlaying(false);

        if (currentMusicIndex === musicList.length - 1) {
            setCurrentMusicIndex(0);
        } else {
            setCurrentMusicIndex(currentMusicIndex + 1);
        }

        audio = audioRef.current;
        await audio.play();
        await setIsPlaying(true);

    };
    const msGoToPrevious = async () => {

        let audio = audioRef.current;
        await audio.pause();
        setIsPlaying(false);

        if (currentMusicIndex === 0)
            setCurrentMusicIndex(musicList.length - 1)
        else
            setCurrentMusicIndex(currentMusicIndex - 1)

        audio = audioRef.current;
        await audio.play();
        await setIsPlaying(true);

    };

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const handleFullScreenClick = () => {
        const elem = document.documentElement;
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            elem.requestFullscreen();
        }
    };

    return (
        <div style={{ background: "#101316" , height : "100%", width : "100%" }} className="musspage">
            <div style={slideStylesWidthBackground} >
                <div>
                    <audio ref={audioRef} src={musicList[currentMusicIndex]}></audio>
                    <div onClick={goToPrevious} style={leftArrowStyles} className="pageturnbtn"> 
                        ❰
                    </div>
                    <div onClick={goToNext} style={rightArrowStyles} className="pageturnbtn">
                        ❱
                    </div>

                    <div className="allbuttonsmspg">
                        <button
                            className="next_prev"
                            onClick={msGoToPrevious}
                            style={{
                                cursor: 'pointer',
                                display: 'inline-block',
                                fontSize: '25px',
                                border: "none",
                                backgroundColor: "#00000000",
                                color: "#fff",
                                textShadow: "#000 2px 2px 20px"
                            }}
                        >
                            <FontAwesomeIcon icon={faStepBackward} />
                        </button>
                        <button
                            onClick={() => {
                                setIsPlaying(!isPlaying);
                                const audio = audioRef.current;
                                if (audio.paused) {
                                    audio.play();
                                } else {
                                    audio.pause();
                                }
                            }}
                            className="play-button" style={{ cursor: "pointer", fontSize: "30px", border: "none", backgroundColor: "#00000000", color: "#fff", textShadow: "#000 2px 2px 20px" }} >
                            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                        </button>
                        <button
                            className="next_prev"
                            onClick={msGoToNext}
                            style={{
                                cursor: 'pointer',
                                border: "none",
                                display: 'inline-block',
                                fontSize: '25px',
                                backgroundColor: "#00000000", color: "#fff", textShadow: "#000 2px 2px 20px"
                            }}
                        >
                            <FontAwesomeIcon icon={faStepForward} />

                        </button>


                        <button className="fullscreen-button" onClick={handleFullScreenClick} style={{ marginRight: "-10px", color: "white", cursor: "pointer", fontSize: '25px', backgroundColor: "#00000000", border: "none" }}>
                            <FontAwesomeIcon icon={faExpand} />
                        </button>
                    </div>

                </div>
                <div></div>
            </div>
        </div>
    );
};

const Music = () => {
    const slides = [
        { url: pic1, title: "1" },
        { url: pic2, title: "2" },
        { url: pic3, title: "3" },
        { url: pic4, title: "4" },
        { url: pic5, title: "5" },
        { url: pic6, title: "6" },
        { url: pic7, title: "7" },
        { url: pic8, title: "8" },
    ];
    const containerStyles = {
        width: "100%",
        height: "calc(100vh - 0px)",
        margin: "0",
    };
    return (
        <>
            <Nav />
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </>
    );
}

export default Music;
