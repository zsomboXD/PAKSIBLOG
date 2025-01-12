import React from 'react'
import { useContext } from 'react'
import { CategContext } from '../context/CategContext'
import { FormGroup, Input, Label } from 'reactstrap'

export const Categories = ({selCateg,setSelCateg}) => {
  const {categories}=useContext(CategContext)

  const handleChange=(event)=>{
    const {value,checked}=event.target 
    setSelCateg(prev=> checked ? [...prev,value] : prev.filter(categ=>categ!=value))
  }

  return (
    <div>
      {categories && categories.map(obj=>
          <FormGroup  check   inline   key={obj.id}   >
            <Input type="checkbox" value={obj.name} onChange={handleChange}  checked={selCateg.includes(obj.name)}/>
            <Label >  {obj.name}    </Label>   
          </FormGroup> 
      )}
    </div>
  )
}


