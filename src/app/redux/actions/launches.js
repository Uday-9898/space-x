import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "app/api";

export const fetchAllLaunches = createAsyncThunk(
  "launches/data",
  async (dispatch, getState) => {
    const allLaunchesResponse = await api.launch.getAllLaunches();

    return {
      launches: [...allLaunchesResponse],
    };
  }
);

export const launches = {
  fetchAllLaunches,
};
