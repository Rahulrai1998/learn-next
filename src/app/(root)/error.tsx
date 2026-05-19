"use client";
import React, { useEffect } from "react";

const RootError = ({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong</h2>
      <button onClick={() => unstable_retry()}>Try again</button>
    </div>
  );
};

export default RootError;
