import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next";
import { useState } from "react";
import { InputTodo } from "./InputTodo";
import Filter from "./Filter";
import { IncompleteTodos } from "./IncompleteTodos";
import styled from "styled-components";

export default function Home() {
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [todoId, setTodoId] = useState(0);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoText, setTodoText] = useState("");
  const [todoLimit, setTodoLimit] = useState("");
  const [todoProgress, setTodoProgress] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const onChangeTitleValue = (e) => setTodoTitle(e.target.value);
  const onChangeTextValue = (e) => setTodoText(e.target.value);
  const onChangeLimitValue = (e) => setTodoLimit(e.target.value);

  // 変数を定義して、スプレッド構文を使用して...
  const onClickAdd = (Title, Text, Limit, Progress) => {
    if (Title === "" || Text === "" || Limit === "") return;

    setIncompleteTodos([
      ...incompleteTodos,
      {
        id: todoId,
        title: Title,
        text: Text,
        limit: Limit,
        progress: Progress,
        isEdit: false,
      },
    ]);
    setTodoId(todoId + 1);
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <APp>
        {incompleteTodos.length >= 5 && (
          <p style={{ color: "red" }}>登録できるのは５個までです。</p>
        )}

        <InputTodo
          onClickAdd={onClickAdd}
          disabled={incompleteTodos.length > 5}
          todoId={todoId}
          setTodoId={setTodoId}
          todoTitle={todoTitle}
          setTodoTitle={setTodoTitle}
          todoText={todoText}
          setTodoText={setTodoText}
          todoLimit={todoLimit}
          setTodoLimit={setTodoLimit}
          todoProgress={todoProgress}
          setTodoProgress={setTodoProgress}
          onChangeTitleValue={onChangeTitleValue}
          onChangeTextValue={onChangeTextValue}
          onChangeLimitValue={onChangeLimitValue}
        />

        <Filter incompleteTodos={incompleteTodos} />

        <IncompleteTodos
          incompleteTodos={incompleteTodos}
          onClickDelete={onClickDelete}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      </APp>
    </>
  );
}

const APp = styled.div`
  // margin:20px ;
  padding: 10px 20px 0 40px;
`;
