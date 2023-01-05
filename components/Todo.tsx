import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isSelected, selected_todo, selected_todo_readOnly, todoList } from "../atoms/atoms";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({data}:any) => {
    const API_URI = process.env.NEXT_PUBLIC_API_URI;
    const [todoInfo, setTodoInfo] = useRecoilState(selected_todo);
    const [todos, setTodos] = useRecoilState(todoList);
    const setImmutableData = useSetRecoilState(selected_todo_readOnly);
    const setShowDetail = useSetRecoilState(isSelected);

    // Todo 데이터 불러오기
    const getTodoInfo = () => {
        axios.get(API_URI + `/todos/${data.id}`)
        .then((res) => {
            setTodoInfo(res.data.data); //수정시 변경될 데이터
            setImmutableData(res.data.data); //수정시에도 유지될 원본데이터
        })
        .catch((err) => console.log(err));
    }
    
    // 해당 Todo 삭제하기
    const deleteTodo = () => {
        const filtered = todos.filter((todo:any) => todo.id !== data.id); //삭제데이터 제외된 todo 목록

        axios.delete(API_URI + `/todos/${data.id}`) //삭제 요청
        .then((res) => {
            if(res.status === 200){
                setTodos(filtered); //성공시 삭제된 todo 목록 저장
            }
            if(todoInfo.id === data.id){ //삭제된 데이터가 상세에도 보여주고 있었다면
                setTodoInfo({}) //상세 데이터 초기화
                setShowDetail(false); //상세 보여주기 상태 비활성화
            }
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className='card'>
            <button className="card-content" onClick={getTodoInfo}>
                <div className="left">
                    <p className="title">{data.title}</p>
                    <p className="content">{data.content}</p>
                </div>
                <button className="delete-btn" onClick={deleteTodo}><FontAwesomeIcon icon={faTrash} /></button>
            </button>
        </div>
    )
}

export default Todo;