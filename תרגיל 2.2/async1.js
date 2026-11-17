async function main()
{
try{
    let res=await shopping(
        ["milk","bread"],
        ["bread","milk"]
    );
    console.log(res);

}
catch(error){
console.log(error);
}

}