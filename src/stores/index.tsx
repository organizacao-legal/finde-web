import { createContext } from "react";
import { Store } from "./store";


export const rootStore = createContext({
  store: new Store(),
});