import { BsCaretDownFill, BsCaretUp } from "react-icons/bs"
import EventsCard from "./EventsCard"
import { useState } from "react";

const EventsSchedule = ({ events, selectedMonth, setSelectedMonth }) => {
    const [dropdown, setDropdown] = useState(false);

    const months = ["Any", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const eventsThisMonth = [];
    const futureEvents = [];

    events.forEach(item => {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const itemMonth = new Date(item.eventDate).getMonth();
        const itemYear = new Date(item.eventDate).getFullYear();

        if (itemMonth + itemYear === currentMonth + currentYear) {
            eventsThisMonth.push(item);
        }

        if (itemYear >= currentYear && itemMonth > currentMonth) {
            futureEvents.push(item);
        }
    })

    const handleSelectMonth = (item) => {
        setSelectedMonth(item);
        setDropdown(false);
    }

    return (
        <div className="max-w-7xl mx-auto py-8 md:py-0">
            <div className="w-full max-w-4xl lg:max-w-5xl flex flex-row items-center justify-between px-6 md:px-16 pt-4 pb-6 md:pt-8 md:pb-10">
                <h3 className="text-2xl md:text-3xl tracking-wide">{new Date().toLocaleString("default", { month: "long", year: "numeric" })}</h3>

                {dropdown ? (
                    <div className="relative">
                        <div className="w-fit mr-4 flex flex-row items-center border-b border-gray-300 cursor-pointer text-rose-300"
                            onClick={() => setDropdown(false)}
                        >
                            <p className="text-sm mr-2 md:text-2xl tracking-wide md:tracking-wider md:px-2">Select Month</p>
                            <BsCaretUp className="text-sm md:text-2xl" />
                        </div>
                        <div className="absolute z-10 max-w-max md:max-w-full top-8 right-2 md:top-12 bg-rose-300 rounded-xl py-4 mt-1 text-white text-lg md:text-xl font-semibold tracking-wider text-center">
                            {months.map(item =>
                                <p
                                    key={item}
                                    className="w-full cursor-pointer px-6 md:px-12 py-3 hover:bg-rose-50 hover:text-rose-400"
                                    onClick={() => handleSelectMonth(item)}
                                >
                                    {item}
                                </p>
                            )}
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="w-fit mr-4 flex flex-row items-center border-b border-gray-300 cursor-pointer hover:border-rose-500"
                            onClick={() => setDropdown(true)}
                        >
                            <p className="text-xl md:text-2xl text-gray-500 tracking-wide md:tracking-wider px-2">{selectedMonth}</p>
                            <BsCaretDownFill className="text-gray-300 text-xl md:text-2xl" />
                        </div>
                    </>
                )}

            </div>

            {eventsThisMonth.length !== 0 ? (
                <div className="w-full md:px-6 py-4">
                    {eventsThisMonth.map(item =>
                        <EventsCard
                            key={item._id}
                            organisationName={item.organisationName}
                            eventName={item.eventName}
                            description={item.description}
                            addressLine1={item.location.addressLine1}
                            addressLine2={item.location.addressLine2}
                            city={item.location.city}
                            postcode={item.location.postcode}
                            eventDate={item.eventDate}
                            startTime={item.startTime}
                            endTime={item.endTime}
                            price={item.price}
                            eventURL={item.eventURL}
                        />
                    )}
                </div>
            ) : (
                <p className="text-center text-2xl py-8 text-gray-400 font-medium tracking-wider leading-relaxed px-8">There are no events this month</p>
            )}


            {futureEvents.length !== 0 &&
                <>
                    <h3 className="text-2xl md:text-3xl tracking-wide px-6 md:px-16 pt-4 pb-6 md:pt-8 md:pb-10">Upcoming:</h3>
                    <div className="w-full md:px-6 py-4">
                        {futureEvents.map(item =>
                            <EventsCard
                                key={item._id}
                                organisationName={item.organisationName}
                                eventName={item.eventName}
                                description={item.description}
                                addressLine1={item.location.addressLine1}
                                addressLine2={item.location.addressLine2}
                                city={item.location.city}
                                postcode={item.location.postcode}
                                eventDate={item.eventDate}
                                startTime={item.startTime}
                                endTime={item.endTime}
                                price={item.price}
                                eventURL={item.eventURL}
                            />
                        )}
                    </div>
                </>
            }

        </div>
    )
}

export default EventsSchedule