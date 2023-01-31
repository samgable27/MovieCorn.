import React from "react";
import Skeleton from "@mui/material/Skeleton";

export const SkeletonLoading = () => {
  return (
    <>
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        animation="pulse"
        variant="rounded"
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        animation="pulse"
        variant="rounded"
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        animation="pulse"
        variant="rounded"
      />
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        animation="pulse"
        variant="rounded"
      />
    </>
  );
};
