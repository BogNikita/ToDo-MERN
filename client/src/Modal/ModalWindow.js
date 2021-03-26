import React, { useState } from 'react'
import TodoCreater from '../Todo/TodoCreate'
import './Modal.css'
import { Modal, Button } from 'antd';

function ModalWindow ({onCreate}) {

    const [state, setState] = useState(false);


    return (
        <>
            <Button type="primary" onClick={() => setState(true)}>Добавить задачу</Button>
            {state
            ? (
                <Modal
                visible={state}
                title="Новая задача"
                onCancel={() => setState(false)}
                footer={[
                  <Button  key="back" onClick={() => setState(false)}>
                    Назад
                  </Button>,
                  <Button form='form' key="submit" htmlType="submit" type="primary">
                    Добавить задачу
                  </Button>,
                ]}
              >
                <TodoCreater onCreate={onCreate}/>
              </Modal>
            )
            : null
            }   
        </>
    )
};

export default ModalWindow;