import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from "axios";
import { useApi } from "../../hooks/useApi";

// Define BASE_URL or import from your config
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
// eslint-disable-next-line react-hooks/rules-of-hooks
const api: AxiosInstance = useApi();
