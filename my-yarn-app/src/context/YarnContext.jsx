import { createContext, useState, useEffect, useCallback, Children } from 'react';
import { api } from '../services/api';

export const YarnContext = createContext(); 

export const YarnProvider = ({ children }) => {
    const [yarns, setYarns] = useState([]);
    const [storeInfo, setStoreInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
  try {
    const info = await api.getStoreInfo(); 
    const inventory = await api.getYarns(); 
    
    setStoreInfo(info[0]); 
    setYarns(inventory);
    setLoading(false); 
  } catch (error) {
    console.error("Fetch failed:", error);
    setLoading(false); 
  }
}, []);

    useEffect(() => {
        fetchData(); 
    }, [fetchData]); 

    return (
        <YarnContext.Provider value={{ yarns, setYarns, storeInfo, loading, fetchData }}>
            {children}
        </YarnContext.Provider>
    );
}; 