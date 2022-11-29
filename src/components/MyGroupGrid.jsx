import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { idUser } from "./Auth"
import axios from 'axios'
import { auth, db} from "../firebase-config";
import { doc, getDocs, query, collection} from "firebase/firestore"; 
import { useLocation } from "react-router-dom";
import styles from "./GroupGrid.module.css";
import { MyGroupCard } from "./MyGroupCard";

export function MyGroupGrid() {
  //let movies = [];
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const API = "http://localhost:8080/api/mygroups"

  const [group, setGroup] = useState([]);

  const loadData = () => {
    axios.get(API)
    .then(resp=>{
          setGroup(resp.data)
    })

    

  }

  useEffect(loadData, [])
  return (
    <ul className={styles.movieGrid}>
      {group.map((group) => (
        <MyGroupCard key={group.id} group={group} />
      ))}
    </ul>
  );
}