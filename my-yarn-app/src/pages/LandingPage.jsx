import { useContext } from 'react';
import { YarnContext } from '../context/YarnContext';

export const LandingPage = () => {
    const { storeInfo, loading } = useContext(YarnContext);

    if (loading) return <h1>Loading...</h1>;

    return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>{storeInfo.name} Admin Portal</h1>
      <p>{storeInfo.description}</p>
      <small>Support: {storeInfo.phone_number}</small>
    </main>
  );
};