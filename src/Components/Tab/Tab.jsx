import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Tab.css"
const Tab = ({ activeTab, setActiveTab }) => {
    const cities = ['New York', 'Mumbai', 'Paris', 'London'];

    return (
        <div className="navbar mt-32">
            <div className="navbar-start">
                <div className="flex">
                    <ul className="px-1 flex gap-3 font-bold">
                        {cities.map((city, ind) => (
                            <li
                                key={ind}
                                className={`bg-[#cbdffc] btn-radius px-5 hover:transition-colors hover:duration-500 hover:bg-[#7777ff] hover:text-white ${activeTab === city ? 'bg-blue-600 text-white' : ''}`}
                                onClick={() => setActiveTab(city)}
                            >
                                <Link>{city}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <li className="bg-white border-2 font-bold border-[#7777ff] text-[#7777ff] btn-radius p-3 hover:transition-colors hover:duration-500 hover:bg-[#7777ff] hover:text-white">
                    <Link>View All <FontAwesomeIcon icon={faArrowRight} /></Link>
                </li>
            </div>
        </div>
    );
};

export default Tab;
