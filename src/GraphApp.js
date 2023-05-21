import React, { useState } from "react";
import './GraphApp.css'
import { Spreadsheet } from "react-spreadsheet";


export default function GraphApp({ date, data }) {

    console.log(data)

    function month_letter(data) { // месяц русскими буквами из даты
        return date.toLocaleString('ru', { month: 'long' })
    } 

    function days_in_month(month) { // количество дней в месяце
        return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
    }

    const daym = days_in_month(date)

    function days_list(date) {  // массив из объектов дней месяца {value: день}
        const days = []
        for (let i = 1; i < daym + 1; i++) {
            days.push({value: i});
        }
        return days;
    }

    

    function graph(data) { // массив из часов работы 

        const gr = data.graphs.split(','); // массив из строки
        const graph = []
        for (let i=0; i< daym +1; i++){
            graph.push({value: gr[i]})
        }

        return graph
    }

    const start_data = [
        days_list(date),
        graph(data)
    ]

    const [data_state, setData] = useState(start_data);

    function handleChange(data_state) {

        while (data_state[1].length>daym) {
            data_state[1].pop()
        }

        const newdata = [
            days_list(date),
            data_state[1]        
        ]
        setData(newdata);
    }


    return (
        <div>
            {month_letter(data)}
            < Spreadsheet data = {data_state} onChange={handleChange} />
        </div>
    )
}