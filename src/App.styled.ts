import styled from "styled-components";

export const Container = styled.div`
    background-color:  ${props => props.theme.background.primary};
    color: ${props => props.theme.colors.primary};
    min-height: 100vh;
    transition: all 1s ease 0s, transform 1s ease 0s;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px;
`;

export const Header = styled.div`
    margin: 0;
    padding: 0;
    color: ${props => props.theme.colors.primary};
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.h1`

`