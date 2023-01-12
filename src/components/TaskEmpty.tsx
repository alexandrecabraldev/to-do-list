import styled from "styled-components"
import {ClipboardText} from "phosphor-react"


const ContainerText = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: 2px solid ${props=>props.theme["gray-400"]};
    border-radius: 8px;
    padding-top: 4rem;
    font-size: 1rem;
    line-height: 1.4;

    svg{
        margin-bottom: 1rem;
    }

    div{
        span{
            display: block;
            text-align: center;
            color:${props=>props.theme["gray-300"]};
        }

        span:nth-child(1){
            font-weight: 700;
        }
    }
    
`;


export function TaskEmpty(){
    return (
        <ContainerText>
            <ClipboardText size={56} color="#333333"/>
            <div>
                <span>Você ainda não tem tarefas cadastradas</span>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </ContainerText>
        
    );
}