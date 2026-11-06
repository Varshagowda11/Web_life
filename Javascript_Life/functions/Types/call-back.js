// function add()
// {
//     console.log(10+20);
    
// }
// function task(fun)
// {
//     fun()
// }
// task(add)


function task(fun)
{
    fun()
}
task(function ()
{
    console.log(10+20);
    
})