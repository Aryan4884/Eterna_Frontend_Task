# Axiom Trade — Token Discovery Table (Replica)

A pixel-perfect replica of **Axiom Trade’s Token Discovery** table built using **Next.js 14 App Router**, **TypeScript (strict)**, **Tailwind CSS**, **Redux Toolkit**, and **React Query**.  
This project focuses on accurate UI reproduction, smooth interactions, and real-time updates with ≤2px visual deviation verified through visual regression tools.

---

## 🚀 Features Implemented

### **Token Columns**
- New Pairs  
- Final Stretch  
- Migrated  

### **Interactivity**
- Sortable columns (Symbol, Price, 24h Change)  
- Hover states & row highlight animations  
- Click interactions  
- Popover, tooltip, and modal hooks (Radix-ready)

### **Real-Time Updates**
- Mock WebSocket streaming simulated live price data  
- Smooth color transitions for price increases/decreases  
- Memoized row components for optimal performance

### **Loading & Error UX**
- Skeleton + shimmer loaders  
- Progressive loading  
- Error boundaries  
- Graceful fallback screens

### **Performance**
- Zero layout shifts (CLS-safe)  
- Sub-100ms interactions  
- Memoized components & cached state  
- Fully typed logic with strict TypeScript  
- Atomic architecture (components, hooks, utilities)

---

## 🛠 Tech Stack

- **Next.js 14 (App Router)**  
- **TypeScript (strict mode)**  
- **Tailwind CSS**  
- **Redux Toolkit**  
- **React Query**  
- **shadcn/ui & Radix primitives**  
- **Mock WebSocket for price streaming**

---

## 📦 Run Locally

git clone https://github.com/Aryan4884/Eterna_Frontend_Task.git \
cd Eterna_Frontend_Task \
npm install \
npm run dev
