import Button from "./Button";
import css from './Twitter.module.css';
import { FaTwitter } from 'react-icons/fa';

function Twitter() {
    return(
      <main>
          <div><FaTwitter color='#1dcaff' size='50px' /></div>
          <h1>Happening now</h1>
          <h4>Join Twitter today.</h4>
          <Button btnClass={css.btnBlue} text='Sign up' />
          <Button btnClass={css.btnWhite} text='Log in' />
      </main>
    );
}

export default Twitter;