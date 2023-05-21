import React, { useState } from "react";
import './GraphApp.css'


function GraphApp({ date, data }) {

    const [state_graph, setStateGraph] = useState(graph(data, date));
    // const [days, setDays] = useState(days_in_month)

    function days(date) {
        const days = []
        for (let i = 1; i < days_in_month(date.getMonth()) + 1; i++) {
            days.push(i);
        }
        return days;
    }

    function graph(data, date) {

        const gr = data.graphs.split(',');
        const full_graph = days(date).map((item, i) => {
            if (gr[i]) {
                item = gr[i]
            } else {
                item = ''
            }
    })
        console.log(gr[20])
        // setStateGraph(full_graph);
        return gr
    }
    
    graph(data, date);


    let month_letter = date.toLocaleString('ru', { month: 'long' })

    function days_in_month(month) {
        return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
    }



    function handleChange(index, value) {
        const nextgraph = state_graph.map((v, i) => {
            if (i === index) {
                return value
            }
            else return v
        })
        setStateGraph(nextgraph);
    }


    return (
        <div>
            <table>
                <caption><h2>{month_letter}</h2></caption>
                <tr>
                    {days(date).map((v, i) => (
                        <td>{v}</td>
                    ))}
                </tr>
                <tr>
                    {state_graph.map((val, i) => (
                        <td><input className="input_table" key={i} value={val} onChange={(e) => handleChange(i, e.target.value)} /></td>

                    )

                    )}

                </tr>
            </table>
        </div>
    )
}

export default GraphApp;