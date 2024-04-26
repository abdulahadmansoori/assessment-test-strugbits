import React from 'react';

const DeleteConfirmationModal = ({ show, onHide, onDelete }) => {
  return (
    <div className={`modal fade ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmation</h5>
            <button type="button" className="close" onClick={onHide}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this customer?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onHide}>Cancel</button>
            <button type="button" className="btn btn-danger" onClick={onDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
