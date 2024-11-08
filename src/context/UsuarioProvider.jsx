import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

// const usuarioFake = {
//     nombre: 'Pepita',
//     email: 'pepita@gmail.com',
//     ciudad: 'Granada',
//     edad: 22
// }

export const UsuarioProvider = ({children}) => {

    const [usuario, setUsuario] = useState({})

    return (
        <UsuarioContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UsuarioContext.Provider>
  )
}
