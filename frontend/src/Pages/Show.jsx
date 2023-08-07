import React, { useEffect, useState } from "react";
import { show, remove } from "../API/Apicall";
import { Link } from "react-router-dom";
import View from "./View";
import { Backend_url } from "../API/Beckend_url";
const Show = () => {
  const [shows, setshows] = useState([]);
  const get = async () => {
    const geter = await show();

    setshows(geter.data);
    console.log(shows);
  };

  const Del = async (id) => {
    console.log("clicked");
    const res = await remove(id);
    get();
    console.log(res);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="display-3 text-center">All Data </div>
        {shows.map((item, index) => (
          <div className="row mb-2">
            <div className="col-6 offset-3 border " key={index + 1}>
              <div className="d-flex justify-content-between mt-2">
                <div>
                  <p>
                    <b>{item.name}</b>
                    <br />
                    at {item.city}
                    <br />
                    {item.email}
                  </p>
                </div>
                <div>
                  <Link to={`/user/${item._id}`}>
                    {" "}
                    <button className="btn btn-primary mx-1">View</button>
                  </Link>
                  <Link to={`/update/${item._id}`}>
                    {" "}
                    <button className="btn btn-success mx-1">Edit</button>{" "}
                  </Link>
                  <Link>
                    {" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => Del(item._id)}
                    >
                      Delete
                    </button>{" "}
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <img
                  className="w-75"
                  src={`${Backend_url}/uploads/${item.img}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Show;
