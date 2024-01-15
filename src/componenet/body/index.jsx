import React from "react";
// import { useEffect } from "react";

import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Middle from "./middle";
import "./css/index.css";

function index() {
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       // "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow"
  //       "https://api.stackexchange.com/2.3/answers?order=desc&sort=activity&site=stackoverflow"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const result = await response.json();
  //     setData(result);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  return (
    <div className="body-index">
      <div className="body-index-content">
        {/* <div className="d-flex"> */}
        {/* <div className="bg-warning">
          <Sidebar/>
        </div> */}
        {/* Check if data.items is not empty before accessing its elements */}
        {/* {data.items && data.items.length > 0 ? (
          <QuestionsCard result={data.items[0]} />
        ) : (
          <p>Loading...</p>
        )} */}

        <Leftbar />
        <Middle />
        <Rightbar />
      </div>
    </div>
  );
}

export default index;
