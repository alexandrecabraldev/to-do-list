import styled from "styled-components";
import LogoRocket from "../assets/rocket.svg"

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    width: 100%;
    max-height: 12.5rem;
    padding: 4.5rem 0 5rem;
    background-color: ${props=>props.theme["gray-700"]};
    
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 3rem;

    span:nth-child(1){
        color: ${props=>props.theme.blue};
    }

    span:nth-child(2){
        color: ${props=>props.theme.purpleDark};
    }
`;

export function Header(){
    return (
        <HeaderContainer>
            <img src={LogoRocket} alt="foguete decolando, logotipo do site"/>
            
            <div>
                <span>to</span>
                <span>do</span>
            </div>
        </HeaderContainer>
    )
}
