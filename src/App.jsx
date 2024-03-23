import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import { Formik, useFormik } from 'formik';
import { useState } from 'react';
import "./index.css";

function App() {
  const [todo, setTodo] = useState([])

  const data = useFormik({
    initialValues: {
      content: ""
    },
    onSubmit: (values, reset) => {
      values.id = todo.length + 1;
      setTodo([...todo, { ...values }])
      reset.resetForm()
      console.log(values)
    }
  })
let handleDelete = (id) => {
  const del =  todo.filter(item =>
      item.id !== id)
    setTodo(del)
    console.log(del)
  }


return (
  <>
    <div className='container-fluid'>
      <div className='row mt-5'>
        <div className='col'>
          <div className='row'>
            <div className='moto d-flex justify-content-center'>
              <h3>Today's efforts pave the way for tomorrow's <br /> victories. Keep pushing forward !</h3>
            </div>

          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-lg-6'>
            <form onSubmit={data.handleSubmit}>
              <div className='head d-flex justify-content-center'>
                <h3>TASKS AHEAD</h3>
              </div>
              <hr />
              <div className='col-lg-12'>
                <input type="text" placeholder='Type Here' className=' bg form-control'
                  name="content"
                  value={data.values.content}
                  onChange={data.handleChange} />
              </div>

              <div className='mt-2 d-flex justify-content-center'>
                <button type=" submit" className='btn btn-secondary '> Submit</button>
              </div>
            </form>

          </div>
          <div className='col-lg-6'>
            <div className='head d-flex justify-content-center'>
              <h3>GENTLE NUDGES</h3>
            </div>
            <hr />
            <div>

              {
                todo.map((values) => {
                  return (
                    <div className='row mt-3'>
                      <div className='col-lg-4'></div>
                      <div className='col-lg-4 not d-flex justify-content-between'>
                        {values.content}
                        <div>
                          <button className='del btn btn-secondary' onClick={() =>  handleDelete(values.id) }  > submit</button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }

            </div>

          </div>
        </div>
      </div>
    </div>
  </>
);
            }


export default App;
