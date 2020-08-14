import React, { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

export const LinksPage = () => {
  const { userId } = useContext(AuthContext);
  const hadleSubmit = () => {
    localStorage.setItem(userId, "video1");
  };
  return (
    <div>
      <h1>Link</h1>

      <button onClick={hadleSubmit}>put</button>
      {console.log(localStorage.getItem(userId))}
    </div>
  );
};
