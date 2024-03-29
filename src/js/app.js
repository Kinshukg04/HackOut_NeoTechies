App = {
  web3Provider: null,
  contracts: {},

db: function() {
  var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
  },


  db: function() {
  var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "mohit",
  password: "",
  database: "portal"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
  },


  login:function(event)
  {   db();
	  event.preventDefault();
     var user = $('#log #user').val();
    var pass = $('#log #pass').val();
	
	var f=0;
  con.query("SELECT id,password,address FROM users", function (err, result, fields) {
    if (err) throw err;
	for(var i=0;i<10;i++)
	{
		if(result[i].id==user && result[i].password==pass)
		{
			web3.eth.defaultAccount =result[i].address ;
			f=1;
			window.location.href="index.html";
			console.log("done")
		}
		
	}

	if(f==0)
	{
		window.alert("WRONG USERNAME/PASSWORD")
	}
  });

  },






  init: function() {
  if (typeof web3 !== 'undefined') {
    App.web3Provider = web3.currentProvider;
  } else {
  
    App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
  //  Web3j web3 = Web3j.build(new HttpService("https://rinkeby.infura.io/<your-token>"));

  }
	web3 = new Web3(App.web3Provider);
	web3.eth.defaultAccount = web3.eth.accounts[0];
  

    return App.initContract();
  },





  initContract: function() {

    var abi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newAdmin",
				"type": "address"
			}
		],
		"name": "addNewAdmin",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newSuperAdmin",
				"type": "address"
			}
		],
		"name": "addNewSuperAdmin",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newUser",
				"type": "address"
			}
		],
		"name": "addNewUser",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_propId",
				"type": "uint256"
			}
		],
		"name": "approveChangeOwnership",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_propId",
				"type": "uint256"
			}
		],
		"name": "approveProperty",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newUser",
				"type": "address"
			}
		],
		"name": "approveUsers",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_propId",
				"type": "uint256"
			},
			{
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "changeOwnership",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_propId",
				"type": "uint256"
			},
			{
				"name": "_newValue",
				"type": "uint256"
			}
		],
		"name": "changeValue",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_propId",
				"type": "uint256"
			},
			{
				"name": "_value",
				"type": "uint256"
			},
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "createProperty",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_propId",
				"type": "uint256"
			}
		],
		"name": "rejectProperty",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "creatorAdmin",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_propId",
				"type": "uint256"
			}
		],
		"name": "getPropertyDetails",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "properties",
		"outputs": [
			{
				"name": "status",
				"type": "uint8"
			},
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "currOwner",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "propOwnerChange",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "verifiedUsers",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

App.contracts.asset =  web3.eth.contract(abi).at('0x14279303ca725183e071b1021af0642a2d602acf');

    return App.bindEvents();

  },




bindEvents: function() {
    $(document).on('click', '#btn-PropAdd', App.createProperty);
    $(document).on('click', '#btn-PropApprove', App.approveProperty);
    $(document).on('click', '#btn-PropReject', App.rejectProperty);
    $(document).on('click', '#btn-PropReqChange', App.reqchangeOwnership);
    $(document).on('click', '#btn-PropAcptChange', App.approveChangeOwnership);
    $(document).on('click', '#btn-PropValChange', App.changeValue);
    $(document).on('click', '#btn-PropSearch', App.getPropertyDetails);
    $(document).on('click', '#btn-PropAddUser', App.adduser);
	$(document).on('click', '#btn-PropApproveUser', App.approveUsers);
	$(document).on('click', '#loginn', App.login);
    },






  createProperty: function(event) {
    event.preventDefault();


    var PropId = $('#PropAdd #PropId').val();
    var PropVal = $('#PropAdd #PropVal').val();
    var PropOwner = $('#PropAdd #PropOwner').val();


    web3.eth.getAccounts(function(error, accounts) {
									      if (error) {
										console.log(error);
									      }

      App.contracts.asset.createProperty(PropId, PropVal, PropOwner, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
		if(!error)
            {window.alert("PROPERTY CREATED");
			console.log(JSON.stringify(result));
			}

		else
		{
			console.error(error);
			window.alert("UNSUCCESSFUl TRY AGAIN");
		}
      });



    });

  },



  approveProperty: function(event) {
    event.preventDefault();
    var PropId = $('#PropSearchform #PropSearch').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }
                        App.contracts.asset.approveProperty(PropId, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
						  if(!error)
						  {
							  console.log(JSON.stringify(result));
							  window.alert("PROPERTY APPROVED");
						  }
                          else{
							  console.error(error);
							  window.alert("UNSUCCESSFUl TRY AGAIN")
						  }
                        });});

  },
  rejectProperty: function(event) {
    event.preventDefault();
    var PropId = $('#PropSearchform #PropSearch').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }
                        App.contracts.asset.rejectProperty(PropId, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
						  if(!error)
						  {
							  console.log(JSON.stringify(result));
							  window.alert("PROPERTY REJECTED");
						  }
						  else
						  {
							  console.error(error);
							  window.alert("UNSUCCESSFUl TRY AGAIN")
						  }
                        });});

  },
  reqchangeOwnership: function(event) {
    event.preventDefault();
    var PropId = $('#PropSearchform #PropSearch').val();
    var NewOwner = $('#PropReqChangeform #PropReqChange').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }
                        App.contracts.asset.changeOwnership(PropId, NewOwner, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
						  if(!error)
						  {
							  console.log(JSON.stringify(result));
							  window.alert("OWNERSHIP CHANGE REQUEST SENT");
						  }
						  else
						  {
							  console.error(error);
							  window.alert("UNSUCCESSFUl TRY AGAIN")
						  }
                        });});

  },
  approveChangeOwnership: function(event) {
    event.preventDefault();
    var PropId = $('#PropSearchform #PropSearch').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }
                        App.contracts.asset.approveChangeOwnership(PropId, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
						  if(!error)
						  {
							  console.log(JSON.stringify(result));
							  window.alert("OWNERSHIP CHNAGE APPROVED SUCCESFULLY");
						  }
						  else
						  {
							  console.error(error);
							  window.alert("UNSUCCESSFUl TRY AGAIN");
						  }
                        });});

  },
  changeValue: function(event) {
    event.preventDefault();
    var PropId = $('#PropSearchform #PropSearch').val();
    var NewVal = $('#PropValChangeform #PropValChange').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }
                        App.contracts.asset.changeValue(PropId, NewVal, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
						  if(!error)
						  {
							  console.log(JSON.stringify(result));
							  window.alert("VALUE CHANGED SUCCESFULLY");
						  }
						  else
						  {
							  console.error(error);
							  window.alert("UNSUCCESSFUl TRY AGAIN")
						  }
                        });});

  },
  getPropertyDetails: function() {
  //  event.preventDefault();
    var PropId = $('#PropSearchform #PropSearch').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }


                                            App.contracts.asset.getPropertyDetails(PropId, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
                                              if(!error)
                                          {        console.log(JSON.stringify(result));

                                                  var state = result[0];

                                          $('#resultPropID').text(PropId);


                                          if(state == 0)
                                          {$('#resultPropStatus').text('NotExist');
                                          $('#resultPropFunc1 #btn-PropApprove').attr('disabled', true);
                                          $('#resultPropFunc2 #btn-PropReject').attr('disabled', true);
                                          $('.sec1').html('');
                                          $('.sec2').html('');
                                          $('.sec3').html('');}
                                          else if (state == 1)
                                          {
                                          $('#resultPropStatus').text('Pending');
                                          $('#resultPropFunc1').html('<a href="#" id="btn-PropApprove" class="btn btn-primary">Approve</a>');
                                          $('#resultPropFunc2').html('<a href="#" id="btn-PropReject" class="btn btn-primary">Reject</a>');
                                          $('.sec1').html('');
                                          $('.sec2').html('');
                                          $('.sec3').html('');}
                                          else if(state == 2)
                                          {$('#resultPropStatus').text('Approved');

                                          $('#resultPropFunc1 #btn-PropApprove').attr('disabled', true);
                                          $('#resultPropFunc2 #btn-PropReject').attr('disabled', true);
                                          $('.sec1').html('');
                                          $('.sec2').html('');
                                          $('.sec3').html('');

                                          App.contracts.asset.propOwnerChange(PropId, function(error, result){
                                            if(!error)
                                            {
                                                if(result == "0x0000000000000000000000000000000000000000")
                                                {
                                                  $('.sec1').html('<form action="#" id ="PropReqChangeform"><div class="form-group"><label>Request Change of Ownership</label><input type="text" class="form-control" id="PropReqChange" name="PropReqChange" placeholder="Enter New Owner Address"></div></form><button type="submit"  class="btn btn-primary" id="btn-PropReqChange"  form="form1" value="Submit">Request</button>');
                                                  $('.sec3').html('<form action="#" id="PropValChangeform"><div class="form-group"><label>Change Property Value/Price</label><input type="text" class="form-control" id="PropValChange" name="PropValChange" placeholder="Enter New Value/Price"></div></form><button type="submit"  class="btn btn-primary" id="btn-PropValChange"  form="form1" value="Submit">Change</button>');

                                                }
                                                else
                                                {
                                                  $('.sec2').html('<label>Accept Change of Ownership</label><button type="submit"  class="btn btn-primary" id="btn-PropAcptChange" value="Submit">Accept</button>');
                                                }
                                            }
                                            else
                                                console.error(error);
                                          });



                                        }
                                          else if(state == 3)
                                          {$('#resultPropStatus').text('Rejected');
                                          $('#resultPropFunc1 #btn-PropApprove').attr('disabled', true);
                                          $('#resultPropFunc2 #btn-PropReject').attr('disabled', true);
                                          $('.sec1').html('');
                                          $('.sec2').html('');
                                          $('.sec3').html('');}


                                          $('#resultPropValue').text(result[1]);
                                          $('#resultPropOwner').text(result[2]);

                                        }
                                              else
                                                  console.error(error);
                                            });  });
  },
  adduser: function(event) {
    event.preventDefault();
    var useraddress = $('#adduser #PropAddUser').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }
                        if($('#adduser #PropAddUserrole').val() == "User")
                        {App.contracts.asset.addNewUser(useraddress, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
						  if(!error)
						  {
							  console.log(result);
							  window.alert("USER ADDED SUCCESSFULLY");
						  }
						  else
						  {
							  console.error(error);
							  window.alert("UNSUCCESSFUl TRY AGAIN");
						  }
                        });
                        }
                        else if ($('#adduser #PropAddUserrole').val() == "Admin")
                        {App.contracts.asset.addNewAdmin(useraddress, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
						  if(!error)
						  {
							  console.log(JSON.stringify(result));
							  window.alert("USER ADDED SUCCESSFULLY");
						  }
                          else
							  console.error(error);
							  window.alert("UNSUCCESSFUl TRY AGAIN");
                        });
                        }
                        else if ($('#adduser #PropAddUserrole').val() == "SuperAdmin")
                        {App.contracts.asset.addNewSuperAdmin(useraddress, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
						  if(!error)
						  {
							  console.log(JSON.stringify(result));
							  window.alert("USER ADDED SUCCESSFULLY");
						  }
						  else
						  {
							  console.error(error);
							  window.alert("UNSUCCESSFUl TRY AGAIN");
						  }
                        });
                        }


                      });

  },
  approveUsers: function(event) {
    event.preventDefault();
    var useraddress = $('#adduser #PropAddUser').val();
    web3.eth.getAccounts(function(error, accounts) {
                        if (error) {
                    console.log(error);
                        }
                        App.contracts.asset.approveUsers(useraddress, {gas: 1000000, gasPrice: web3.toWei(20, 'gwei')}, function(error, result){
						  if(!error)
						  {
							  console.log(JSON.stringify(result));
							  window.alert("USER APPROVED SUCCESSFULLY");
						  }
						  else
						  {
							  console.error(error);
							  window.alert("UNSUCCESSFUl TRY AGAIN");
						  }
                        });});

  }





};







$(function() {
  $(window).load(function() {

    App.init();
  });
});
