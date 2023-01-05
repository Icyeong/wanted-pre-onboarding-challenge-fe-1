import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist();

// todo 목록
export const todoList = atom<any>({
    key: 'todoList',
    default: []
})
// todo 상세 (todo 상태 변경시 같이 변함)
export const selected_todo = atom<any>({
    key: 'selected_todo',
    default: {},
    effects_UNSTABLE: [persistAtom]
})
// todo 상세 (서버에서 받은 원본데이터 유지)
export const selected_todo_readOnly = atom<any>({
    key: 'selected_todo_readOnly',
    default: {},
    effects_UNSTABLE: [persistAtom]
})
// todo 상세 상태 (활성화/비활성화)
export const isSelected = atom<any>({
    key: 'isSelected',
    default: false
})