import React, {useState, useCallback} from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value ,setValue] = useState('');

    const onChangeInput = useCallback(e =>{               
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); // value 초기화
            // submit 이벤트는 브라우저에서 새로고침을 발생시킨다.
            // 이를 방지하기위해 e.preventDefault 함수를 호출한다 개꿀
            e.preventDefault();
        },
        [onInsert,value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요" 
                value={value}
                onChange={onChangeInput}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;