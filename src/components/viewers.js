import styled from "styled-components";

const Viewers = (props) => {
    return ( 
        <Containers>
            <Wrap>
                <img src="/images/viewers-disney.png"/>
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png"/>
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src="\videos\1564676714-pixar.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png"/>
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src="\videos\1564676115-marvel.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png"/>
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src="\videos\1608229455-star-wars.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png"/>
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src="\videos\1564676296-national-geographic.mp4" type="video/mp4"/>
                </video>
            </Wrap>
        </Containers>
     );
}
 
const Containers = styled.div`
    margin-top:25px;
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns: repeat(5, minmax(0 , 1fr));
    padding:30px 0px 26px;


    @media only screen and (max-width:768px){
        grid-template-columns: repeat(1, minmax(0 , 1fr));
    }
`

const Wrap = styled.div`
    cursor:pointer;
    border-radius:10px;
    padding-top:50%;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:0.3s;
    border:3px solid rgba(249,249,249, 0.1);
    overflow:hidden;
    position:relative;

    img{
        inset:0;
        position:absolute;
        object-fit:cover;
        height:100%;
        transition:opacity 0.5s;
        width:100%;
        z-index:1;
    }


    video{
        height:100%;
        width:100%;
        position:absolute;
        top:0;
        opacity:0;
        z-index:0;
        transform: scale(1.09);
    }

    &:hover{
        transform:scale(1.05);
        border-color: rgba(249,249,249, 0.8);

        video{
            opacity:1;
        }
    }

`

export default Viewers;