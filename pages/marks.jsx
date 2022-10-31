import { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

const Marks = () => {
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  const [english, setEnglish] = useState("");
  const [mathematics, setMathematics] = useState("");
  const [physics, setPhysics] = useState("");
  const [chemistry, setChemistry] = useState("");
  const [biology, setBiology] = useState("");
  const [gk, setGk] = useState("");
  const [hsc, setHsc] = useState("");
  const [ssc, setSsc] = useState("");
  const [viva, setViva] = useState("");
  const [quota, setQuota] = useState("");
  const [newinput, setNewinput] = useState(false);
  const [english2, setEnglish2] = useState("");
  const [mathematics2, setMathematics2] = useState("");
  const [physics2, setPhysics2] = useState("");
  const [chemistry2, setChemistry2] = useState("");
  const [biology2, setBiology2] = useState("");
  const [gk2, setGk2] = useState("");
  const [hsc2, setHsc2] = useState("");
  const [ssc2, setSsc2] = useState("");
  const [viva2, setViva2] = useState("");
  const [quota2, setQuota2] = useState("");
  const [edit, setEdit] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/marks")
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (id) => {
    const total =
      parseInt(english) +
      parseInt(mathematics) +
      parseInt(physics) +
      parseInt(chemistry) +
      parseInt(biology) +
      parseInt(gk) +
      parseInt(hsc) +
      parseInt(ssc) +
      parseInt(viva);

    axios
      .post("http://localhost:3001/api/marks", {
        userid: parseInt(id),
        english,
        mathematics,
        physics,
        chemistry,
        biology,
        gk,
        hsc,
        ssc,
        viva,
        total,
        quota,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    axios
      .post("http://localhost:3001/api/total", {
        userid: parseInt(id),
        total: total,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const hello = (item) => {
    setEnglish(item.english);
    setMathematics(item.mathematics);
    setPhysics(item.physics);
    setChemistry(item.chemistry);
    setBiology(item.biology);
    setGk(item.gk);
    setHsc(item.hsc);
    setSsc(item.ssc);
    setViva(item.viva);
    setQuota(item.quota);
  };

  const newMarks = async () => {
    const total =
      parseInt(english) +
      parseInt(mathematics) +
      parseInt(physics) +
      parseInt(chemistry) +
      parseInt(biology) +
      parseInt(gk) +
      parseInt(hsc) +
      parseInt(ssc) +
      parseInt(viva);
    await axios.post("http://localhost:3001/api/newmarks", {
      userid: id,
      english,
      mathematics,
      physics,
      chemistry,
      biology,
      gk,
      hsc,
      ssc,
      viva,
      total,
      quota,
    });
    await axios
      .post("http://localhost:3001/api/total", {
        userid: parseInt(id),
        total: total,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <div className="h-10 shadow-md text-right  pt-2">
        <div className="max-w-6xl mx-auto">Marks Panel</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Applicant Id</th>
            <th>English</th>
            <th>Mathematics</th>
            <th>Physics</th>
            <th>Chemistry</th>
            <th>Biology</th>
            <th>GK</th>
            <th>HSC</th>
            <th>SSC</th>
            <th>Viva</th>
            <th>Quota</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              {() => hello(item)}
              <td>{item.userid}</td>
              {edit === item.userid ? (
                <>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => setEnglish(e.target.value)}
                      value={english}
                      placeholder={item.english}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => setMathematics(e.target.value)}
                      value={mathematics}
                      placeholder={item.mathematics}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => setPhysics(e.target.value)}
                      value={physics}
                      placeholder={item.physics}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => setChemistry(e.target.value)}
                      value={chemistry}
                      placeholder={item.chemistry}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => setBiology(e.target.value)}
                      value={biology}
                      placeholder={item.biology}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => setGk(e.target.value)}
                      value={gk}
                      placeholder={item.gk}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => setHsc(e.target.value)}
                      value={hsc}
                      placeholder={item.HSC}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => setSsc(e.target.value)}
                      value={ssc}
                      placeholder={item.SSC}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => setViva(e.target.value)}
                      value={viva}
                      placeholder={item.Viva}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => setQuota(e.target.value)}
                      value={quota}
                      placeholder={item.quota}
                    />
                  </td>
                </>
              ) : (
                <>
                  <td>{item.english}</td>
                  <td>{item.mathematics}</td>
                  <td>{item.physics}</td>
                  <td>{item.chemistry}</td>
                  <td>{item.biology}</td>
                  <td>{item.gk}</td>
                  <td>{item.HSC}</td>
                  <td>{item.SSC}</td>
                  <td>{item.Viva}</td>
                  <td>{item.quota}</td>
                </>
              )}

              <td>
                <button
                  onClick={() => {
                    setEdit(item.userid);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleSubmit(item.userid);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="rounded bg-blue-300 py-2 px-6 w-32 mt-20 mb-10"
        onClick={() => setNewinput(!newinput)}
      >
        Add New
      </div>
      {newinput && (
        <table>
          <tr>
            <td>
              <input
                type="number"
                onChange={(e) => setId(e.target.value)}
                value={id}
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => setEnglish(e.target.value)}
                value={english}
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => setMathematics(e.target.value)}
                value={mathematics}
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => setPhysics(e.target.value)}
                value={physics}
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => setChemistry(e.target.value)}
                value={chemistry}
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => setBiology(e.target.value)}
                value={biology}
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => setGk(e.target.value)}
                value={gk}
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => setHsc(e.target.value)}
                value={hsc}
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => setSsc(e.target.value)}
                value={ssc}
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => setViva(e.target.value)}
                value={viva}
              />
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => setQuota(e.target.value)}
                value={quota}
              />
            </td>
            <td>
              <button
                onClick={() => {
                  newMarks();
                }}
              >
                Update
              </button>
            </td>
          </tr>
        </table>
      )}
    </div>
  );
};

export default Marks;
