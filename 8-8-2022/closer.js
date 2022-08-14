// example code
function toggler(x,y,z) {
    var index = 1;
    return function toggle(){
        console.log(index==1? x : index==2? y : z)
        index++;
    }
    
}

const toggle = toggler(1,2,3)

toggle()
// 1
toggle()
// 2
toggle()
// 3


