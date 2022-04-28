import React from "react";
import "./votingCards.styles.css"
import thumbsUp from '../assets/img/thumbs-up.svg';
import thumbsDown from "../assets/img/thumbs-down.svg";

const VotingCards = () => {
    return (
        <div className='card_container'  >
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <button className='button_thumbDown'>
                    {
                        // if most voted rating is more than 50%
                        // display thumbs up else display down
                    }
                    <img src={thumbsUp} alt="thumbsUp" />
                </button>
                <div className='banner__text'>
                    <h1>
                        Kanye West
                    </h1>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, doloremque molestiae. Amet fugiat inventore saepe voluptas! Aperiam atque delectus enim harum nulla optio quae ut. Ducimus numquam obcaecati possimus provident!
                    </h3>
                </div>
                <div>
                    <h5> 1 month ago in Entertainment</h5>
                    <div className='voting_buttons' style={{display: 'flex', flexDirection: 'row'}}>
                        <img src={thumbsUp} alt="thumbsUp" />
                        <img src={thumbsDown} alt="thumbsDown" />
                        <button style={{border: '1px solid white', padding: '15px 30px'}}>
                            Vote Now
                        </button>
                    </div>
                </div>

            </div>

            <div style={{width: '100%', height: '50px', display: 'flex', flexDirection: "row" }}>
                <div style={{width: '25%'}}>
                    <img src={thumbsUp} alt="thumbsUp" />
                    <h2>25.5%</h2>
                </div>
                <div style={{width: '74%', backgroundColor: 'orange'}}>
                    <img src={thumbsDown} alt="thumbsDown" />
                    <h2>74%</h2>
                </div>

            </div>
        </div>
    )
}

export default VotingCards;