import { useState } from 'react';
import Header from "./Components/Header/Header";
import Tab from "./Components/Tab/Tab";
import HotelCards from "./Components/HotelCards/HotelCards";


const App = () => {
    const [activeTab, setActiveTab] = useState('New York');

    return (
        <div className="bg-[#e4ecf7] p-10">
            <Header title={"Featured Listed Property"} discrip={"Real estate can be bought, sold, leased, or rented, and can be a valuable investment opportunity. The value of real estate can be..."}/>
            <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
            <HotelCards activeTab={activeTab} />
        </div>
    );
};

export default App;
