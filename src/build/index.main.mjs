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

export async function Buyer(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    Buyer: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc0, ctc5, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc0, ctc5, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  
  
  const v18 = await ctc.creationTime();
  
  
  
  
  const txn1 = await (ctc.recv(1, 2, [ctc0, ctc0], false, false));
  const [v26, v27] = txn1.data;
  const v30 = txn1.time;
  const v25 = txn1.from;
  const v29 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  ;
  let v32 = true;
  let v33 = stdlib.checkedBigNumberify('./index.rsh:47:43:decimal', stdlib.UInt_max, 0);
  let v34 = v25;
  let v105 = v30;
  let v107 = v29;
  
  while ((() => {
    
    return v32;})()) {
    let v38;
    const v50 = stdlib.protect(ctc1, await interact.shouldBuyTicket(v26), {
      at: './index.rsh:53:66:application',
      fs: ['at ./index.rsh:47:27:application call to [unknown function] (defined at: ./index.rsh:52:25:function exp)', 'at ./index.rsh:47:27:application call to "runBuyer0" (defined at: ./index.rsh:47:27:function exp)', 'at ./index.rsh:47:27:application call to [unknown function] (defined at: ./index.rsh:47:27:function exp)', 'at ./index.rsh:47:27:application call to [unknown function] (defined at: ./index.rsh:47:27:function exp)'],
      msg: 'shouldBuyTicket',
      who: 'Buyer'
      });
    
    const v53 = ['Buyer', null];
    
    const txn2 = await (ctc.sendrecv(4, 1, stdlib.checkedBigNumberify('./index.rsh:47:27:dot', stdlib.UInt_max, 4), [ctc0, ctc0, ctc0, ctc5, ctc0, ctc0, ctc3], [v26, v27, v33, v34, v105, v107, v53], [v26, []], [ctc3], v50, false, v27, (async (txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:47:27:dot', stdlib.UInt_max, 2), v26, v27, v33, v34, v105, v107]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:47:27:dot', stdlib.UInt_max, 2), v26, v27, v33, v34, v107]);
      const [v62] = txn2.data;
      const v69 = txn2.time;
      const v61 = txn2.from;
      
      let v63;
      switch (v62[0]) {
        case 'Buyer': {
          
          v63 = v26;
          
          break;
          }
        }
      const v68 = stdlib.add(v107, v63);
      sim_r.txns.push({
        amt: v63,
        kind: 'to',
        tok: undefined
        });
      let v70;
      switch (v62[0]) {
        case 'Buyer': {
          
          v70 = true;
          
          break;
          }
        }
      stdlib.assert(v70, {
        at: './index.rsh:47:27:application',
        fs: ['at ./index.rsh:47:27:application call to [unknown function] (defined at: ./index.rsh:47:27:function exp)'],
        msg: null,
        who: 'Buyer'
        });
      switch (v62[0]) {
        case 'Buyer': {
          
          
          const v78 = stdlib.add(v33, stdlib.checkedBigNumberify('./index.rsh:59:60:decimal', stdlib.UInt_max, 1));
          const v85 = [true, v61, v78];
          v38 = v85;
          
          break;
          }
        }
      const v87 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 0)];
      const v88 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 1)];
      const v89 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 2)];
      const cv32 = v87;
      const cv33 = v89;
      const cv34 = v88;
      const cv105 = v69;
      const cv107 = v68;
      
      (() => {
        const v32 = cv32;
        const v33 = cv33;
        const v34 = cv34;
        const v105 = cv105;
        const v107 = cv107;
        
        if ((() => {
          
          return v32;})()) {
          let v38;
          sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:47:27:after expr stmt semicolon', stdlib.UInt_max, 2), v26, v27, v33, v34, v105, v107]);
          sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:47:27:after expr stmt semicolon', stdlib.UInt_max, 2), v26, v27, v33, v34, v107]);
          sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:47:27:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            amt: v107,
            kind: 'from',
            to: v34,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.nextSt = stdlib.digest(ctc8, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
          sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:69:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = true;
          }})();
      return sim_r;
      })));
    if (txn2.didTimeout) {
      
      
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:63:29:dot', stdlib.UInt_max, 4), [ctc0, ctc0, ctc0, ctc5, ctc0, ctc0], [v26, v27, v33, v34, v105, v107], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:63:29:dot', stdlib.UInt_max, 2), v26, v27, v33, v34, v105, v107]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:63:29:dot', stdlib.UInt_max, 2), v26, v27, v33, v34, v107]);
        const [] = txn3.data;
        const v83 = txn3.time;
        const v80 = txn3.from;
        
        const v82 = stdlib.add(v107, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v86 = [false, v34, v33];
        v38 = v86;
        const v87 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 0)];
        const v88 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 1)];
        const v89 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 2)];
        const cv32 = v87;
        const cv33 = v89;
        const cv34 = v88;
        const cv105 = v83;
        const cv107 = v82;
        
        (() => {
          const v32 = cv32;
          const v33 = cv33;
          const v34 = cv34;
          const v105 = cv105;
          const v107 = cv107;
          
          if ((() => {
            
            return v32;})()) {
            let v38;
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:47:27:after expr stmt semicolon', stdlib.UInt_max, 2), v26, v27, v33, v34, v105, v107]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:47:27:after expr stmt semicolon', stdlib.UInt_max, 2), v26, v27, v33, v34, v107]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:47:27:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v107,
              kind: 'from',
              to: v34,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:69:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v83 = txn3.time;
      const v80 = txn3.from;
      const v82 = stdlib.add(v107, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      ;
      const v86 = [false, v34, v33];
      v38 = v86;
      const v87 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 0)];
      const v88 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 1)];
      const v89 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 2)];
      const cv32 = v87;
      const cv33 = v89;
      const cv34 = v88;
      const cv105 = v83;
      const cv107 = v82;
      
      v32 = cv32;
      v33 = cv33;
      v34 = cv34;
      v105 = cv105;
      v107 = cv107;
      
      continue;
      }
    else {
      const [v62] = txn2.data;
      const v69 = txn2.time;
      const v61 = txn2.from;
      let v63;
      switch (v62[0]) {
        case 'Buyer': {
          
          v63 = v26;
          
          break;
          }
        }
      const v68 = stdlib.add(v107, v63);
      ;
      let v70;
      switch (v62[0]) {
        case 'Buyer': {
          
          v70 = true;
          
          break;
          }
        }
      stdlib.assert(v70, {
        at: './index.rsh:47:27:application',
        fs: ['at ./index.rsh:47:27:application call to [unknown function] (defined at: ./index.rsh:47:27:function exp)'],
        msg: null,
        who: 'Buyer'
        });
      switch (v62[0]) {
        case 'Buyer': {
          
          stdlib.protect(ctc2, await interact.showPurchase(v61), {
            at: './index.rsh:58:63:application',
            fs: ['at ./index.rsh:58:35:application call to [unknown function] (defined at: ./index.rsh:58:39:function exp)', 'at ./index.rsh:47:27:application call to [unknown function] (defined at: ./index.rsh:47:27:function exp)'],
            msg: 'showPurchase',
            who: 'Buyer'
            });
          
          const v78 = stdlib.add(v33, stdlib.checkedBigNumberify('./index.rsh:59:60:decimal', stdlib.UInt_max, 1));
          const v85 = [true, v61, v78];
          v38 = v85;
          
          break;
          }
        }
      const v87 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 0)];
      const v88 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 1)];
      const v89 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 2)];
      const cv32 = v87;
      const cv33 = v89;
      const cv34 = v88;
      const cv105 = v69;
      const cv107 = v68;
      
      v32 = cv32;
      v33 = cv33;
      v34 = cv34;
      v105 = cv105;
      v107 = cv107;
      
      continue;}
    }
  ;
  
  stdlib.protect(ctc2, await interact.showOutcome(v34), {
    at: './index.rsh:35:37:application',
    fs: ['at ./index.rsh:34:17:application call to [unknown function] (defined at: ./index.rsh:34:38:function exp)', 'at ./index.rsh:70:20:application call to "showOutcome" (defined at: ./index.rsh:33:35:function exp)'],
    msg: 'showOutcome',
    who: 'Buyer'
    });
  
  return;
  
  };
export async function Funder(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Object({
    deadline: ctc0,
    ticketPrice: ctc0
    });
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    Buyer: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc0, ctc5, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc0, ctc5, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v18 = await ctc.creationTime();
  
  
  const v22 = stdlib.protect(ctc1, await interact.getParams(), {
    at: './index.rsh:41:46:application',
    fs: ['at ./index.rsh:39:20:application call to [unknown function] (defined at: ./index.rsh:39:24:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v23 = v22.ticketPrice;
  const v24 = v22.deadline;
  
  
  const txn1 = await (ctc.sendrecv(1, 2, stdlib.checkedBigNumberify('./index.rsh:43:16:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0], [v18, v23, v24], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:43:16:dot', stdlib.UInt_max, 0), v18]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:43:16:dot', stdlib.UInt_max, 0)]);
    const [v26, v27] = txn1.data;
    const v30 = txn1.time;
    const v25 = txn1.from;
    
    const v29 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v32 = true;
    const v33 = stdlib.checkedBigNumberify('./index.rsh:47:43:decimal', stdlib.UInt_max, 0);
    const v34 = v25;
    const v105 = v30;
    const v107 = v29;
    
    if ((() => {
      
      return v32;})()) {
      let v38;
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:47:27:after expr stmt semicolon', stdlib.UInt_max, 2), v26, v27, v33, v34, v105, v107]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:47:27:after expr stmt semicolon', stdlib.UInt_max, 2), v26, v27, v33, v34, v107]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:47:27:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      sim_r.txns.push({
        amt: v107,
        kind: 'from',
        to: v34,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc8, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:69:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  const [v26, v27] = txn1.data;
  const v30 = txn1.time;
  const v25 = txn1.from;
  const v29 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
  ;
  let v32 = true;
  let v33 = stdlib.checkedBigNumberify('./index.rsh:47:43:decimal', stdlib.UInt_max, 0);
  let v34 = v25;
  let v105 = v30;
  let v107 = v29;
  
  while ((() => {
    
    return v32;})()) {
    let v38;
    
    
    const txn2 = await (ctc.recv(4, 1, [ctc3], false, v27));
    if (txn2.didTimeout) {
      
      
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:63:29:dot', stdlib.UInt_max, 4), [ctc0, ctc0, ctc0, ctc5, ctc0, ctc0], [v26, v27, v33, v34, v105, v107], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:63:29:dot', stdlib.UInt_max, 2), v26, v27, v33, v34, v105, v107]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:63:29:dot', stdlib.UInt_max, 2), v26, v27, v33, v34, v107]);
        const [] = txn3.data;
        const v83 = txn3.time;
        const v80 = txn3.from;
        
        const v82 = stdlib.add(v107, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v86 = [false, v34, v33];
        v38 = v86;
        const v87 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 0)];
        const v88 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 1)];
        const v89 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 2)];
        const cv32 = v87;
        const cv33 = v89;
        const cv34 = v88;
        const cv105 = v83;
        const cv107 = v82;
        
        (() => {
          const v32 = cv32;
          const v33 = cv33;
          const v34 = cv34;
          const v105 = cv105;
          const v107 = cv107;
          
          if ((() => {
            
            return v32;})()) {
            let v38;
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:47:27:after expr stmt semicolon', stdlib.UInt_max, 2), v26, v27, v33, v34, v105, v107]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:47:27:after expr stmt semicolon', stdlib.UInt_max, 2), v26, v27, v33, v34, v107]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:47:27:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v107,
              kind: 'from',
              to: v34,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:69:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v83 = txn3.time;
      const v80 = txn3.from;
      const v82 = stdlib.add(v107, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      ;
      const v86 = [false, v34, v33];
      v38 = v86;
      const v87 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 0)];
      const v88 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 1)];
      const v89 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 2)];
      const cv32 = v87;
      const cv33 = v89;
      const cv34 = v88;
      const cv105 = v83;
      const cv107 = v82;
      
      v32 = cv32;
      v33 = cv33;
      v34 = cv34;
      v105 = cv105;
      v107 = cv107;
      
      continue;
      }
    else {
      const [v62] = txn2.data;
      const v69 = txn2.time;
      const v61 = txn2.from;
      let v63;
      switch (v62[0]) {
        case 'Buyer': {
          
          v63 = v26;
          
          break;
          }
        }
      const v68 = stdlib.add(v107, v63);
      ;
      let v70;
      switch (v62[0]) {
        case 'Buyer': {
          
          v70 = true;
          
          break;
          }
        }
      stdlib.assert(v70, {
        at: './index.rsh:47:27:application',
        fs: ['at ./index.rsh:47:27:application call to [unknown function] (defined at: ./index.rsh:47:27:function exp)'],
        msg: null,
        who: 'Funder'
        });
      switch (v62[0]) {
        case 'Buyer': {
          
          
          const v78 = stdlib.add(v33, stdlib.checkedBigNumberify('./index.rsh:59:60:decimal', stdlib.UInt_max, 1));
          const v85 = [true, v61, v78];
          v38 = v85;
          
          break;
          }
        }
      const v87 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 0)];
      const v88 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 1)];
      const v89 = v38[stdlib.checkedBigNumberify('./index.rsh:46:15:array', stdlib.UInt_max, 2)];
      const cv32 = v87;
      const cv33 = v89;
      const cv34 = v88;
      const cv105 = v69;
      const cv107 = v68;
      
      v32 = cv32;
      v33 = cv33;
      v34 = cv34;
      v105 = cv105;
      v107 = cv107;
      
      continue;}
    }
  ;
  stdlib.protect(ctc2, await interact.showOutcome(v34), {
    at: './index.rsh:35:37:application',
    fs: ['at ./index.rsh:34:17:application call to [unknown function] (defined at: ./index.rsh:34:38:function exp)', 'at ./index.rsh:70:20:application call to "showOutcome" (defined at: ./index.rsh:33:35:function exp)'],
    msg: 'showOutcome',
    who: 'Funder'
    });
  
  
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
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
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
    count: 8,
    size: 105
    }, null, null, {
    count: 12,
    size: 154
    }, {
    count: 11,
    size: 153
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
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
int 0
int 0
+
store 253
// CheckPay
// "./index.rsh:43:16:dot"
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
load 255
itob
concat
load 254
itob
concat
int 0
itob
concat
gtxn 0 Sender
concat
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
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
store 250
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
int 12
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
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 251
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
load 250
int 0
getbyte
int 0
==
bz l1
load 255
store 246
l1:
l0:
load 251
load 246
+
store 245
// CheckPay
// "./index.rsh:47:27:dot"
// "[at ./index.rsh:47:27:application call to [unknown function] (defined at: ./index.rsh:47:27:function exp)]"
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
load 246
==
assert
load 250
int 0
getbyte
int 0
==
bz l3
int 1
store 244
l3:
l2:
// Nothing
// "./index.rsh:47:27:application"
// "[at ./index.rsh:47:27:application call to [unknown function] (defined at: ./index.rsh:47:27:function exp)]"
load 244
assert
load 250
int 0
getbyte
int 0
==
bz l5
int 1
itob // bool
substring 7 8
gtxn 0 Sender
concat
load 253
int 1
+
itob
concat
store 247
l5:
l4:
load 247
substring 0 1
btoi
store 243
load 247
substring 1 33
store 242
load 247
substring 33 41
btoi
store 241
load 243
bz l6
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
itob
concat
load 254
itob
concat
load 241
itob
concat
load 242
concat
load 245
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
load 254
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
l6:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 242
==
assert
gtxn 4 Amount
load 245
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
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
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
// Handler 5
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
int 11
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
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 251
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
load 251
int 0
+
store 249
// CheckPay
// "./index.rsh:63:29:dot"
// "[at ./index.rsh:47:27:application call to [unknown function] (defined at: ./index.rsh:47:27:function exp)]"
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
int 0
itob // bool
substring 7 8
load 252
concat
load 253
itob
concat
dup
store 250
substring 0 1
btoi
store 248
load 250
substring 1 33
store 247
load 250
substring 33 41
btoi
store 246
load 248
bz l0
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
itob
concat
load 254
itob
concat
load 246
itob
concat
load 247
concat
load 249
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
load 254
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
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 247
==
assert
gtxn 4 Amount
load 249
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
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
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v34",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v105",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T10",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Buyer",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T10",
                "name": "v62",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
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
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v34",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v105",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
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
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
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
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v34",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v105",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T10",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Buyer",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T10",
                "name": "v62",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v34",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v105",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055610957806100826000396000f3fe6080604052600436106100385760003560e01c806310f48adc14610044578063788b189314610059578063f23c38c01461006c5761003f565b3661003f57005b600080fd5b610057610052366004610801565b61007f565b005b6100576100673660046107d8565b610176565b61005761007a3660046107f0565b61038b565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146100bc57600080fd5b6000805534156100cb57600080fd5b604080518235815260208084013590820152828201358183015290517f50407a4b90da10f3360d0261cffec8fb082a93699e2f91827b46a545fd3694e99181900360600190a161011961065c565b8051602080840135909152815160408085013591830191909152828201805160019052805160009301839052805133920191909152514360609091015261016090806108fd565b602082015160800152610172816104de565b5050565b60405161018a9060029083906020016108e9565b6040516020818303038152906040528051906020012060001c600054146101b057600080fd5b600080556101bc6106a8565b6101ce602083013560808401356108fd565b43106101d957600080fd5b60006101eb60e0840160c085016107be565b801561020757634e487b7160e01b600052602160045260246000fd5b141561021557813560208201525b8060200151341461022557600080fd5b600061023760e0840160c085016107be565b801561025357634e487b7160e01b600052602160045260246000fd5b141561026157600160408201525b806040015161026f57600080fd5b600061028160e0840160c085016107be565b801561029d57634e487b7160e01b600052602160045260246000fd5b14156102d7576060810180516001908190529051336020909101526102c69060408401356108fd565b606082018051604001919091525181525b7f54b6e8ec5dff3d0fd3bd7b0ab2b4fa327a12c1058d9bb2cd7c409b8052fbdc05826040516103069190610859565b60405180910390a161031661065c565b805183359052805160208085013591810191909152825151818301805191151590915283516040908101518251840152845183015182516001600160a01b0390911691015251436060909101528201516103749060a08501356108fd565b602082015160800152610386816104de565b505050565b60405161039f9060029083906020016108e9565b6040516020818303038152906040528051906020012060001c600054146103c557600080fd5b600080556103d1610703565b6103e3602083013560808401356108fd565b4310156103ef57600080fd5b34156103fa57600080fd5b602081015160009052610413608083016060840161079d565b602080830180516001600160a01b03909316929091019190915280516040808501359181019190915290518252517fefea2d177ba9455c2be7ebcaf17658ad6d52fa7732fcac5f8217ea782daf45759061046e9084906108b9565b60405180910390a161047e61065c565b80518335905280516020808501359181019190915282515181830180519115159091528351604090810151825184015284519092015181516001600160a01b039091169201919091525143606090910152610374600060a08501356108fd565b6104e661074c565b602082015151156105e0576105336040518060c0016040528060008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b825151815282516020908101518183019081528185018051830151604080860191825282518101516001600160a01b03908116606080890191825285518101516080808b01918252965187015160a0808c0191825286516002818d01529b518c8801529851928b01929092529451958901959095525116938601939093525160c08501525160e0808501919091528151808503909101815261010090930190528151910120600055610172565b60408051608080820183526000828401818152606084018281528185526020808601849052880180518701516001600160a01b03169283905251909301519283905293519293610386938593919282156108fc02929190818181858888f19350505050158015610654573d6000803e3d6000fd5b506000805533ff5b604080516080808201835260008284018181526060808501839052908452845160a08101865282815260208082018490529581018390529081018290529182015290918201905b905290565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528190815260006020820181905260408201526060016106a3604080516060810182526000808252602082018190529181019190915290565b6040805160a081018252600091810182815260608201839052608082019290925290819081526040805160608101825260008082526020828101829052928201529101906106a3565b6040805160808101825260006020820181815292820181905260608201529081906106a3565b80356001600160a01b038116811461078957600080fd5b919050565b80356001811061078957600080fd5b6000602082840312156107ae578081fd5b6107b782610772565b9392505050565b6000602082840312156107cf578081fd5b6107b78261078e565b600061010082840312156107ea578081fd5b50919050565b600060e082840312156107ea578081fd5b6000606082840312156107ea578081fd5b8035825260208082013590830152604080820135908301526001600160a01b0361083e60608301610772565b1660608301526080818101359083015260a090810135910152565b61010081016108688284610812565b61087460c0840161078e565b6001811061089257634e487b7160e01b600052602160045260246000fd5b60c083015260e08301358015158082146108ab57600080fd5b8060e0850152505092915050565b60e081016108c78284610812565b60c08301358015158082146108db57600080fd5b8060c0850152505092915050565b82815260e081016107b76020830184610812565b6000821982111561091c57634e487b7160e01b81526011600452602481fd5b50019056fea2646970667358221220cfaf5ce00fd1741a3fe9a6e0f956b1802f7819a541f50c4ff457dd4cd36494d764736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

