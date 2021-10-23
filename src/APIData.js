import React, { useEffect, useState } from 'react';

const APIData = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.cases_time_series);
        setData(actualData.cases_time_series);
    }

    useEffect(() => {
        getCovidData();
    }, []);
    return (

        <div>

            <h1 className="h1">India Covid 19 Dashboard</h1>

            <table className="table1">
                <thead>
                    <tr>
                        <th>cases_time_series</th>
                        <th>dailyconfirmed</th>
                        <th>dailydeceased</th>
                        <th>dailyrecovered</th>
                        <th>date</th>
                        <th>dateymd</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        data.map((curElem, ind) => {
                            return (
                                <tr>
                                    <td>{curElem.cases_time_series}</td>
                                    <td>{curElem.dailyconfirmed}</td>
                                    <td>{curElem.dailydeceased}</td>
                                    <td>{curElem.dailyrecovered}</td>
                                    <td>{curElem.date}</td>
                                    <td>{curElem.dateymd}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

        </div>
    );

}

export default APIData;
