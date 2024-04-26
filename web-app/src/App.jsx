import { useState, useEffect } from 'react';
import Modal from './Components/Modal';
import { TopBar } from './Components/TopBar';
import { Table } from './Components/Table';
import { Sidebar } from './Components/Sidebar';
import './App.css';
import { fetchData, addCustomer, updateCustomer, deleteCustomer } from './data/customer';
import DeleteConfirmationModal from './Components/DeleteConfirmationModal';

function App() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    setLoading(true);
    try {
      const data = await fetchData();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addCustomerHandle = async (customer) => {
    setLoading(true);
    try {
      await addCustomer(customer);
      await fetchDataFromApi();
      setShowModal(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateCustomerHandle = async (customerId, updatedCustomer) => {
    setLoading(true);
    try {
      await updateCustomer(customerId, updatedCustomer);
      await fetchDataFromApi(); // Refresh data after updating
      setShowModal(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteCustomerHandle = async (customerId) => {
    setLoading(true);
    try {
      await deleteCustomer(customerId);
      await fetchDataFromApi(); // Refresh data after deleting
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const editHandler = (customer) => {
    setModalData(customer);
    setShowModal(true);
  };

  const addHandler = () => {
    setModalData({
      _id: '',
      name: '',
      username: '',
      email: '',
      profilePicture: null
    });
    setShowModal(true);
  };

  return (
    <>
      {loading && <div className="overlay">
        <div className="spinner-container">
          <div className="spinner-border text-white" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      }
      {/* {error && <div>Error: {error}</div>} */}
      {true && <div className="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex">
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
          <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
      }

      <div>
        <div className="row gx-0">
          <Sidebar />

          <div className="main col-md-10">
            <TopBar />

            <div className='px-5 py-4'>
              <button type="button" className=" my-button myGradient btn mt-3 text-white fw-semibold" onClick={addHandler}><i className="bi bi-plus-lg"></i> ADD NEW CUSTOMER</button>
              <Table data={data} editHandler={editHandler} deleteCustomer={deleteCustomerHandle} />

            </div>
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        data={modalData}
        addCustomer={addCustomerHandle}
        updateCustomer={updateCustomerHandle}
      />
    </>
  );
}

export default App;
