//arquivo de estilo
import MyComponent from "./MyComponent";

const FirstComponent = () => {
    //explicação de funções

    return (

        <div>
            {/* comentário em jsx */}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;