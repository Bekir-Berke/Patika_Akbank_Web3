const oddOrEven = (n) => {
    const num = String(n)
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        count = count + Number(num[i])
    }
    if(count % 2 == 0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}
oddOrEven(65)