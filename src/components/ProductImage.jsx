import { useState, useEffect } from 'react';

const isUrl = (s) => typeof s === 'string' && /^(https?:|\/|data:)/.test(s);

/**
 * แสดงรูปสินค้า ถ้าโหลดรูปไม่ได้ (ลิงก์เสีย / ออฟไลน์) จะกลับไปแสดงอีโมจิแทนอัตโนมัติ
 */
export default function ProductImage({ src, emoji = '🐾', alt = '', emojiSize = 40, radius = 0, style }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);

  if (isUrl(src) && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: radius, ...style }}
      />
    );
  }
  return <span style={{ fontSize: emojiSize, lineHeight: 1 }} aria-label={alt}>{emoji}</span>;
}
