import React, { useState,useEffect } from 'react'
import {Form,Button} from 'react-bootstrap'
import Content from '../Content'
const Search = () => {
    const [val,setval]=useState()
    const[results,setrseults]=useState([])
    const sear=async()=>{
        const apikey=`005ba19ae8dc3a4fd3192ed1a34a01af`
        const baseurl=`https://api.themoviedb.org/3/`
        const api=baseurl+`search/movie?api_key=`+apikey+`&language=en-US&page=1&include_adult=false&query=${val}`
        let data=await fetch(api)
        let parseddata= await data.json()
        setrseults(parseddata.results)

       }
        useEffect(() => {
             sear();
            
        }, )

  return (<>
   <Form className="d-flex" style={{marginTop:"80px"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>{setval(e.target.value)}}
            />
            <Button variant="outline-success"  className="bd" >Search</Button>
            </Form>
  <h1>Morning</h1>
    {results.map((element)=>{
         const imurl="https://image.tmdb.org/t/p/w500"
        return <div style={{display:"inline-block",padding:"10px"}} key= {results.id}  >
        <Content title ={element.title} Des= {element.overview?element.overview.slice(0,325)+'...':""} Imgurl={imurl+element.poster_path} date={element.release_date} per={(element.vote_average)*10}   />
        </div> 
    })}
    
   
            </>
  )
    
}

export default Search