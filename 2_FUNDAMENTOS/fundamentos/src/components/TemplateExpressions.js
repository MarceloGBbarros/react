const templateExpressions = () =>{
   const name = "Marcelo";
   const data = {
       age:31,
       job:"Programador",
   };
    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>você atua como: {data.job}</p>
            <p>{4+4}</p>
            <p>{console.log("jsx react")}</p>
        </div>
    );
};

export default templateExpressions