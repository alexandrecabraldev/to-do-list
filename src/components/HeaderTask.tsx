import styled from "styled-components";


const HeaderTaskContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    margin-bottom: 1.5rem;

    span{
        div{
            display: inline;
            margin-left: 0.5rem;
            padding: 0.125rem 0.5rem;
            background-color:  ${props=>props.theme["gray-400"]};
            color: ${props=>props.theme["gray-100"]};
            border-radius: 8px;
            font-size: 0.75rem;
        }
    }

    span:nth-child(1){
        color: ${props=>props.theme.blue};
    }

    span:nth-child(2){
        color: ${props=>props.theme.purple};   
    }

`;

export function HeaderTask(props: any){
    return(
        <HeaderTaskContainer>
            <span>Tarefas criadas 
                <div>{props.countTask}</div>
            </span>

            <span>Concluídas
                <div>{`${props.paramCountTaskDone} de ${props.countTask}`}</div>
            </span>
        </HeaderTaskContainer>
    );
}