import styled from "styled-components";

type ContainerProps = {

};


export const Container = styled.div(( {} : ContainerProps) => (`
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
        color: #FFF;
        font-size: 18px;
        flex: 1;
    }

`))