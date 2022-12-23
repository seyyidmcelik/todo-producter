import { useDispatch, useSelector } from 'react-redux'
import { deleteDone, updateStatus } from '../../store/todo/todoSlice'
import style from './list.module.scss'

const List = () => {
    const todo = useSelector((state) => state.todo.value)
    const dispatch = useDispatch()
    const handleChange = (item) => {
        let updatedUser = Object.assign({}, item, { status: !item.status })
        let loc = JSON.parse(localStorage.getItem('todo'))
        let index = loc.findIndex((i) => i.id == item.id)
        loc.splice(index, 1, updatedUser)
        localStorage.setItem('todo', JSON.stringify(loc))
        dispatch(updateStatus(updatedUser))
    }
    const sizeOfCompleted = () => {
        let arr = todo.filter((i) => i.status === true)
        return arr.length
    }
    const deleteDoneTask = () => {
        let loc = JSON.parse(localStorage.getItem('todo'))
        let newData = loc.filter((i) => i.status === false)
        localStorage.setItem('todo', JSON.stringify(newData))
        dispatch(deleteDone(todo.filter((i) => i.status === false)))
    }
    return (
        <div className={style.listContainer}>
            <ul>
                {todo && todo.map((item, key) => (
                    <li key={key}>
                        <label>
                            <input
                                type='checkbox'
                                className={item.status ? style.checkedInput : style.notCheckInput}
                                onChange={() => handleChange(item)}
                                checked={item.status}
                            />
                            <span>{item.task}</span>
                        </label>
                    </li>
                ))}
            </ul>
            <div className={style.formFooterContainer}>
                <div className={style.formFooter}>
                    <div>{sizeOfCompleted()} Item selected</div>
                    <div>
                        <button onClick={deleteDoneTask}>Clear All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List