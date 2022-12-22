import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './form.module.scss'
import { addTask } from '../../store/todo/todoSlice'
import { idGenerator } from '../../utils'

const Form = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        if (input.trim().length > 0) {
            dispatch(addTask({ id: idGenerator(), task: input, status: false }))
            setInput('')
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (input.trim().length > 0) {
                dispatch(addTask({ id: idGenerator(), task: input, status: false }))
                setInput('')
            }
        }
    }
    return (
        <>
            <div className={style.formContainer}>
                <div className={style.inputContainer}>
                    <input placeholder="Add new list item" value={input} onChange={handleChange} onKeyDown={handleKeyDown} />
                    <button onClick={handleClick}>Add</button>
                </div>
            </div>
        </>
    )
}

export default Form