import styled from "styled-components";
import { Link } from "react-router-dom";

const Trending = (props) => {
    return ( 
        <Container>
            <h4>
                Trending 
            </h4>
            <Content>
                <Wrap>
                    <Link to="/">
                        <img src="/images/poster.jpeg"></img>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/">
                        <img src="/images/poster.jpeg"></img>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/">
                        <img src="/images/poster.jpeg"></img>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/">
                        <img src="/images/poster.jpeg"></img>
                    </Link>
                </Wrap>
            </Content>
        </Container>
     );
}
 
const Container = styled.div`
    padding:0 0 26px;
`

const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));


    @media only screen and (max-width:768px){
        grid-template-columns:repeat(2,minmax(0,1fr));
    }
`

const Wrap = styled.div`
    padding-top:60%;
    border-radius:10px;
    overflow:hidden;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    position:relative;
    transition:all 0.3s;
    border:3px solid rgba(249,249,249, 0.1);
    cursor:pointer;

    img{
        position:absolute;
        inset:0;
        height:100%;
        width:100%;
        object-fit:cover;
        transition:opacity 500ms ease-in-out 0s;
    }


    &:hover{
        box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8)
    }
`


export default Trending;