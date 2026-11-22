# 🐾 PetMart — คู่มือติดตั้ง Firebase Firestore + Cloudinary

## สิ่งที่เปลี่ยนแปลง

| ไฟล์ | สิ่งที่ทำ |
|------|-----------|
| `src/firebase.js` | Config Firebase (อ่านจาก .env) |
| `src/firestoreService.js` | ✅ **ใหม่** — CRUD ทุก collection |
| `src/context.js` | โหลดข้อมูลจาก Firestore ตอนเริ่มแอป + seed อัตโนมัติ |
| `src/store.js` | บันทึก Firestore ทุกครั้งที่ dispatch action |
| `src/cloudinary.js` | อัปโหลดรูปฟรีผ่าน Cloudinary (ไม่ใช้ Firebase Storage) |
| `.env.example` | Template ค่า config |

---

## ขั้นตอนที่ 1 — Firebase Firestore (ฟรี Spark Plan)

1. ไปที่ https://console.firebase.google.com → **Add project**
2. เปิด **Cloud Firestore** → Create database → **Start in test mode**
3. ไปที่ Project Settings → **Your apps** → Web → Copy config
4. สร้าง `.env` จาก `.env.example` แล้วใส่ค่า Firebase

### Firestore Rules (ทดสอบ — ก่อน deploy ให้ปรับ)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;  // สำหรับทดสอบเท่านั้น
    }
  }
}
```

---

## ขั้นตอนที่ 2 — Cloudinary (ฟรี 25GB)

> ใช้แทน **Firebase Storage** ที่มีค่าใช้จ่าย!

1. สมัครฟรีที่ https://cloudinary.com
2. Dashboard → **Settings** → **Upload** → **Upload presets**
3. กด **Add upload preset** → ตั้ง Signing Mode: **Unsigned** → Save
4. คัดลอก **Cloud name** และ **Preset name** ใส่ `.env`

---

## ขั้นตอนที่ 3 — รันโปรเจกต์

```bash
# ติดตั้ง dependencies
npm install

# คัดลอก env
cp .env.example .env
# แล้วแก้ไขค่าใน .env

# รัน dev server
npm start
```

ครั้งแรกที่รัน แอปจะ **seed ข้อมูลสินค้า 20 ชิ้น + ออเดอร์ + ผู้ใช้** เข้า Firestore อัตโนมัติ!

---

## Collections ใน Firestore

| Collection | Document ID | ข้อมูล |
|------------|-------------|--------|
| `products` | `1`, `2`, ... | ชื่อ ราคา สต็อก รูป (URL จาก Cloudinary) |
| `orders`   | `ORD-xxxxxx` | รายการสั่งซื้อ สถานะ ที่อยู่ |
| `users`    | `1`, `2`, ... | ชื่อ อีเมล รหัสผ่าน (hash ด้วยถ้า prod) |

---

## Spark Plan (ฟรี) — ขีดจำกัด

| | ต่อวัน |
|--|--------|
| Reads | 50,000 |
| Writes | 20,000 |
| Deletes | 20,000 |
| Storage | 1 GB |

PetMart ใช้แค่หลักร้อยต่อวัน — **เกินกว่า 99% ของ use case ของเว็บเล็ก** ✅

---

## รูปภาพ — Cloudinary Free Tier

- พื้นที่เก็บ: **25 GB**
- Bandwidth: **25 GB/เดือน**
- Transformations: รองรับ resize/crop อัตโนมัติ


---

## 🎨 ธีมสีโทนนุ่มนวล + รูปสินค้า

- สีหลักทั้งหมดอยู่ใน `src/index.css` (ตัวแปรใน `:root`) — เขียวเสจ `#6E9A85`, ลาเวนเดอร์ `#8C7DB8`, พีชอ่อน `#F3DCCB`
- สินค้าตั้งต้นใน `src/data.js` มี `imageUrl` แล้ว และสินค้าเก่าใน Firestore ที่ยังไม่มีรูปจะถูกเติมรูปให้อัตโนมัติตอนโหลด
- ถ้ารูปไหนโหลดไม่ได้ ระบบจะแสดงอีโมจิแทน (`src/components/ProductImage.jsx`)
- เปลี่ยนเป็นรูปแพ็กเกจสินค้าจริงของแบรนด์: หลังบ้าน → สินค้า → แก้ไข → อัปโหลดรูป (Cloudinary)
  หรือวางไฟล์ไว้ที่ `public/images/products/` แล้วแก้ `imageUrl` เป็น `/images/products/ชื่อไฟล์.jpg`
