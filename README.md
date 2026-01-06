## 🛠 Technical Decisions

Pemilihan *stack* teknologi ini didasarkan pada kebutuhan akan stabilitas, skalabilitas, dan efisiensi pengembangan.

### 🏗 Architecture & Framework
* **NestJS**: Kami memilih NestJS karena arsitektur modularnya yang terinspirasi dari Angular. Hal ini memudahkan tim dalam melakukan *maintenance*, pengujian (*testing*), serta memastikan kode tetap terorganisir seiring berkembangnya aplikasi.

### 💾 Data Management
* **Supabase (PostgreSQL)**: Sebagai lapisan penyimpanan data, Supabase menyediakan relasional database yang tangguh melalui PostgreSQL. Kami memanfaatkan fitur *real-time* dan kemudahan integrasinya yang memungkinkan pengembangan API jauh lebih cepat dibandingkan setup database tradisional.

### 🛡 Reliability & Safety
* **TypeScript**: Seluruh basis kode dibangun menggunakan TypeScript. Keputusan ini krusial untuk menjaga keamanan tipe data (*type safety*), memudahkan *refactoring*, dan meminimalisir potensi *runtime error* sebelum aplikasi dijalankan.
* **Class Validator & Transformer**: Untuk menjaga integritas data yang masuk ke sistem, kami menerapkan validasi ketat pada level DTO (Data Transfer Object). Ini memastikan hanya data yang valid dan bersih yang dapat diproses oleh *business logic*.

### 🔑 Security & Authentication
* **API Key Authentication**: Kami menerapkan sistem autentikasi berbasis API Key yang ringan namun aman. Metode ini dipilih untuk memberikan akses cepat bagi klien tanpa overhead kompleksitas dari sistem session-based, namun tetap mudah untuk dipantau dan dibatasi (*rate limiting*).

---

## 📈 Key Features
- **Strict Typing**: Konsistensi data di seluruh *layer* aplikasi.
- **Modular Design**: Komponen yang dapat digunakan kembali dan mudah diuji.
- **Fast Integration**: Terhubung langsung dengan ekosistem Supabase.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
