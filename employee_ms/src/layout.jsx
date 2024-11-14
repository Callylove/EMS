
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1 p-6 bg-gray-100">
            <Outlet /> 
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
