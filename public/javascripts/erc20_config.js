var FSN = {
    contractAddr: '0xd87D7C91e1e32508D1132bA36c87f1e001985Add',
    contractAbi: [{
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [{
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "name": "_spender",
            "type": "address"
        }, {
            "name": "_value",
            "type": "uint256"
        }],
        "name": "approve",
        "outputs": [{
            "name": "success",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "name": "_from",
            "type": "address"
        }, {
            "name": "_to",
            "type": "address"
        }, {
            "name": "_value",
            "type": "uint256"
        }],
        "name": "transferFrom",
        "outputs": [{
            "name": "success",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{
            "name": "",
            "type": "uint8"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "version",
        "outputs": [{
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "name": "_owner",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "name": "balance",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [{
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "name": "_to",
            "type": "address"
        }, {
            "name": "_value",
            "type": "uint256"
        }],
        "name": "transfer",
        "outputs": [{
            "name": "success",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "name": "_spender",
            "type": "address"
        }, {
            "name": "_value",
            "type": "uint256"
        }, {
            "name": "_extraData",
            "type": "bytes"
        }],
        "name": "approveAndCall",
        "outputs": [{
            "name": "success",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "name": "_owner",
            "type": "address"
        }, {
            "name": "_spender",
            "type": "address"
        }],
        "name": "allowance",
        "outputs": [{
            "name": "remaining",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "fallback"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "name": "_from",
            "type": "address"
        }, {
            "indexed": true,
            "name": "_to",
            "type": "address"
        }, {
            "indexed": false,
            "name": "_value",
            "type": "uint256"
        }],
        "name": "Transfer",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "name": "_owner",
            "type": "address"
        }, {
            "indexed": true,
            "name": "_spender",
            "type": "address"
        }, {
            "indexed": false,
            "name": "_value",
            "type": "uint256"
        }],
        "name": "Approval",
        "type": "event"
    }]
};


var TRX={
    contractAddr: '0xcde49e757519e77fd45003e64d203017bb3a049f',
    contractAbi:[{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [{
			"name": "",
			"type": "string"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"constant": false,
		"inputs": [{
			"name": "_spender",
			"type": "address"
		}, {
			"name": "_value",
			"type": "uint256"
		}],
		"name": "approve",
		"outputs": [{
			"name": "success",
			"type": "bool"
		}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [{
			"name": "",
			"type": "uint256"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"constant": false,
		"inputs": [{
			"name": "_from",
			"type": "address"
		}, {
			"name": "_to",
			"type": "address"
		}, {
			"name": "_value",
			"type": "uint256"
		}],
		"name": "transferFrom",
		"outputs": [{
			"name": "success",
			"type": "bool"
		}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [{
			"name": "",
			"type": "uint8"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"constant": true,
		"inputs": [],
		"name": "version",
		"outputs": [{
			"name": "",
			"type": "string"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"constant": true,
		"inputs": [{
			"name": "_owner",
			"type": "address"
		}],
		"name": "balanceOf",
		"outputs": [{
			"name": "balance",
			"type": "uint256"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [{
			"name": "",
			"type": "string"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"constant": false,
		"inputs": [{
			"name": "_to",
			"type": "address"
		}, {
			"name": "_value",
			"type": "uint256"
		}],
		"name": "transfer",
		"outputs": [{
			"name": "success",
			"type": "bool"
		}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"constant": false,
		"inputs": [{
			"name": "_spender",
			"type": "address"
		}, {
			"name": "_value",
			"type": "uint256"
		}, {
			"name": "_extraData",
			"type": "bytes"
		}],
		"name": "approveAndCall",
		"outputs": [{
			"name": "success",
			"type": "bool"
		}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"constant": true,
		"inputs": [{
			"name": "_owner",
			"type": "address"
		}, {
			"name": "_spender",
			"type": "address"
		}],
		"name": "allowance",
		"outputs": [{
			"name": "remaining",
			"type": "uint256"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}, {
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "fallback"
	}, {
		"anonymous": false,
		"inputs": [{
			"indexed": true,
			"name": "_from",
			"type": "address"
		}, {
			"indexed": true,
			"name": "_to",
			"type": "address"
		}, {
			"indexed": false,
			"name": "_value",
			"type": "uint256"
		}],
		"name": "Transfer",
		"type": "event"
	}, {
		"anonymous": false,
		"inputs": [{
			"indexed": true,
			"name": "_owner",
			"type": "address"
		}, {
			"indexed": true,
			"name": "_spender",
			"type": "address"
		}, {
			"indexed": false,
			"name": "_value",
			"type": "uint256"
		}],
		"name": "Approval",
		"type": "event"
	}]
};