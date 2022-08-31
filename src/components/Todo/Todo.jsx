import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Tasks from '../TodoList/TodoList';


function Todo({memoizedCallback, Theme}) {

  return (
    <div>
      <Header memoizedCallback={memoizedCallback} Theme={Theme} />
      <Tasks />
      <div className="credits">

      </div>
    </div>
  )
}

export default Todo;