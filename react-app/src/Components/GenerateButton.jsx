import { React, useState, useEffect } from 'react'
import { GiPowerGenerator } from 'react-icons/gi';
import axios from 'axios'

const GenerateButton = ({ setNameData, length }) => {
    function getName() {
        axios({
            method: "GET",
            url: `http://localhost:5000/random_name?length=${length}`, // Send length as a query parameter
        })
        .then((response) => {
            const res = response.data;
            setNameData({ profile_name: res.name });
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        });
    }


    return (
        <div>
            <button onClick={getName} className='bg-green-400 hover:bg-green-600 text-slate-800 justify-center font-bold py-2 px-4 rounded inline-flex items-center'>
            <GiPowerGenerator size={25} className='pr-2 '/>
            <div>Generate</div>
            </button>
        </div>
    );
};

export default GenerateButton