import styled from "styled-components";

const Avaible = (props) => {
    return ( 
        <div>
            <Container>
                <AviableHeader>
                Available on your favourite devices
                </AviableHeader>
                <Wrapper>
                    <Item>
                        <ItemImage>
                            <img src="/images/original (1).png"></img>
                        </ItemImage>
                        <h1>
                            TV
                        </h1>
                        <h3>
                            Android TV devices
                            <br/>
                            Apple TV
                            <br/>
                            Chromecast
                            <br/>
                            LG TVs
                            <br/>
                            Samsung
                        </h3>
                    </Item>
                    <Item>
                        <ItemImage>
                            <img src="/images/original (2).png"></img>
                        </ItemImage>
                        <h1>
                            Computer
                        </h1>
                        <h3>
                            Chrome OS
                            <br/>
                            MacOS
                            <br/>
                            Windows PC
                        </h3>
                    </Item>
                    <Item>
                        <ItemImage>
                            <img src="/images/original (3).png"></img>
                        </ItemImage>
                        <h1>
                            Mobile & Tablet
                        </h1>
                        <h3>
                        Android Phones & Tablets
                        <br/>
                        iPhone & iPad
                        </h3>
                    </Item>
                    <Item>
                        <ItemImage>
                            <img src="/images/original (4).png"></img>
                        </ItemImage>
                        <h1>
                            Game Consoles
                        </h1>
                        <h3>
                            PS4
                            <br/>
                            PS5
                            <br/>
                            Xbox One
                            <br/>
                            Xbox Series X
                            <br/>
                            Xbox Series S
                        </h3>
                    </Item>
                </Wrapper>
            </Container>
        </div>
     );
}


const Container = styled.div`
    width:90%;
    max-width:1200px;
    margin:0 auto;
    margin-top:200px;
`
const AviableHeader = styled.h1`
    font-size:40px;
`

const Wrapper = styled.div`
    margin-top:50px;
    display:flex;
    flex-direction:row;
    gap:50px;


    @media only screen and (max-width:768px){
        display:grid;
        grid-template-columns:1fr 1fr;
    }
`
const Item = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;

    h3{
        font-size:18px;
        line-height:25px;
        font-weight:300;
        color:silver;
        mrgin-top:-20px;
    }
`

const ItemImage = styled.div`
    overflow:hidden;

    img{
        object-fit:cover;
        height:100%;
        width:100%;
    }
`

export default Avaible;