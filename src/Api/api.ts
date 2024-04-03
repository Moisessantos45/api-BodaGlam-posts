import type { TypeCards } from "@/Types/types";
import axios from "axios";

const shortDat = (str: string): Date => {
  const dateParts = str.split(" ");
  const month = dateParts[0];
  const day = parseInt(dateParts[1].replace(",", ""));
  const year = parseInt(dateParts[2]);
  return new Date(`${month} ${day}, ${year}`);
};

const getAllPost = async (): Promise<TypeCards[]> => {
  const host = import.meta.env.VITE_HOST_BACKEND;
  try {
    const response = await axios(`${host}/api/1.0/Post`);
    const data = response.data ? response.data : [];
    return data;
  } catch (error) {
    return [];
  }
};

export { getAllPost, shortDat };
