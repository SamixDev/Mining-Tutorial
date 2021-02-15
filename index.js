let tbl = document.getElementById('tbl');

fetch("./data.json").then(res=>{
    res.json().then(res2=>{

    for (let i in res2){

    let row = tbl.insertRow(i);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    cell1.innerHTML = res2[i].name;
    cell2.innerHTML =res2[i].Ethash.rate+"<br>"+res2[i].Ethash.power_con;
    cell3.innerHTML = res2[i].Ethash.rate+"<br>"+res2[i].Ethash.power_con;
    cell4.innerHTML = res2[i].MTP.rate+"<br>"+res2[i].Ethash.power_con;
    cell5.innerHTML = res2[i].ProgPow.rate+"<br>"+res2[i].Ethash.power_con;
    cell6.innerHTML = res2[i].BeamHash3.rate+"<br>"+res2[i].Ethash.power_con;
    cell7.innerHTML = res2[i].Zhash.rate+"<br>"+res2[i].Ethash.power_con;
}
})});
