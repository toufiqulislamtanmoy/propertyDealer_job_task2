import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const HotelCards = ({ activeTab }) => {
    const [propertyDetails, setPropertyDetails] = useState([]);
    const [displayCount, setDisplayCount] = useState(6);
    const [loading, setLoading] = useState(true);
    const [showMore, setShowMore] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setPropertyDetails(data);
                setLoading(false);
                setDisplayCount(6);
                setShowMore(true);
            });
    }, [activeTab]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const filteredHotelData = propertyDetails.filter(hotel => hotel.addresses[0].city === activeTab);
    const totalCards = filteredHotelData.length;

    const handleShowMore = () => {
        const newDisplayCount = displayCount + 3;
        setDisplayCount(Math.min(newDisplayCount, totalCards));
        setShowMore(newDisplayCount < totalCards);
    };

    const handleShowLess = () => {
        setDisplayCount(6);
        setShowMore(true);
    };

    return (
        <>
            <div className="grid grid-cols-3 my-10 gap-10">
                {filteredHotelData.slice(0, displayCount).map(data => (
                    <Card key={data.id} details={data} frm={"HotelCard"} />
                ))}
            </div>
            {showMore && (
                <div className="text-center">
                    <button
                        className="bg-[#7777ff] font-bold text-white btn-radius p-3 hover:transition-colors hover:duration-500 hover:bg-[#7777ff] hover:text-white px-5"
                        onClick={handleShowMore}
                    >
                        <FontAwesomeIcon icon={faHourglassEnd} /> Show More
                    </button>
                </div>
            )}
            {!showMore && (
                <div className="text-center">
                    <button
                        className="bg-[#7777ff] font-bold text-white btn-radius p-3 hover:transition-colors hover:duration-500 hover:bg-[#7777ff] hover:text-white px-5"
                        onClick={handleShowLess}
                    >
                        Show Less
                    </button>
                </div>
            )}
        </>
    );
};

export default HotelCards;
