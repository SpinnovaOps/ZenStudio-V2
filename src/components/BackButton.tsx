import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/#features')}
      className="fixed top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <ArrowLeftIcon className="h-6 w-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
    </button>
  );
};

export default BackButton;