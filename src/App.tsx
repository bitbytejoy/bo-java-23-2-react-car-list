type Car = {
    id: string;
    brand: string;
    model: string;
};

function CarList() {
    const cars: Car[] = [
        { id: "1", brand: "BMW", model: "3er" },
        { id: "2", brand: "VW", model: "Golf" },
        { id: "3", brand: "Citroen", model: "Cactus" },
        { id: "3", brand: "Citroen", model: "Cactus" }
    ];

    return (
        <ul className={"container"}>
            {cars.map(car => <li className={"item"} key={car.id}>{car.brand} {car.model}</li>)}
        </ul>
    );
}

function App() {
    return <CarList/>;
}

export default App
