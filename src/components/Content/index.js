import React from "react";
import { ProgressBar } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Progressbar from "../Progressbar";
const Content = (props) => {
  return (
    <>

      <div className="container " style={{width:"50%",fontFamily:"arial"}}>
        <Card
          style={{
            width: "20rem",
            marginTop: "200px",
            height: "70rem",
            textAlign: "justify",
            border: "none",
            boxShadow: "3px 3px 6px #dadada",
            borderRadius: "500px",
          }}
        >
          <Card.Img
            variant="top"
            src={props.Imgurl}
            style={{ height:"auto",width:"100%"}}
          />
          <Card.Body>
            <Card.Title style={{paddingTop:"20px",paddingBottom:"10px",textAlign:"center",color:"#01BF71",fontFamily:"poppins",fontWeight:"bold",fontSize:"25px"}}>{props.title}</Card.Title>
            <Card.Text style={{color:"black"}}>{props.Des}</Card.Text>
            <Card.Text>{props.date}</Card.Text>
          </Card.Body>
          <Progressbar  percentage={props.per}/>
        </Card>
      </div>
    </>
  );
};

export default Content;
