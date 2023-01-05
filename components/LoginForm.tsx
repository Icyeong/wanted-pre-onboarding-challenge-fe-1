import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { DefaultButton } from "../styles/auth.style";
import AuthInput from "./AuthInput";

const LoginForm = () => {
    const API_URI = process.env.NEXT_PUBLIC_API_URI;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [email_message, setEmail_message] = useState('이메일을 입력해주세요.');
    const [password_message, setPassword_message] = useState('8자리 이상 입력해주세요.');
    const [disable, setDisable] = useState(true);
    const button = useRef<HTMLButtonElement>(null);
    const email_regExp = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/;
    const router = useRouter();

    useEffect(() => {
        if(// 모든 형식 만족시 버튼 활성화
            email_regExp.test(email) &&
            password.length >= 8)
        {
            setDisable(false);
        }else{// 모든 형식 불만족시 버튼 비활성화
            setDisable(true);
        }
    },[email,password])


    // 로그인
    const login = (e:any) => {
        e.preventDefault();

        const fetchData = {email, password} //전송 데이터

        axios.post(API_URI + '/users/login',fetchData) //로그인 요청
        .then((res) => {
            if(res.status === 200){ //로그인 성공시
                router.push('/'); //루트 경로로 이동
                localStorage.setItem('token', res.data.token); //토큰 저장
            }
        })
        .catch(() => alert('로그인에 실패했습니다.')) //로그인 실패시
    }
    return (
        <form>
            <AuthInput type='text' name="email" value={email} func={(e:any) => setEmail(e.target.value.trim())} placeholder="이메일" message={email_message} />
            <AuthInput type='password' name="password" value={password} func={(e:any) => setPassword(e.target.value.trim())} placeholder="비밀번호" minLength={8} message={password_message} />
            <Link className="btn" href='/auth/signup'>회원가입</Link>
            <DefaultButton ref={button} onClick={login} disabled={disable}>시작하기</DefaultButton>
        </form>
    )
}

export default LoginForm;