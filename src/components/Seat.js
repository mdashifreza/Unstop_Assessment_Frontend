import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SeatDisplay from './SeatDisplay';

export default function Seat() {
    const [seat, setSeat] = useState([]);
    useEffect(()=>{
        apiCallSeat();
    },[])
    const apiCallSeat = async ()=>{
        try{
            const url = "https://unstop-assessment-backend.vercel.app/api/seats"
            const response = await axios.get(url);
            const responseData = await response.data;
            // console.log("fetched data", responseData)
            setSeat(responseData);
        }catch(error){
            // console.log("error while fetching:", error)
        }
    }
    return (
        <div className='flex justify-center flex-wrap'><SeatDisplay seat = {seat} apiCallSeat={apiCallSeat} /></div>
    )
}
