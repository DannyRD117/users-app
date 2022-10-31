import Card from "../UI/Card";
import style from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} {user.age} old years
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
