import React from 'react'
import { Categories } from '../components/Categories'
import { CardsContainer } from '../components/CardsContainer'
import { useState } from 'react'
import { useEffect } from 'react'
import { readPosts } from '../utility/crudUtility'
import { useSearchParams } from 'react-router-dom'
import { useContext } from 'react'
import { CategContext } from '../context/CategContext'
import { SearchBox } from '../components/SearchBox'

export const Posts = () => {
  const [searchParams]=useSearchParams()
  const {categories} = useContext(CategContext)
  const [posts,setPosts]=useState([])
  const [selCateg,setSelCateg]=useState(searchParams.get('ctg') ? [searchParams.get('ctg')] :[])

//console.log('url paraméter:',searchParams.get('ctg'));

//console.log(selCateg);

  useEffect(()=>{
    readPosts(setPosts,selCateg)
  },[selCateg])

  const handleChange=(e)=>{
    const {value,checked}=e.target
    setSelCateg(prev=>checked ? [...prev,value] : prev.filter(categ=>categ!=value))
  }

  return (
    <div className='page'>
      <Categories categories={categories} selCateg={selCateg} setSelCateg={setSelCateg} handleChange={handleChange}/>
      {posts && 
      <div className='z-10'>
      <SearchBox items={posts.map(obj=>({id:obj.id,name:obj.title}))}/>
      </div>
      }
      <CardsContainer  posts={posts}/>
    </div>
  )
}


