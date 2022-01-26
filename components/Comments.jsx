import React from "react";
import { useState, useEffect } from "react";
import { getComments } from "../services";
import moment from "moment";
import parse from "html-react-parser";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg mb-12 pb-8 p-8">
          <h3 className=" font-semibold text-xl border-b pb-4">
            {comments.length} &nbsp; Comments
          </h3>
          {comments.map((comment) => (
            <div key={comment.createdAt} className="font-semibold py-3 ">
              <p className="">
                <span className="font-semibold">{comment.name}</span>
                &nbsp; on &nbsp;
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="text-gray-500 w-full whitespace-pre-line">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
