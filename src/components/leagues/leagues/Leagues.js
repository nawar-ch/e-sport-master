import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeagues } from "./leaguesSlice";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import MyCard from "../../../layout/Card";


export default function Leagues() {
  const leagues = useSelector((state) => state.leagues.leagues);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const styles ={

    leagues:{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginBottom: 80,
    },

    title:{
      margin: "35px auto", 
      width: "25%" 
    }
  }

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(fetchLeagues(page));
  }, [page]);

  useEffect(() => {
    dispatch(fetchLeagues());
  }, []);

  useEffect(() => {}, [leagues]);

  const renderCards = () => {
    return leagues.map((l, key) => {
      return <MyCard key={key} item={l} />;
    });
  };

  return (
    <Container maxWidth="sm">
      <h1 style={styles.title}>Leagues</h1>
      <div style={styles.leagues}>
        {leagues && renderCards()}
        <Pagination page={page} onChange={handleChange} count={10}/>
      </div>
    </Container>
  );
}
