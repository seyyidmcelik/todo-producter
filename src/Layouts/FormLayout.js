import style from './FormLayout.module.scss'
import Form from "../Components/Form"
import Header from "../Components/Header"
import List from "../Components/List"

const FormLayout = () => {
  return (
    <div className={style.formLayoutContainer}>
      <Header />
      <Form />
      <List />
    </div>
  )
}

export default FormLayout