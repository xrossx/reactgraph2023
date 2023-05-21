import React from "react";
import GraphApp from "./GraphApp";

function SingleGraph() {

    const date = new Date()

    const data = {
        graphs : '12,4,8,12,4,8,,,,,'
    }

    return (
        <div>
            < GraphApp  
            date = {date}
            data = {data}
            />
        </div>
    )
}

export default SingleGraph;