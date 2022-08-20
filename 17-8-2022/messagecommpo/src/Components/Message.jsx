import React from "react";
import { Messagetext } from "./Messagetext";

export const Message = ({ Data }) => {
  return (
    <div className="MessageBody">
      <Messagetext message={Data} position={""} />
      {Data.replies?.map((item, index1) => {
        return (
          <div key={index1}>
            <Messagetext message={item} position={"p1"} />
            {item.replies?.map((item2, index2) => {
              return <Messagetext message={item2} position={"p2"} key={index2} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
