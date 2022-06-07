import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import Auth from '../utils/auth';

const SingleFolder = ({ folderTitle, aspirationData }) => {
  console.log(aspirationData);

  return (
    <section>
      <div className="grid md:grid-cols-3 grid-cols-2 content-around m-4">
        {aspirationData.map((aspirations, index) => (
          <div>{aspirations.title}</div>
        ))}
      </div>
    </section>
  )
};

export default SingleFolder;
