
import { useEffect, useReducer } from "react";

const initialState = {
  data: null,
  loading: true,
  error: null,
};

function fetchReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        data: null,
        loading: true,
        error: null,
      };

    case "SUCCESS":
      return {
        data: action.payload,
        loading: false,
        error: null,
      };

    case "ERROR":
      return {
        data: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default function useFetch(fetchingFunction, dependencies = []) {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      dispatch({ type: "LOADING" });

      try {
        const result = await fetchingFunction(controller.signal);

        dispatch({
          type: "SUCCESS",
          payload: result,
        });
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }

        dispatch({
          type: "ERROR",
          payload: error.message,
        });
      }
    }

    loadData();

    return () => {
      controller.abort();
    };
  }, [fetchingFunction, ...dependencies]);

  return state;
}
