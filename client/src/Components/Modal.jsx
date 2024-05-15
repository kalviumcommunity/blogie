import { useState } from 'react';
import Account from './Account';
import profile from '../assets/profile.webp'

// Modal component
const Modal = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  return (
    <div className="main-modal">
      <Account />
    </div>
  );
};

// Main component
const AccountDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="profile-div" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <img src={profile} alt="" className='profile1' />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default AccountDetails;
