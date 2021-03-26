import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

function TodoList(props) {
    return(
        <ul>
            {props.todos.map((item, index) => (<TodoItem key={index + '_' + item.id} todo={item} index={index} onChange={props.onToggle}/>
                ))}
        </ul>
    )
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default TodoList;