import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import {Home} from './Home'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BarLoader } from 'react-spinners'
import {Story} from '../components/Story'
import {uploadFile} from '../utility/uploadFile'
import { addPost, readPost, updatePost } from '../utility/crudUtility'
import { CategContext } from '../context/CategContext'
import { CategDropdown } from '../components/CategDropDown'
import { Alerts } from '../components/Alerts'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'


export const AddEditPost = () => {
  const {categories}=useContext(CategContext)
  const {user}=useContext(UserContext)
  const [loading,setLoading]=useState(false)
  const [uploaded,setUploaded]=useState(false)
  const [photo,setPhoto]=useState(null)
  const [story,setStory]=useState(null)
  const [selCateg,setSelCateg]=useState(null)

  const [post,setPost]=useState(null)
  const {register, handleSubmit, formState: { errors },reset,setValue } = useForm();
  const params=useParams()

  useEffect(()=>{
    if(params?.id) readPost(params.id,setPost)
  },[params?.id])

  useEffect(( )=>{
    if(post){
      setValue("title",post.title)
      setSelCateg(post.category)
      setStory(post.story)
    }
  },[post])


  if(!user) return <Home />

  const onSubmit=async (data)=>{
    setLoading(true)
    if(params.id){

      try {
        updatePost(params.id,{...data,category:selCateg,story})
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
    }else{
      


    let newPostData={
        ...data,
        story,
        author:user.displayName,
        userId:user.uid,
        category:selCateg,
        likes:[]
      }
      
      
    try {
      const file=data.file[0] 
      const {url,id}=await uploadFile(file)
      delete newPostData.file
      newPostData={...newPostData,photo:{url,id}}
      console.log('postData:',newPostData);
      addPost(newPostData)
      setUploaded(true)
      reset()
      setPhoto(null)
      setStory(null)
    } catch (error) {
        console.log(error);      
    }finally{
      setLoading(false)
    }   
  }
  }
console.log(selCateg,story);

  return (
    <div className='page'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div><label >A bejegyzés címe:</label>
          <input {...register('title',{required:true})} type='text' />
          <p className='text-danger'>{errors?.title && 'A cím megadása kötelező'}</p>
        </div>
        <CategDropdown categories={categories} setSelCateg={setSelCateg} selCateg={selCateg}/>

        <Story setStory={setStory} uploaded={uploaded}/>
        <div>
          <input {...register('file',{
            required:!params.id,
            validate:(value)=>{
                if(!value[0]) return true
                const acceptedFormats=['jpg','png']
                //console.log(value[0]);
                const fileExtension=value[0].name.split('.').pop().toLowerCase()
                if(!acceptedFormats.includes(fileExtension)) return "Invalid file format"
                if(value[0].size>1*1000*1024) return "Az engedélyezett máximális file méret 1MB"
                return true    
            }
          })}  type='file'
          onChange={(e)=>setPhoto(URL.createObjectURL(e.target.files[0]))}
          />
         <p className="text-danger">{ errors?.file?.message}</p>
        <p className="text-danger">{errors?.file && 'Fotó feltöltése kötelező!'}</p>
      
        </div>
        <input  type="submit" disabled={!selCateg || !story}/>
        </form>
        {loading && <BarLoader />}
       {uploaded && <Alerts txt='Sikeres feltöltés!'/>}
        {photo && <img src={photo} />}
    </div>
  )
}


