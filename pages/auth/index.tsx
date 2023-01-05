import LoginForm from "../../components/LoginForm";
import { Title } from "../../components/Title";
import { Auth_Wrapper} from "../../styles/auth.style";

const Login = () => {
    return (
        <Auth_Wrapper>
            <Title />
            <div className="title">로그인</div>
            <LoginForm />
        </Auth_Wrapper>
    )
}

export default Login;