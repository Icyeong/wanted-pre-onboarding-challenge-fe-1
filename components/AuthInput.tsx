import styled from "styled-components";

const AuthInput = ({type, name, value, func, placeholder, maxLength, minLength, message}:any) => {
    return (
    <Input>
        <input type={type} name={name} value={value} onChange={func} placeholder={placeholder} maxLength={maxLength} minLength={minLength} />
        <p className="message">{message}</p>
    </Input>
    )
}

const Input = styled.div`
    input{
        width: 100%;
        background-color: white;
        border: 1px solid #2049B2;
        border-radius: 7px;
        padding: 15px;
        font-size: 18px;
        font-weight: 900;
        color: #2049B2;
        margin: 5px 0;
        &::placeholder{
            color: #2049B2;
        }
    }
    .message{
        font-size: 14px;
        color: white;
        margin-left: 5px;
        margin-bottom: 10px;
    }
`

export default AuthInput;