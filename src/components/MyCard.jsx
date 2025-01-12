import React from 'react'
import { sanitizeHTML, truncatedStory } from '../utility/utils'
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

export const MyCard = ({id,category,story,photo,title}) => {
  const navigate=useNavigate()

  return (

      <Card  style={{    width: '18rem'   }} onClick={()=>navigate('/detail/'+id)}>
        <img alt={title}    src={photo.url}  />
        <CardBody className="title">
            <CardTitle tag="h5">{title}</CardTitle>
            <CardSubtitle    className="mb-2 text-muted text-end,"     >{category} </CardSubtitle>
            <CardText style={{fontSize:'0.7rem',fontStyle:'italic',textDecoration:'none',color:'white'}}>
            {truncatedStory(sanitizeHTML(story))}
            </CardText>
        
        </CardBody>
    </Card>
 
  )
}



