import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "./teamsSlice";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import MyCard from "../../../layout/Card";


export default function Teams() {
  const teams = useSelector((state) => state.teams.teams);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const styles={
    teams: {
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginBottom: 80,
    },
    title:{
      margin: "40px auto", 
      width: "20%" 
    }
  }

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(fetchTeams());
  }, []);

  useEffect(() => {
    dispatch(fetchTeams(page));
  }, [page]);

  useEffect(() => {}, [teams]);

  const renderCards = () => {
    return teams.map((t, key) => {
      return <MyCard key={key} item={t} type="team" />;
    });
  };

  return (
    <Container maxWidth="sm">
      <h1 style={styles.title}>Teams</h1>
      <div style={styles.teams}>
        {teams && renderCards()}
        <Pagination page={page} onChange={handleChange} count={10} />
      </div>
    </Container>
  );
}
