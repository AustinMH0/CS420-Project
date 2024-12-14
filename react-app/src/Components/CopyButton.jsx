import React from 'react';
import { FaRegCopy } from 'react-icons/fa6';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class CopyButton extends React.Component {
  state = {
    copied: false,
  };

  render() {
    const { text } = this.props; // Get the text prop

    return (
      <div>
        <CopyToClipboard text={text} onCopy={() => this.setState({ copied: true })}>
          <button
            onClick={() => navigator.clipboard.writeText(text)} // Use the correct text here
            className='bg-green-400 hover:bg-green-600 text-slate-800 justify-center font-bold py-2 px-4 rounded inline-flex items-center'
          >
            <FaRegCopy size={25} className='pr-2' />
            <div>Copy</div>
          </button>
        </CopyToClipboard>

        {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
      </div>
    );
  }
}

export default CopyButton;
