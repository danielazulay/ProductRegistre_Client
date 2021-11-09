import {useState} from 'react'
import axios from 'axios'
import TextInput from './componenets/TextInput.js'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
function ProductForm(){

const api = axios.create({baseURL: 'http://localhos:4000'})
const navigate = useNavigate()
const [state,setState] = useState({
    name:'',
    price:'',
    qnt:'',

})

function handleChange(event){

setState({...state,[event.target.name]:event.target.value})
}


async function handleSubmit(event){
    try{
        event.preventDefault()
    const resp = await api.post('http://localhost:5000/product/new',state)
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

export default ProductForm