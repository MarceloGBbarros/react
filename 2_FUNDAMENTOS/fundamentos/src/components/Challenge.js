const Challenge = () =>{

    const a = 1;
    const b = 2;

    return (
        <div>
            <div>
                <p>A: {a}</p>
                <p>B: {b}</p>
                <button onClick={() => console.log(a+b)}>Clique aqui para ver a soma</button>
            </div>
        </div>
    );

}

export default Challenge;