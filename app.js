
var user={
    username:"",
    password:"",
    mobile:"",
    email:"",
    createddate:"",
    lastupdate:"",
    lastlogin:"",
    role:[],// admin , warehouse, salemanager (admin),sale,customer,cashreceiver
    photo:'',    
    businessname:"",
    businessgui:"",
    usercode:'',
    isactive:false,
    totalsale:0,
    totaldebt:0,
    salerecord:[[1,0],[12,0]],
    totaldebt:[[1,1],[12,0]],
    gui:""
}
var profile={
    username:'',
    usergui:'',
    logo:'',
    name:'',
    description:'',
    gui:''
}
var assignedstored={
    username:"",
    usergui:"",
    storegui:"",
    storename:'',
    assigneddate:"",
    gui:"",
    totalsale:0,
    totaldebt:0,
    salerecord:[[1,0],[12,0]],
    totaldebt:[[1,1],[12,0]]
}


var customer={
    customername:"",
    customerpassword:"",
    customerkeyword:[],
    photo:'',
    description:'',
    phone1:"",
    phone2:"",
    phone3:"",
    other:"",   
    email:"",
    facebook:"",
    isoffline:true,
    customercode:'',
    gui:"",
    totalsale:[[1,1],[12,0]],
    totaldebt:[[1,1],[12,0]]
}
var business={
    customername:'',
    customergui:'',
    businessname:'',
    description:'',
    businesskeyword:[],
    website:'',
    lat:"",// latitude
    lon:"",// longitude
    radiation:"",//20m
    photo:[],
    isoffline:true,
    gui:'',    
    totalsale:[[1,1],[12,0]],
    totaldebt:[[1,1],[12,0]]
}

var gpslogger={
    status:[],
    alert:[],
    imei:'',
    lat:"",
    lon:"",
    speed:"",
    altitude:"",
    usergui:"",
    username:"",
    gpstime:"",
    servertime:""
}

var visitlog={
    customername:"",
    businessname:'',
    visitby:"",
    visitdate:"",
    visitstart:"",
    visitend:"",
    photo:[],
    description:'',    
    gui:''
}
var product={
    productname:"",
    productcode:"",
    photo:[],
    price:"",
    unit:"",
    quantity:0,
    description:"",
    createddate:"",
    gui:"",
    totalsold:[[1,1],[12,0]],
    totalsoldvalue:[[1,1],[12,0]],
    totalreturn:[[1,1],[12,0]],
    salerank:1,
}

var wholesaledetails={
    productname:"",
    productcode:"",
    productgui:"",
    price:0,
    qantity:0,
    totalvalue:0,
    gui:"",
    wholesalegui:"",
    approvedphoto:[],
}

var wholesale={
    acceptby:"",// sale
    acceptkey:"",// from sale
    preparedby:"",//prepare by  ware house
    preparedkey:'',
    prepareddate:"",
    photo:[],
    gui:"",
    totalvalue:0,
    status:'', // order pending , approved, returned
    code:''
}

var sale={
    acceptby:"",//customer
    acceptkey:"",// from customer
    preparedby:"",//prepare by sale
    preparedkey:'',
    prepareddate:"",
    soldkey:"",
    receivedkey:"",
    photo:[],
    paymentgui:[],
    code:'',
    gui:"",
    totalvalue:0,
    satus:''//order pending, order cancel , order finished(delivered)
}

var saledetails={
    salegui:"",
    productname:"",
    productcode:"",
    productgui:"",
    approvedphoto:[],
    price:0,
    qantity:0,
    totalvalue:0,
    gui:""
}
var payment={
    paidby:"",
    paiddate:"",
    receivedby:"",
    description:'',
    photo:[],
    preparedby:'',
    value:0,
    hasbeenpaid:false,
    paidkey:"",
    receivedkey:"",
    createdtime:'',
    gui:"",
    relatedpaymentgui:[],
    code:'',
    status:''//not yet paid, partial payment, full payment, cancel, finished
}

var keys={
    name:"",
    description:"",
    keys:"",
    generateddate:"",
    generateby:"",
    keytype:"",// payment , sale , wholesale
    gui:""
}
var plantask={
    taskname:'',
    username:'',
    storename:'',
    storegui:'',
    createdby:'',
    createdtime:'',
    stoptime:'',
    description:'',
    target:0,
    schedule:[{year:2017,month:0,day:[1,2,3,4,5,6,7,8,9,10,11]},{}],
    resultperplan:[{year:0,month:0,day:[1,2,3,4,5,6,7,8,9,10,11]},{}],
    gui:'',
    isactive:false
}