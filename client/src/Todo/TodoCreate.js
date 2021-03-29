import { useState } from "react";
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';

const { TextArea } = Input;

const useInputValue = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
};


function TodoCreater({onCreate, onChange, title = '', id, onToggle, description = ''}) {

    const input = useInputValue(title);
    const textArea = useInputValue(description);

    const submitHandler = (e) => {
        e.preventDefault();
        if (input.value().trim()) {
            if (id) {
                onChange(id, input.value(), textArea.value());
            } else {
                onCreate(input.value(), textArea.value());
                input.clear();
                textArea.clear();
            }
            
        }
    };

    return (
        <form id="form" onSubmit={submitHandler}>
            <label htmlFor="task">Название задачи</label>
            <Input placeholder="Название задачи" id="task" {...input.bind}/>
            <label htmlFor="description">Описание задачи</label>
            <TextArea placeholder="Описание задачи" id="description" showCount maxLength={200} {...textArea.bind}/>
            {id
            ?
            <Button style={{marginTop: '2rem'}} form='form' key="submit" htmlType="submit" type="primary" onClick={(e) => {
                submitHandler(e)
                onToggle(false)}}>
              Сохранить изменения
            </Button>
            : null
            }
        </form>
    )
};

TodoCreater.propTypes = {
    onCreate: PropTypes.func,
    onToggle: PropTypes.func,
    onChange: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string
};


export default TodoCreater;