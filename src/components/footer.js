import styled from "styled-components";

const Footer = (props) => {
    return ( 
        <FooterContainer>
            <FooterImage>
                <img src="/images/footerimage.svg"></img>
            </FooterImage>
            <FooterItems>
                <a>
                    Subscriber Agreement
                </a>
                <a>
                    Privacy Policy
                </a>
                <a>
                    UK & EU Privacy Rights
                </a>
                <a>
                    Cookies Policy
                </a>
                <a>
                    Interest-Based Ads
                </a>
                <a>
                    Supported Devices
                </a>
                <a>
                    Help Centre
                </a>
            </FooterItems>
            <FooterSecItems>
                <a>
                    About Us
                </a>
                <a>
                    Manage Preferences
                </a>
            </FooterSecItems>
            <h2>
                © 2022 Disney and its related entities. All Rights Reserved.
            </h2>
        </FooterContainer>
     );
}

const FooterContainer = styled.div`
    max-width:1200px;
    margin:0 auto;
    margin-top:100px;

    display:flex;

    flex-direction:column;

    h2{
        font-size:12px;
        text-align:center;
        color:#c0c0c0;
        margin-top:20px;
        margin-bottom:40px;
    }
`
const FooterImage = styled.div`
    img{
        height:40px;
        margin-bottom:30px;
    }
`

const FooterItems = styled.div`
    display:flex;
    gap:30px;


    a{
        font-size:12px;
        color:#c0c0c0;
    }
`

const FooterSecItems = styled.div`
    display:flex;
    gap:30px;
    margin:0 auto;
    margin-top:23px;

    a{
        text-align:center;
        font-size:12px;
        color:#c0c0c0;
    }
`

export default Footer;