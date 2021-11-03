import React, { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router";
import {fetchTeamById,unsetTeam} from "./teamSlice";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImageListItem from "@mui/material/ImageListItem";

export default function Team() {
  const team = useSelector((state) => state.team.team);
  const dispatch = useDispatch();
  const { id } = useParams();
  const styles ={
    ImageListItem : {
      width: "80%", 
      height: "auto",
      padding: "30px 0" 
     },   
     image:{
      padding: "30px 0"
     },
     title1:{
      marginTop: 30 
     },
     title2:{
      paddingBottom: 50 
     }
  }

  useEffect(() => {
    dispatch(fetchTeamById(id));
    return () => {
      dispatch(unsetTeam());
    };
  }, []);

  useEffect(() => {
   
  }, [team]);

  return (
   
      <Container maxWidth="sm" style={{justifyContent:"center"}}>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifContent: "center",
            flexDirection: "column",
            marginBottom: "51px",
          }}>
          <ImageListItem style={styles.ImageListItem }>
            <img
              style={styles.image}
              src={team.image_url}
              loading="lazy"
            />
          </ImageListItem>
          <h1 style={styles.title1}>{team.name}</h1>
          <h2 style={styles.title2}>Game:&nbsp; {team.game}</h2>
          <h4>Players: </h4>
            <span>
              {team && team.players && team.players.map((player,index)=>{
                return(
                  <ul> 
                   <li> <span key={index} className="mr-3">{player.name}</span> </li> 
                  </ul>                  
                      )
                  })}
            </span>
        </Box>
      </Container>
  
  );
}
