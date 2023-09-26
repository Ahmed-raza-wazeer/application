import { CardContent, Grid, Typography } from "@mui/material"

 function Card ({data}){
//  { 
//    let Data = data
//    Data.map((ele) =>{
//     return ( 
//      <div>
    
//         <Typography>{ele.firstName}</Typography>
//         <Typography>{ele.middleName}</Typography>
//         <Typography>{ele.lastName}</Typography>
//         <Typography>{ele.email}</Typography>
//         <Typography>{ele.password}</Typography>
//         <Typography>{ele.confirmPassword}</Typography>
//         <Typography>{ele.DOB}</Typography>
//         <Typography>{ele.collegeName}</Typography>
//         <Typography>{ele.university}</Typography>
//         <Typography>{ele.collegeId}</Typography>
//         <Typography>{ele.address}</Typography>
//         <Typography>{ele.grade}</Typography>
//         <Typography>{ele.companyName}</Typography>
//         <Typography>{ele.loction}</Typography>
//         <Typography>{ele.detailWork}</Typography>
//         <Typography>{ele.description}</Typography>
//         </div>

    



return(

<Grid container spacing={4} width="auto">
      {
        <Grid  item xs={12} sm={6} >
          <Card>
            <CardContent>
              <Typography variant="h6">Form Data</Typography>
              <Typography>First Name: {data.firstName}</Typography>
              <Typography>Middle Name: {data.middleName}</Typography>
              <Typography>Last Name: {data.lastName}</Typography>
              <Typography>Email: {data.email}</Typography>
              <Typography>Password: {data.password}</Typography>
              <Typography>Confirm Password: {data.confirmPassword}</Typography>
              <Typography>DOB: {data.DOB}</Typography>
              <Typography>College Name: {data.collegeName}</Typography>
              <Typography>University: {data.university}</Typography>
              <Typography>College ID: {data.collegeId}</Typography>
              <Typography>Address: {data.address}</Typography>
              <Typography>Grade: {data.grade}</Typography>
              <Typography>Company Name: {data.companyName}</Typography>
              <Typography>Location: {data.location}</Typography>
              <Typography>Work Detail: {data.workDetail}</Typography>
              <Typography>Description: {data.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      }
    </Grid>
  );
}

export default Card;










