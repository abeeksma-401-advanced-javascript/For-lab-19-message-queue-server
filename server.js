
const Q = require('@nmq/q/server');
Q.start();
                                        //<---------- no clue what other shit goes with this
const dbQ = new Q('database');
dbQ.monitorEvent('create');
dbQ.monitorEvent('read');
dbQ.monitorEvent('update');
dbQ.monitorEvent('delete');
dbQ.monitorEvent('auth')

const netQ = new Q('network');
netQ.monitorEvent('file-altered');           //<--------- not sure what these are going to monitor


