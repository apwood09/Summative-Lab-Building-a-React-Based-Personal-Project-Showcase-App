import { useId, useRef, useEffect, useContext } from 'react';
import { useForm } from '../hooks/useForm';
import { api } from '../services/api';
import { YarnContext } from '../context/YarnContext';

export const AddYarnPage = () => {
    const nameId = useId();
    const inputRef = useRef();
    const { fetchData } = useContext(YarnContext);

    const [values, handleChange, reset] = useForm({
        name: '', weight: 'Medium', color: '', price: '', description: '' 
    }); 

    useEffect(() => inputRef.current.focus(), []); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        await api.addYarn({ ...values, price: parseFloat(values.price) });
        await fetchData(); 
        reset();
        alert("New yarn added to the collection!");
    }; 

   return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Add New Yarn</h2>
      <label htmlFor={nameId}>Yarn Name</label>
      <input ref={inputRef} id={nameId} name="name" value={values.name} onChange={handleChange} required />
      
      <label>Color</label>
      <input name="color" value={values.color} onChange={handleChange} />
      
      <label>Price</label>
      <input name="price" type="number" step="0.01" value={values.price} onChange={handleChange} />
      
      <button type="submit">List Yarn</button>
    </form>
  );
};