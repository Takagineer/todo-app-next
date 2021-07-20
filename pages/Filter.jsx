import React, { useState } from 'react'
import styled from 'styled-components'


const onClickSort =()=>{

}

export const Filter=(props) =>{
  // const {incompleteTodos} = props;
  // const [] = useState("")
  
  return (
    <FIlterBlock>

    {/* { incompleteTodos } */}


      <FIlter>
        <BUtton onClick={()=>onClickSort()}>全て</BUtton>
        <BUtton onClick={()=>onClickSort()}>進行中</BUtton>
        <BUtton onClick={()=>onClickSort()}>未完了</BUtton>
        <BUtton onClick={()=>onClickSort()}>完了済み</BUtton>
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