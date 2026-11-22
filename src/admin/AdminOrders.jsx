import { useState } from 'react';
import { useApp } from '../context';
import { fmt, StatusBadge } from '../utils';

export default function AdminOrders() {
  const { state, dispatch } = useApp();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const orders = state.orders.filter(o => (filter === 'all' || o.status === filter) && (!search || o.id.includes(search)));
  const STATUS_LABELS = { all: 'ทั้งหมด', pending: 'รอ', processing: 'เตรียม', shipped: 'จัดส่ง', delivered: 'ส่งถึง', cancelled: 'ยกเลิก' };

  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: '1rem' }}>🧾 จัดการคำสั่งซื้อ</h1>
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 ค้นหาเลขคำสั่งซื้อ..." style={{ width: '100%', padding: '8px 12px', border: '1px solid #E3E8E2', borderRadius: 8, fontSize: 13, outline: 'none', marginBottom: '0.75rem' }} />
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '1rem' }}>
        {Object.entries(STATUS_LABELS).map(([s, l]) => (
          <button key={s} onClick={() => setFilter(s)} style={{ padding: '5px 12px', border: '1px solid', borderColor: filter === s ? '#5A7FA3' : '#E3E8E2', borderRadius: 20, background: filter === s ? '#5A7FA3' : '#fff', color: filter === s ? '#fff' : '#3D4742', fontSize: 12, cursor: 'pointer' }}>{l}</button>
        ))}
      </div>
      <div style={{ background: '#fff', border: '1px solid #E3E8E2', borderRadius: 12, overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 500 }}>
          <thead><tr style={{ background: '#F8FAF7' }}>
            {['เลขที่', 'วันที่', 'ลูกค้า', 'รวม', 'สถานะ', 'อัปเดต'].map(h => <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 600, color: '#6A746F', borderBottom: '1px solid #E3E8E2' }}>{h}</th>)}
          </tr></thead>
          <tbody>
            {orders.map(o => {
              const cust = state.users.find(u => u.id === o.userId);
              return (
                <tr key={o.id} style={{ borderBottom: '1px solid #F1F4F0' }}>
                  <td style={{ padding: '10px 12px', fontWeight: 600 }}>{o.id}</td>
                  <td style={{ padding: '10px 12px', color: '#6A746F', fontSize: 12 }}>{o.date}</td>
                  <td style={{ padding: '10px 12px' }}>{cust?.name || 'ไม่ทราบ'}</td>
                  <td style={{ padding: '10px 12px', fontWeight: 600, color: '#5A7FA3' }}>{fmt(o.total)}</td>
                  <td style={{ padding: '10px 12px' }}><StatusBadge status={o.status} /></td>
                  <td style={{ padding: '10px 12px' }}>
                    <select value={o.status} onChange={e => dispatch({ type: 'UPDATE_ORDER_STATUS', id: o.id, status: e.target.value })} style={{ padding: '4px 8px', border: '1px solid #E3E8E2', borderRadius: 6, fontSize: 12, background: '#fff' }}>
                      {['pending', 'processing', 'shipped', 'delivered', 'cancelled'].map(s => <option key={s} value={s}>{{ pending: 'รอ', processing: 'เตรียม', shipped: 'จัดส่ง', delivered: 'ส่งถึง', cancelled: 'ยกเลิก' }[s]}</option>)}
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
