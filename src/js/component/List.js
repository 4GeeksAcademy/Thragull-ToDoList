import React, {useState} from 'react'

const List = () => {
    const [toDo, setToDo] = useState("")
    const [list, updateList] = useState([]);

    const addToList = (event)=>{
      if ((event.key === "Enter") && (toDo !== "")) {
      updateList([...list, toDo])
      setToDo("");
    }}
    const deleteFromList = (indexToDelete) => {
      updateList(list.filter((element, index) => index !== indexToDelete))
    }

  return (
    <div className='container justify-content-center mt-5 w-50'>
        <div className='input-group mb-5'>
            <span className='input-group-text '>What do you have to do.</span>
            <input className='form-control' id="toDo" placeholder='What needs to be done?' value={toDo}
                    onChange={(element) => {
                        setToDo(element.target.value)
                      }
                    }
                    onKeyDown={(event) =>{
                        addToList(event);
                      }
                    }
            /> 
        </div>
        <ul className='list-group rounded-4'>
          {list.map((element, index)=> <li key={index} className='list-group-item d-flex p-0 ps-2 bg-secondary'>
                                                  <div className='text my-auto py-2'>{element}</div>
                                                  <i className="fa fa-trash trash bg-danger px-3 py-3 ms-auto text-white"
                                                  onClick={(event) => deleteFromList(index)}></i>
                                        </li> )}
        </ul>
        <p className='text-start ms-2 text-secondary'>{list.length} items remaining.</p>
    </div>
  )
}

export default List