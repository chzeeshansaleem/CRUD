import React, { useEffect, useState } from "react";

import { registerapi } from "../API/Apicall";
const Register = () => {
  const empty = () => {
    name: "";
    email: "";
    city: "";
  };
  const [handle, sethandle] = useState(empty); //this use stete for name,email,city
  const [imgdata, setimgdata] = useState(""); //this use stete for input image on choose file
  const [imgprev, setimgprev] = useState(""); //this use stete for show picture
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

    let formdata = new FormData();
    formdata.append("name", handle.name);
    formdata.append("email", handle.email);
    formdata.append("city", handle.city);
    formdata.append("img", imgdata);
    let config = {
      "Content-type": "multipart/form-data",
    };
    const res = await registerapi(formdata, config);
    alert(res);
  };

  useEffect(() => {
    console.log(handle);
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
        <button className="btn btn-primary mt-2">Save</button>
      </form>
    </div>
  );
};

export default Register;
