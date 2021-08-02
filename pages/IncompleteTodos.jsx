import React
, { useState } from 'react';
import styled from 'styled-components';
// import IncompleteTodoProgressList from './IncompleteTodoProgressList';



export const IncompleteTodos = (props) => {
  const {
    incompleteTodos,
    onClickDelete,
    isEdit,
    setIsEdit
  } = props;

  const [isEditTitle, setIsEditTitle] = useState("")
  const [isEditText, setIsEditText] = useState("")
  const [isEditLimit, setIsEditLimit] = useState("")
  const [isEditProgress, setIsEditProgress] = useState('')
  const [filter, setFilter] = useState('全て')

  // 編集ボタンを押下した際、そのタスクの変更内容の詳細を出す処理。
  const openEdit = (index) => {
    incompleteTodos[index].isEdit = true
    // 以下の１行がよくわからない
    setIsEdit(true)
  }

  // /*更新ボタンを押した際に、各項目を更新する
  const closeEdit = (index) => {
    if (isEditTitle === "" || isEditText === "" || isEditLimit === "" || isEditProgress === "") return

    incompleteTodos[index].title = isEditTitle
    incompleteTodos[index].text = isEditText
    incompleteTodos[index].limit = isEditLimit
    incompleteTodos[index].progress = isEditProgress
    setIsEdit(false)
    setIsEditTitle('')
    setIsEditText('')
    setIsEditLimit('')
    incompleteTodos[index].isEdit = false
  }

  // /*更新ボタンを押した際に、各項目を更新する

  const onChangeEditTitle = (e) => {
    setIsEditTitle(e.target.value)
  }
  const onChangeEditText = (e) => {
    setIsEditText(e.target.value)
  }
  const onChangeEditLimit = (e) => {
    setIsEditLimit(e.target.value)
  }

  const onChangeEditProgress = (e) => {
    setIsEditProgress(e.target.value)
  }

  const newTodos = incompleteTodos.filter(todo => {
    if (filter === "全て") return todo
    if (filter === "未着手") return todo.progress === '未着手'
    if (filter === "進行中") return todo.progress === '進行中'
    if (filter === "完了済み") return todo.progress === '完了済み'
  })

  return (
    <>
      <INcompleteBlock>
        <TItle>todo一覧</TItle>

        <SElect
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value='全て'>全て</option>
          <option value='未着手'>未着手</option>
          <option value='進行中'>進行中</option>
          <option value='完了済み'>完了済み</option>
        </SElect>

        <UL>
          {newTodos.map((todo, index) => {
            return (
              <INcompleteList key={todo.id}
                style={todo.progress === "未着手" ? { background: '#FF97C2' }
                  : todo.progress === "進行中" ? { background: '#E9FFA5' }
                    : todo.progress === "完了済み" ? { background: '#78FF94' }
                      : { background: '#EEEEEE' }
                }
              >

                {todo.isEdit === false ?
                  <>
                    <LIstGuide >
                      <LI>No:{todo.id + 1}</LI>
                      <LI>期限:{todo.limit}</LI>
                    </LIstGuide>
                    <LI>Title:{todo.title}</LI>
                    <LI>内容:{todo.text}</LI>
                    <BUtton onClick={() => onClickDelete(index)}>削除</BUtton>
                    <BUtton onClick={() => openEdit(index)}>編集</BUtton>
                  </>
                  :
                  <>
                    <INputArea>
                      <TItle>編集してください</TItle>
                      <INputTag autoFocus placeholder={todo.title} value={isEditTitle} onChange={onChangeEditTitle} ></INputTag>
                    </INputArea>
                    <INputArea>
                      <TExtArea placeholder={todo.text} value={isEditText} onChange={onChangeEditText}></TExtArea>
                    </INputArea>
                    <INputArea>
                      <INputTag type="date" placeholder={todo.limit} value={isEditLimit} onChange={onChangeEditLimit}></INputTag>
                      <br />
                      <SElect value={isEditProgress} onChange={onChangeEditProgress}>
                        <option value="未着手">未着手</option>
                        <option value="進行中">進行中</option>
                        <option value="完了済み">完了済み</option>
                      </SElect>
                      <BUtton onClick={() => closeEdit(index)}>更新</BUtton>
                    </INputArea>
                  </>
                }
              </INcompleteList>
            );
          })}
        </UL>
      </INcompleteBlock>
    </>
  )
};

export default IncompleteTodos

const INcompleteBlock = styled.div`
background-color: #88FFFF;
width: 80%;
border-radius: 20px;
padding-bottom:10px;
`
const TItle = styled.p`
text-align: center;
font-size: 25px;
font-weight: bold;
color: #666;
`

const UL = styled.ul`
width:80%;
`
const LI = styled.li`
list-style:none;
margin: 10px;
`
const INcompleteList = styled.div`
background-color: #EEFFFF;
  border-radius: 20px;
  padding: 15px;
  margin:10px;
`
const BUtton = styled.button`
border-radius: 20px;
  border: none;
  margin: 3px 5px 6px 3px;
  &:hover{
    border-radius: 20px;
  border: none;
  background-color: blueviolet;
  color: white;
}
  cursor: pointer;
`

const LIstGuide = styled.div`
`


const INputArea = styled.div`
margin: 20px;
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

const SElect = styled.select`
border-radius: 20px;
font-weight:10px;
width:10%;
padding:5px;
margin-top:10px;
margin-left:50px
`