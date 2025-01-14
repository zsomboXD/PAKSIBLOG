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
      <h1 className="text-center mb-4" style={{ color: 'black' }}>Explore Categories</h1>
      <div className="d-flex flex-wrap gap-4 justify-content-center align-items-center h-100">
      {categories && categories.map(obj=>
        <Card key={obj.id}
        
        style={{
          width: '18rem',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#ffffff',
          position: 'relative',
        }}    >
        <img alt="Sample" src={obj.photoUrl}/>
        <CardBody>
          <CardTitle tag="h5" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color:'white',
            width:'100%'
            }}>
            <NavLink to={'/posts?ctg='+obj.name}
            style={{
              textDecoration: 'none',
              color: '#45a5ff'}}> {obj.name}</NavLink> 
          </CardTitle> 
        </CardBody>
      </Card>
      )}
      </div>
    </div>
  )
}

