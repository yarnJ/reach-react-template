// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
      }
    };
  };

export async function User(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    Get: ctc0,
    Set: ctc1
    });
  const ctc3 = stdlib.T_Data({
    User: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  
  
  const v18 = await ctc.creationTime();
  
  
  
  const txn1 = await (ctc.sendrecv(1, 0, stdlib.checkedBigNumberify('./index.rsh:16:10:dot', stdlib.UInt_max, 0), [ctc1], [v18], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:16:10:dot', stdlib.UInt_max, 0), v18]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:16:10:dot', stdlib.UInt_max, 0)]);
    const [] = txn1.data;
    const v25 = txn1.time;
    const v22 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v27 = stdlib.checkedBigNumberify('./index.rsh:18:34:decimal', stdlib.UInt_max, 0);
    const v88 = v25;
    
    if ((() => {
      
      return true;})()) {
      let v30;
      sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:18:33:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v88]);
      sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:18:33:after expr stmt semicolon', stdlib.UInt_max, 2), v27]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:18:33:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc7, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:49:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  const [] = txn1.data;
  const v25 = txn1.time;
  const v22 = txn1.from;
  ;
  let v27 = stdlib.checkedBigNumberify('./index.rsh:18:34:decimal', stdlib.UInt_max, 0);
  let v88 = v25;
  
  while ((() => {
    
    return true;})()) {
    let v30;
    const v42 = stdlib.protect(ctc2, await interact.useCommand(), {
      at: './index.rsh:24:52:application',
      fs: ['at ./index.rsh:18:33:application call to [unknown function] (defined at: ./index.rsh:23:17:function exp)', 'at ./index.rsh:18:33:application call to "runUser0" (defined at: ./index.rsh:18:33:function exp)', 'at ./index.rsh:18:33:application call to [unknown function] (defined at: ./index.rsh:18:33:function exp)', 'at ./index.rsh:18:33:application call to [unknown function] (defined at: ./index.rsh:18:33:function exp)'],
      msg: 'useCommand',
      who: 'User'
      });
    
    const v45 = ['User', v42];
    
    const txn2 = await (ctc.sendrecv(3, 1, stdlib.checkedBigNumberify('./index.rsh:18:33:dot', stdlib.UInt_max, 1), [ctc1, ctc1, ctc3], [v27, v88, v45], [stdlib.checkedBigNumberify('./index.rsh:26:20:decimal', stdlib.UInt_max, 0), []], [ctc3], true, false, stdlib.checkedBigNumberify('./index.rsh:45:18:decimal', stdlib.UInt_max, 1024), (async (txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:18:33:dot', stdlib.UInt_max, 2), v27, v88]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:18:33:dot', stdlib.UInt_max, 2), v27]);
      const [v51] = txn2.data;
      const v59 = txn2.time;
      const v50 = txn2.from;
      
      let v52;
      switch (v51[0]) {
        case 'User': {
          const v53 = v51[1];
          v52 = stdlib.checkedBigNumberify('./index.rsh:26:20:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        }
      sim_r.txns.push({
        amt: v52,
        kind: 'to',
        tok: undefined
        });
      let v60;
      switch (v51[0]) {
        case 'User': {
          const v61 = v51[1];
          v60 = true;
          
          break;
          }
        }
      stdlib.assert(v60, {
        at: './index.rsh:18:33:application',
        fs: ['at ./index.rsh:18:33:application call to [unknown function] (defined at: ./index.rsh:18:33:function exp)'],
        msg: null,
        who: 'User'
        });
      switch (v51[0]) {
        case 'User': {
          const v65 = v51[1];
          let v66;
          switch (v65[0]) {
            case 'Get': {
              
              
              v66 = v27;
              
              break;
              }
            case 'Set': {
              const v73 = v65[1];
              
              v66 = v73;
              
              break;
              }
            }
          v30 = v66;
          
          break;
          }
        }
      const cv27 = v30;
      const cv88 = v59;
      
      (() => {
        const v27 = cv27;
        const v88 = cv88;
        
        if ((() => {
          
          return true;})()) {
          let v30;
          sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:18:33:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v88]);
          sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:18:33:after expr stmt semicolon', stdlib.UInt_max, 2), v27]);
          sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:18:33:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.nextSt = stdlib.digest(ctc7, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
          sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:49:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = true;
          }})();
      return sim_r;
      })));
    if (txn2.didTimeout) {
      
      const txn3 = await (ctc.sendrecv(4, 0, stdlib.checkedBigNumberify('./index.rsh:46:18:dot', stdlib.UInt_max, 1), [ctc1, ctc1], [v27, v88], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:46:18:dot', stdlib.UInt_max, 2), v27, v88]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:46:18:dot', stdlib.UInt_max, 2), v27]);
        const [] = txn3.data;
        const v84 = txn3.time;
        const v81 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        v30 = v27;
        const cv27 = v30;
        const cv88 = v84;
        
        (() => {
          const v27 = cv27;
          const v88 = cv88;
          
          if ((() => {
            
            return true;})()) {
            let v30;
            sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:18:33:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v88]);
            sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:18:33:after expr stmt semicolon', stdlib.UInt_max, 2), v27]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:18:33:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc7, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:49:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v84 = txn3.time;
      const v81 = txn3.from;
      ;
      v30 = v27;
      const cv27 = v30;
      const cv88 = v84;
      
      v27 = cv27;
      v88 = cv88;
      
      continue;
      }
    else {
      const [v51] = txn2.data;
      const v59 = txn2.time;
      const v50 = txn2.from;
      let v52;
      switch (v51[0]) {
        case 'User': {
          const v53 = v51[1];
          v52 = stdlib.checkedBigNumberify('./index.rsh:26:20:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        }
      ;
      let v60;
      switch (v51[0]) {
        case 'User': {
          const v61 = v51[1];
          v60 = true;
          
          break;
          }
        }
      stdlib.assert(v60, {
        at: './index.rsh:18:33:application',
        fs: ['at ./index.rsh:18:33:application call to [unknown function] (defined at: ./index.rsh:18:33:function exp)'],
        msg: null,
        who: 'User'
        });
      switch (v51[0]) {
        case 'User': {
          const v65 = v51[1];
          let v66;
          switch (v65[0]) {
            case 'Get': {
              
              stdlib.protect(ctc0, await interact.seeValue(v27), {
                at: './index.rsh:31:46:application',
                fs: ['at ./index.rsh:30:34:application call to [unknown function] (defined at: ./index.rsh:30:38:function exp)', 'at ./index.rsh:application call to [unknown function] (defined at: ./index.rsh:29:29:function exp)', 'at ./index.rsh:28:37:application call to [unknown function] (defined at: ./index.rsh:function exp)', 'at ./index.rsh:18:33:application call to [unknown function] (defined at: ./index.rsh:18:33:function exp)'],
                msg: 'seeValue',
                who: 'User'
                });
              
              v66 = v27;
              
              break;
              }
            case 'Set': {
              const v73 = v65[1];
              stdlib.protect(ctc0, await interact.valueChanged(v73, v50), {
                at: './index.rsh:38:50:application',
                fs: ['at ./index.rsh:37:34:application call to [unknown function] (defined at: ./index.rsh:37:38:function exp)', 'at ./index.rsh:application call to [unknown function] (defined at: ./index.rsh:35:30:function exp)', 'at ./index.rsh:28:37:application call to [unknown function] (defined at: ./index.rsh:function exp)', 'at ./index.rsh:18:33:application call to [unknown function] (defined at: ./index.rsh:18:33:function exp)'],
                msg: 'valueChanged',
                who: 'User'
                });
              
              v66 = v73;
              
              break;
              }
            }
          v30 = v66;
          
          break;
          }
        }
      const cv27 = v30;
      const cv88 = v59;
      
      v27 = cv27;
      v88 = cv88;
      
      continue;}
    }
  return;
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(dg==)
gtxna 0 ApplicationArgs 2
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(dg==)
byte base64()
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [null, {
    count: 6,
    size: 89
    }, null, {
    count: 8,
    size: 107
    }, {
    count: 7,
    size: 97
    }],
  steps: [null, `#pragma version 3
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 6
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// CheckPay
// "./index.rsh:16:10:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
int 0
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, null, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
gtxna 0 ApplicationArgs 7
store 254
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
load 254
int 0
getbyte
int 0
==
bz l1
load 254
substring 1 10
store 248
int 0
store 249
l1:
l0:
// CheckPay
// "./index.rsh:18:33:dot"
// "[at ./index.rsh:18:33:application call to [unknown function] (defined at: ./index.rsh:18:33:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
-
load 249
==
assert
load 254
int 0
getbyte
int 0
==
bz l3
load 254
substring 1 10
store 247
int 1
store 248
l3:
l2:
// Nothing
// "./index.rsh:18:33:application"
// "[at ./index.rsh:18:33:application call to [unknown function] (defined at: ./index.rsh:18:33:function exp)]"
load 248
assert
load 254
int 0
getbyte
int 0
==
bz l5
load 254
substring 1 10
dup
store 247
int 0
getbyte
int 0
==
bz l7
load 255
store 246
l7:
load 247
int 0
getbyte
int 1
==
bz l8
load 247
substring 1 9
btoi
dup
store 245
store 246
l8:
l6:
load 246
store 250
l5:
l4:
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 247
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 1024
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 7
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// CheckPay
// "./index.rsh:46:18:dot"
// "[at ./index.rsh:18:33:application call to [unknown function] (defined at: ./index.rsh:18:33:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
load 255
store 254
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 253
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 1024
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
pop
done:
int 1
return
`],
  unsupported: false
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v18",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T6",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "enum _enum_T5",
                        "name": "which",
                        "type": "uint8"
                      },
                      {
                        "internalType": "bool",
                        "name": "_Get",
                        "type": "bool"
                      },
                      {
                        "internalType": "uint256",
                        "name": "_Set",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T5",
                    "name": "_User",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T6",
                "name": "v51",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v18",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T6",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "enum _enum_T5",
                        "name": "which",
                        "type": "uint8"
                      },
                      {
                        "internalType": "bool",
                        "name": "_Get",
                        "type": "bool"
                      },
                      {
                        "internalType": "uint256",
                        "name": "_Set",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T5",
                    "name": "_User",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T6",
                "name": "v51",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382528251808201845260008082529251815283518083018490529051818501528351808203850181526060909101909352825192019190912090556107b4806100826000396000f3fe6080604052600436106100385760003560e01c8063193afc7314610044578063401b370f14610059578063a3ace6901461006c5761003f565b3661003f57005b600080fd5b6100576100523660046105b7565b61007f565b005b610057610067366004610641565b610127565b61005761007a366004610652565b610379565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146100bc57600080fd5b6000805534156100cb57600080fd5b7fc32df0ce290a4082d696e286eb47ee901bff58c6d9bf2b65b404efaab9a729c7816040516100fa9190610663565b60405180910390a161010a610489565b6020808201805160009052514391015261012381610421565b5050565b60405161013b906002908390602001610726565b6040516020818303038152906040528051906020012060001c6000541461016157600080fd5b6000805561016d6104bf565b61017d6104006020840135610744565b431061018857600080fd5b600061019a6060840160408501610596565b80156101b657634e487b7160e01b600052602160045260246000fd5b14156101db576101ce368390038301606084016105ce565b6040820152600060208201525b806020015134146101eb57600080fd5b60006101fd6060840160408501610596565b801561021957634e487b7160e01b600052602160045260246000fd5b141561023e57610231368390038301606084016105ce565b6080820152600160608201525b806060015161024c57600080fd5b600061025e6060840160408501610596565b801561027a57634e487b7160e01b600052602160045260246000fd5b141561031957610292368390038301606084016105ce565b60a082018190525160009060018111156102bc57634e487b7160e01b600052602160045260246000fd5b14156102ce57813560c0820152610311565b600160a08201515160018111156102f557634e487b7160e01b600052602160045260246000fd5b14156103115760a08101516040015160e0820181905260c08201525b60c081015181525b7faa321fc3a473ee6728b969a702e082bcdca17a58a7da9a3ee6df8b39a71e0cc2826040516103489190610684565b60405180910390a1610358610489565b8151602080830180519290925290514391015261037481610421565b505050565b60405161038d906002908390602001610726565b6040516020818303038152906040528051906020012060001c600054146103b357600080fd5b600080805560408051602081019091529081526103d66104006020840135610744565b4310156103e257600080fd5b34156103ed57600080fd5b813581526040517f9d551beb88125574cbf6767eaffd94653eededac34e8e58747750491d28a3393906103489084906106fb565b604080516020808201835260009182905282518084018452828152808201838152948201805151825251820151855283516002818401529051818501529351606080860191909152835180860390910181526080909401909252825192909101919091209055565b60405180604001604052806000151581526020016104ba604051806040016040528060008152602001600081525090565b905290565b60405180610100016040528060008152602001600081526020016104fe6040805160608101909152806000815260006020820181905260409091015290565b81526000602082015260400161052f6040805160608101909152806000815260006020820181905260409091015290565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081525090565b8035801515811461057357600080fd5b919050565b80356002811061057357600080fd5b80356001811061057357600080fd5b6000602082840312156105a7578081fd5b6105b082610587565b9392505050565b6000604082840312156105c8578081fd5b50919050565b6000606082840312156105df578081fd5b6040516060810181811067ffffffffffffffff8211171561060e57634e487b7160e01b83526041600452602483fd5b60405261061a83610578565b815261062860208401610563565b6020820152604083013560408201528091505092915050565b600060c082840312156105c8578081fd5b6000606082840312156105c8578081fd5b813581526040810161067760208401610563565b1515602083015292915050565b813581526020808301359082015260c081016106a260408401610587565b600181106106b2576106b2610768565b60408301526106c360608401610578565b600281106106d3576106d3610768565b60608301526106e460808401610563565b1515608083015260a083013560a083015292915050565b81358152602080830135908201526060810161071960408401610563565b1515604083015292915050565b828152606081016105b0602083018480358252602090810135910152565b6000821982111561076357634e487b7160e01b81526011600452602481fd5b500190565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220db8389d3325f59becb5cdbd35d7aae102e878d9367378b4cbb7fba7fe797b38e64736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

