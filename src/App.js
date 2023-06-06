import React from 'react';
import { 
  SignalButtonReact, 
  SignalOTPReact, 
  SignalButtonSocmedReact, 
  SignalButtonFloatingReact, 
  SignalButtonIconReact, 
  SignalCheckboxReact,
  SignalRadioReact,
  SignalToggleReact,
  SignalLanguageSelectorReact,
  SignalBreadcrumbReact,
  SignalTextfieldReact
} from 'signal-ui';

function App() {
  return (
    <div>
      <SignalButtonReact variant='primary' size='lg'>BELI PULSA</SignalButtonReact>
      <SignalButtonReact variant='secondary'>BELI PULSA</SignalButtonReact>
      <SignalButtonReact variant='text'>BELI PULSA</SignalButtonReact>
      <SignalOTPReact onChange={(e) => console.log(e.detail.event.key)}></SignalOTPReact>
      <SignalButtonSocmedReact variant='apple'></SignalButtonSocmedReact>
      <SignalButtonSocmedReact variant='facebook'></SignalButtonSocmedReact>
      <SignalButtonSocmedReact variant='google'></SignalButtonSocmedReact>
      <SignalButtonSocmedReact variant='twitter'></SignalButtonSocmedReact>
      <SignalButtonFloatingReact badge='99+'></SignalButtonFloatingReact>
      <SignalButtonIconReact variant='primary'></SignalButtonIconReact>
      <SignalCheckboxReact>Hey, BELI PULSA</SignalCheckboxReact>
      <SignalRadioReact>HEY, BELI PULSA JUGA</SignalRadioReact>
      <SignalToggleReact></SignalToggleReact>
      <SignalLanguageSelectorReact country='ID' flagIcon='indonesia' chevron></SignalLanguageSelectorReact>
      <SignalBreadcrumbReact crumbs={['Inactive Menu', 'Inactive Menu', 'Active Menu']} onClick={(param) => console.log(param)} />
      <SignalTextfieldReact label='Username' placeholder='Masukkan username anda' />
    </div>
  );
}

export default App;
