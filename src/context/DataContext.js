import { createContext, useReducer, useCallback } from "react";

export const DataContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return { ...state, data: action.payload };
    case "ADD_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload),
      };
    case "UPDATE_SEARCHTERM":
      return { ...state, searchTerm: action.payload };
    case "UPDATE_ISLOADING":
      return { ...state, isLoading: action.payload };
    case "UPDATE_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, {
    data: [],
    favorites: [],
    searchTerm: "",
    isLoading: false,
    error: false,
  });

  const updateData = useCallback((data) => {
    dispatch({ type: "UPDATE_DATA", payload: data });
  }, []);

  const addFavorites = useCallback((data) => {
    dispatch({ type: "ADD_FAVORITES", payload: data });
  }, []);
  const removeFavorites = useCallback((data) => {
    dispatch({ type: "REMOVE_FAVORITES", payload: data });
  }, []);

  const updateSearchTerm = useCallback((keyword) => {
    dispatch({ type: "UPDATE_SEARCHTERM", payload: keyword });
  }, []);

  const updateIsloading = useCallback((status) => {
    dispatch({ type: "UPDATE_ISLOADING", payload: status });
  }, []);

  const updateError = useCallback((error) => {
    dispatch({ type: "UPDATE_ERROR", payload: error });
  }, []);

  return (
    <DataContext.Provider
      value={{
        ...state,
        updateData,
        addFavorites,
        removeFavorites,
        updateSearchTerm,
        updateIsloading,
        updateError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
