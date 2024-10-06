import { HeaderLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Profile from '~/pages/Profile';
// Public routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/profile',
        component: Profile,
        layout: HeaderLayout
    },
];

// Private routes
const privateRoutes = [];

export { privateRoutes, publicRoutes };

// Các bước tạo ra 1 trang route:
// Tạo 1 file trong src
// Vào routes/index.js nạp vào (import) và thêm vào publicRoutes/private
