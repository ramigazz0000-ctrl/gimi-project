/* admin.js - Logic for Gimi Admin Dashboard */

// Mock authentication
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('admin-login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;
            
            if (user === 'admin' && pass === '1234') {
                sessionStorage.setItem('gimiAdmin', 'true');
                window.location.href = 'admin-dashboard.html';
            } else {
                document.getElementById('login-error').style.display = 'block';
            }
        });
    }
});

function logoutAdmin() {
    sessionStorage.removeItem('gimiAdmin');
    window.location.href = 'admin-login.html';
}

// Initial check for dashboard
function initAdminDashboard() {
    if (!sessionStorage.getItem('gimiAdmin')) {
        window.location.href = 'admin-login.html';
        return;
    }
    
    loadDashboardData();
}

// Tabs Logic
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    document.getElementById(`tab-${tabId}`).classList.add('active');
    document.querySelector(`.nav-item[href="#${tabId}"]`).classList.add('active');
}

// Dummy Merchants Data (In-Memory)
let merchantsData = [
    { id: 'M-101', name: 'أزياء الأناقة', phone: '0501234567', status: 'active' },
    { id: 'M-102', name: 'أدوات منزلية كوهين', phone: '0549876543', status: 'active' },
    { id: 'M-103', name: 'إلكترونيات سمارت', phone: '0523334445', status: 'pending' },
];

// Combine existing productsData from data.js
let adminProducts = window.productsData ? [...window.productsData] : [];

function loadDashboardData() {
    // Stats
    document.getElementById('stat-products').innerText = adminProducts.length;
    document.getElementById('stat-merchants').innerText = merchantsData.length;
    document.getElementById('stat-pending').innerText = merchantsData.filter(m => m.status === 'pending').length;

    renderProductsTable();
    renderMerchantsTable();
}

// Render Products
function renderProductsTable() {
    const tbody = document.getElementById('products-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = adminProducts.map((p, index) => `
        <tr>
            <td>#${p.id}</td>
            <td><img src="${p.image}" alt="Product"></td>
            <td>${p.name.ar}</td>
            <td>${p.price} ₪</td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="deleteProduct(${index})">حذف</button>
            </td>
        </tr>
    `).join('');
}

// Modals
function openProductModal() {
    document.getElementById('product-modal').classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Add Product Handlers
document.addEventListener('DOMContentLoaded', () => {
    const addProductForm = document.getElementById('add-product-form');
    if (addProductForm) {
        addProductForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newProduct = {
                id: Math.floor(Math.random() * 1000) + 300,
                categoryId: 'clothes', // default mock
                isDealOfDay: false,
                isPopular: false,
                image: document.getElementById('p-image').value,
                price: document.getElementById('p-price').value,
                oldPrice: document.getElementById('p-old-price').value || null,
                name: {
                    ar: document.getElementById('p-name-ar').value,
                    he: 'מוצר חדש',
                    en: 'New Product',
                    ru: 'Новый продукт'
                }
            };
            
            adminProducts.push(newProduct);
            closeModal('product-modal');
            addProductForm.reset();
            loadDashboardData();
        });
    }
});

function deleteProduct(index) {
    if(confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
        adminProducts.splice(index, 1);
        loadDashboardData();
    }
}

// Render Merchants
function renderMerchantsTable() {
    const tbody = document.getElementById('merchants-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = merchantsData.map((m, index) => `
        <tr>
            <td>${m.id}</td>
            <td><strong>${m.name}</strong></td>
            <td>${m.phone}</td>
            <td>
                <span class="badge ${m.status === 'active' ? 'feature-badge' : 'deal-badge'}" style="${m.status === 'active' ? 'background:#d4edda;color:#155724' : ''}">
                    ${m.status === 'active' ? 'نشط' : 'بانتظار الموافقة'}
                </span>
            </td>
            <td>
                ${m.status === 'pending' 
                    ? `<button class="btn btn-sm btn-success" onclick="toggleMerchantStatus(${index})">قبول</button>` 
                    : `<button class="btn btn-sm" style="background:#ffb703" onclick="toggleMerchantStatus(${index})">تجميد</button>`
                }
                <button class="btn btn-sm btn-danger" onclick="deleteMerchant(${index})">إزالة</button>
            </td>
        </tr>
    `).join('');
}

function toggleMerchantStatus(index) {
    merchantsData[index].status = merchantsData[index].status === 'active' ? 'pending' : 'active';
    loadDashboardData();
}

function deleteMerchant(index) {
    if(confirm('هل أنت متأكد من إزالة هذا التاجر وجميع صلاحياته؟')) {
        merchantsData.splice(index, 1);
        loadDashboardData();
    }
}
// Placeholder for dummy adding merchant if needed
function openMerchantModal() {
    alert('واجهة إضافة تاجر جديد هنا (نفس مبدأ المنتجات - فقط للتوضيح)');
}
