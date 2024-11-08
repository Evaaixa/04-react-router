import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"
import { useForm } from "../hooks/useForm"
import { useNavigate } from "react-router-dom"


export const LoginScreen = () => {

  const navigate = useNavigate()
  
  const initialForm = {
    nombre: '',
    email: '',
    ciudad: '',
    edad: ''
}

  const { formState, nombre, email, ciudad, edad, onInputChange } = useForm(initialForm)

  const { setUsuario } = useContext( UsuarioContext )

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
    setUsuario(formState)
    navigate('/')
  }

  return (
    <>
        <form className="container" onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
              <input 
                type="text" 
                className="form-control" 
                name="nombre"
                value={nombre}
                onChange={onInputChange}
              />
            <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                name="email" 
                value={email}
                onChange={onInputChange}
              />
            <label htmlFor="edad" className="form-label">Edad</label>
              <input 
                type="text" 
                className="form-control" 
                name="edad"
                value={edad}
                onChange={onInputChange}
              />
            <label htmlFor="ciudad" className="form-label">Ciudad</label>
              <input 
                type="text" 
                className="form-control" 
                name="ciudad" 
                value={ciudad}
                onChange={onInputChange}
              />
          </div>

          <button type="submit" class="btn btn-primary">Registrar Usuario</button>
        
        </form>
    </>
  )
}
