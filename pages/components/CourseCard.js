const CourseCard = (props) => {
  return (
    <>
    <div style = {{fontFamily: "Helvetica", color: "white"}}>
      <table style = {{width: "50%",borderStyle: "solid",
      borderColor: "lightsteelblue", borderRadius: "5px", backgroundColor: "lightsteelblue",
      padding: "20px", marginTop: "5px"}} align = "center">
        <tr>
          <td>Class Name: {props.name}</td>
          <td>GPA : {props.grd}</td>
          <td>Credits : {props.crd}</td>
          <td>
            <button class = "tail" onClick = {() =>props.del(props.name)} > x </button>
          </td>
      </tr>
      </table>
   </div>
    </>
  );
};

export default CourseCard;
