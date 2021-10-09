import styled, {DefaultTheme} from "styled-components";

type ContainerProps = {
    theme: DefaultTheme
};


export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    div{
        margin-right: 5px;
    }

    input{
        background: transparent; 
        outline: 0;
        border: 0;
        color: ${props => props.theme.colors.primary};
        font-size: 18px;
        flex: 1;
    }

`;