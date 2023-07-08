import Link from 'next/link';
import { Modal, Button } from 'antd';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
const Custom404 = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const router = useRouter()
    useEffect(()=>{
      setModalVisible(true)
  },[])
  
  const handleVerify = () => {
  // Perform verification logic here
  setModalVisible(true);
  };
  
  const handleClose = () => {
  setModalVisible(false);
  router.push('/brand');

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
 <div className="flex flex-col items-center">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3U3NXV6aHlzN2hzaXQ0emJ3NDAwczM1aWt6amwzMGZrbG5hZHB1aSZlcD12MV9naWZzX3NlYXJjaCZjdD1z/jTfmBts5vvjK651km0/giphy.gif" // Replace with the actual path to the verified icon image
            alt="Verified Icon"
            className="w-20 mb-4"
          />
          <p className="text-lg font-bold mb-8">This Product is not Authentic.</p>
        </div>
      </Modal>
    </div>
  );
};

export default Custom404;
