import styled from "styled-components";
import ImgSlider from "./imgslider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recomonds from "./recomonds";
import Trending from "./Trending";
import Viewers from "./viewers";
import store from "./feature/store";
import movieData from "./feature/moviesData";

const Home = (props) => {
    console.log(movieData)


    return ( 
        <Container>
            <ImgSlider />
            <Viewers />
            <Recomonds/>
            <NewDisney/>
            <Originals/>
            <Trending/>
        </Container>
     );
}
 

const Container = styled.main`
    position:relative;
    min-height: calc(100vh-250px);
    display:block;
    overflow-x:hidden;
    padding: 0 calc(3.5vw + 5px);
    top:82px;


    &:after{
        background:url('/images/home-background.png') center center / cover no-repeat fixed;
        position:absolute;
        content:'';
        z-index:-1;
        inset:0px;
        opacity:1;
    }
`


export default Home;