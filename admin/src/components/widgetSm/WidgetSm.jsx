import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('/users?new=true', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzE4MWFlNzk0MDZlNmQ1YzUwZmM1MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDgwMTM4NiwiZXhwIjoxNjMxMjMzMzg2fQ.29m23KqphubZBpag1STm9oFGH4Msy0Cv39sjeXX6BQA',
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li key={user._id} className="widgetSmListItem">
            <img
              // render profile pics if none then render default avatar
              src={
                user.profilePic ||
                'https://cdn.pixabay.com/photo/2015/04/18/11/03/profile-728591__480.jpg'
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
