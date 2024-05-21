function printAsyncName (callback, name){
    setInterval(callback, 1000);

    setTimeout(() => {console.log (name);}, 2000);
}

printAsyncName(() => console.log("Hello"), "Profe");
