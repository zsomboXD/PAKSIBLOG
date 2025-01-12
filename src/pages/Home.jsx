import React from 'react'
import { useContext } from 'react'
import { CategContext } from '../context/CategContext'
import { Card, CardBody, CardTitle } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  const {categories}=useContext(CategContext)
  console.log(categories);
  
  return (
    <div className='page'>
      <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center h-100">
      {categories && categories.map(obj=>
        <Card key={obj.id} style={{width: '15rem',position:'relativ'    }}    >
        <img       alt="Sample"      src={obj.photoUrl}     />
        <CardBody>
          <CardTitle tag="h5" style={{padding:'10px',position:'absolute',top:'40%',left:0,backgroundColor:'rgba(0,0,0,0.9)',color:'white',width:'100%'}}>
            <NavLink to={'/posts?ctg='+obj.name}> {obj.name}</NavLink> 
          </CardTitle> 
        </CardBody>
      </Card>
      )}
      </div>
    </div>
  )
}

