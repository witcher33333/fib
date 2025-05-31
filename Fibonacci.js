function fibonacciGenerator (n) {
    var fib = [] ; 
    if ( n === 1 ) {
        fib.push(0);
        
    }
    else if ( n === 2){
        fib.push(0);
        fib.push(1);
        
    }
    else if ( n > 2 ) {
        fib.push(0);
        fib.push(1);
        for ( var i = 2 ; i < n ; i++){
            
            fib.push((fib[i-2] + fib[i-1]));
        }
        
    }

    return fib;
}