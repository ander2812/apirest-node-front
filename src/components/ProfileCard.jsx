import styles from "./GroupCard.module.css";
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios'
import { auth, db, collections } from "../firebase-config";
import { doc, deleteDoc } from "firebase/firestore";
import stylesButton from "./JoinGroup.module.css"
import { Link } from "react-router-dom";

export function ProfileCard({ group }) {

  const API = "http://localhost:8080/api/mygroups"
  const imgUrl = "https://www.advenium.com/wp-content/uploads/2022/03/shutterstock_1464234134-1024x684-1.jpg";

  axios.post(API+"/idGroup",{
    id: group.id,
    
    owner_id: group.owner_id
  }).then((response) => {
    //console.log(response);
    });

  const handleClick = async () => {

    
      //console.log(id)

        axios.delete(API)
        .then(resp=>{
    })
    window.location.reload(false);

  };

  return (

    <li className={styles.groupCard}>
      <Link to={"/profileDetails/"}>
        <div>
          <br />
          <strong>{group.name}</strong> <br />
        </div>
        <img
          width={230}
          height={345}
          className={styles.groupImage}
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