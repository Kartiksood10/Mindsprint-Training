import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Forms() {
  const isLoggedIn = false
  return (
    <div>
        <button>{isLoggedIn?'logout':'login'}</button>
    </div>  
  );
}

export default Forms;