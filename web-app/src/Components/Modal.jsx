import React, { useState, useEffect } from 'react';
import { ModalForm } from './ModalForm';

const Modal = ({ show, onHide, data, addCustomer, updateCustomer }) => {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({ name: '', username: '', email: '', profilePicture: {} });

  useEffect(() => {
    if (data) {
      setFormData(data);
    } else {
      setFormData({ name: '', username: '', email: '', profilePicture: null });
    }
  }, [data]);


  const handleChange = (e) => {
    const newFormData = { ...formData }; // Create a copy of formData

    if (e.target.type === 'file') {
      newFormData.profilePicture = e.target.files[0];
    } else {
      const { name, value } = e.target;
      newFormData[name] = value;
    }

    setFormData(newFormData);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.username || !formData.email) {
      setError(true);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('username', formData.username);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('profilePicture', formData.profilePicture);

    if (data && data._id) {
      updateCustomer(data._id, formDataToSend);
    } else {
      addCustomer(formDataToSend);
    }

    setFormData({ name: '', username: '', email: '', profilePicture: null });
    setError(false);
  };


  return (
    <div className="container mt-5">
      <div
        className={`modal fade ${show ? 'show' : ''}`}
        id="customModal"
        tabIndex="-1"
        aria-labelledby="customModalLabel"
        aria-hidden={!show}
        style={{ display: show ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header myGradient card">
              <div className='w-100 text-end'>
                <button
                  type="button"
                  className="btn-close text-white"
                  onClick={onHide}
                  aria-label="Close"
                ></button>
              </div>

              <h3 className="modal-title text-center text-white" id="customModalLabel">
                {data && data._id != '' ? "Edit" : "Add"} Customer
              </h3>
            </div>

            <div className="modal-body">
              <ModalForm formData={formData} handleChange={handleChange} />
            </div>

            {error && <span className='text-center text-danger'>Please fill in all fields first!!</span>}

            <button type="button" className="btn btn-primary myGradient text-white mx-3 mb-3" onClick={handleSubmit}>
              Save Changes
            </button>

          </div>
        </div>
      </div>

      {show && (
        <div
          className="modal-backdrop fade show"
          onClick={onHide}
        ></div>
      )}

    </div>
  );
};

export default Modal;
