import React from 'react'
import { useState } from 'react';

const count = () => {
const [contador,setContador]=useState(0)
    return (
<div>


    <h1> {contador}</h1>

    <button onClick={() => setContador(contador + 1) }> Sumar</button >

        <button onClick={() => setContador(contador - 1) } > Restar</ button>

        <button onClick={() => setContador (0) }> Reset </button>

</div>
)
}

export default count