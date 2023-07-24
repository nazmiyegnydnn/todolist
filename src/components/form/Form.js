import React from 'react'

const Form = () => {
  return (
    <div className='app'>
      <form>
        <div className='search'>
            <input type='text' className='todo-input' placeholder='Add...'/>
            <button className='todo-button' type='submit'>
                <i className='fas fa-plus-circle'></i>
            </button>
        
        <div className='select'>
            <select name='todos' className='filter-todo'>
                <option value="all">All</option>
                <option value="completed">Comleted</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Form