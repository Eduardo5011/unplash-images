import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const url =
  "";

const Gallery = () => {

  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url)

      return result.data
    }
  })
  console.log(response)

  return <div>Gallery</div>;
};

export default Gallery;
