const BASE_URL = 'http://localhost:3000';

export const api = {
    // GET store landing info 
    getStoreInfo: () => fetch(`${BASE_URL}/store_info`).then(res => res.json()), 

    // GET all yarns
    getYarns: () => fetch(`${BASE_URL}/yarns`).then(res => res.json()), 

    // POST: add yarn 
    addYarn: (yarn) => fetch(`${BASE_URL}/yarns`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(yarn),
  }).then(res => res.json()),

  // PATCH: update yarn price/details
  updateYarn: (id, updates) => fetch(`${BASE_URL}/yarns/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  }).then(res => res.json()),
};