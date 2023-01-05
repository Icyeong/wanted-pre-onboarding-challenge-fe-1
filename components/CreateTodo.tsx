import axios from "axios";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { todoList } from "../atoms/atoms";
import { FormWrapper } from "../styles/todolist.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CreateTodo = () => {
    const API_URI = process.env.NEXT_PUBLIC_API_URI;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [todos, setTodos] = useRecoilState(todoList);

    const titleEl = useRef<HTMLInputElement>(null);


    // todo 생성
    const createTodo = (e:any) => {
        e.preventDefault();

        const fetchData = {title, content} //생성 내용
        
        axios.post(API_URI + '/todos', fetchData) //todo 생성하기
        .then((res) => {
            setTodos([...todos, res.data.data])
            initInput();//input 초기화
        })
        .catch((err) => console.log(err));
    }

    // iniput 초기화
    const initInput = () => {
        setTitle(''); //input-title 초기화
        setContent(''); //input-content 초기화
        if(titleEl.current){ 
            titleEl.current.focus(); //input-title에 포커스
        }
    }
    return (
        <FormWrapper>
          <input type='text' ref={titleEl} name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력하세요" />
          <input type='text' name='content' value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용을 입력하세요" />
          <button onClick={createTodo}><FontAwesomeIcon icon={faPlus} /></button>
        </FormWrapper>
    )
}

export default CreateTodo;