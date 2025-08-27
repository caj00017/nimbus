import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'Guest' });

  useEffect(() => {
    setCount(parseInt(localStorage.getItem('count')));
  }, []);

  const updateCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    try {
      localStorage.setItem('count', newCount.toString());
    } catch (error) {
      console.log('localStorage not available');
    }
  }

  return (
    <>
      <h2>Hello, {user ? user.name : 'Guest'}!</h2>
      <p>
        One day, this app will be used to test user authentication. Today is not that day.
      </p>
      <div className="card">
        <p>
          This is Nimbus. Pet him to earn $$$.
        </p>
        <img id="nimbus" onClick={updateCount} src="public/nimbus.png" alt="nimbus" width="200" height="200"></img>
        <p>
          You have ${count}.
        </p>
      </div>
      <p className="read-the-docs">
        created by <a href="https://cjones.dev">Chris Jones</a>
      </p>
    </>
  );
}

export default App
