import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "app/api";

export const fetchRocketsData = createAsyncThunk(
  "rockets/data",
  async (dispatch, getState) => {
    const rocketsResponse = await api.rockets.getRockets();

    return {
      rockets: [...rocketsResponse],
    };
  }
);

export const rockets = {
  fetchRocketsData,
};
