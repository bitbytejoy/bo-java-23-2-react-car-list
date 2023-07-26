import './App.css'

type Car = {
    id: string;
    brand: string;
    model: string;
};

function CarList() {
    const cars: Car[] = [
        { id: "1", brand: "BMW", model: "3er" },
        { id: "2", brand: "VW", model: "Golf" },
        { id: "3", brand: "Citroen", model: "Cactus" }
    ];

    return (
        <ul>
            {cars.map(car => <li key={car.id}>{car.brand} {car.model}</li>)}
        </ul>
    );
}

function App() {
    return <CarList/>;
}

export default App
