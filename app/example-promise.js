/*

function getTempCallback(location, callback){
    callback(undefined, 78);    //undefined = error (everything wen well)
    callback('City not found');
}


getTempCallback('Lisbon',function(err,temp){
    if(err){
        console.log('error',err);
    }else{
        console.log('success',temp);
    }
});

function getTempPromise(location){
    return new Promise(function (resolve, reject){
        resolve(79);
        reject('City not found');
        
    });
}


getTempPromise('Lisbon').then(function(temp){
    console.log('promise success',temp);
}, function (err){
    console.log('promise error',err);
});

*/

function addPromise(a,b) {
    var parent = this;
    return new Promise(function(resolve,reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }else{
            reject('Must call with 2 numbers!');
        }
    });
}


addPromise(1).then(function(a){
    console.log('promise success',a);
}, function (err){
    console.log('promise error',err);
});
addPromise('a','b').then(function(a){
    console.log('promise success',a);
}, function (err){
    console.log('promise error',err);
});
addPromise(1,1).then(function(a){
    console.log('promise success',a);
}, function (err){
    console.log('promise error',err);
});