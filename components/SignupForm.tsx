import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { DefaultButton } from "../styles/auth.style";
import AuthInput from "./AuthInput";

const SignupForm = () => {
    const API_URI = process.env.NEXT_PUBLIC_API_URI;
    const router = useRouter();
    
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [nickname_message, setNickname_message] = useState('사용하실 닉네임을 입력해주세요.');
    const [email_message, setEmail_message] = useState('이메일을 입력해주세요.');
    const [password_message, setPassword_message] = useState('8자리 이상 입력해주세요.');
    const [password2_message, setPassword2_message] = useState('');

    const email_regExp = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/;

    const button = useRef<HTMLButtonElement>(null);
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        // 모든 형식 만족시 버튼 활성화
        if(
            nickname.length !== 0 &&
            email_regExp.test(email) &&
            password.length >= 8 &&
            password === password2)
        {
            setDisable(false);
        }else{// 모든 형식 불만족시 버튼 비활성화
            setDisable(true);
        }


        // if(nickname.length < 4){
        //     setNickname_message('최소 4자 이상 입력하세요')
        // }else if(!email_regExp.test(email)){
        //     setEmail_message('이메일 형식이 아닙니다')
        // }else if(password.length < 8){
        //     setPassword_message('8자리 이상 입력하세요');
        // }else if(password !== password2){
        //     setPassword2_message('비밀번호가 다릅니다');
        // }
    },[nickname,email,password,password2])

    const validityCheck = (e:any) => {
        const type = e.target.name;
        const value = e.target.value.trim();

        // setNickname_message('');
        // setEmail_message('');
        // setPassword_message('');
        // setPassword2_message('');
        // 상태값 변경
        if(type === 'nickname'){
            setNickname(value);
        }else if(type === 'email'){
            setEmail(value);
        }else if(type === 'password'){
            setPassword(value);
        }else if(e.target.name === 'password2'){
            setPassword2(value);
        }
    }

    // 회원가입
    const signup = (e:any) => {
        e.preventDefault();

        const fetchData = {email, password} //전송 데이터

        axios.post(API_URI + '/users/create',fetchData) //회원가입 요청
        .then((res) => {
            if(res.status === 200){ //회원가입 성공시
                router.push('/auth'); //루트 경로로 이동
            }
        })
        .catch((err) => alert('이미 존재하는 유저입니다.')) //회원가입 실패시
    }

    return (
        <form>
            <AuthInput type='text' name="nickname" value={nickname} func={validityCheck} placeholder="닉네임" maxLength={10} message={nickname_message} />
            <AuthInput type='text' name="email" value={email} func={validityCheck} placeholder="이메일" message={email_message} />
            <AuthInput type='password' name="password" value={password} func={validityCheck} placeholder="비밀번호" minLength={8} message={password_message} />
            <AuthInput type='password' name="password2" value={password2} func={validityCheck} placeholder="비밀번호 확인" minLength={8} message={password2_message} />
            <Link className="btn" href='/auth'>로그인</Link>
            <DefaultButton ref={button} onClick={signup} disabled={disable}>등록</DefaultButton>
        </form>
    )
}

export default SignupForm;