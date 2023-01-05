import SignupForm from "../../components/SignupForm";
import {Title} from "../../components/Title";
import { Auth_Wrapper } from "../../styles/auth.style";

const Signup = () => {
    return (
        <Auth_Wrapper>
            <Title />
            <div className="title">회원가입</div>
            <SignupForm />
        </Auth_Wrapper>
    )
}

export default Signup;