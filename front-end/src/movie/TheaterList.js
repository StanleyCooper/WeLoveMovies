import React from "react";
import Theater from "./Theater";

function TheaterList({ theaters = [] }) {
  if (theaters.length) {

    const headingStyle ={
      color: "#DBA506",
      "font-weight": "bold",
    }
  
    return (
      <section className="mt-4">
        <h4 style={headingStyle}>Now Showing Here</h4>
        <div className="row">
          {theaters.map((theater) => (
            <Theater key={theater.theater_id} theater={theater} />
          ))}
        </div>
      </section>
    );
  }
  return null;
}

export default TheaterList;
