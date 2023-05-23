import { useState, useRef, useEffect } from "react"
import rainSound from '../components/music/sounds/rain.mp3';
import trafficSound from '../components/music/sounds/traffic.mp3';
import peopleSound from '../components/music/sounds/people.mp3';
import campFire from '../components/music/sounds/campfire.mp3'
import musicList from './musicList'
import {
    faPlay,
    faPause,
    faStepBackward,
    faStepForward,
    faVolumeMute,
    faVolumeUp,
    faExpand,
    faSpinner,
    faVolumeDown,
    faCloudRain,
    faCar,
    faUsers,
    faFire,
} from '@fortawesome/free-solid-svg-icons';



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from '../components/Nav_music'

import './Music.css'
import MusicPreloader from "../components/MusicPreloader";

let pic1 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-1.jpg'
let pic2 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-2.jpg'
let pic3 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-3.jpg'
let pic4 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-4.jpg'
let pic5 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-5.jpg'
let pic6 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-6.gif'
let pic7 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-7.gif'
let pic8 = 'https://raw.githubusercontent.com/BlazeRahim/InnerCalm/main/client/src/components/Image-8.gif'


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
    let randomNumber = Math.floor(Math.random() * 52) + 1;
    let randomNumberSlide = Math.floor(Math.random() * 8);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(randomNumberSlide);

    const [currentMusicIndex, setCurrentMusicIndex] = useState(randomNumber);
    const [volume, setVolume] = useState(Number(60)); // Initial volume value
    const audioRef = useRef(null);

    const [isRainPlaying, setIsRainPlaying] = useState(false);
    const [isTrafficPlaying, setIsTrafficPlaying] = useState(false);
    const [isPeoplePlaying, setIsPeoplePlaying] = useState(false);
    const [isFireplaying, setIsFirePlaying] = useState(false);

    const rainAudioRef = useRef(null);
    const trafficAudioRef = useRef(null);
    const peopleAudioRef = useRef(null);
    const fireAudioRef = useRef(null);

    
    useEffect(() => {
        if (rainAudioRef.current) {
        rainAudioRef.current.volume = 0.2;
        }
        if (trafficAudioRef.current) {
        trafficAudioRef.current.volume = 1;
        }
        if (peopleAudioRef.current) {
        peopleAudioRef.current.volume = 0.29;
        }
        if (fireAudioRef.current) {
        fireAudioRef.current.volume = 0.5;
        }
    }, []);

    useEffect(() => {
        if (isFireplaying) {
            fireAudioRef.current.play();
        } else {
            fireAudioRef.current.pause();
            fireAudioRef.current.currentTime = 0;
        }
    }, [isFireplaying]);

    useEffect(() => {
        if (isRainPlaying) {
            rainAudioRef.current.play();
        } else {
            rainAudioRef.current.pause();
            rainAudioRef.current.currentTime = 0;
        }
    }, [isRainPlaying]);

    useEffect(() => {
        if (isTrafficPlaying) {
            trafficAudioRef.current.play();
        } else {
            trafficAudioRef.current.pause();
            trafficAudioRef.current.currentTime = 0;
        }
    }, [isTrafficPlaying]);

    useEffect(() => {
        if (isPeoplePlaying) {
            peopleAudioRef.current.play();
        } else {
            peopleAudioRef.current.pause();
            peopleAudioRef.current.currentTime = 0;
        }
    }, [isPeoplePlaying]);

    useEffect(() => {
        const audio = audioRef.current;
        audio.volume = volume / 100; // Set the volume based on the value (0 to 1)
    }, [volume]);

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

        setCurrentMusicIndex((currentMusicIndex + 1) % musicList.length);

        goToNext();
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

        goToPrevious();
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
    const [isLoading, setIsLoading] = useState(false);

    

    const handleAudioLoadStart = () => {
        setIsLoading(true);
    };

    const handleAudioLoadedData = () => {
        setIsLoading(false);
    };
    const handleAudioEnded = () => {
        // Call play() method on audio element to replay the music
        audioRef.current.play();
        console.log("ended")
    };

    useEffect(() => {
        const audio = audioRef.current;
        audio.volume = volume / 100; // Set the volume based on the value (0 to 1)
        }, [volume]);
    const handleVolumeChange = (event) => {
        setVolume(Number(event.target.value));
    };

    const volumeIcon = (volume) => {
        if (volume === 0)
            return <FontAwesomeIcon icon={faVolumeMute} />;
        else if (volume > 0 && volume <= 40)
            return <FontAwesomeIcon icon={faVolumeDown} />;
        else
            return <FontAwesomeIcon icon={faVolumeUp} />;
    }

    const playRainSound = () => {
        setIsRainPlaying(true);
    };

    const stopRainSound = () => {
        setIsRainPlaying(false);
    };

    // Repeat the same steps for the traffic and people sounds
    const playTrafficSound = () => {
        setIsTrafficPlaying(true);
    };

    const stopTrafficSound = () => {
        setIsTrafficPlaying(false);
    };

    const playPeopleSound = () => {
        setIsPeoplePlaying(true);
    };

    const stopPeopleSound = () => {
        setIsPeoplePlaying(false);
    };

    const playFireSound = () => {
        setIsFirePlaying(true);
    };

    const stopFireSound = () => {
        setIsFirePlaying(false);
    };

    const handleVolClick = () =>{
        if(volume !== 0)
        setVolume(Number(0));
        else
        setVolume(Number(65));
    }
    
   

    return (<>
        <MusicPreloader/>
        <div style={{ background: "#101316", height: "100%", width: "100%" }} className="musspage">
            <div style={slideStylesWidthBackground} >

                {/* <QuoteComponent/> */}
                <div>
                    <audio
                        ref={audioRef}
                        src={musicList[currentMusicIndex]}
                        onLoadedData={handleAudioLoadedData}
                        onLoadStart={handleAudioLoadStart}
                        onEnded={handleAudioEnded}
                        loop
                    ></audio>

                    <div onClick={goToPrevious} style={leftArrowStyles} className="pageturnbtn">
                        ❰
                    </div>
                    <div onClick={goToNext} style={rightArrowStyles} className="pageturnbtn">
                        ❱
                    </div>

                    <div className="allbuttonsmspg">

                        <div className="musicButtons">
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
                                {isLoading ? <FontAwesomeIcon icon={faSpinner} /> : isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
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
                        <div className="volDiv">
                            <div className="volPercent" onClick={handleVolClick}>
                                {volumeIcon(volume)}
                            </div>
                            <div className="volume-slider">
                                <input
                                    type="range"
                                    min="0"
                                    max="99"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    className="volSlider"
                                />
                            </div>
                        </div>

                        <div className="soundButtons">
                            <button
                                onClick={isRainPlaying ? stopRainSound : playRainSound}
                                className={isRainPlaying ? "active" : ""}
                            >
                                <FontAwesomeIcon icon={faCloudRain} className={isRainPlaying ? "activeIcon" : ""} />
                            </button>

                            <button
                                onClick={isTrafficPlaying ? stopTrafficSound : playTrafficSound}
                                className={isTrafficPlaying ? "active" : ""}
                            >
                                <FontAwesomeIcon icon={faCar} className={isTrafficPlaying ? "activeIcon" : ""} />
                            </button>

                            <button
                                onClick={isPeoplePlaying ? stopPeopleSound : playPeopleSound}
                                className={isPeoplePlaying ? "active" : ""}
                            >
                                <FontAwesomeIcon icon={faUsers} className={isPeoplePlaying ? "activeIcon" : ""} />
                            </button>

                            <button
                                onClick={isFireplaying ? stopFireSound : playFireSound}
                                className={isFireplaying ? "active" : ""}
                            >
                                <FontAwesomeIcon icon={faFire} className={isFireplaying ? "activeIcon" : ""} />
                            </button>
                        </div>

                        <audio ref={rainAudioRef} src={rainSound} loop />
                        <audio ref={trafficAudioRef} src={trafficSound} loop />
                        <audio ref={peopleAudioRef} src={peopleSound} loop />
                        <audio ref={fireAudioRef} src={campFire} loop />
                    </div>

                </div>
                <div>


                </div>
            </div>
        </div>
        </>
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
