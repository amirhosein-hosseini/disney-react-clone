import styled from "styled-components";

const Watchway = (props) => {
    return ( 
        <Container>
            <Wrapper>
                <LeftWatch>
                    <img src="/images/original.png"></img>
                </LeftWatch>
                <RightWatch>
                    <h1>
                    Watch the way you want
                    </h1>
                    <h3>
                    Host virtual movie nights with GroupWatch. Pause, rewind and react with up to six personal friends. To invite or be invited to join GroupWatch, subscription is required
                    </h3>
                    <h3>
                    Download any movie or series and watch on-the-go
                    </h3>
                    <h3>
                    Keep your family safe with easy parental controls
                    </h3>
                    <h3>
                    An ever-growing range of titles in stunning 4K UHD and Dolby Atmos sound on compatible devices
                    </h3>
                    <h3>
                    Stream on up to four devices at the same time
                    </h3>
                </RightWatch>
            </Wrapper>
            <Button>
                Sign Up Now
            </Button>
        </Container>
     );
}
 
const Container = styled.div`
    width:90%;
    max-width:1200px;
    margin:0 auto;
`
const Wrapper = styled.div`
    display:flex;
    flex-dirextion:row;
    gap:30px;
    margin-bottom:200px;


    @media only screen and (max-width:768px){
        flex-direction:column;
    }
`

const LeftWatch = styled.div`
    flex:1;
    overflow:hidden;

    img{
        
        width:100%;
        height:100%;
    }
`

const RightWatch = styled.div`
    flex:1;


    h1{
        font-size:40px;
        text-align:left;
    }
    h3{
        font-size:18px;
        text-align:left;
        font-weight:200;
        line-height:25px;
        display:list-item;
        margin-left:30px;
        color:silver;
    }
`


const Button = styled.a`
    text-transform:uppercase;
    cursor:pointer;
    font-weight:bold;
    font-size:18px;
    letter-spacing:1.5px;
    background-color:#0063e5;
    padding:30px 130px;
    border-radius:4px;

    &:hover{
        background:#0483ee;
    }
`

export default Watchway;