import { useState } from 'react';
import { useApp } from '../context';
import { fmt, Stars } from '../utils';
import { CATEGORIES } from '../data';
import ProductImage from '../components/ProductImage';

export default function ProductDetailPage() {
  const { state, dispatch } = useApp();
  const p = state.selectedProduct;
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState('desc');
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  if (!p) return null;
  const inWish = state.wishlist.includes(p.id);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '1rem' }}>
      <button onClick={() => dispatch({ type: 'SET_VIEW', view: 'shop' })}
        style={{ background: 'none', border: 'none', color: '#6E9A85', cursor: 'pointer', fontSize: 14, marginBottom: '1rem', fontWeight: 600, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 4 }}>
        ← กลับหน้าร้าน
      </button>

      <div className="card product-layout" style={{ padding: '1.5rem', marginBottom: '1.25rem' }}>
        {/* Image */}
        <div style={{ background: '#F1F5F1', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 280, position: 'relative', overflow: 'hidden' }}>
          <ProductImage src={p.imageUrl} emoji={p.img} alt={p.name} emojiSize={110} radius={16} />
          <button onClick={() => dispatch({ type: 'TOGGLE_WISHLIST', pid: p.id })}
            style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(4px)', border: 'none', borderRadius: 999, width: 40, height: 40, fontSize: 20, cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {inWish ? '❤️' : '🤍'}
          </button>
        </div>

        {/* Info */}
        <div>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#6E9A85', background: '#EEF4F0', padding: '3px 10px', borderRadius: 999, marginBottom: 8, display: 'inline-block' }}>
            {CATEGORIES[p.cat]}
          </span>
          <h1 style={{ fontSize: 'clamp(18px,4vw,24px)', fontWeight: 800, marginBottom: 8, color: '#2F3A35', lineHeight: 1.3 }}>{p.name}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <Stars r={p.rating} size={16} />
            <span style={{ fontSize: 13, color: '#6A746F' }}>{p.reviews} รีวิว • ขายแล้ว {p.sold} ชิ้น</span>
          </div>
          <div style={{ fontSize: 'clamp(24px,5vw,32px)', fontWeight: 800, color: '#6E9A85', marginBottom: 12 }}>{fmt(p.price)}</div>
          <p style={{ fontSize: 14, color: '#6A746F', marginBottom: 14, lineHeight: 1.8 }}>{p.desc}</p>
          
          <div style={{ fontSize: 13, marginBottom: 16, padding: '10px 14px', borderRadius: 10, background: p.stock > 10 ? '#EFF7F2' : p.stock > 0 ? '#FDF8EC' : '#FBF1F1', display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 600 }}>
            <span>{p.stock > 10 ? '✅' : p.stock > 0 ? '⚡' : '❌'}</span>
            <span style={{ color: p.stock > 10 ? '#4F8F72' : p.stock > 0 ? '#C08C3E' : '#BF5C5F' }}>
              {p.stock > 0 ? `เหลือ ${p.stock} ชิ้น` : 'หมดสต็อก'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '2px solid #ECEFEA', borderRadius: 12, overflow: 'hidden' }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ padding: '9px 16px', border: 'none', background: 'none', cursor: 'pointer', fontSize: 18, color: '#6E9A85', fontWeight: 700 }}>−</button>
              <span style={{ padding: '9px 18px', borderLeft: '2px solid #ECEFEA', borderRight: '2px solid #ECEFEA', fontSize: 15, fontWeight: 700 }}>{qty}</span>
              <button onClick={() => setQty(Math.min(p.stock, qty + 1))} style={{ padding: '9px 16px', border: 'none', background: 'none', cursor: 'pointer', fontSize: 18, color: '#6E9A85', fontWeight: 700 }}>+</button>
            </div>
            <button
              onClick={() => { if (p.stock === 0) return; dispatch({ type: 'ADD_TO_CART', item: { pid: p.id, name: p.name, price: p.price, img: p.imageUrl || p.img, emoji: p.img, qty } }); }}
              disabled={p.stock === 0}
              style={{ flex: 1, minWidth: 140, padding: '11px 20px', background: p.stock === 0 ? '#E3E8E2' : 'linear-gradient(135deg,#6E9A85,#5A8571)', color: p.stock === 0 ? '#A2AAA5' : '#fff', border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: p.stock === 0 ? 'not-allowed' : 'pointer', boxShadow: p.stock === 0 ? 'none' : '0 4px 16px rgba(94,138,116,.4)', fontFamily: 'inherit' }}>
              {p.stock === 0 ? '❌ หมดสต็อก' : '🛒 ใส่ตะกร้า'}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="card" style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', borderBottom: '2px solid #ECEFEA' }}>
          {[['desc','รายละเอียด'],['reviews','รีวิว']].map(([k,l]) => (
            <button key={k} onClick={() => setTab(k)}
              style={{ padding: '12px 24px', border: 'none', background: 'none', cursor: 'pointer', fontSize: 14, fontWeight: tab===k ? 700 : 500, color: tab===k ? '#6E9A85' : '#6A746F', borderBottom: tab===k ? '2px solid #6E9A85' : '2px solid transparent', marginBottom: '-2px', fontFamily: 'inherit' }}>
              {l}
            </button>
          ))}
        </div>
        <div style={{ padding: '1.25rem' }}>
          {tab === 'desc'
            ? <p style={{ fontSize: 14, lineHeight: 1.8, color: '#3D4742' }}>{p.desc}</p>
            : (
              <div>
                <div style={{ background: '#F7F9F6', borderRadius: 12, padding: '1rem', marginBottom: '1rem' }}>
                  <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, color: '#6A746F' }}>เขียนรีวิว</p>
                  <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
                    {[1,2,3,4,5].map(i => (
                      <button key={i} onClick={() => setReviewRating(i)}
                        style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', opacity: reviewRating >= i ? 1 : .3 }}>⭐</button>
                    ))}
                  </div>
                  <textarea value={reviewText} onChange={e => setReviewText(e.target.value)}
                    rows={3} placeholder="แบ่งปันประสบการณ์ของคุณ..."
                    className="input-nice" style={{ marginBottom: 8 }} />
                  <button onClick={() => { if (!reviewText.trim()) return; setReviewText(''); }}
                    style={{ background: 'linear-gradient(135deg,#6E9A85,#5A8571)', color: '#fff', border: 'none', borderRadius: 10, padding: '8px 20px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                    ส่งรีวิว
                  </button>
                </div>
                <p style={{ fontSize: 13, color: '#99A29C', textAlign: 'center' }}>มีรีวิว {p.reviews} รีวิว คะแนนเฉลี่ย {p.rating} ⭐</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
