import React from 'react';

const BookedTicketDisplay = ({ data }) => {
    const { rowIdx, seatsToReserve } = data;

    return (
        <div className="mt-8">
            <div className="border-2 border-teal-500 p-4 rounded bg-teal-100">
                <h1 className="text-xl font-bold mb-4">Once Ticket Booked, Will be Displayed Below</h1>
                {seatsToReserve?.map((item) => (
                    <div key={item._id} className="mb-4 p-2 border border-gray-300 rounded">
                        <p className="text-lg font-semibold">Seat Reserved at Row: <span className="text-blue-600">{rowIdx}</span></p>
                        <p className="text-base">Seat Number: {item.seatNumber}</p>
                        <p className="text-base">Booking ID: {item._id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookedTicketDisplay;
