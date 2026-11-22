export const INIT_PRODUCTS = [
  // สุนัข (dog)
  { id:1, name:"Royal Canin Adult สุนัขโตพันธุ์เล็ก", cat:"dog", price:1890, stock:45, sold:320, img:"🐕", desc:"อาหารสุนัขโตพันธุ์เล็ก สูตรเฉพาะ บำรุงผิวหนังและขน ขนาด 3 กก.", rating:4.8, reviews:534, imageUrl:"https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&h=600&fit=crop&auto=format&q=80" },
  { id:2, name:"Pedigree เม็ดเล็กรวมรส", cat:"dog", price:450, stock:120, sold:890, img:"🦴", desc:"อาหารสุนัขโต รสรวม เนื้อและตับ บรรจุ 3 กก. คุ้มค่าทุกวัน", rating:4.4, reviews:1203, imageUrl:"https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&h=600&fit=crop&auto=format&q=80" },
  { id:3, name:"Hill's Science Diet ลูกสุนัข", cat:"dog", price:2290, stock:30, sold:178, img:"🐶", desc:"อาหารลูกสุนัขสูตรพิเศษ เสริม DHA พัฒนาสมองและการมองเห็น ขนาด 3 กก.", rating:4.9, reviews:267, imageUrl:"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=600&fit=crop&auto=format&q=80" },
  { id:4, name:"ขนมเคี้ยวหนังวัวอบ สุนัข", cat:"dog", price:159, stock:200, sold:1450, img:"🦴", desc:"ขนมเคี้ยวหนังวัวแท้ ช่วยขัดฟัน ลดกลิ่นปาก แพ็ค 5 ชิ้น", rating:4.5, reviews:892, imageUrl:"https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=600&fit=crop&auto=format&q=80" },
  { id:5, name:"Orijen Original สุนัขทุกวัย", cat:"dog", price:4590, stock:15, sold:89, img:"🐕‍🦺", desc:"อาหารสุนัขเกรดพรีเมียม โปรตีนสูง 85% จากเนื้อสัตว์สด ขนาด 2 กก.", rating:4.9, reviews:145, imageUrl:"https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop&auto=format&q=80" },
  // แมว (cat)
  { id:6, name:"Me-O เม็ดแมวโต รสทูน่า", cat:"cat", price:380, stock:150, sold:980, img:"🐱", desc:"อาหารแมวโต รสทูน่า เสริมทอรีน บำรุงหัวใจและดวงตา ขนาด 1.2 กก.", rating:4.5, reviews:756, imageUrl:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop&auto=format&q=80" },
  { id:7, name:"Royal Canin Kitten ลูกแมว", cat:"cat", price:1690, stock:40, sold:312, img:"🐈", desc:"อาหารลูกแมวอายุ 4-12 เดือน เสริมภูมิคุ้มกัน ย่อยง่าย ขนาด 2 กก.", rating:4.8, reviews:423, imageUrl:"https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop&auto=format&q=80" },
  { id:8, name:"Whiskas เพาช์ ทูน่าในเยลลี่", cat:"cat", price:25, stock:500, sold:3200, img:"🥫", desc:"อาหารแมวเปียก ทูน่าในเยลลี่ เนื้อแน่น กลิ่นหอม ขนาด 85 กรัม", rating:4.3, reviews:2100, imageUrl:"https://images.unsplash.com/photo-1615789591457-74a63395c990?w=600&h=600&fit=crop&auto=format&q=80" },
  { id:9, name:"ทรายแมวเบนโทไนต์ กลิ่นลาเวนเดอร์", cat:"cat", price:259, stock:80, sold:445, img:"🪵", desc:"ทรายแมวจับตัวเป็นก้อน ดับกลิ่นได้ดี กลิ่นลาเวนเดอร์หอมนาน ขนาด 10 ลิตร", rating:4.6, reviews:389, imageUrl:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&h=600&fit=crop&auto=format&q=80" },
  { id:10, name:"Felix แมวโต รสปลาทะเล", cat:"cat", price:340, stock:90, sold:567, img:"🐟", desc:"อาหารแมวโต รสปลาทะเลรวม โปรตีนสูง ขนาด 1 กก.", rating:4.4, reviews:298, imageUrl:"https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=600&fit=crop&auto=format&q=80" },
  // นก (bird)
  { id:11, name:"อาหารนกหงส์หยกรวมเมล็ด", cat:"bird", price:120, stock:100, sold:412, img:"🦜", desc:"เมล็ดพืชรวมสำหรับนกหงส์หยก ข้าวฟ่าง ข้าวเปลือก ถั่วลิสง ขนาด 1 กก.", rating:4.5, reviews:234, imageUrl:"https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=600&h=600&fit=crop&auto=format&q=80" },
  { id:12, name:"อาหารนกแก้วเสริมวิตามิน", cat:"bird", price:280, stock:60, sold:198, img:"🦜", desc:"อาหารนกแก้วสูตรพิเศษ เสริมวิตามินรวม บำรุงสีขน ขนาด 800 กรัม", rating:4.6, reviews:156, imageUrl:"https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&h=600&fit=crop&auto=format&q=80" },
  { id:13, name:"ที่เกาะนกไม้ธรรมชาติ", cat:"bird", price:89, stock:150, sold:320, img:"🪶", desc:"คอนเกาะนกทำจากไม้ธรรมชาติ ปลอดภัย ลับเล็บได้ในตัว ขนาด 20 ซม.", rating:4.3, reviews:178, imageUrl:"https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&h=600&fit=crop&auto=format&q=80" },
  // ปลา (fish)
  { id:14, name:"อาหารปลาสวยงามเม็ดลอย", cat:"fish", price:65, stock:200, sold:670, img:"🐠", desc:"อาหารเม็ดลอยสำหรับปลาสวยงาม เสริมสีสันให้สดใส ขนาด 100 กรัม", rating:4.4, reviews:445, imageUrl:"https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600&h=600&fit=crop&auto=format&q=80" },
  { id:15, name:"อาหารปลาคาร์ฟเกรดพรีเมียม", cat:"fish", price:450, stock:50, sold:189, img:"🎏", desc:"อาหารปลาคาร์ฟโปรตีนสูง ช่วยให้สีสดและโตเร็ว ขนาด 2 กก.", rating:4.7, reviews:134, imageUrl:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=600&fit=crop&auto=format&q=80" },
  { id:16, name:"น้ำยาปรับสภาพน้ำตู้ปลา", cat:"fish", price:189, stock:90, sold:267, img:"🧪", desc:"น้ำยาลดคลอรีนและโลหะหนัก ปรับสภาพน้ำให้ปลอดภัยต่อปลา ขนาด 500 มล.", rating:4.5, reviews:198, imageUrl:"https://images.unsplash.com/photo-1520302519878-3433fd5c3b61?w=600&h=600&fit=crop&auto=format&q=80" },
  // สัตว์เลี้ยงพิเศษ (small pet - กระต่าย หนู เม่นแคระ)
  { id:17, name:"อาหารกระต่ายเม็ดอัดเสริมไฟเบอร์", cat:"smallpet", price:220, stock:70, sold:289, img:"🐰", desc:"อาหารกระต่ายเสริมไฟเบอร์สูง ช่วยระบบย่อยอาหาร ขนาด 1.5 กก.", rating:4.6, reviews:212, imageUrl:"https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=600&fit=crop&auto=format&q=80" },
  { id:18, name:"หญ้าแห้งทิโมธี สำหรับกระต่าย", cat:"smallpet", price:180, stock:60, sold:345, img:"🌾", desc:"หญ้าแห้งทิโมธีคุณภาพสูง ช่วยขัดฟันและย่อยอาหาร ขนาด 1 กก.", rating:4.7, reviews:267, imageUrl:"https://images.unsplash.com/photo-1535241749838-299277b6305f?w=600&h=600&fit=crop&auto=format&q=80" },
  { id:19, name:"อาหารหนูแฮมสเตอร์รวมเมล็ด", cat:"smallpet", price:95, stock:100, sold:178, img:"🐹", desc:"อาหารรวมเมล็ดพืชและถั่วสำหรับหนูแฮมสเตอร์ ขนาด 500 กรัม", rating:4.4, reviews:145, imageUrl:"https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&h=600&fit=crop&auto=format&q=80" },
  { id:20, name:"ขี้เลื่อยรองนอนสัตว์เลี้ยงพิเศษ", cat:"smallpet", price:150, stock:80, sold:201, img:"🪵", desc:"ขี้เลื่อยอัดเม็ด ดูดกลิ่นและความชื้นได้ดี ปลอดภัย ขนาด 4 ลิตร", rating:4.5, reviews:167, imageUrl:"https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&h=600&fit=crop&auto=format&q=80" },
];

export const INIT_ORDERS = [
  { id:"ORD-001", userId:2, items:[{pid:1,qty:1,price:1890},{pid:4,qty:2,price:159}], total:2208, status:"delivered", date:"2024-12-15", addr:"123 สุขุมวิท กรุงเทพฯ", payment:"credit_card" },
  { id:"ORD-002", userId:2, items:[{pid:6,qty:2,price:380}], total:760, status:"shipped", date:"2024-12-18", addr:"123 สุขุมวิท กรุงเทพฯ", payment:"promptpay" },
  { id:"ORD-003", userId:3, items:[{pid:8,qty:5,price:25},{pid:9,qty:1,price:259}], total:384, status:"processing", date:"2024-12-20", addr:"456 สีลม กรุงเทพฯ", payment:"credit_card" },
  { id:"ORD-004", userId:4, items:[{pid:17,qty:1,price:220},{pid:18,qty:1,price:180}], total:400, status:"pending", date:"2024-12-21", addr:"789 รัชดา กรุงเทพฯ", payment:"bank_transfer" },
];

export const INIT_USERS = [
  { id:1, name:"Admin", email:"admin@petmart.com", password:"admin1234", role:"admin", joined:"2024-01-01", active:true },
  { id:2, name:"สมชาย ใจดี", email:"somchai@gmail.com", password:"1234", role:"customer", joined:"2024-03-15", active:true },
  { id:3, name:"นิดา สวยงาม", email:"nida@gmail.com", password:"1234", role:"customer", joined:"2024-06-20", active:true },
  { id:4, name:"วิชัย เก่งมาก", email:"wichai@gmail.com", password:"1234", role:"customer", joined:"2024-08-10", active:false },
];

export const CATEGORIES = {
  all:"ทั้งหมด",
  dog:"สุนัข",
  cat:"แมว",
  bird:"นก",
  fish:"ปลา",
  smallpet:"สัตว์เลี้ยงพิเศษ",
};

// รูปสินค้าตั้งต้น ใช้เติมให้สินค้าที่อยู่ใน Firestore แล้วแต่ยังไม่มีรูป
export const DEFAULT_IMAGES = Object.fromEntries(INIT_PRODUCTS.map(p => [p.id, p.imageUrl]));
