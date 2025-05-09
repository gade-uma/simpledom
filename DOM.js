console.log(document);
let x=document.getElementsByTagName('h1');
console.log(x[0]);
let y=document.getElementsById('uma');
console.log(y);
function  umaChange()
{
    let z=document.getElementById('uma');
    console.log(z.textContent);
    z.textContent='bye bye DOM';
}
let value=0;
let c=document.getElementById("Count");
function inc()
{
    value++;
    c.textContent=value
}
function dec()
{
    value--;
    c.textContent=value
}
function reset()
{
    value=0;
    c.textContent=value
}