import React from 'react'
import styled from 'styled-components';

function TodoProgressList(props) {
const {todoProgress, setTodoProgress} = props

  const onChangeTodoProgress=(e)=>setTodoProgress(e.target.value);

  return (
    <>
      <SElect onChange={onChangeTodoProgress} value={todoProgress}>
        <option value="未着手">未着手</option>
        <option value="進行中">進行中</option>
        <option value="完了済み">完了済み</option>
      </SElect>
    </>
  )
}

export default TodoProgressList

const SElect = styled.select`
border-radius: 20px;
font-weight:10px;
width:10%;
padding:5px;
margin-top:10px;
`
