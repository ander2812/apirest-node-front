import styles from "./GroupCard.module.css";
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios'
import { auth, db, collections } from "../firebase-config";
import { doc, deleteDoc } from "firebase/firestore";
import stylesButton from "./JoinGroup.module.css"
import { Link } from "react-router-dom";

export function MyGroupCard({ group }) {

  const API = "http://localhost:8080/api/myGroups"

  const handleClick = async () => {

    axios.post(API+"/idGroup",{
      id: group.id
    }).then((response) => {
      //console.log(response);
      });
      //console.log(id)

    axios.delete(API)
    .then(resp=>{
    })

    window.location.reload(false);

  };

  const imgUrl = "https://www.prep2021chih.org.mx/wp-content/uploads/2022/10/Focus-Groups.webp";

  return (

    <li className={styles.movieCard}>
      <Link to={"/group/" + group.id}>
        <div>
          <br />
          <strong>{group.name}</strong> <br />
        </div>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          alt={group.name}
          src={imgUrl}
        />
        <div>
        {group.schedule.map((schedule) => schedule.day).join(", ")}
        <br />
        {group.schedule.map((schedule) => schedule.startHour).join(", ")}
          - 
        {group.schedule.map((schedule) => schedule.endHour).join(", ")}
        </div>
      </Link>
      <strong>Eliminar</strong> <br />
        <button type="button" onClick={() => handleClick()}>
          <AiFillDelete size={40} color="#6badf0" />
        </button>
    </li>

  );

  
}