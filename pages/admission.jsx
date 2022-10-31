import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const Admission = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/application")
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Header />
      <div className="h-10 shadow-md text-right  pt-2">
        <div className="max-w-6xl mx-auto">Admission Panel</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Applicant Id</th>
            <th>Name</th>
            <th>Subject Choice</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.subject_choice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admission;
