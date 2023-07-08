import { Modal, Button } from 'antd';
import { useEffect } from 'react';

const ProductVerificationModal = () => {
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(()=>{
        setModalVisible(true)
  },[])

  const handleVerify = () => {
    // Perform verification logic here
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Modal
        title="Product Verification"
        open={modalVisible}
        onCancel={handleClose}
        footer={[
          <Button key="close" onClick={handleClose}>
            Close
          </Button>
        ]}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/path/to/verified-icon.png" // Replace with the actual path to the verified icon image
            alt="Verified Icon"
            style={{ width: 50, marginRight: 16 }}
          />
          <p style={{ fontSize: 16, fontWeight: 'bold' }}>
            Product Authentic.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ProductVerificationModal;
