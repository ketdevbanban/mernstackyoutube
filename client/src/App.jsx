import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const { data } = await axios.get("department");
      setDepartment(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="text-3xl font-bold font-Noto">
        {department?.map((d) => (
          <div className="font-Noto" key={d._id}>
            <p>{d?.name_la}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
