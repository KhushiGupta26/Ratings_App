import React, { useEffect, useState } from "react";
import API from "../api";

export default function Stores(){
  const [stores, setStores] = useState([]);
  const [form, setForm] = useState({ name:"", email:"", address:"", ownerId:1 });
  const [rating, setRating] = useState({storeId:"", rating:5});

  async function load(){
    try {
      const res = await API.get("/stores");
      setStores(res.data);
    } catch (err) { console.error(err); }
  }

  useEffect(()=>{ load() }, []);

  async function addStore(e){
    e.preventDefault();
    try {
      await API.post("/stores", form);
      alert("Store created");
      setForm({ name:"", email:"", address:"", ownerId:1 });
      load();
    } catch (err) { alert(err.response?.data?.error || err.message); }
  }

  async function saveRating(e){
    e.preventDefault();
    try {
      await API.post("/ratings", { storeId: Number(rating.storeId), rating: Number(rating.rating) });
      alert("Rating saved");
      setRating({storeId:"", rating:5});
      load();
    } catch (err) { alert(err.response?.data?.error || err.message); }
  }

  return (
    <div style={{padding:20}}>
      <h2>Stores</h2>
      <ul>
        {stores.map(s => (
          <li key={s.id}>
            <b>{s.name}</b> — {s.address} — avg: {Number(s.avgRating).toFixed(2)}
          </li>
        ))}
      </ul>

      <hr/>
      <h3>Add Store (must be logged in)</h3>
      <form onSubmit={addStore}>
        <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
        <input placeholder="Address" value={form.address} onChange={e=>setForm({...form, address:e.target.value})} />
        <button type="submit">Add Store</button>
      </form>

      <hr/>
      <h3>Rate a store (must be logged in)</h3>
      <form onSubmit={saveRating}>
        <select value={rating.storeId} onChange={e=>setRating({...rating, storeId:e.target.value})} required>
          <option value="">Choose store</option>
          {stores.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <select value={rating.rating} onChange={e=>setRating({...rating, rating:e.target.value})}>
          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <button type="submit">Save Rating</button>
      </form>
    </div>
  );
}
