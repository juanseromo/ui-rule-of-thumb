import React from "react";
import "./votingCard.styles.css"
import thumbsUp from '../assets/img/thumbs-up.svg';
import thumbsDown from "../assets/img/thumbs-down.svg";


const VotingCard = ({data, currentView, mobileOrDesk}) => {

    const persistVoting = () => {
        // if thumbsUp or thumbsDown are pressed
        // enable voteNow button
        // if voteNow button is pressed
        // modify texts
        // modify data object and save to localstorage updated values
        // or save in localstorage the quantity of votes, then add them to the gaugeBar
    }

    let url = process.env.NODE_ENV === 'development' ? `/${data.picture}` : `https://juanseromo.github.io/ui-rule-of-thumb/${data.picture}`;

    console.log(currentView)

    return (
        <div className={ currentView === 'List' || currentView === null ? 'card_container' : 'card_container__grid' } style={{ backgroundImage: `url(${url})`, backgroundRepeat: 'no-repeat',   } } >
            <div className={ currentView === 'List' || currentView === null ? 'card_content' : 'card_content__grid' } >
                <div className='banner__text' >
                    <button className='button_thumb' style={{backgroundColor: '#FBBD4A' }} >
                        {
                            // if most voted rating is more than 50%
                            // display thumbs up else display down
                        }
                        <img src={thumbsUp} alt="thumbsUp" />
                    </button>
                    <div className='text_container'>
                        <h2 className='banner__text_title'>
                            {
                                data.name
                            }
                        </h2>
                        <p className='banner__text_info'>
                            {
                                data.description
                            }
                        </p>
                    </div>
                </div>
                <div style={{ marginRight: '12px', display: "flex", flexDirection: 'column', alignSelf: 'end' }}>
                    <h5 className='eyeBrow_text'> 1 month ago in Entertainment</h5>
                    <div className='voting_buttons' style={{display: 'flex', flexDirection: 'row'}}>
                        <button className='button_thumb __voting' style={{backgroundColor: '#FBBD4A' }} >
                            <img src={thumbsUp} alt="thumbsUp" />
                        </button>
                        <button className='button_thumb __voting' style={{backgroundColor: '#FBBD4A' }} >
                            <img src={thumbsDown} alt="thumbsDown" />
                        </button>
                        {
                            //should be disabled by default
                            //if either button is pressed should toggle and enable vote now
                            <button className="voteNow__button" >
                            Vote Now
                            </button>
                            // if voteNow is pressed
                            // post data
                            // change eyeBrow_text to thank you for your vote!
                            // vote now text shoylc change to the copy "Vote Again"
                            // gaugebar should reflect changes and percentage should be updated

                            // if voteAgain is pressed all buttons return to previuos state and
                            // modified texts shoyld be reverted to original state
                            // gauge bar should persist votes already posted
                        }
                    </div>
                </div>
            </div>
            <div className='gauge_bar' >
                <div className='gauge_bar__percent' style={{width: '25%', backgroundColor: 'rgba(60, 187, 180, 0.6)'}}>
                    <img width='15px' src={thumbsUp} alt="thumbsUp" />
                    <h3 className="percent_text">25.5%</h3>
                </div>
                <div className='gauge_bar__percent' style={{width: '75%', backgroundColor: 'rgba(249, 173, 29, 0.6)', flexDirection: "row-reverse" }}>
                    <img width='15px'  src={thumbsDown} alt="thumbsDown" />
                    <h3 className="percent_text">74%</h3>
                </div>
            </div>
        </div>
    )
}

export default VotingCard;