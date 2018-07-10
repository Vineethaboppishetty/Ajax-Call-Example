var data = JSON.parse(localStorage.getItem("value"));
if (data == null) {
    // function getData(){
    var promise = new Promise(function (resolve, reject) {
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:8080/test/data.json',
            success: function (data) {
                resolve(data);
            }

        })
    }).then(function (data) {
        localStorage.setItem("value", JSON.stringify(data));
    })
}else{
    for (i in data) {
        console.log(data[i]);
        $('#tableData').append('<tr><td>' + data[i].username + '</td><td>' + data[i].age + '</td><td>' + data[i].name + '</td><td>' + data[i].gender + '</td><td>' + data[i].company + '</td><td>' + data[i].phone + '</td><td>'+'<button id='+i+' onclick="viewdetails()">View</button>'+'<button id="removerow">Delete</button>'+'</td></tr>');
        
       
    }
}

function viewdetails(){
    for(e in data){
        $("button").append('<tr><td>' + data[i].age + '</td></tr>');
    }
    
}

