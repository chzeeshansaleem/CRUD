import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ViewApi } from "../API/Apicall";
import { Backend_url } from "../API/Beckend_url";
const View = () => {
  const { id } = useParams();

  const [Viewprofile, setViewprofile] = useState({});
  const userProfile = async () => {
    const response = await ViewApi(id);
    console.log(id);
    console.log(response.data);
    setViewprofile(response.data);
  };

  useEffect(() => {
    userProfile();
  }, []);

  return (
    <div>
      <p>{Viewprofile.name}</p>
      <p>{Viewprofile.email}</p>
      <p>{Viewprofile.city}</p>
      <img src={`${Backend_url}/uploads/${Viewprofile.img}`} />
    </div>
  );
};

export default View;
