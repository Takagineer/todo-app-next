import React from 'react';
import styled from 'styled-components';
import TodoProgressList from './TodoProgressList';

export const InputTodo =(props)=>{
  const { 
    onClickAdd,
    disabled,
    todoTitle,
    setTodoTitle,
    todoText,
    setTodoText,
    todoLimit,
    setTodoLimit,
    todoProgress,
    setTodoProgress,
    onChangeTitleValue,
    onChangeTextValue,
    onChangeLimitValue,
  } = props;

  return(
    <>
    <INputBlock>
      <INputArea>
        <TItle>入力してください</TItle>
        <INputTag autoFocus disabled={disabled} placeholder="titleを入力してください" value={todoTitle} onChange={onChangeTitleValue}></INputTag>
      </INputArea>
      <INputArea>
        <TExtArea disabled={disabled} placeholder="todoを入力してください" value={todoText} onChange={onChangeTextValue}></TExtArea>
      </INputArea>
      <INputArea>
        <INputTag type="date" disabled={disabled} placeholder="limitを入力してください" value={todoLimit} onChange={onChangeLimitValue}></INputTag>
        <br />
        <TodoProgressList todoProgress={todoProgress} setTodoProgress={setTodoProgress}/>
        
          <BUtton disabled={disabled} onClick={()=>{
            onClickAdd(todoTitle,todoText,todoLimit, todoProgress)
            setTodoTitle('')
            setTodoText('')
            setTodoLimit('')
            setTodoProgress("未着手")
          }} >追加</BUtton>
        
      </INputArea>
    </INputBlock>
    </>
  )
};

const INputBlock = styled.div`
background-color: rgb(202, 211, 39);
width: 80%;
border-radius: 20px;
padding-bottom:10px;
padding-left:30px
`
const INputArea = styled.div`
margin: 20px;
`
const TItle = styled.p`
text-align: center;
font-size: 25px;
font-weight: bold;
color: #666;
`
const INputTag = styled.input`
border-radius: 20px;
border: none;
padding: 6px 20px;
outline:none
`
const TExtArea = styled.textarea`
border-radius: 20px;
border: none;
height: 80px;
width: 80%;
padding: 20px 20px;
outline:none
font-weight: bold;
`
const BUtton = styled.button`
border-radius: 20px;
border: none;
margin: 3px 5px 6px 3px;
spacing: 4;
&:hover{
border-radius: 20px;
border: none;
background-color: blueviolet;
color: white;
cursor: pointer;
}
`