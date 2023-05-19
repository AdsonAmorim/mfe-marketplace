import React, { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Box } from "@mui/material";

export default function Home() {
  useEffect(() => {
    (async () => {
      fetch("https://dummyjson.com/products/1")
        .then((res) => res.json())
        .then(console.log);
    })();
  }, []);

  return (
    <div>
      <Box>
        <ProductCard />
      </Box>
    </div>
  );
}
