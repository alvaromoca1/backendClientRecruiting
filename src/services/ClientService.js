const mongoose = require('mongoose');
const client = require('../schemas/ClientSchema');


exports.AllClient = (req, res) => {
    client.find({}).exec(function (err, client) {
        if (err) {
            return res.send(err);
        }
        res.json(client);
    });
};

exports.CreateClient = (req, res) => {
    const newClient = new client(req.body);
    newClient.save(function (err, client) {
        if (err) {
            res.send(err);
        }
        res.json(client);
    });
};
 exports.ClientAverge = async (re, res)=>{
     const allClient = await client.find({}).exec();
    const averge = allClient.map((client)=>{
        const year = yearClient(client.birthDay);
        return year
    })
    const avg=Avg(averge);
    res.json({clientCount:allClient.length ,avg: avg });
 }

 function yearClient(date) {
    const today = new Date();
    const birthDay = new Date(date);
    let  year = today.getFullYear() - birthDay.getFullYear();
    const m = today.getMonth() - birthDay.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDay.getDate())) 
        year--;
    return year;
}
function Avg(years){
    const countYear=years.length;
    const allYear = years.reduce((acumu, cur)=>acumu+cur);
    return allYear/countYear;
}
