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

    if (loading) return <p className="loading-text">Loading Spells...</p>;

    return (
        <div className="inventory-container">
            <h1>Yarn Archive</h1>
            <input 
                className="search-bar"
                placeholder="Search by name or color..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
            />
            <div className="grid">
                {filteredYarns.length > 0 ? (
                    filteredYarns.map(y => <YarnCard key={y.id} yarn={y} />)
                ) : (
                    <p>No magical fibers found matching your search.</p>
                )}
            </div>
        </div>
    );
};