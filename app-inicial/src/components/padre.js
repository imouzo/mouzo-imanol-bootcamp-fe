import React from "react";
import Hijo from "./hijo";

function Padre () {
    let regalo = "Auto";

    return (
        <>
            <h1>Componente padre</h1>
            <Hijo propRegalo={regalo} propNueva={10} />
        </>
    )
}

export default Padre;