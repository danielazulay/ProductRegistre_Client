import {useState,useEffect} from 'react'
import axios from 'axios'
import TextInput from './componenets/TextInput.js'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

import { Link } from 'react-router-dom'
function EditProduct(){
    const {id} = useParams()
    const navigate = useNavigate()
const api = axios.create({baseURL: 'http://localhos:4000'})

const [state,setState] = useState({
    name:'',
    price:'',
    qnt:'',

})

function handleChange(event){

setState({...state,[event.target.name]:event.target.value})
}

useEffect(()=>{
    async function getProduct(){
        const resp = await api.get(`http://localhost:5000/product/${id} `)
        setState({...resp.data})
    }
    getProduct()
}, [id])


async function handleSubmit(event){
    try{
        event.preventDefault()
    const resp = await api.put(`http://localhost:5000/product/edit/${id} `,state)
    console.log(resp)
    navigate('/all')
 
    return(
        <h3>produto cadastrado</h3>
    )
    }catch(err){
        console.log(err)
    }
}

return(

    <div>
    <h1>Cadastro de produtos</h1>
<form onSubmit={handleSubmit}>

<TextInput
    label='name'
    type='string'
    name='name'
    value={state.name}
    onChange={handleChange}
/>
<TextInput
    label='price'
    type='number'
    name='price'
    value={state.price}
    onChange={handleChange}
/>
<TextInput
    label='qnt'
    type='number'
    name='qnt'
    value={state.qnt}
    onChange={handleChange}
/>
<button type='submit'>cadastrar</button>
</form>
  <Link to='/all'>Lista</Link> 
    </div>
)

}

export default EditProduct