import { useApp } from '../context';
import { fmt } from '../utils';
import { CATEGORIES } from '../data';
import ProductImage from '../components/ProductImage';

export default function AdminAnalytics() {
  const { state } = useApp();
  const byStatus = {};
  state.orders.forEach(o => { byStatus[o.status] = (byStatus[o.status] || 0) + 1; });
  const byCat = {};
  state.products.forEach(p => { byCat[p.cat] = (byCat[p.cat] || 0) + p.sold; });
  const maxSold = Math.max(...Object.values(byCat));
  const maxRev = Math.max(...state.products.map(p => p.price * p.sold));
  const STATUS_COLORS = { pending: '#DDAE5F', processing: '#7D9CC0', shipped: '#A597CC', delivered: '#7DB89A', cancelled: '#D67B7D' };
  const CAT_COLORS = { dog: '#5A7FA3', cat: '#D698AF', bird: '#DDAE5F', fish: '#7FB4C1', smallpet: '#A597CC' };
  const STATUS_LABELS = { pending: 'รอดำเนินการ', processing: 'กำลังเตรียม', shipped: 'จัดส่งแล้ว', delivered: 'ส่งถึงแล้ว', cancelled: 'ยกเลิก' };

  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: '1.25rem' }}>📈 วิเคราะห์ข้อมูล</h1>
      <div className="grid-2" style={{ marginBottom: '1rem' }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: '1.25rem', border: '1px solid #E3E8E2' }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: '1rem' }}>สถานะคำสั่งซื้อ</h3>
          {Object.entries(byStatus).map(([s, n]) => {
            const pct = Math.round((n / state.orders.length) * 100);
            return (
              <div key={s} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 12 }}>
                  <span>{STATUS_LABELS[s]}</span>
                  <span style={{ fontWeight: 600 }}>{n} ({pct}%)</span>
                </div>
                <div style={{ height: 7, background: '#E3E8E2', borderRadius: 999 }}>
                  <div style={{ height: '100%', background: STATUS_COLORS[s] || '#6A746F', borderRadius: 999, width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: '1.25rem', border: '1px solid #E3E8E2' }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: '1rem' }}>ยอดขายตามหมวด</h3>
          {Object.entries(byCat).map(([cat, sold]) => {
            const pct = Math.round((sold / maxSold) * 100);
            return (
              <div key={cat} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 12 }}>
                  <span>{CATEGORIES[cat]}</span><span style={{ fontWeight: 600 }}>{sold} ชิ้น</span>
                </div>
                <div style={{ height: 7, background: '#E3E8E2', borderRadius: 999 }}>
                  <div style={{ height: '100%', background: CAT_COLORS[cat] || '#6A746F', borderRadius: 999, width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ background: '#fff', borderRadius: 12, padding: '1.25rem', border: '1px solid #E3E8E2' }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: '1rem' }}>สินค้าสร้างรายได้สูงสุด</h3>
        <div style={{ display: 'grid', gap: 10 }}>
          {[...state.products].sort((a, b) => (b.price * b.sold) - (a.price * a.sold)).slice(0, 5).map((p, i) => {
            const rev = p.price * p.sold;
            const pct = Math.round((rev / maxRev) * 100);
            return (
              <div key={p.id} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#A2AAA5', minWidth: 18 }}>#{i+1}</span>
                <div style={{ width: 28, height: 28, flexShrink: 0, borderRadius: 6, overflow: 'hidden', background: '#F1F5F1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ProductImage src={p.imageUrl} emoji={p.img} alt={p.name} emojiSize={16} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3, fontSize: 12, flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '60%' }}>{p.name}</span>
                    <span style={{ fontWeight: 700, color: '#4F8F72' }}>{fmt(rev)}</span>
                  </div>
                  <div style={{ height: 6, background: '#E3E8E2', borderRadius: 999 }}>
                    <div style={{ height: '100%', background: 'linear-gradient(90deg,#5A7FA3,#8C7DB8)', borderRadius: 999, width: `${pct}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
