import styled from "styled-components";
import Avaible from "./avaible";
import Footer from "./footer";
import Watchway from "./watchway";
import WhatIs from "./whatis";




const Login = (props) => {
    return ( 
        <Container>
            <Content>
                <CTA>
                    <CTAlogoOne src="/images/cta-logo-one.svg" alt=""></CTAlogoOne>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access To Roya and teh Last Dragon For An Aditional 
                        free with a Disney+ sinscarpition.
                        the Price of Diesney+ and the Disney Bundle
                        will Increase by $1.
                    </Description>
                    <CTAlogoTwo src="/images/cta-logo-two.png" alt=""></CTAlogoTwo>
                </CTA>
                <BgImage />
            </Content>
            <Watchway />
            <Avaible/>
            <WhatIs/>
            <Footer/>
        </Container>
     );
}

const Container = styled.section`
    display:flex;
    flex-direction:column;
    overflow:hidden;
    text-align:center;


`;

const Content = styled.div`
    margin-bottom:10vw;
    width:100%;
    display:flex;
    justify-content:center;
    min-height:100vh;
    align-items:center;
    postion:relative;
    box-sizing:border-box;
    flex-direction:column;
    padding:80px 40px;
    height:100%;
`;
const BgImage = styled.div`
    height:100%;
    background-image:url('/images/login-background.jpg');
    position:absolute;
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    top:0;
    left:0;
    right:0;
    z-index:-1;
`;
const CTA = styled.div`
    max-width:650px;
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;
`;

const CTAlogoOne = styled.img`
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    display:block;
    width:100%;
`;

const SignUp = styled.a`
    margin-bottom:18px;
    cursor:pointer;
    font-weight:bold;
    font-size:18px;
    letter-spacing:1.5px;
    background-color:#0063e5;
    padding:14px 0px;
    border-radius:4px;
    display:inline-block;
    width:100%;
    &:hover{
        background-color:#0483ee;
    }
`;

const Description = styled.p`
    margin-bottom:18px;
    font-size:11px;
    line-height:1.5;
    letter-spacing:1.5px;
`;
const CTAlogoTwo = styled.img`
    margin-bottom:12px;
    width:100%;
    max-width:600px;
`;

export default Login;