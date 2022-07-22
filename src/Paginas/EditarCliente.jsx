import {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import Formulario from '../Componentes/Formulario'

function EditarCliente() {
  
  const [cliente, setCliente] = useState({}) 
  const [cargando, setCargando] = useState(true) 

  const {id} = useParams()

  useEffect(() => {
    
    const obtenerClienteAPI = async () => {
        try {
            const url = `http://localhost:4000/clientes/${id}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setCliente(resultado)

        } catch (error) {
            console.log(error)    
        }

    setTimeout(() => {
        setCargando(!cargando)
    }, 500);    
    
    }

    obtenerClienteAPI()
  }, [])
    
  return (
    <>
      <h1 className='font-black text-4xl text-indigo-800'>Editar Cliente</h1>
      <p className='mt-3'>Utiliza este formulario para editar datos de un cliente</p>

      {cliente?.nombre ? (
          <Formulario
            cliente={cliente}
            cargando={cargando}
          />
      ): <p>Cliente id no valido</p>}
     
  </>
  )
}

export default EditarCliente