var observable = {
  store: [],

  cadastrar: (myVar, myFoo) => {
    let rtn = obs.store.find(item => item.var == myVar);
    // se não existir nenhum registro no store, insira:
    if (rtn == undefined) {
      obs.store.push({ var: myVar, foo: myFoo });
    }
    // se existir registro no store, substitui:
    else {
      rtn.foo = myFoo;
    }
  },

  executar: myVar => {
    let rtn = obs.store.find(item => item.var == myVar);
    rtn.foo();
  },

  set: (myVar, newVal) => {
    obs.executar(myVar);
    myVar = newVal;
  }
};
