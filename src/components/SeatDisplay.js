import axios from 'axios';
import React, { useState } from 'react';
import BookedTicketDisplay from './BookedTicketDisplay';

export default function SeatDisplay({ seat, apiCallSeat }) {
    // console.log("row testing ", seat)

    const [numSeats, setNumSeats] = useState(null);
    const [errMsg, setErrMsg] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        if (value.trim() === "") {
            setNumSeats(null); 
            setErrMsg("Number of seats cannot be empty");
        } else if (Number(value)) {
            setNumSeats(value);
            setErrMsg("");
        } else {
            setNumSeats(null);
            setErrMsg("Enter a valid number");
        }
    };

    const [bookedTicHis, setBookedTicHis] = useState([]);
    const handleClick = async () => {
        try {
            const url = "https://unstop-assessment-backend.vercel.app/api/reserve";
            const response = await axios.post(url, { numSeats });
            // console.log("book data fromm response", response);
            setBookedTicHis(response.data.seats)
            apiCallSeat();
        } catch (error) {
            console.log("erroor while booking the ticket:", error)
        }
    }

    return (
        <div className=''>
            <div className='p-4 mb-4 bg-red-400 rounded'>
                <label htmlFor="bookTicket" className='text-xl'>Ticket</label>
                <input type="text" className='ml-10 border-2 border-gray-600 p-1 rounded' placeholder='No of ticket to book' onChange={handleChange} />
                <p className='flex justify-center text-white'>{errMsg}</p>
            </div>
            <div><button className='mb-2 bg-blue-500 text-white p-1 rounded mx-10' onClick={handleClick}>Book Now</button></div>
            <div className='flex space-x-10'>
                <div>
                    {
                        seat.map((item) => {
                            return (
                                <div key={item.row} className='flex space-x-4'>
                                    {
                                        item.seats.map((item) => {
                                            return (
                                                <div key={item._id} className={`${item.isReserved ? 'bg-gray-900' : 'bg-gray-300'} w-10 h-10 p-3 mb-2 rounded`}>
                                                    <p className='text-red-600'>{item.seatNumber}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <BookedTicketDisplay data={bookedTicHis} />
                </div>
            </div>
        </div>
    )
}
