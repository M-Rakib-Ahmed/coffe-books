import { useLoaderData, useParams } from "react-router-dom";


const CoffeeCards = () => {
    const coffees = useLoaderData()
    console.log(coffees);
    
    const {category} =useParams()
    return (
        <div>
           Coffees Cards.... {category}
        </div>
    );
};

export default CoffeeCards;