import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faMinus } from "@fortawesome/free-solid-svg-icons";

const WhatIs = (props) => {
    return ( 
        <WhatContainer>
            <WhatHeader>
                Frequently Asked Questions
            </WhatHeader>
            <WhatItem id={"1"}>
                <span onClick={() => handelShow("1")}>
                    <h1>What is Disney+?</h1>
                    <i icon={faPlus} className={"show"}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </i>
                    <i className={""}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </i>
                </span>
                <PlusWhatItem>
                    <div>
                        <h2>
                            Disney+ is the streaming home for entertainment from Disney, Pixar, Marvel, Star Wars, National Geographic, Star and more.
                            <br/>
                            <br/>
                            <br/>
                            Disney+ has a number of benefits included in the standard subscription price:
                        </h2>
                        <h3>
                            Exclusive Originals you can’t see anywhere else, blockbuster movies, bingeable shows, snackable shorts, and inspiring documentaries
                        </h3>
                        <h3>
                            Unlimited downloads on up to 10 devices and up to 7 different profiles
                        </h3>
                        <h3>
                            4K UHD streaming with Dolby Vision and Dolby Atmos support on compatible devices for no extra cost
                        </h3>
                        <h3>
                            A robust parental controls system including dedicated profiles for children
                        </h3>
                        <h3>
                            Up to 4 screens can stream simultaneously
                        </h3>
                        <h3>
                            Host virtual viewing parties for up to 5 personal friends with Groupwatch
                        </h3>
                    </div>
                </PlusWhatItem>
            </WhatItem>
            <WhatItem id={"2"}>
                <span onClick={() => handelShow("2")}>
                    <h1>
                        What Can I watch on Disney+?
                    </h1>
                    <i className={"show"}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </i>
                    <i className={""}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </i>
                </span>
                <PlusWhatItem>
                    <div>
                        <h2>
                            With thousands of films and series from the greatest storytellers around the globe and more added each month, you will always find something to watch on Disney+
                        </h2>
                        <h3>
                            The latest live-action and animated blockbusters from Disney, like Encanto
                        </h3>
                        <h3>
                            Heart-warming storytelling for all ages from the masterminds at Pixar such as the must-see coming-of-age adventure Turning Red
                        </h3>
                        <h3>
                            Experience the ever-growing story of the Marvel Cinematic Universe like never before with must-see exclusive Original series from Marvel Studios - WandaVision, The Falcon and The Winter Soldier, Loki and Hawkeye
                        </h3>
                        <h3>
                            Relive the epic Skywalker Saga or stream the world’s first ever live-action Star Wars series, The Mandalorian
                        </h3>
                        <h3>
                            Open your eyes to the beauty of our planet with fearless National Geographic explorers and a number of insightful documentaries
                        </h3>
                        <h3>
                            With Star you will find bingeable series that everyone is talking about like the 11th season of the global phenomenon The Walking Dead and the new Season 18 of Grey's Anatomy
                        </h3>
                    </div>
                </PlusWhatItem>
            </WhatItem>
            <WhatItem id={"3"}>
                <span onClick={() => handelShow("3")}>
                    <h1>
                        How much does Disney+ cost?
                    </h1>
                    <i className={"show"}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </i>
                    <i className={""}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </i>
                </span>
                <PlusWhatItem>
                    <div>
                        <h2>
                            Disney+ subscription costs €8,99 a month. Alternatively, save 15%* with the annual subscription at €89,90 a year and get 12 months for the price of 10.
                            <br/>
                            <br/>
                            You can also purchase a Disney+ annual subscription for someone else as a gift, here.
                            <br/>
                            <br/>
                            *Savings compared to 12 months (€107.88) of the monthly subscription price
                        </h2>
                    </div>
                </PlusWhatItem>
            </WhatItem>
            <WhatItem id={"4"}>
                <span onClick={() => handelShow("4")}>
                    <h1>
                        What divices are Support?
                    </h1>
                    <i className={"show"}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </i>
                    <i className={""}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </i>
                </span>
                <PlusWhatItem>
                    <div>
                        <h2>
                            Disney+ supports mobile devices, web browsers, game consoles, set-top boxes, and smart TVs. Click here for the full list.
                        </h2>
                    </div>
                </PlusWhatItem>
            </WhatItem>
            <WhatItem id={"5"}>
                <span onClick={() => handelShow("5")}>
                    <h1>
                        Is there any commitment when signing up for Disney+?
                    </h1>
                    <i className={"show"}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </i>
                    <i className={""}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </i>
                </span>
                <PlusWhatItem>
                    <div>
                        <h2>
                            There are no commitments and you can cancel at any time, effective at the end of your current payment period. Just follow the below 5 easy steps:
                        </h2>
                        <ol>
                            <li>
                                Go to www.disneyplus.com and log in
                            </li>
                            <li>
                                Select your Profile
                            </li>
                            <li>
                                Select Account
                            </li>
                            <li>
                                Select Cancel Subscription
                            </li>
                            <li>
                                Select Complete Cancellation to confirm
                            </li>
                        </ol>
                        <h2>
                            For more information click here.
                        </h2>
                    </div>
                </PlusWhatItem>
            </WhatItem>
        </WhatContainer>
     );
}
 
const WhatContainer = styled.div`
    width:90%;
    max-width:1200px;
    display:flex;
    margin:0 auto;
    flex-direction:column;
    gap:20px;
    margin-top:200px;
`

const WhatHeader = styled.h1`
    font-size:40px;
`

const WhatItem = styled.div`
    display:flex;
    flex-direction:column;
    background:#13151d;
    padding:20px;

    h1{
        text-align:left;
        font-size:20px;
        font-weight:300;
        color:#f9f9f9;
    }
    
    span{
        display:flex;
        justify-content:space-between;
        align-itemx:center;
        cursor:pointer;


        i{
            font-size:20px;
            margin-top:16px;
            display:none;
            
        }
        i.show{
            display:block;
        }

    }
`

const PlusWhatItem = styled.div`
    display:flex;
    flex-direction:column;


    h2{
        font-size:20px;
        color:silver;
        text-align:left;
        font-weight:200;
        margin-bottom:35px;
    }


    h3{
        display:list-item;
        text-align:left;
        font-size:20px;
        color:silver;
        font-weight:200;
        margin-left:50px;
        margin-top:-1px;
    }
    
    

    li{
        text-align:left;
        font-size:20px;
        font-weight:200;
        color:silver;
        margin-top:10px;
    }

    div{
        max-height:0;
        overflow:hidden;
        transition:max-height,.25s ease-in-out;
    }
    div.notShow{
        max-height:1500px;
        transition:max-height,.25s ease-in-out;
    }
`


let list = "1"


const handelShow = (counterID) =>{
    if (list === "1"){
        document.getElementById(counterID).children[0].children[1].classList.remove('show');
        document.getElementById(counterID).children[0].children[2].classList.add('show');
        document.getElementById(counterID).children[1].children[0].classList.add('notShow');
        
        list = "2"
    }
    else if (list === "2"){
        document.getElementById(counterID).children[0].children[2].classList.remove('show');
        document.getElementById(counterID).children[0].children[1].classList.add('show');
        document.getElementById(counterID).children[1].children[0].classList.remove('notShow');
        list = "1";
    }

}

export default WhatIs;