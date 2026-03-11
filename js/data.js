const productsData = [
    {
        id: 204,
        categoryId: 'clothes',
        isDealOfDay: true,
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&q=80&w=400',
        price: 120,
        oldPrice: 150,
        name: {
            ar: 'قميص رجالي قطن',
            he: 'חולצת גברים כותנה',
            en: 'Men\'s Cotton Shirt',
            ru: 'Мужская хлопковая рубашка'
        }
    },
    {
        id: 205,
        categoryId: 'shoes',
        isDealOfDay: false,
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400',
        price: 250,
        oldPrice: null,
        name: {
            ar: 'حذاء رياضي مريح',
            he: 'נעלי ספורט נוחות',
            en: 'Comfortable Sneakers',
            ru: 'Удобные кроссовки'
        }
    },
    {
        id: 206,
        categoryId: 'home',
        isDealOfDay: false,
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400',
        price: 85,
        oldPrice: null,
        name: {
            ar: 'طقم أكواب قهوة',
            he: 'סט כוסות קפה',
            en: 'Coffee Mug Set',
            ru: 'Набор кофейных чашек'
        }
    },
    {
        id: 207,
        categoryId: 'electronics',
        isDealOfDay: false,
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?auto=format&fit=crop&q=80&w=400',
        price: 350,
        oldPrice: null,
        name: {
            ar: 'سماعات بلوتوث',
            he: 'אוזניות בלוטות\'',
            en: 'Bluetooth Headphones',
            ru: 'Bluetooth наушники'
        }
    },
    {
        id: 208,
        categoryId: 'clothes',
        isDealOfDay: false,
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=400',
        price: 199,
        oldPrice: null,
        name: {
            ar: 'فستان صيفي نسائي',
            he: 'שמלת קיץ לנשים',
            en: 'Women\'s Summer Dress',
            ru: 'Летнее женское платье'
        }
    },
    {
        id: 209,
        categoryId: 'home',
        isDealOfDay: true,
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=400',
        price: 65,
        oldPrice: 100,
        name: {
            ar: 'كعكة تقديم أنيقة',
            he: 'מעמד לעוגות אלגנטי',
            en: 'Elegant Cake Stand',
            ru: 'Элегантная подставка для торта'
        }
    }
];

// Default WhatsApp Number for ordering (Without '+' or '00')
const WHATSAPP_NUMBER = "972500000000";
