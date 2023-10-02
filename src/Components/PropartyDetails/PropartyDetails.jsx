import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import Header from "../Header/Header";

const PropartyDetails = () => {
    const { id } = useParams();
    const [propertyDetails, setPropertyDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => {
                const property = data.find(item => item.id === parseInt(id));
                setPropertyDetails(property);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!propertyDetails) {
        return <div>Property not found</div>;
    }
    return (
        <div className="w-1/2 mx-auto space-y-12">
            <Header title={"Product Details"} discrip={""}/>
            <Card details={propertyDetails} />
        </div>
    );
};

export default PropartyDetails;