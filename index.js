function receivesAFunction(callback){
    callback(); 
}

const returnsANamedFunction = () => function life(){};
const returnsAnAnonymousFunction = () => function(){};
