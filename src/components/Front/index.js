import React,{useState,useEffect} from 'react'
import Content from '../Content'
import {Button} from 'react-bootstrap'
const Front = (props) => {
  const [aresults,useresults]=useState([])
  const[page,setpage]=useState(1)
  const [totalpages,settotalpages]=useState(0)
  
  
  const updateNews = async ()=> {
    const apikey=`005ba19ae8dc3a4fd3192ed1a34a01af`
    const baseurl=`https://api.themoviedb.org/3/`
    const apiurl=baseurl+`discover/movie?sort_by=popularity.desc&api_key=`+apikey+`&page=${page}`+`&primary_release_date.gte=${props.st}&primary_release_date.lte=${props.rt}&with_genres=${props.gen}`
   
    let data= await fetch(apiurl);
    let parseddata= await data.json()
    useresults(parseddata.results)
    settotalpages(parseddata.total_pages)
    
  }
 
  useEffect(() => {
    updateNews();
}, [])
  
  const Previouspage= async()=>
  {
   
    setpage(page-1)
    updateNews();
  }
  const Nextpage= async()=>{
   
    setpage(page+1)
    updateNews();
  }
  const imurl="https://image.tmdb.org/t/p/w500"
  return (
    <>
     <div className='bo' style={{marginLeft:"0%"}}>
      {aresults.map((element)=>{
        return <div style={{display:"inline-block",padding:"10px"}} key= {element.id}  >
          <Content title ={element.title} Des= {element.overview?element.overview.slice(0,325)+'...':""} Imgurl={imurl+element.poster_path} date={element.release_date} per={(element.vote_average)*10}   />
          </div> 
           
           
          
      })}
        </div>
        <div className='no' style={{justifyContent:'space-between',marginTop:"3rem"}}>
            <Button variant="dark" style={{marginLeft:"6rem"}} hidden={page<=1} onClick={Previouspage}> &larr; Previous </Button>
                  <Button variant="dark"style={{marginLeft:"103rem"}} onClick={Nextpage}  disabled={page>totalpages}> Next &rarr;</Button>
                  </div>
  
    </>
  );
  }

export default Front