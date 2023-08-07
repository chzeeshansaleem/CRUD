import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { registerapi, UpdateApi, update } from "../API/Apicall";
const Update = () => {
  const navigate = useNavigate();
  const change = () => {
    navigate("/show");
  };

  const empty = () => {
    name: "";
    email: "";
    city: "";
    img: "";
  };
  const [handle1, sethandle1] = useState(empty); //this use stete for name,email,city
  const [name, setname] = useState("");
  const [handle, sethandle] = useState(empty); //this use stete for name,email,city
  const [imgdata, setimgdata] = useState(""); //this use stete for input image on choose file
  const [imgValue, setimgValue] = useState(""); //this use stete for Update Img image on choose file

  const [imgprev, setimgprev] = useState(""); //this use stete for show picture
  //Getting the id
  const { id } = useParams();
  //UpdateData Function
  const userprofile = async (id) => {
    const res = await UpdateApi(id);
    console.log(res.data);
    setname(res.data);
  };

  //   const namehandle = (e) => {
  //     const name = e.target;
  //     setname(name);
  //   };

  // handler for input feild
  const handler = (e) => {
    const { name, value } = e.target;
    sethandle({ ...handle, [name]: value });
  };
  // handler for input image
  const inputimg = (e) => {
    setimgdata(e.target.files[0]);
  };

  const submit = async (e) => {
    console.log("clicked");
    e.preventDefault();
    change();
    let formdata = new FormData();
    formdata.append("name", handle.name);
    formdata.append("email", handle.email);
    formdata.append("city", handle.city);
    formdata.append("img", imgdata);
    let config = {
      "Content-type": "multipart/form-data",
    };
    const res = await update(id, formdata, config);
    console.log(res);
  };
  //this useEffect use for getting previous data
  useEffect(() => {
    userprofile(id);
  }, [id]);

  useEffect(() => {
    if (imgdata) {
      setimgprev(URL.createObjectURL(imgdata));
    }
  }, [imgdata]);

  return (
    <div className="container">
      <h1 className="text-center">Add Data </h1>
      <img
        style={{ width: "150px", height: "150px" }}
        src={imgprev ? imgprev : "./vite.svg"}
      />
      <form onSubmit={submit}>
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Enter Name"
          name="name"
          onChange={handler}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Enter Email"
          name="email"
          onChange={handler}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Enter City"
          name="city"
          onChange={handler}
        />
        <input
          type="file"
          className="form-control mt-2"
          placeholder="Enter City"
          name="img"
          onChange={inputimg}
        />
        <button className="btn btn-success mt-2">Update</button>
      </form>
    </div>
  );
};

export default Update;
