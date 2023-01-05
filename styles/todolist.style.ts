import styled from "styled-components";

export const Todo_wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(180deg, #68A9E9 0%, #2049B2 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .logout-btn{
        background: none;
        border: none;
        font-size: 16px;
        font-weight: 900;
        padding: 2px;
        color: white;
        border-bottom: 1px solid white;
        position: fixed;
        top: 30px;
        right: 30px;
        cursor: pointer;
    }
    section{
        display: flex;
        justify-content: space-between;
        width: 70%;
        flex: 1;
        max-height: calc(100vh - 223px);
    }
    .container{
        padding-right: 3px;
        padding-bottom: 10px;
        overflow-y: scroll;
    }
    .container::-webkit-scrollbar{
        width: 5px;
    }
    .container::-webkit-scrollbar-thumb{
        background:rgba(255, 255, 255, 0.4) ;
        border-radius: 30px;
    }
    .container::-webkit-scrollbar-track {
        /* background:rgba(0, 0, 0, 0.15) ; */
    }
    .todoList, .todoDetail{
        width: 49%;
        display: flex;
        flex-direction: column;
        h2{
            font-size: 24px;
            font-weight: 900;
            color: white;
            padding: 2px 0;
            margin: 0 0 10px 3px;
        }
    }
    .todoList{
        .card{
            width: 100%;
            min-height: 80px;
            border: 1px solid #2049B2;
            border-radius: 7px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            margin-bottom: 15px;
            display: flex;
            overflow: hidden;
            transition: 0.2s;
            &:hover{
                transform: translateY(1px);
                box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.20);
            }
            button{
                background-color: white;
            }
            .card-content{
                width: 100%;
                padding:15px 20px;
                display: flex;
                align-items: center;
                .left{
                    max-width: calc(100% - 40px);
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding-right: 10px;
                    word-break: break-all;
                    p{
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        text-align: left;
                    }
                }
                .title{
                    font-size: 18px;
                    font-weight: 900;
                    color: #2049B2;
                    margin-bottom: 5px;
                }
                .content{
                    font-size: 16px;
                }
                .delete-btn{
                    width: 40px;
                    height: 30px;
                    svg{
                        width: 22px;
                        height: 22px;
                        color: #A4A4A4;
                        &:hover{
                            color: #737373;
                        }
                    }
                }
            }
        }
    }
    .todoDetail{
        .card{
            width: 100%;
            min-height: 80px;
            border: 1px solid #2049B2;
            border-radius: 7px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            margin-bottom: 15px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            background-color: white;
            padding: 15px 20px;
            input{
                border: none;
                background-color: #E9E9E9;
                padding: 10px;
                border-radius: 3px;
                &:disabled{
                    border: none;
                    background-color: white;
                    padding: 0;
                }
            }
            .title{
                font-size: 18px;
                font-weight: 900;
                color: #2049B2;
                margin: 10px 0;
            }
            .content{
                font-size: 16px;
            }
            .btn-wrapper{
                display: flex;
                align-self: end;
                margin-top: 10px;
                button{
                    font-size: 15px;
                    font-weight: 900;
                    background-color: #2049B2;
                    color: white;
                    padding: 5px 7px;
                    border-radius: 3px;
                    margin: 0 5px;
                    transition: 0.1s;
                    &:hover{
                        color: #F6DE5A;
                    }
                }
            }
        }
    }
`

export const FormWrapper = styled.form`
    width: 100%;
    height: 100px;
    background-color: #FFB800;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px 10px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
        width: 350px;
        height: 45px;
        border: none;
        border-radius: 3px;
        margin: 0 7px;
        padding: 0 10px;
        font-size: 16px;
        font-weight: 900;
    }
    button{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: #2049B2;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            svg{
                transform: scale(1.2) rotate(90deg);
            }
        }
        svg{
            width: 25px;
            height: 25px;
            color: #F6DE5A;
            transition: 0.2s;
        }
    }
`