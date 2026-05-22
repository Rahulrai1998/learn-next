import React from "react";
//SERVERS-SIDE DATA FETCHING
const AlbumsPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Error");
  const albums = await response.json();

  console.log(albums);
  return (
    <div>
      <h1>AlbumsPage</h1>
      <div className="overflow-auto max-h-100 text-center">
        {albums?.map(({ id, title }: { id: string; title: string }) => (
          <p>{title}</p>
        ))}
      </div>
    </div>
  );
};

export default AlbumsPage;
