import { useDesignSystem } from '@blsodie/ui2/build';
import Button from '@blsodie/ui2/build/component/Button';
import Input from '@blsodie/ui2/build/component/Input';

import './App.css';

function App() {
  const status = useDesignSystem('63dd25bef9f7720ae565e38a');

  return (
    <div className="App">
      <div>
        <div className='sample-form'>
          <div className='login-text'>Login</div>
          <Input
            styles={{ base: { marginBottom: 15 } }}
            placeholder='Email'
          />
          <Input
            styles={{ base: { marginBottom: 25 } }}
            placeholder='Password'
          />
          <div>
            <Button>
              Login
            </Button>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default App;
