
import './AddCourse.css'
import { Link } from "react-router-dom";
import house from "./images/house.png";
import plus from "./images/plus.png";
import { useState } from 'react';

function InfoBox({ course, name }){
    return(
        <div className="courseTable">
            <div>
                { <p className="course">{ course }</p> }
            </div>
            <div>
                <p className="name">{ name }</p>
            </div>
        </div>
    )
}

function AddCourse(){
    const [imageActive, setImageActive] = useState(false);
    const [countClicks, setCountClicks] = useState(0)
    
    function clickchange(){
        setCountClicks(prev => prev + 1)
    }

    function click(){
        setImageActive(true);
        clickchange();
    }
    let content;
    if(imageActive){
        content = <img className="plusIcon" src={plus} alt="Lägg till"></img>;
    } else{
        content = <img className="houseIcon" src={house} alt="Tillbaka"></img>;
    }

    return(
        
    <div>
        <div className="addCourseList">
        <h1 className="newCourseHeader">KURSER</h1>
        <div onClick={click}>
          <InfoBox course="TNA001" name="Matematisk grundkurs"></InfoBox>
        </div>
        <div onClick={click}>
            <InfoBox course="TNA002" name="Linjär algebra"></InfoBox>
        </div>
        <div onClick={click}>
            <InfoBox course="TNA003" name="Analys I"></InfoBox>
        </div>
        <div onClick={click}>
            <InfoBox course="TNA004" name="Analys II"></InfoBox>
        </div>
        <div onClick={click}>
            <InfoBox course="TNA006" name="Analys III"></InfoBox>
        </div>
        <div onClick={click}>
            <InfoBox course="TNA007" name="Vektoranalys"></InfoBox>
        </div>
        <div onClick={click}>
            <InfoBox course="TNM061" name="3-D Datorgrafik"></InfoBox>
        </div>
        <div onClick={click}>
            <InfoBox course="TNM059" name="Grafisk teknik"></InfoBox>
        </div>
        <div onClick={click}>
            <InfoBox course="TNG006" name="Matematisk statistik"></InfoBox>
        </div>
        <div onClick={click}>
            <InfoBox course="TNG015" name="Signaler och system"></InfoBox>
        </div>
        <div onClick={click}>
            <InfoBox course="TNG032" name="Tillämpad transformteori"></InfoBox>
        </div>
        <div onClick={click}>
            <InfoBox course="TNG033" name="Programmering i C++"></InfoBox>
        </div>
          
        <div>
        </div>       
        </div>
        
        <div className="stickyboi"></div>
        <Link to="/home">
            <div className="addCourseButtonPlus">
               <p className="addText">{content}</p>
            </div>
        </Link>  
    </div>  
    )
}

export default AddCourse;