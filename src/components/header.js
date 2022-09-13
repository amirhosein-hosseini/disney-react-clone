import styled from "styled-components";

const Header = (props) => {
    return ( 
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt=""></img>
            </Logo>
            <NavMenu>
                <a>
                    <img src="images/home-icon.svg"></img>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="images/search-icon.svg"></img>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="images/watchlist-icon.svg"></img>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="images/original-icon.svg"></img>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="images/movie-icon.svg"></img>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="images/series-icon.svg"></img>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <Login href="/home">Login</Login>
        </Nav>
     );
}
 
const Nav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:80px;
    background-color:#090b13;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 36px;
    z-index:3;
`

const Logo = styled.a`
    width:100px;
    max-height:70px;
`

const NavMenu = styled.div`
    align-items:center;
    display:flex;
    justify-content:flex-end;
    margin-right:auto;
    margin-left:25px;


    a{
        cursor:pointer;
        display:flex;
        align-items:center;
        padding:0 12px;
        gap:2px;

        img{
            height:20px;
            min-width:20px;
            width:20px;
        }

        span{
            font-size:15px;
            letter-spacing:1.42px;
            color:rgba(249,249,249);
            line-height:1.08;
            padding:2px 0px;
            position:relative;


            &:before{
                background-color:white;
                content:'';
                position:absolute;
                left:0;
                bottom:-6px;
                right:0;
                height:2px;
                transform-origin:left center;
                transform:scaleX(0);
                visibility:hidden;
                transition:0.3s;
                opacity:0;
            }
        }
        &:hover{
            span:before{
                visibility:visible;
                transform:scaleX(1);
                opacity:1;
            }
        }
    }

    @media only screen and (max-width:768px){
        display:none;
    }
`

const Login = styled.a`
    text-decoration:none;
    cursor:pointer;
    background:rgba(0,0,0,0.6);
    color:#f9f9f9;
    padding:8px 16px;
    border:1px solid #f9f9f9;
    letter-spacing:1.5px;
    text-transform:uppercase;
    border-radius:4px;
    transition:0.3s;

    &:hover{
        background:#f9f9f9;
        color:#000;
        border-color:transparent;
    }
`

export default Header;