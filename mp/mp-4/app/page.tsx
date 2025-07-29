'use client';

import React, { useEffect, useState } from "react";
import getArt from "@/lib/getArt";
import { ArtProps } from "@/types";
import ArtGallery from "@/components/ArtGallery";
import styled from "styled-components";

const ParentDiv = styled.div`
    background-color: red;
    width: 80vw;
    margin: 0 auto;
    border: 5px lightgrey solid;
    padding: 0 6vw;
`;

export default function MyComponent() {
  const [data, setData] = useState<ArtProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const arts = await getArt();
      if (arts) {
        setData(arts);
      } else {
        setData([]); // or handle empty state differently
      }
    }
    fetchData();
  }, []);

  return (
    <ParentDiv>
      <ArtGallery />
    </ParentDiv>
  );
}
