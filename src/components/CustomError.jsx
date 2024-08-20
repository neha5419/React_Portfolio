import { useRouteError } from "react-router-dom"
import Shimmer from "./Shimmer";
export default function CustomError(){

    const err=useRouteError();
    return(
        <div>
          <h1>Sorry Error loading Route {err.statusText}</h1>
          <Shimmer/>
        </div>
    )
}