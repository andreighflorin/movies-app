import { useCallback } from "react";
import { useData } from "../hooks/useData";

const useFetch = () => {
  const { updateData, updateIsloading, updateError } = useData();

  const fetchData = useCallback(
    async (url) => {
      updateIsloading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          updateIsloading(false);
          updateError("Request failed!");
          throw new Error("Request failed!");
        }

        const result = await response.json();
        updateIsloading(false);
        updateError(false);
        updateData(result);
      } catch (err) {
        updateIsloading(false);
        updateError(err.message);
      }

      return () => {};
    },
    [updateData, updateIsloading, updateError]
  );

  return { fetchData };
};

export default useFetch;
