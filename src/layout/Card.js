import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import CardActions from "@material-ui/core/CardActions";

export default function MyCard({ item, type = "league" }) {
  const endpoint = type === "league" ? "/leagues/" : "/teams/"
  const history = useHistory()
  const styles = {

  media: {
    width: "56px",
    height: "56px",
    display: "inline-block",
    padding: "16px",
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: 500,
    lineHeight: 1.75,
    textAlign: "center"
},

  card: {
  margin: "50px",
  textAlign: "center",

 } ,

  };


  return (
      
        <Card sx={{ minWidth: 345, width: 600}} style={styles.card}>
               
            <CardMedia           
              component="img"
              height="140"
              image={item && item.image_url}
              style={styles.media}
              alt="item image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item && item.name}
              </Typography>
              <CardActions 
              onClick={() => {
                history.push(endpoint+item.id)
              }}>
             
              <Button size="small"  to={"/api/leagues/"+ item.id} color="primary">DETAILS:</Button>
               </CardActions>
            </CardContent>
         
        </Card>
     
  );
}
