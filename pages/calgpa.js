import { createContext, useEffect, useReducer } from "react";
import CourseCard from "./components/CourseCard";
import CourseForm from "./components/CourseForm";
import { useContext, useState } from "react";
import Link from "next/link";

export const sample = createContext()

function calgpa() {
  const [myCourses, setMyCourse] = useState([]);
  const [GPA, setGPA] = useState(4.0);
  useEffect(() => {
    const temp = localStorage.getItem('f')
    if(temp!=null){
      setMyCourse(JSON.parse(temp))
      calculateGPA(JSON.parse(temp))
    }
  },[])
  useEffect(() => {
    localStorage.setItem('f',JSON.stringify(myCourses))
  },[myCourses]) 
  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA(cc) {
    // TODO
    var gpa = 0
    var total_credit  = 0 
    var total_gpa = 0
    cc.forEach((item) => {
      switch(item.grd){
        case 'A' :
          gpa = 4
          total_credit += Number(item.crd) 
          total_gpa += gpa * Number(item.crd)
          break
        case 'B+' :
          gpa = 3.5
          total_credit += Number(item.crd)
          total_gpa += gpa * Number(item.crd)
          break
        case 'B' :
          gpa = 3
          total_credit += Number(item.crd)
          total_gpa += gpa * Number(item.crd)
          break
        case 'C+' :
          gpa = 2.5
          total_credit += Number(item.crd)
          total_gpa += gpa * Number(item.crd)
          break
        case 'C' :
          gpa = 2
          total_credit += Number(item.crd)
          total_gpa += gpa * Number(item.crd)
          break
        case 'D+' :
          gpa = 1.5
          total_credit += Number(item.crd)
          total_gpa += gpa * Number(item.crd)
          break
        case 'D' :
          gpa = 1
          total_credit += Number(item.crd)
          total_gpa += gpa * Number(item.crd)
          break
        case 'F' :
          gpa = 0
          total_credit += Number(item.crd)
          total_gpa += gpa * Number(item.crd)
          break
      }  
    });
    setGPA(total_gpa / total_credit) 
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event 
   */
  function addCourse(inputData) {
    console.log(inputData)
    // TODO
    const course = [...myCourses,inputData]
    setMyCourse(course)
    // recalculate GPA
    calculateGPA(course);
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id 
   */
  function onDeleteCourse(id) {
    // TODO
    const course = myCourses.filter(item => {
      return item.name !== id
    })
    setMyCourse(course)
    calculateGPA(course)
  }

  return (
    <div id="calgpa" style = {{fontFamily: "Helvetica"}}>
   <table style= {{width:" 98%;", padding: "20px", margin:"1% 0px 0px 1%",
     borderStyle: "solid",borderColor: "lightsteelblue", borderRadius: "5px", backgroundColor: "lightsteelblue"}} align = "center">
    <tr align="center">
        <td><Link href={"/home"}><label style = {{color: "white",fontWeight: "bold"}}>Home</label></Link></td>
        <td><Link href={"/gallery"}><label style = {{color: "white",fontWeight: "bold"}}>Gallery</label></Link></td>
        <td><Link href={"/contact"}><label style = {{color: "white",fontWeight: "bold"}}>Contact</label></Link></td>
        <td><Link href={"/calgpa"}><label style = {{color: "white",fontWeight: "bold"}}>GPA Calculator</label></Link></td>
        <td><Link href={"/post"}><label style = {{color: "white",fontWeight: "bold"}}>Post</label></Link></td>
    </tr>
    </table>
    <sample.Provider value = {addCourse}>
      <div>
      <h1 style = {{textAlign: "center"}}> GPA CALCULATOR </h1>
      {/* TODO add course input form */}
      {/* TODO display calculated GPA */}
      <h2 style = {{textAlign: "center"}}> GPAX : {GPA} </h2>
      <div>
        {/* TODO display courses */}
      <CourseForm /> 
      </div>
      <h2 style = {{textAlign: "center"}}> My courses </h2>
      {myCourses.map(item => {
          return <CourseCard name ={item.name} grd = {item.grd} crd ={item.crd} del={onDeleteCourse} />
        })}
    </div>
  </sample.Provider>
  </div>
  );
}

export default calgpa;