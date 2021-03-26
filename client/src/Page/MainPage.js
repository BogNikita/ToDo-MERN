import React, { useEffect, useState, useContext, useCallback } from "react";
import Context from "../context";
import Loader from "../Loader";
import ModalWindow from "../Modal/ModalWindow";
import TodoList from "../Todo/TodoList";
import { Empty, message, Space } from 'antd';
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from '../context/AuthContext';


function MainPage() {
  const auth = useContext(AuthContext);

  const {loading, request, error} = useHttp();

  const fetchTodo = useCallback(async () => {
    try {
      const fetch = await request('/api/main/', 'GET', null, {
        Authorization: `Bearer ${auth.token}`
      })
      setState(fetch);
    } catch (e) {
      
    }
  }, [request, auth.token]);
  
  useEffect( () =>{
    fetchTodo();
  }, [fetchTodo])

  const [todos, setState] = useState([]);

  const toggleTodo = useCallback(async (id) => {
   try {
    const find = todos.find(item => item._id === id);
    const completed = !find.completed;
    const response = await request('/api/main/completed/', 'PATCH', {id, completed}, {
      Authorization: `Bearer ${auth.token}`
    });
    let newTodos = [...todos];
    if (response.status) {
      newTodos = newTodos.map(item => {
        if (item._id === id) {
          item.completed = completed;
        }
        return item
      })
    }
    setState([...newTodos])
   } catch (e) {
      message.error(e.message);
   }
  }, [todos, request, auth.token]);

  const removeTodo = useCallback(async (id) => {
    try {
      const response = await request('/api/main/', 'DELETE', {id}, {
        Authorization: `Bearer ${auth.token}`
      });
      let newTodos = [...todos];
      if (response.status) {
         newTodos = newTodos.filter(item => item._id !== id);
      }
      setState(newTodos)
    } catch (e) {
      message.error(e.message);
    }
  }, [request, auth.token, todos]);

  const changeTodo = async (id, title, description) => {

    try {
      const response = await request('/api/main/description/', 'PATCH', {id, title, description}, {
        Authorization: `Bearer ${auth.token}`
      });
  
      if (response.status) {
        const find = todos.find((item) => item._id === id);
        find.title = title;
        find.description = description;
      }
      setState([...todos]);
    } catch (e) {
      message.error(e.message);
    }
  };

  const addTodo = useCallback(async (title, description) => {
    try {
      const newTask = {completed: false, title, description};

      const response = await request('/api/main/', 'POST', {...newTask}, {
      Authorization: `Bearer ${auth.token}`
      });
      let newTodos = [...todos];
      if (response.status) {
        newTodos.push(newTask);
      }
      setState([...newTodos]);
    } catch (e) {
      message.error(error);
    }
  }, [todos, auth.token, request, error])

  return (
    <Context.Provider value={{removeTodo, changeTodo}}>
        <Space>
        </Space>
        {loading && <Loader/>}
        {todos.length ?  <TodoList todos={todos} onToggle={toggleTodo}/> : loading ? null : (<Empty description={<span>Задач больше нет</span>} />)}
        <ModalWindow onCreate={addTodo}/>
    </Context.Provider>
  );
};

export default MainPage;
