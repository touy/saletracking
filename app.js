
var user={
    username:"",
    password:"",
    mobile:"",
    email:"",
    createddate:"",
    lastupdate:"",
    lastlogin:"",
    role:"" ,// admin , warehouseauditmanager,warehouseauditstaff, salemanager,sale,carriermanager,carrier,customer,cashreceiver 
    businessname:"",
    businessgui:"",
    gui:""
}

var business={
    name:"",
    logo:"",
    ownerusername:"",
    ownergui:"",
    createddate:"",
    lastupdate:"",
    gui:""
}
var prefix={
    username:"",
    usergui:"",
    businessgui:"",
    prefix:"",
    gui:''
}
var assignedtask={
    username:"",
    usergui:"",
    taskgui:"",
    assigneddate:"",
    gui:""
}
var taskplan={
    name:"",
    createddate:"",
    gui:""
}
var taskcompletedbyvisited={
    completedtime:"",
    assignedtaskgui:"",
    iscompleted:false,
    description:"",
    preparedby:"",
    gui:""
}

var taskplandetails={
    taskplanname:"",
    taskplangui:"",
    customergui:"",
    customername:"",
    createddate:"",
    expireddate:"",
    gui:"",
    renewtype:""// daily ,  weekly (selected dates), monthly (selected dates)
}
var customer={
    customername:"",
    customerbusiness:"",
    customergui:"",
    customerpassword:"",
    phone1:"",
    phone2:"",
    phone3:"",
    other:"",
    customerbusinessgui:"",    
    email:"",
    facebook:"",
    lat:"",// latitude
    lon:"",// longitude
    radiation:"",//20m
    gui:""
}
var gpslogger={
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
    visitby:"",
    visitdate:"",
    howlongvisited:"",
    visitstart:"",
    visitend:"",
    visitvalue:"",
    sales
}
var product={
    productname:"",
    productcode:"",
    photo:"",
    price:"",
    unit:"",
    quantity:0,
    description:"",
    createddate:"",
    gui:""
}
// var warehouseimport={
//     productname:"",
//     productcode:"",
//     productgui:"",
//     price:"",
//     qantity:0,
//     totalvalue:0,
//     approvedby:"",
//     acceptby:"",
//     approveddate:"",
//     preparedby:"",
//     prepareddate:"",
//     description:"",
//     gui:""
// }
var warehouseexport={
    productname:"",
    productcode:"",
    productgui:"",
    price:"",
    qantity:0,
    totalvalue:0,
    acceptby:"",
    approvedby:"",
    approveddate:"",
    preparedby:"",
    prepareddate:"",
    description:"",
    gui:""
}

var wholesaledetails={
    productname:"",
    productcode:"",
    productgui:"",
    price:0,
    qantity:0,
    totalvalue:0,
    gui:"",
    wholesalegui:""
}
var wholesale={
    acceptby:"",// sale
    acceptkey:"",// from sale
    preparedby:"",
    prepareddate:"",
    gui:"",
    totalvalue:0,
}

var sale={
    acceptby:"",//customer
    acceptkey:"",// from customer
    preparedby:"",
    prepareddate:"",
    soldkey:"",
    receivedkey:"",
    paymentgui:"",
    gui:"",
    totalvalue:0,
}

var saledetails={
    salegui:"",
    productname:"",
    productcode:"",
    productgui:"",
    approvedphoto:"",
    price:0,
    qantity:0,
    totalvalue:0,
    gui:""
}

// var auditing={
//     productname:"",
//     productgui:"",
//     quantity:0,
//     quantitydiff:0,
//     approvedby:"",
//     approveddate:"",
//     gui:""
// }

var payment={
    paidby:"",
    paiddate:"",
    receivedby:"",
    value:0,
    hasbeenpaid:false,
    paidkey:"",
    receivedkey:"",
    gui:""
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