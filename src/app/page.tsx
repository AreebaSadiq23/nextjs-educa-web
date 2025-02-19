"use client";
import { useState } from 'react';
import Header from './components/Header';
import HomeSection from './components/index';
import Form from './components/form';

const Home: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleRegisterClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div>
      <Header onRegisterClick={handleRegisterClick} />
      <main className="mt-[60px]">
        <HomeSection />
        </main>
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Form isVisible={isFormVisible} onClose={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default Home;