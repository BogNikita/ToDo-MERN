import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import Context from '../context';
import { Checkbox } from 'antd';
import { Card } from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import TodoCreater from './TodoCreate';


function TodoItem({todo, index, onChange}) {
    const {removeTodo, changeTodo} = useContext(Context);
    const [changeItem, setChangeItem] = useState(false);

    const onToggle = (value) => {
        setChangeItem(value)
    };

    return(
        <li style={todo.completed ? {textDecoration: 'line-through'} : null}>
            <div className="site-card-border-less-wrapper">
                <Card title={todo.title} bordered={false} extra={<EditOutlined onClick={() => onToggle(!changeItem)} />}>
                    
                    {!changeItem 
                    ? (<>
                        <div>
                            <Checkbox onChange={() => onChange(todo._id)} checked={todo.completed}/>
                            <strong> {index + 1}</strong>&nbsp; 
                            {todo.description || ''}
                        </div>
                        <div>
                            <DeleteOutlined onClick={() => removeTodo(todo._id)}/>
                        </div>
                    </>)
                    : <TodoCreater title={todo.title} id={todo._id} description={todo.description} onChange={changeTodo} onToggle={onToggle}/>}
                        
                </Card>
            </div>
        </li>
    )};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TodoItem;