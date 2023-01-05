import styled from "styled-components";

export const Auth_Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(180deg, #2651B7 0%, #6CAFED 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
        font-size: 24px;
        font-weight: 900;
        margin-bottom: 15px;
        color: white;
    }
    form{
        width: 500px;
        display: flex;
        flex-direction: column;
        .btn{
            width: fit-content;
            align-self: end;
            font-size: 15px;
            font-weight: 600;
            color: white;
            text-align: right;
        }
    }

`

export const DefaultButton = styled.button`
    width: 100%;
    height: 65px;
    border-radius: 7px;
    background-color: #2049B2;
    color: #EED655;
    font-size: 24px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    cursor: pointer;
    transition: 0.3s;
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    transform: translateY(2px);
    
    &:disabled{
        opacity: 0.6;
        cursor: default;
        box-shadow: none;
        transform: translateY(6px);
        &:hover{
            transform: translateY(6px);
            box-shadow: none;
        }
    }

    &:hover{
        transform: translateY(4px);
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    }
`