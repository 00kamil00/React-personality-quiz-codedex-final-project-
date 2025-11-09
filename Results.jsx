import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Results({ element, artwork }) {
  const { name } = useContext(UserContext);

  return (
    <div className="text-center mt-12">
      <p className="text-2xl mb-6">
        <strong>{name}</strong>, your element is:{" "}
        <strong className="text-blue-700">{element}</strong>
      </p>

      {artwork ? (
        <div className="artwork">
          <h2 className="text-xl font-semibold">{artwork.title}</h2>
          <img
            src={artwork.primaryImage}
            alt={artwork.title}
            className="mx-auto mt-4 rounded-xl max-w-[300px]"
          />
          <p>{artwork.artistDisplayName}</p>
          <p>{artwork.objectDate}</p>
        </div>
      ) : (
        <p>No artwork found.</p>
      )}
    </div>
  );
}
