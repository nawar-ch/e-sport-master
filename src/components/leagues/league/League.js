import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeague, unsetLeague } from "./leagueSlice";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImageListItem from "@mui/material/ImageListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";



export default function League() {
  const league = useSelector((state) => state.league.league);
  const dispatch = useDispatch();
  const { id } = useParams();
  const startDate = league && new Date(league.begin_at);
  const endDate = league && new Date(league.end_at);

  const styles= {
    Box : {
    bgcolor: "inherite",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifContent: "center",
    flexDirection: "column",
    marginBottom: "50px",
  },
   Card :{
    minWidth: 300,
    width: 500,
    height: 300,
    textAlign: "center",
    height: "150px",

  
   },
    
   CardContent: {
     marginTop: "20px",
   
   },

   ImageListItem : {
    width: "80%", 
    height: "auto",
    padding: "30px 0" 
   }

  }
  useEffect(() => {
    dispatch(fetchLeague(id));
  
    return () => {
      dispatch(unsetLeague());
    };
  }, []);

  useEffect(() => {
   
  }, [league]);

  return (
   
      <Container maxWidth="sm">
        <Box
          style={styles.Box}
        >
          <ImageListItem style={styles.ImageListItem}>
            <img
              src={league.image_url}
              loading="lazy"
            />
          </ImageListItem>

          <h1>{league.name}</h1>
          <h2>Game: {league.game}</h2>
        
            <Card  style={styles.Card} >
              <CardContent style={styles.CardContent}>
                <div class="jss16" style={{marginBottom:"15px"}}>
                  <span>{league.full_name}</span>
                </div>
                <div class="jss16">
                  <p><b>From:</b>&nbsp;{startDate.toDateString()}&nbsp;-&nbsp;<b>To:</b>&nbsp; {endDate.toDateString()}</p>
                </div>
              </CardContent>
 
            </Card>
       
        </Box>
      </Container>
   
  );
}
