import { useNavigate} from 'react-router-dom'

function Cliente({cliente, handleEliminar}) {

  const navigate = useNavigate()  

  const {nombre, empresa, email, telefono, notas, id} = cliente
    
  return (
    <tr className='border hover:bg-gray-100'>
        <td className='p-3'>{nombre}</td>
        <td className='p-3'>
            <p><span className='text-gray-800 uppercase font-bold'>Email: </span> {email} </p>
            <p><span className='text-gray-800 uppercase font-bold'>Tel: </span> {telefono} </p>
        </td>
        <td className='p-3'>{empresa}</td>
        <td className='p-3'>
             <button
                type='button'
                className='bg-green-500 hover:bg-green-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3'
                onClick={ () => navigate(`/clientes/${id}`)}
            >Ver</button>  
          <button
                type='button'
                className='bg-indigo-500 hover:bg-indigo-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3'
                onClick={() => navigate(`/clientes/editar/${id}`)}
            >Editar</button>  
          <button

                type='button'
                className='bg-orange-500 hover:bg-orange-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3'
                onClick={() => handleEliminar(id)}
            >Eliminar</button>  
        </td>
        
    </tr>
  )
}

export default Cliente