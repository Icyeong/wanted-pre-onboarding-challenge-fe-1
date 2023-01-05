import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selected_todo, selected_todo_readOnly, todoList } from "../atoms/atoms";

const TodoDetail = () => {
    const API_URI = process.env.NEXT_PUBLIC_API_URI;
    const [todos, setTodos] = useRecoilState(todoList);
    const [todoInfo, setTodoInfo] = useRecoilState(selected_todo);
    const read_todoInfo = useRecoilValue(selected_todo_readOnly);

    const [disable, setDisable] = useState(true);
    const button = useRef<HTMLInputElement>(null);

    // 수정중인 todo 상세가 반영된 todo목록 리스트
    const edited_todos = todos.map((todo:any) => {
        if(todo.id === todoInfo.id){
            return todoInfo
        }else{
            return todo
        }
    })

    // todo input상태 변경
    const inputHandler = (e:any) =>{
        if(e.target.name === 'title'){ //title-input 내용 변경될때
            setTodoInfo({...todoInfo, title:e.target.value});
        }else if(e.target.name === 'content'){ //content-input 내용 변경될때
            setTodoInfo({...todoInfo, content:e.target.value});
        }
    }

    // todo 수정하기
    const editTodo = () => {
        setDisable(!disable); //수정 상태 변경 (활성화/비활성화)

        // 기존 내용과 다른 경우에만 (변경사항 생김)
        if(read_todoInfo.title !== todoInfo.title || read_todoInfo.content !== todoInfo.content){
            // 변경 요청 보내기
            axios.put(API_URI + `/todos/${todoInfo.id}`,todoInfo)
            .then((res) => {
                setTodos(edited_todos);
            })
            .catch((err) => console.log(err));
        }
    }

    // todo 수정 취소하기
    const cancelEditing = () => {
        setDisable(!disable); //수정 상태 변경 (활성화/비활성화)

        // input 내용 변경 전의 데이터
        const original = todos.map((todo:any) => {
            if(todo.id === todoInfo.id){
                return read_todoInfo
            }else{
                return todo
            }
        })
        // 수정 전의 데이터로 적용
        setTodos(original) //todo 목록
        setTodoInfo(read_todoInfo) //수정중이던 todo 상세
    }

    // 수정하고 있는 내용이 실시간으로 todo목록에서도 보여지기
    useEffect(() => {
        setTodos(edited_todos);
    },[todoInfo])

    return (
        <div className='todoDetail'>
            <h2>todo 상세</h2>
            <div className='container'>
                <div className='card'>
                    <input ref={button} className="title" name="title" value={todoInfo.title} onChange={inputHandler} disabled={disable} />
                    <input ref={button} className="content" name="content" value={todoInfo.content} onChange={inputHandler} disabled={disable} />
                    <div className="btn-wrapper">
                        <button onClick={editTodo}>{disable ? '수정' : '완료'}</button>
                        {!disable && <button onClick={cancelEditing}>취소</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoDetail;