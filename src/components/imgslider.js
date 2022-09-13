import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const ImgSlider = (props) => {
    let settings = {
        dots:true,
        infinite:true,
        speed:500,
        sliderToShow:1,
        sliderToScroll:1,
        autoplay:true,
    }
    return ( 
        <Crousel {...settings}>
            <Wrap>
                <a>
                    <img src="/images/slider-badging.jpg"/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scale.jpg"/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-badag.jpg"/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scales.jpg"/>
                </a>
            </Wrap>
        </Crousel>
     );
}
 
const Crousel = styled(Slider)`
    margin-top:25px;

    & > button{
        opacity:0;
        height:100%;
        width:5vw;

        &:hover{
            opacity:1;
            transition: opacity 0.3s;
        }
    }


    ul li button{
        &:before{
            font-size:10px;
            color:rgab(150,158,171);
        }
    }

    li.slick-active button:before{
        color:white;
    }

    .slick-list{
        overflow:initial;
    }

    .slick-prev{
        left:-75px;
        display:block;
        z-index:1;
    }

    .slick-next{
        right:-75px;
    }
    
`

const Wrap = styled.div`
    border-radius:4px;
    position:relative;
    cursor:pointer;


    a{
        border-radius:4px;
        cursor:pointer;
        position:relative;
        display:block;
        padding:4px;
        box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        


        img{
            border-radius:4px;
            width:100%;
            height:100%;
        }

        &:hover{
            padding:0;
            border: 3px solid rgba(249,249,249, 0.8);
        }
    }

`

export default ImgSlider;