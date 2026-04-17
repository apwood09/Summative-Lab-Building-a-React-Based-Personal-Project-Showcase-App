import { useState, useContext } from 'react';
import { YarnContext } from '../context/YarnContext';
import { YarnCard } from '../components/YarnCard';

export const InventoryPage = () => {
    const { yarns, loading } = useContext(YarnContext);
    const [search, setSearch] = useState("");

    const filteredYarns = yarns.filter(y => 
        y.name?.toLowerCase().includes(search.toLowerCase()) ||
        y.color?.toLowerCase().includes(search.toLowerCase())
    ); 

    if (loading) return <p>Loading Spells...</p>;

    return (
    <div>
      <input 
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        placeholder="Search by name or color..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {filteredYarns.map(y => <YarnCard key={y.id} yarn={y} />)}
      </div>
    </div>
  );
};