import { rootStore } from "@/stores";
import { useContext } from "react";


export const useStores = () => useContext(rootStore)