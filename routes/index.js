var express = require('express');
var router = express.Router();
var ethTx = require('ethereumjs-tx');
var Bitcoinlib = require('bitcoinjs-lib');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DCRM Testnet' });
});

router.post('/build_EthTx',function(req,res){
	console.log(new Date(),req.body);

	var to_address=req.body.to_address;
	var to_value=req.body.to_value;
	var nonce=req.body.nonce;
	var erc20_data=req.body.erc20_data;
	var sig=req.body.sig;

	var txData;

	if (erc20_data) {
		txData = {
		  nonce: nonce,
		  gasPrice: 41000000000,
		  gasLimit: 96000,
		  to: to_address,
		  value: '0x0',
		  data: erc20_data,
		  v: '0x04',
		  r: 0,//0
		  s: 0 //0
		};
	}else{
		txData = {
		  nonce: nonce,
		  gasPrice: 41000000000,
		  gasLimit: 96000,
		  to: to_address,
		  value: to_value,
		  data: '',
		  v: '0x04', //"0x1c" Ethereum main net chainID
		  r: 0,//0
		  s: 0 //0
		};
	}

	const tx = new ethTx(txData)
	var result={};

	if (sig) {
		var tx_v=parseInt(sig.substring(128))+parseInt(txData.v,16)*2+35;

 		var ret = {};
  		ret.r =Buffer.from(sig.substring(0,64),'hex');// new Buffer(sig.substring(0,64),'hex');
  		ret.s =Buffer.from(sig.substring(64,128),'hex');// new Buffer(sig.substring(64,128),'hex');
  		ret.v = tx_v;

		Object.assign(tx, ret);

		var txhash=tx.serialize().toString('hex');
		result.txhash=txhash;
	}else{
		var rlphash=tx.hash().toString('hex');
		result.sighash=rlphash;
	}
	
	res.json(result);
});

router.post('/build_BtcTx',function(req,res){
	console.log(new Date(),req.body);

	var to_address=req.body.to_address;
	var to_value= parseInt(req.body.to_value);
	var utxo=req.body.utxo;
	var utxoIndex= parseInt(req.body.utxoIndex);
	var pubkey= req.body.pubkey;
	var sig=req.body.sig;

	var pubhash= Buffer.from(pubkey,'hex');
	const alice = Bitcoinlib.ECPair.fromPublicKeyBuffer(pubhash,Bitcoinlib.networks.testnet);

	const txb = new Bitcoinlib.TransactionBuilder(Bitcoinlib.networks.testnet);
	txb.addInput(utxo,utxoIndex);

	txb.addOutput(to_address,to_value);

	var result={};

	if (sig) {
		var signature = Buffer.from(sig,'hex');
		txb.dcrmsign(0,alice,signature);
		result.txhash=txb.build().toHex();
	}else{
		var sighash= txb.signatureHash(0,alice);
		result.sighash=sighash;
	}
	res.json(result);
});

module.exports = router;
