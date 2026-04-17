import { useState } from 'react';
import { api } from '../services/api';

export const YarnCard = ({ yarn }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [price, setPrice] = useState(yarn.price);

    const handleUpdate = async () => {
        await api.updateYarn(yarn.id, { price: parseFloat(price) }); 
        setIsEditing(false); 
    }; 

    return (
    <div style={{ border: '1px solid #ddd', margin: '10px', padding: '15px' }}>
      <h3>{yarn.name || "Unnamed Yarn"}</h3>
      <p>Weight: {yarn.weight} | Color: {yarn.color}</p>
      {isEditing ? (
        <div>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          <button onClick={handleUpdate}>Save Price</button>
        </div>
      ) : (
        <div>
          <p>Price: ${price}</p>
          <button onClick={() => setIsEditing(true)}>Edit Price</button>
        </div>
      )}
    </div>
  );
};