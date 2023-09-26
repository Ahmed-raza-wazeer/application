
import "./App.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel, Typography,Grid,Container ,Box} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import { blueGrey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Card from './Card'






function App() {
  
  let [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    DOB: "",
    collegeName: "",
    university: "",
    collegeId: "",
    address: "",
    course: "",
    grade: "",
    companyName:"",
    location:"" ,
    workDetail:" ",
    description :""

  });

  const [data, setData] = useState([]);
  const [showCard, setShowCard] = useState(false);


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);

    setData((prevData) => {
      return [...prevData, formData];
    });

    console.log(data);
  };

  const eventHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const cardHandler = () => {
    setShowCard(!showCard) 
  };



  return (
    <div    margin={5}>
     <Box> <Typography variant="h3" color={blueGrey} align="center">
        Registration form
      </Typography>
      <form onSubmit={submitHandler} align="center">
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <TextField
            type="text"
            id="firstName"
            name="firstName"
            onChange={eventHandler}
            value={formData.firstName}
          ></TextField>

          <FormLabel>Middle Name</FormLabel>
          <TextField
            type="text"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={eventHandler}
          ></TextField>

          <FormLabel>Last Name</FormLabel>
          <TextField
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={eventHandler}
          ></TextField>

          <FormLabel>Email</FormLabel>
          <TextField
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={eventHandler}
          ></TextField>

          <FormLabel>Password</FormLabel>
          <TextField
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={eventHandler}
          ></TextField>

          <FormLabel> Confirm Password</FormLabel>
          <TextField
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={eventHandler}
          ></TextField>

          <FormLabel>DOB</FormLabel>
          <TextField
            type="date"
            id="DOB"
            name="DOB"
            value={formData.DOB}
            onChange={eventHandler}
          ></TextField>

          <FormGroup>
            <Typography variant="h6" >
              College detail
            </Typography>

            <FormLabel>College Name</FormLabel>
            <TextField
              type="text"
              id="cllegeName"
              name="collegeName"
              value={formData.collegeName}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>University</FormLabel>
            <TextField
              type="text"
              id="university"
              name="university"
              value={formData.university}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>College id </FormLabel>
            <TextField
              type="text"
              id="collegeId"
              name="collegeId"
              value={formData.collegeId}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>Address</FormLabel>
            <TextField
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>Course</FormLabel>
            <TextField
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>Grade</FormLabel>
            <TextField
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={eventHandler}
            ></TextField>
          </FormGroup>

          { <FormGroup>
            <Typography variant="h6"  >
              Work experience
            </Typography>

            <FormLabel>Name </FormLabel>
            <TextField
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>Location</FormLabel>
            <TextField
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>Work Detail</FormLabel>
            <TextField
              type="text"
              id="workDetail"
              name="workDetail"
              value={formData.workDetail}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>Description</FormLabel>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={eventHandler}
            ></textarea>
          </FormGroup> }

          <Button type="submit" variant="contained">
            click
          </Button>
        </FormControl>
      </form>

</Box>

<Grid Container>
<Button  align="center" variant="contained" onClick={cardHandler}>Display card</Button>
  
 {  showCard && data.length > 0 ? data.map((ele)=>{<Card  data={ele}></Card> } ): null }
  

</Grid>
    </div>
    
  );
}


   
export default App;
