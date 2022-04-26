import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, List, ListItem } from 'semantic-ui-react';
import axios from 'axios';


function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  },[])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
        <List>
            {activities.map((activity: any) => (
              <ListItem key={activity.id}>
                {activity.title}
              </ListItem>
            ))}
        </List>        
    </div>
  );
}

export default App;
