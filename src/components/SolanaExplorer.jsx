import * as solanaWeb3 from '@solana/web3.js';

export const SolanaExplorer = (props) => {
	console.log(solanaWeb3);
	return (
		<div>
			<h3>Enter address:</h3>
			<input type='text'></input>
			<button>Submit</button>
		</div>
	);
};
