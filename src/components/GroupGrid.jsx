import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useAuth} from '../context/authContext'
import { useLocation } from "react-router-dom";
import { GroupCard } from "./GroupCard";
import styles from "./GroupGrid.module.css";
import axios from 'axios'
import { auth } from "../firebase-config";
export function GroupGrid() {
  //let movies = [];
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const API = "http://localhost:8080/api/groups"

  const [group, setGroup] = useState([]);
  const {user} = useAuth()
  const loadData = () => {

    axios.get(API)
    .then(resp=>{
          setGroup(resp.data)
    })

    console.log("este es el grupo: " + group)  

  }

  useEffect(loadData, [])
  return (
    <ul className={styles.movieGrid}>
      {group.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </ul>
  );
}
