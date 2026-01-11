# Hướng Dẫn Angular: Cấu Trúc và Hoạt Động

## 📋 Mục Lục
1. [Tổng Quan Angular](#tổng-quan-angular)
2. [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
3. [Component trong Angular](#component-trong-angular)
4. [2-Way Binding (ôm chiều)](#2-way-binding)
5. [Module và Imports](#module-và-imports)
6. [Lifecycle Hooks](#lifecycle-hooks)
7. [Các Lỗi Gặp và Giải Pháp](#các-lỗi-gặp-và-giải-pháp)
8. [Best Practices](#best-practices)

---

## 🎯 Tổng Quan Angular

**Angular** là một framework TypeScript để xây dựng Single Page Application (SPA). Nó dựa trên kiến trúc **Component-Based** - mọi thứ là component.

### Cơ Bản:
- **Component**: Là đơn vị nhỏ nhất, gồm: Template (HTML) + Logic (TypeScript) + Style (CSS)
- **Module**: Nhóm các component, service, directive lại
- **Binding**: Kết nối dữ liệu giữa Template và Component

---

## 📁 Cấu Trúc Dự Án

```
my-app2/
├── src/
│   ├── main.ts              # Entry point chính
│   ├── app/
│   │   ├── app.ts           # Root component
│   │   ├── app.html         # Template của root
│   │   ├── app.css          # Style của root
│   │   ├── app-module.ts    # Module chính (khai báo các component)
│   │   ├── ptb2/            # Thư mục component ptb2
│   │   │   ├── ptb2.ts      # Logic component
│   │   │   ├── ptb2.html    # Template
│   │   │   └── ptb2.css     # Style
├── package.json             # Dependencies
├── angular.json             # Cấu hình Angular
└── tsconfig.json            # Cấu hình TypeScript
```

---

## 🧩 Component trong Angular

### 1. Component là gì?

Component là một class TypeScript được decorate bằng `@Component`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-ptb2',        // Tên tag HTML: <app-ptb2></app-ptb2>
  standalone: false,           // Loại component (xem bên dưới)
  templateUrl: './ptb2.html',  // File HTML template
  styleUrl: './ptb2.css',      // File CSS
})
export class Ptb2 {
  // Properties (dữ liệu)
  hsa: string = "";
  
  // Methods (hàm xử lý)
  get_solution() {
    // Logic ở đây
  }
}
```

### 2. Standalone vs Non-Standalone

#### **Non-Standalone Component** (Traditional)
```typescript
@Component({
  selector: 'app-ptb2',
  standalone: false,    // ← Cách cũ
  templateUrl: './ptb2.html',
  styleUrl: './ptb2.css',
})
export class Ptb2 { }
```

**Đặc điểm:**
- Cần khai báo trong **NgModule** (app-module.ts)
- Cần import FormsModule, CommonModule, v.v. trong Module
- Dễ quản lý khi project lớn

**Ví dụ trong app-module.ts:**
```typescript
@NgModule({
  declarations: [App, Ptb2],  // ← Phải khai báo
  imports: [
    BrowserModule,
    FormsModule,  // ← Import ở đây
  ],
  bootstrap: [App]
})
export class AppModule { }
```

#### **Standalone Component** (Mới - Angular 14+)
```typescript
@Component({
  selector: 'app-ptb2',
  standalone: true,     // ← Cách mới
  imports: [FormsModule, CommonModule],  // ← Import trực tiếp
  templateUrl: './ptb2.html',
  styleUrl: './ptb2.css',
})
export class Ptb2 { }
```

**Đặc điểm:**
- Không cần NgModule
- Tự quản lý imports
- Code ngắn gọn hơn

### 3. Lỗi gặp: Mismatch Standalone

**Lỗi:**
```
NG8001: 'app-ptb2' is not a known element
```

**Nguyên nhân:** Component được khai báo `standalone: true` nhưng được import trong `NgModule` (non-standalone).

**Giải pháp:** Phải chọn 1 trong 2:
- Cách 1: `standalone: true` + không khai báo trong Module
- Cách 2: `standalone: false` + khai báo trong Module

---

## 🔄 2-Way Binding (Ôm Chiều)

### Khái Niệm

**2-Way Binding** là kết nối hai chiều giữa:
- **Template** (HTML input) → **Component** (TypeScript property)
- **Component** (property change) → **Template** (HTML display)

### Syntax

```html
<input type="text" [(ngModel)]="hsa">
```

**Phân tích:**
- `[...]` = Property Binding (Component → Template) - một chiều
- `(...)` = Event Binding (Template → Component) - một chiều  
- `[(...)]` = 2-Way Binding - hai chiều

### Ví Dụ Cụ Thể

**ptb2.ts:**
```typescript
export class Ptb2 {
  hsa: string = "";  // Property
  
  get_solution() {
    let a = parseFloat(this.hsa);  // Lấy giá trị từ input
  }
}
```

**ptb2.html:**
```html
<!-- Input: người dùng nhập giá trị -->
<input type="text" [(ngModel)]="hsa" placeholder="Nhập hệ số a...">

<!-- Display: hiển thị giá trị nhập vào -->
<div>Bạn nhập: {{ hsa }}</div>

<!-- Nút Solution gọi method -->
<button (click)="get_solution()">Solution</button>
```

**Luồng hoạt động:**
1. Người dùng gõ "5" vào input
2. `[(ngModel)]` nhận giá trị → gán vào `this.hsa = "5"`
3. `{{ hsa }}` hiển thị "5" trên giao diện
4. Bấm nút Solution → gọi `get_solution()`
5. Lấy giá trị từ `this.hsa` để tính toán

### Điều Kiện Sử Dụng ngModel

**Yêu cầu:** Phải import `FormsModule`

**Cách 1: Standalone Component**
```typescript
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],  // ← Import ở đây
  // ...
})
```

**Cách 2: Non-Standalone Component**
```typescript
// app-module.ts
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],  // ← Import ở đây
})
export class AppModule { }
```

---

## 📦 Module và Imports

### Module là gì?

**NgModule** là một container để nhóm các component, service, directive liên quan.

### Cấu Trúc Module

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { Ptb2 } from './ptb2/ptb2';
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    App,        // ← Khai báo các component thuộc module
    Ptb2
  ],
  imports: [
    BrowserModule,    // ← Cần thiết cho browser
    AppRoutingModule, // ← Routing
    FormsModule       // ← Để sử dụng [(ngModel)]
  ],
  providers: [],      // ← Services
  bootstrap: [App]    // ← Component khởi chạy đầu tiên
})
export class AppModule { }
```

### Các Phần:

| Phần | Ý Nghĩa |
|------|---------|
| **declarations** | Khai báo component, directive, pipe thuộc module này |
| **imports** | Import các module khác |
| **providers** | Khai báo services |
| **bootstrap** | Component chạy đầu tiên (chỉ app module) |

---

## 🔄 Lifecycle Hooks

Component có vòng đời (lifecycle) từ lúc tạo đến lúc hủy.

### Các Hooks Chính

```typescript
import { Component, OnInit, AfterViewInit } from '@angular/core';

export class Ptb2 implements OnInit, AfterViewInit {
  
  // 1. Constructor: Khởi tạo
  constructor() {
    console.log('1. Constructor');
  }
  
  // 2. OnInit: Sau khi component được tạo
  ngOnInit() {
    console.log('2. OnInit - Component khởi tạo');
  }
  
  // 3. AfterViewInit: Sau khi template view khởi tạo
  ngAfterViewInit() {
    console.log('3. AfterViewInit - View khởi tạo xong');
    // Dùng để access DOM element bằng @ViewChild
  }
  
  // 4. OnDestroy: Trước khi component bị hủy
  ngOnDestroy() {
    console.log('4. OnDestroy');
  }
}
```

### Thứ Tự Thực Hiện

```
Constructor → OnInit → AfterViewInit → ... → OnDestroy
```

---

## ❌ Các Lỗi Gặp và Giải Pháp

### Lỗi 1: Property không tồn tại

**Lỗi:**
```
TS2339: Property 'hsa' does not exist on type 'Ptb2'
```

**Nguyên nhân:** 
- Property chưa được khai báo trong class
- Thiếu từ khóa `public` hoặc type

**Giải pháp:**
```typescript
export class Ptb2 {
  hsa: string = "";  // ← Phải khai báo property
}
```

### Lỗi 2: ngModel không hoạt động

**Lỗi:**
```
Can't bind to 'ngModel' since it isn't a known property
```

**Nguyên nhân:** FormsModule không được import

**Giải pháp:**
```typescript
// Nếu standalone: true
@Component({
  imports: [FormsModule],
})

// Hoặc khai báo trong Module
@NgModule({
  imports: [FormsModule],
})
```

### Lỗi 3: Component không được nhận diện

**Lỗi:**
```
NG8001: 'app-ptb2' is not a known element
```

**Nguyên nhân:** 
- Component không được khai báo trong declarations
- Hoặc mismatch standalone config

**Giải pháp:**

**Option A: Non-Standalone (Truyền thống)**
```typescript
// ptb2.ts
@Component({
  selector: 'app-ptb2',
  standalone: false,  // ← Quan trọng
  templateUrl: './ptb2.html',
})
export class Ptb2 { }

// app-module.ts
@NgModule({
  declarations: [Ptb2],  // ← Phải khai báo
})
export class AppModule { }
```

**Option B: Standalone (Mới)**
```typescript
// ptb2.ts
@Component({
  selector: 'app-ptb2',
  standalone: true,  // ← Quan trọng
  imports: [],
  templateUrl: './ptb2.html',
})
export class Ptb2 { }

// app.ts
@Component({
  imports: [Ptb2],  // ← Import trực tiếp
})
export class App { }
```

### Lỗi 4: ViewChild không hoạt động

**Lỗi:**
```typescript
@ViewChild('hsa') inputA!: ElementRef;
// undefined khi access trong method
```

**Nguyên nhân:** AfterViewInit chưa chạy

**Giải pháp:**
```typescript
import { AfterViewInit } from '@angular/core';

export class Ptb2 implements AfterViewInit {
  @ViewChild('hsa') inputA!: ElementRef;
  
  ngAfterViewInit() {
    // ← @ViewChild đã available ở đây
    this.inputA.nativeElement.focus();
  }
  
  clear_solution() {
    if (this.inputA) {
      this.inputA.nativeElement.focus();  // ← Kiểm tra exists
    }
  }
}
```

---

## 💡 Best Practices

### 1. Đặt Tên Theo Quy Ước

```typescript
// ✅ ĐÚNG
class Ptb2Component { }        // PascalCase
let hsa: string;              // camelCase
function getSolution() { }     // camelCase

// ❌ SAI
class ptb2Component { }
let HSA: string;
function get_solution() { }
```

### 2. Type Safety

```typescript
// ✅ ĐÚNG - Có type
hsa: string = "";
hsb: string = "";
hsc: string = "";

// ❌ SAI - Không có type
hsa = "";
```

### 3. Một Trách Vụ (Single Responsibility)

```typescript
// ✅ ĐÚNG
export class Ptb2 {
  get_solution() { /* Xử lý giải PT */ }
  clear_solution() { /* Xóa dữ liệu */ }
}

// ❌ SAI - Quá nhiều trách vụ
export class Ptb2 {
  get_solution() { }
  clear_solution() { }
  validateInput() { }
  saveToDatabase() { }
  sendEmail() { }
  // ...
}
```

### 4. Xử Lý Lỗi Input

```typescript
// ✅ ĐÚNG - Có validation
get_solution() {
  let a = parseFloat(this.hsa);
  
  if (isNaN(a)) {
    this.result = "Vui lòng nhập số";
    return;
  }
  
  // Xử lý...
}

// ❌ SAI - Không check
get_solution() {
  let a = parseFloat(this.hsa);
  // ...
}
```

### 5. Sử Dụng Property Binding Thay Vì innerHTML

```typescript
// ✅ ĐÚNG
result.textContent = "x = " + x;
{{ result }}

// ❌ SAI - Có XSS risk
result.innerHTML = "x = " + x;
```

---

## 📝 Tóm Tắt Cấu Trúc PTB2

### Flow Hoạt Động

```
1. User mở ứng dụng
   ↓
2. Angular load AppModule
   ↓
3. AppModule khai báo Ptb2 component
   ↓
4. app.html render <app-ptb2></app-ptb2>
   ↓
5. Ptb2 component khởi tạo
   - Constructor chạy
   - ngOnInit chạy
   - Template render
   ↓
6. User nhập vào input (ví dụ: a = 2, b = 3, c = 1)
   ↓
7. [(ngModel)] tự động cập nhật hsa, hsb, hsc
   ↓
8. User bấm nút Solution
   ↓
9. Gọi get_solution()
   - Lấy giá trị từ hsa, hsb, hsc
   - Tính toán (Δ = b² - 4ac)
   - Cập nhật result
   ↓
10. Template tự động update {{ result }}
    ↓
11. Giao diện hiển thị kết quả
```

### Data Binding Diagram

```
                Template (HTML)
                    ↓ ↑
        [one-way down] [one-way up]
        Property Binding Event Binding
                    ↓ ↑
                    ↕
            [(ngModel)] = 2-Way
                    ↕
                Component (TS)
```

---

## 🚀 Tiếp Theo

1. **Services**: Chia sẻ dữ liệu giữa components
2. **Dependency Injection**: Inject service vào component
3. **Routing**: Điều hướng giữa các page
4. **HTTP Client**: Gọi API backend
5. **RxJS Observables**: Xử lý async

---

**Viết bởi:** GitHub Copilot  
**Ngày:** 08/01/2026  
**Bản quyền:** Học tập cá nhân
