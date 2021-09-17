import React from 'react';

const Hijo = (props) => {
    //Acá estoy desestructurando. Tambien podria hacer props.propRegalo y props.propNueva
    //Sin objetos con sus propiedades.
    //Tambien puedo destructurar directamente una prop. xEj const Hijo = ({propRegalo})
    const {propRegalo, propNueva} = props;
    console.log(propRegalo);
    console.log(propNueva);

    return (
        <div>
            <h1>Componente hijo</h1>
        </div>
    );
};

export default Hijo;<h1>Componente hijo</h1>