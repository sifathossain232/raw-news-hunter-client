// const { useEffect } = require("react")

import { useEffect } from "react";

const useTitel = titel =>{
    useEffect( () =>{
    document.title = `${titel} - RAW HUNTER NEWS`;
    },[titel])
};

export default useTitel;