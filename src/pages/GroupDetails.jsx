import { FaThumbsUp } from "react-icons/fa";
import axios from 'axios'
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { useEffect, useState } from "react";
export function GroupDetails() {
  const { groupId } = useParams();
  const [group, setGroup] = useState({});
  var sum = 0;
  var temp = false;
  const imgUrl = "https://img.freepik.com/vector-gratis/vista-superior-manos-sosteniendo-libros-ilustracion-plana_74855-17930.jpg?auto=format&h=200";
  var count = 0
  const API = "http://localhost:8080/api/groupDetails"

  useEffect(() => {

    axios.post(API,{
      id: groupId
    }).then((response) => {
      //console.log(response);
      });

    axios.get(API)
    .then(resp=>{

      if(resp.data != null){

        setGroup(resp.data)
        console.log(resp.data)

      }
      
    })
    
  }, [groupId]);

  console.log("este es el grupo " + group.name)



  if (!group) {
    return null;
  }

  return (
    <div className={styles.movieDetails}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imgUrl}
        alt={group.name}
      />
      <div className={styles.col}>
        <p>
          <strong>Nombre:</strong>
          <br />
          {group.name}
        </p>
        <p>
          <strong>Descripcion:</strong>{" "}
          <br />
          {group.description}
        </p>
        <p>
          <strong>Fecha de creacion:</strong>
          <br />
          {group.creationDate}
        </p>
      </div>

    </div>
  );
}
