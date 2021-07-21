import React, { useState } from 'react'
import styled from 'styled-components'



export const Filter=(props) =>{
  // const {incompleteTodos} = props;
  // const [] = useState("")

  const [filter,setFilter] = useState()

  const onClickSort =(e)=>{
    console.log(e.target.value)
  // setFilter(e.target.value)
  }

  return (
    <FIlterBlock>
      <FIlter>
        <BUtton onClick={()=>onClickSort('全て')}>全て</BUtton>
        <BUtton onClick={()=>onClickSort('未着手')}>未着手</BUtton>
        <BUtton onClick={()=>onClickSort('進行中')}>進行中</BUtton>
        <BUtton onClick={()=>onClickSort('完了済み')}>完了済み</BUtton>
      </FIlter>
    </FIlterBlock>
  )
}

export default Filter

const FIlterBlock = styled.div`
width:80%;
`


const FIlter = styled.div`
display:flex;
justify-content:space-evenly;
padding:10px ;
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