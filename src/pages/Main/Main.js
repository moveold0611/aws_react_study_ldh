import React, { useState } from 'react';

function Main(props) {
    // state를 활용한 재랜더링

    let todoInputValue = null;
    const [ todoContent, setTodoConent ]= useState("");
    const [ todoContentArray, setTodoConentArray ]= useState([]);

    const handleTodoInputChange = (e) => {
        todoInputValue = e.target.value;
    }

    const handleAddClick = () => {
        // 리액트는 querySelector를 안쓰기 위해서 사용하는 라이브러리.
        // const todoInput = document.querySelector(".todo-input");
        // alert(todoInput.value)
        alert(todoInputValue);
        // setTodoConent(todoInputValue);
        setTodoConentArray([...todoContentArray, todoInputValue])
        todoContentArray.push(todoInputValue)
    }



    return (
        <div>
            <div>
                <input type="text" onChange={handleTodoInputChange} />
                <button onClick={handleAddClick}>추가</button>
            </div>
            <ul>
                {/* {!!todoContent && (<li>{todoContent}</li>)} */}
                {todoContentArray.map(todoContent => {
                    
                    return (<li>{todoContent}</li> )
                })}
            </ul>
        </div>
    );




}

export default Main;