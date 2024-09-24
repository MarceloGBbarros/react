const Events = () => {
    const handleMyEvent = (e) =>{
        console.log("Ativou o evento!");
        console.log(e);
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
        </div>
    );
}

export default Events;