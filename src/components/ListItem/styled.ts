import styled, { DefaultTheme } from "styled-components";

interface ContainerProps{
    done: boolean;
    theme: DefaultTheme
}

export const Container = styled.div(({done, theme}: ContainerProps) => (
    `
    display: flex;
    align-items: center;
    background-color: ${theme.background.secundary};
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;

    input{
        width: 25px;
        height: 25px;
        margin-right: 10px
    }

    label{
        color: ${theme.colors.secundary};
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`));

