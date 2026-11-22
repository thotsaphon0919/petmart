import { useApp } from '../context';
import { fmt, Badge } from '../utils';

export default function AdminCustomers() {
  const { state, dispatch } = useApp();

  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: '1rem' }}>👥 จัดการลูกค้า</h1>
      <div style={{ background: '#fff', border: '1px solid #E3E8E2', borderRadius: 12, overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 480 }}>
          <thead><tr style={{ background: '#F8FAF7' }}>
            {['ลูกค้า', 'อีเมล', 'คำสั่งซื้อ', 'ยอดซื้อ', 'สถานะ'].map(h => <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 600, color: '#6A746F', borderBottom: '1px solid #E3E8E2' }}>{h}</th>)}
          </tr></thead>
          <tbody>
            {state.users.map(u => {
              const uOrders = state.orders.filter(o => o.userId === u.id);
              const spent = uOrders.reduce((s, o) => s + o.total, 0);
              return (
                <tr key={u.id} style={{ borderBottom: '1px solid #F1F4F0' }}>
                  <td style={{ padding: '10px 12px' }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <div style={{ width: 30, height: 30, borderRadius: 999, background: '#F0F5FA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, color: '#5A7FA3', flexShrink: 0 }}>{u.name[0]}</div>
                      <div>
                        <p style={{ fontWeight: 500, fontSize: 13 }}>{u.name}</p>
                        <Badge color={u.role === 'admin' ? 'purple' : 'blue'}>{u.role === 'admin' ? 'Admin' : 'ลูกค้า'}</Badge>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '10px 12px', color: '#6A746F', fontSize: 12 }}>{u.email}</td>
                  <td style={{ padding: '10px 12px' }}>{uOrders.length}</td>
                  <td style={{ padding: '10px 12px', fontWeight: 600, color: '#5A7FA3' }}>{spent > 0 ? fmt(spent) : '—'}</td>
                  <td style={{ padding: '10px 12px' }}>
                    <button onClick={() => dispatch({ type: 'UPDATE_USER', user: { ...u, active: !u.active } })} style={{ background: u.active ? '#E2F0E7' : '#F8E4E4', color: u.active ? '#2F6650' : '#8E3B3E', border: 'none', borderRadius: 6, padding: '3px 10px', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>
                      {u.active ? '✓ ใช้งาน' : '✗ ปิดใช้'}
                    </button>
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
