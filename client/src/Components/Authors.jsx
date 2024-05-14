import { useState, useEffect } from "react";
import axios from "axios";

const Authors = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3001/getdata")
        .then((res) => {
          console.log(res.data);
          setData(res.data); 
        })
        .catch((err) => console.log(err));
    }, []);

  return (
    <div>
        <center>
            <h1 className="welcome">Our Top Authors</h1>
        </center>
      <div className="grid-container">
        {data.map((blog) => (
          <div className="grid-item" key={blog._id}>
            <center>
              <h3>{blog.author}</h3>
            </center>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
