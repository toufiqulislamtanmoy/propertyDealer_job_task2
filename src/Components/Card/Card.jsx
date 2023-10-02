import { faArrowsUpDownLeftRight, faBath, faBed, faHeart, faHotel, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css"
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Card = ({ details,frm }) => {
    console.log(details);
    const { addresses, forRentOrSale, hotelImages, hotelName, id, isPopular, price, roomTypes } = details;
    return (


        <div className="card bg-base-100 shadow-xl">
            <div className="relative">
                <figure className="relative">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {hotelImages.map((singleImage, ind) => (
                            <SwiperSlide key={ind}>
                                <img src={singleImage} alt="Cover Not Found" className={`rounded-xl ${frm === 'HotelCard' ? 'h-[250px] w-full' : '' } `} />
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    <button className="bg-white border-2 font-bold  text-[#7777ff] btn-radius px-5 hover:transition-colors absolute top-1 left-1 z-10">{forRentOrSale}</button>

                    <button className="bg-white font-bold border-[#7777ff] rounded-full hover:transition-colors absolute top-1 right-1 z-10"><FontAwesomeIcon className="p-3" icon={faHeart} /></button>
                </figure>
                {isPopular &&
                    <>
                        <div className="absolute -left-3 -bottom-[10px]">
                            <div className="text-white py-1 z-10 rounded-[4px] mybadge relative bg-[#0000ff] px-10">Popular</div>
                        </div>
                        <div className="absolute -left-3 -bottom-[15px]">
                            <span className="text-white py-[4px] badgeRound bg-[#0000ff] px-[8px]"></span>
                        </div>

                    </>
                }
            </div>
            <div className="card-body">
                <p><FontAwesomeIcon className="text-amber-800" icon={faLocationDot} /> <span>{addresses[0].addressLine1}</span></p>
                <h2 className="card-title">{hotelName} - {addresses[0].city} {addresses[0].postalCode}</h2>

                <div className="flex gap-5 items-center justify-around my-5">
                    <div>
                        <FontAwesomeIcon className="text-xl" icon={faHotel} />
                        <h3 className="text-xl font-bold">{roomTypes[0].numberOfRoom} Room</h3>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-xl" icon={faBed} />
                        <h3 className="text-xl font-bold">{roomTypes[0].bedCount} Bed</h3>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-xl" icon={faBath} />
                        <h3 className="text-xl font-bold">{roomTypes[0].bath} Bath</h3>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-xl" icon={faArrowsUpDownLeftRight} />
                        <h3 className="text-xl font-bold">{roomTypes[0].squareFootage} sft</h3>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h2><span className="text-2xl text-primary font-bold">${price}</span>/month</h2>
                    </div>
                    { frm === 'HotelCard' &&
                        <div>
                        <Link to={`propartyDetail/${id}`} className="bg-white border-2 font-bold border-[#7777ff] text-[#7777ff] btn-radius p-3 hover:transition-colors hover:duration-500 hover:bg-[#7777ff] hover:text-white">Read More</Link>
                   </div>
                    }
                </div>
            </div>
        </div>

    );
};

export default Card;