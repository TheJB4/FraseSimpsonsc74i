import { useState } from "react";
import { Container } from "react-bootstrap";

export default function FraseComponent({personaje}) {

    return (
        <Container className="border border-danger w-full px-5 d-flex flex-column justify-content-center align-items-center">
                <div>
                    <p className="text-center fs-4">{personaje.character}</p>
                <hr />
                </div>
                <img src={personaje.image} alt=""/>
                <div className="p-3 mb-2 bg-success-subtle text-emphasis-success">
                    <p className="text-center fw-bold">"{personaje.quote}"</p>
                    <p className="text-center"><i>-{personaje.character} in The Simpson</i></p>
                </div>
        </Container>
    )
}