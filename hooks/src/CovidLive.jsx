import React, { useEffect } from "react";
import { useState } from "react";
const CovidLive = () => {

    const [data , setData] = useState([]);
    const getCovidData = async() => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.cases_time_series);
        setData(actualData.cases_time_series);
    };

    useEffect (() => {
        getCovidData();
    }, []);



    return (
        <div>
            <h1>Covid Live</h1>
            <table>
                <thead>
                    <tr>
                        <th>Daily confirmed</th>
                        <th>Daily Deceased</th>
                        <th>Daily Recovered</th>
                        <th>Date</th>
                        <th>Date Year-Month-Day</th>
                        <th>Total Confirmed</th>
                        <th>Total Deceased</th>
                        <th>Total Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((currData , ind) => {
                            return (
                                <tr key={ind}>
                                    <td>{currData.dailyconfirmed}</td>
                                    <td>{currData.dailydeceased}</td>
                                    <td>{currData.dailyrecovered}</td>
                                    <td>{currData.date}</td>
                                    <td>{currData.dateymd}</td>
                                    <td>{currData.totalconfirmed}</td>
                                    <td>{currData.totaldeceased}</td>
                                    <td>{currData.totalrecovered}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default CovidLive;