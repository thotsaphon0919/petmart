export const fmt = (n) => new Intl.NumberFormat('th-TH').format(n) + ' ฿';

export function Stars({ r, size = 14 }) {
  return (
    <span style={{ fontSize: size, color: '#DDAE5F' }}>
      {'★'.repeat(Math.floor(r))}{'☆'.repeat(5 - Math.floor(r))}
      <span style={{ fontSize: 12, color: '#6A746F', marginLeft: 4 }}>{r}</span>
    </span>
  );
}

export function Badge({ color, children }) {
  const colors = {
    green: { bg: '#E2F0E7', c: '#2F6650' },
    yellow: { bg: '#FAF0DC', c: '#7E5A26' },
    blue: { bg: '#E5EDF6', c: '#3F5F82' },
    red: { bg: '#F8E4E4', c: '#8E3B3E' },
    gray: { bg: '#F1F4F0', c: '#3D4742' },
    purple: { bg: '#F0EDF8', c: '#5E5287' },
  };
  const s = colors[color] || colors.gray;
  return (
    <span style={{ background: s.bg, color: s.c, fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 999 }}>
      {children}
    </span>
  );
}

export const STATUS_MAP = {
  pending:    { color: 'yellow', label: 'รอดำเนินการ' },
  processing: { color: 'blue',   label: 'กำลังเตรียม' },
  shipped:    { color: 'purple', label: 'จัดส่งแล้ว' },
  delivered:  { color: 'green',  label: 'ส่งถึงแล้ว' },
  cancelled:  { color: 'red',    label: 'ยกเลิก' },
};

export const StatusBadge = ({ status }) => {
  const s = STATUS_MAP[status] || { color: 'gray', label: status };
  return <Badge color={s.color}>{s.label}</Badge>;
};
