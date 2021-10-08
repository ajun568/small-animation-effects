import { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import ActionFinish from './components/ActionFinish';

function App() {
  const [rightVisible, setRightVisible] = useState(false);

  return (
    <div className="App">
      <Button onClick={() => setRightVisible(true)}>对勾动画</Button>

      <Modal
        visible={rightVisible}
        width={200}
        footer={null}
        destroyOnClose={true}
        onCancel={() => setRightVisible(false)}
      >
        <div className="flex-all-center">
          <ActionFinish />
        </div>
      </Modal>
    </div>
  );
}

export default App;
