import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="relative mt-20 mb-8 p-12 text-center bg-opacity-20 text-white bg-black  py-10 rounded-lg">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          alt={author.name}
          unoptimized
          height="100px"
          width="100px"
          className="align-middle"
          src={author.photo.url}
        ></Image>
      </div>
      <h3 className="my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-ls">{author.bio}</p>
    </div>
  );
};

export default Author;
