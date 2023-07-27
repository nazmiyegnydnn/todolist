import React from 'react'
import './Form.scss'

const Form = ({
  inputText,
  setInputText,
  todos={todos},
  setTodos={setTodos}
}) => {

const inputTextHandler = (e) => {
  console.log(e.target.value)
  setInputText(e.target.value)
}
const submitTodoHandler = (e) => {
  e.preventDefault();
  setInputText("")
  setTodos([
   ...todos,
   {text: inputText , completed:false , id:Math.random() }
  ]);
  console.log(todos)
 }


  return (
    <div className='app'>
      <form>
        <div className='search'>
            <input type='text' 
            className='todo-input' 
            placeholder='Add...'
            onChange={inputTextHandler}
            value={inputText}
            />
            <button className='todo-button' type='submit' onClick={submitTodoHandler}>ADD</button>
        
        <div className='select'>
            <select name='todos' className='filter-todo'>
                <option value="all">All</option>
                <option value="completed" className='completed'>Comleted</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Form